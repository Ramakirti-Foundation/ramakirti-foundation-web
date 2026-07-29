import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const VOLUNTEERS = [
  {
    name: 'SALONI',
    role: 'Head of Volunteers',
    image_url: '/img/Volunteers/Saloni - Head of Volunteers.png'
  },
  {
    name: 'SONALI',
    role: 'Head of Volunteers',
    image_url: '/img/Volunteers/Sonali - Head of Volunteers.png'
  },
  {
    name: 'NANCY',
    role: 'Volunteer',
    image_url: '/img/Volunteers/Nancy - Volunteer.png'
  },
  {
    name: 'VINEETHA',
    role: 'Volunteer',
    image_url: '/img/Volunteers/Vineetha - Volunteer.png'
  },
  {
    name: 'LAKSHAY',
    role: 'Volunteer',
    image_url: '/img/Volunteers/Lakshay.png'
  }
];

async function main() {
  for (const vol of VOLUNTEERS) {
    await prisma.teamMember.create({
      data: {
        name: vol.name,
        role: vol.role,
        image_url: vol.image_url
      }
    });
    console.log(`Added ${vol.name}`);
  }
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
