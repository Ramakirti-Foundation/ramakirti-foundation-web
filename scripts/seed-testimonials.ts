import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const oldTestimonials = [
  {
    message: '"My daughter used to sell vegetables by the road. After 8 months at Ramakirti Foundation\'s education centre, she can read, write, and dream of becoming a nurse."',
    name: 'Puja Devi',
    email: 'pujadevi@example.com',
    subject: 'Parent, Sector 57',
    is_testimonial: true,
  },
  {
    message: '"I volunteered for a food distribution event and was moved by the gratitude of the families. The foundation is incredibly transparent — I trust them completely."',
    name: 'Amit Kapoor',
    email: 'amitkapoor@example.com',
    subject: 'Corporate Donor, Cyber City',
    is_testimonial: true,
  },
  {
    message: '"The tailoring programme changed my life. I now earn ₹9,000 a month from home and support my children\'s education."',
    name: 'Sunita Maurya',
    email: 'sunitamaurya@example.com',
    subject: 'Women Empowerment Graduate',
    is_testimonial: true,
  }
];

async function seedTestimonials() {
  for (const t of oldTestimonials) {
    const existing = await prisma.contactMessage.findFirst({
      where: { name: t.name }
    });
    if (!existing) {
      await prisma.contactMessage.create({
        data: t
      });
      console.log(`Inserted ${t.name}`);
    } else {
      console.log(`Skipped ${t.name} (already exists)`);
    }
  }
  console.log('Done!');
}

seedTestimonials()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
