import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const DESC_MAP: Record<string, string> = {
  'a day in Zinia': 'Volunteers from Zinia extended a day of joy and learning to our children through fun-filled activities and educational games, spreading smiles and support throughout our learning centres.',
  '14th november': "Children's Day is always special at Ramakirti Foundation. We celebrated 300+ students with fun games, creative activities, a special lunch, and gifts — ensuring every child felt valued, loved, and seen on their special day.",
  '77th independence': "On India's 77th Independence Day, we organised a flag hoisting ceremony, patriotic performances, and interactive sessions about our nation's freedom struggle — a day of pride, culture, and community bonding.",
  'air india': 'Air India partnered with us for a remarkable day of giving, bringing corporate employees to interact with our children through educational activities, storytelling, and fun games — bringing warmth and inspiration to our learning centres.',
  'amity university': 'Students from Amity University volunteered their time and skills for a comprehensive outreach day including education sessions, mentorship, and awareness activities — setting a great example for the youth of India.',
  'bajaj capital': "Bajaj Capital's CSR initiative brought resources and smiles to our community. Their team organised interactive finance-literacy sessions for older children and distributed essential supplies, reinforcing their commitment to social responsibility.",
  'children and parent': 'A thoughtful counselling session was organised for children and their parents, addressing challenges in education, mental well-being, and family dynamics. Expert facilitators guided families through practical tools for a healthier home environment.',
  'covid mask': 'During the pandemic, Ramakirti Foundation distributed thousands of reusable masks to underprivileged families and slum communities across Gurgaon to keep them safe and protected.',
  'fun learning in bus': 'Our vibrant mobile classroom bus visited 5 localities, bringing interactive STEM activities, storytelling, and creative workshops to 200+ children — learning made fun, wherever they are.',
  'gartner': 'Gartner employees joined hands with our foundation for an energetic volunteer day filled with teaching sessions, skill-sharing activities, and genuine connections with our students and staff.',
  'golf': 'A charity golf competition was organised to raise funds and awareness for our initiatives, bringing together professionals and community members in a spirit of generosity and sportsmanship.',
  'holi celebration': 'Holi is about colours, community, and joy. We organised a safe, vibrant celebration for our students complete with organic colours, sweets, music, and games — making memories that will last a lifetime.',
  'hsbc': "HSBC's dedicated team of corporate volunteers conducted financial literacy workshops, interactive sessions, and mentorship talks — investing not just money, but their time and expertise into our children's futures.",
  'jee one group': 'Jee One Group partnered with us to support a special community outreach event, bringing resources and goodwill that directly benefited families in our programme.',
  'kanjak': 'On the auspicious occasion of Navratri, we organised a Kanjak celebration distributing food, puries, halwa, and gifts to young girls as a mark of respect, empowerment, and community love.',
  'llm university': 'LLM University students and faculty brought academic energy to our learning centres, conducting workshops on career awareness, communication skills, and creative arts.',
  'makeup class': 'A professional makeup and grooming workshop was held for women in our empowerment programme — building confidence, teaching vocational skills, and opening pathways to employment in the beauty industry.',
  'meal distribution': "Our regular meal distribution programme ensures that hundreds of families in Gurgaon's most underserved communities receive nutritious, hot meals and ration kits to combat food insecurity.",
  "mother's day": "Mothers are the backbone of every family. On Mother's Day, we honoured incredible mothers in our community with a special celebration, thoughtful gifts, and heartfelt recognition of their sacrifices and strength.",
  'movie time': 'Lights, screen, action! We organised a special movie screening day for our children, complete with popcorn and snacks — a simple moment of joy that reminded every child they deserve happiness and fun.',
  'pallavi arts': 'In collaboration with Pallavi Arts, we organised a cultural arts programme introducing students to classical dance, music, and Indian artistic traditions in a fun and engaging way.',
  'rakhi': "On the occasion of Raksha Bandhan, our children and staff celebrated the bond of brotherhood and sisterhood with rakhi-making sessions, sweets, and a programme celebrating the festival's beautiful traditions.",
  'ration kits': 'During the Covid-19 pandemic, we distributed comprehensive ration kits containing essentials — rice, dal, oil, sugar, and other staples — to hundreds of vulnerable families who lost their livelihoods overnight.',
  'roca': "Roca Company joined us for a special CSR day, bringing their employees together for interactive sessions with our children and contributing resources that strengthened our education and hygiene programmes.",
  'special occasion': 'On special occasions and festivals, we serve a wholesome, celebratory meal to our beneficiaries — because every person deserves to mark special days with dignity and joy.',
  'sports day': 'An energetic Sports Day was organised for our students with running races, relay races, tug-of-war, and team games — promoting physical fitness, teamwork, and the spirit of healthy competition.',
  'stationary': 'Equipped with notebooks, pens, pencils, erasers, and art supplies, hundreds of children received stationery kits to support their continued education at our centres and at home.',
  'study time': 'A quiet, focused study session at Ramakirti Education Centre — where children practise reading, writing, and arithmetic in a safe and nurturing environment guided by our volunteer teachers.',
  "teacher's day": "On Teacher's Day, we honoured our incredible volunteer teachers with appreciation ceremonies, cards made by students, and a heartfelt programme recognising their dedication and impact.",
  'rani story': 'The Rani Story documents and celebrates the journeys of women in our empowerment programme — giving voice to their struggles, triumphs, and aspirations as an inspiration to others.',
  'yoga day': 'On International Yoga Day, we organised a yoga and wellness session for children and women in our programmes, promoting mental health, physical well-being, and mindfulness as tools for a better life.',
};

function getDescription(name: string) {
  const lower = name.toLowerCase();
  for (const [key, desc] of Object.entries(DESC_MAP)) {
    if (lower.includes(key)) return desc;
  }
  return `This initiative by Ramakirti Foundation brought our team, volunteers, and community together for a meaningful day of service, connection, and impact in Gurgaon's underserved communities.`;
}

async function migrate() {
  const initiativesDir = path.join(process.cwd(), 'public', 'img', 'Initiatives');
  if (!fs.existsSync(initiativesDir)) {
    console.log('Initiatives directory not found');
    return;
  }

  const items = fs.readdirSync(initiativesDir).filter(
    (item) => fs.statSync(path.join(initiativesDir, item)).isDirectory()
  );

  for (const name of items) {
    const itemPath = path.join(initiativesDir, name);
    const directFiles = fs
      .readdirSync(itemPath)
      .filter(
        (f) =>
          f.match(/\.(jpg|jpeg|png|webp|gif)$/i) &&
          !fs.statSync(path.join(itemPath, f)).isDirectory()
      );
    const coverImage =
      directFiles.length > 0
        ? `/img/Initiatives/${encodeURIComponent(name)}/${encodeURIComponent(directFiles[0])}`
        : '';

    const galleryPath = path.join(itemPath, 'Gallery');
    const galleryImages: string[] = [];
    if (fs.existsSync(galleryPath)) {
      fs.readdirSync(galleryPath)
        .filter((f) => f.match(/\.(jpg|jpeg|png|webp|gif)$/i))
        .forEach((f) =>
          galleryImages.push(`/img/Initiatives/${encodeURIComponent(name)}/Gallery/${encodeURIComponent(f)}`)
        );
    }

    const description = getDescription(name);

    // Create in DB
    const created = await prisma.initiative.create({
      data: {
        title: name,
        description,
        image_url: coverImage,
        gallery_urls: galleryImages,
      },
    });
    console.log(`Migrated: ${name} (ID: ${created.id})`);
  }

  console.log('Migration complete!');
}

migrate()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
