'use server';

import { db } from '@/lib/db';

export async function submitTestimonialAction(formData: FormData) {
  const name = formData.get('name') as string;
  const role = formData.get('role') as string;
  const message = formData.get('message') as string;

  if (!name || !role || !message) {
    throw new Error('All fields are required');
  }

  // Save as an unapproved message in the contact table
  await db.contactMessage.create({
    data: {
      name,
      email: 'testimonial@ramakirtifoundation.co.in', // dummy email
      phone: '',
      subject: role, // use subject to store the role
      message: message,
      is_testimonial: false // Requires admin approval
    }
  });
}
