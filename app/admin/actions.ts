'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';

export async function loginAction(formData: FormData) {
  const password = formData.get('password');
  if (password === (process.env.ADMIN_PASSWORD || 'ramakirti2026')) {
    cookies().set('admin_auth', 'true', { httpOnly: true, secure: true, path: '/' });
    redirect('/admin');
  } else {
    throw new Error('Invalid password');
  }
}

export async function logoutAction() {
  cookies().delete('admin_auth');
  redirect('/admin/login');
}

import { revalidatePath } from 'next/cache';

export async function makeTestimonialAction(id: string) {
  await db.contactMessage.update({
    where: { id },
    data: { is_testimonial: true }
  });
  revalidatePath('/');
  revalidatePath('/admin');
}

export async function removeTestimonialAction(id: string) {
  await db.contactMessage.update({
    where: { id },
    data: { is_testimonial: false }
  });
  revalidatePath('/');
  revalidatePath('/admin');
}

export async function createInitiativeAction(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const image = formData.get('image') as File;
  const galleryFiles = formData.getAll('gallery') as File[];
  
  if (!title || !description || !image) {
    throw new Error('Missing fields');
  }

  const arrayBuffer = await image.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = `data:${image.type};base64,${buffer.toString('base64')}`;

  const gallery_urls: string[] = [];
  for (const file of galleryFiles) {
    if (file && file.size > 0) {
      const gBuffer = Buffer.from(await file.arrayBuffer());
      gallery_urls.push(`data:${file.type};base64,${gBuffer.toString('base64')}`);
    }
  }

  await db.initiative.create({
    data: {
      title,
      description,
      image_url: base64,
      gallery_urls
    }
  });
  revalidatePath('/recent-initiatives');
  revalidatePath('/admin');
}

export async function deleteInitiativeAction(id: string) {
  await db.initiative.delete({
    where: { id }
  });
  revalidatePath('/recent-initiatives');
  revalidatePath('/admin');
}

import nodemailer from 'nodemailer';

export async function sendReplyAction(email: string, subject: string, message: string) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    throw new Error('Email configuration is missing on the server.');
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `Ramakirti Foundation <${process.env.EMAIL_USER}>`,
    to: email,
    subject: subject,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #6E1110;">Ramakirti Foundation</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
        <p style="font-size: 12px; color: #888;">
          Ramakirti Foundation<br>
          Gurgaon, Haryana<br>
          <a href="https://ramakirtifoundation.co.in">ramakirtifoundation.co.in</a>
        </p>
      </div>
    `
  };

  await transporter.sendMail(mailOptions);
}
