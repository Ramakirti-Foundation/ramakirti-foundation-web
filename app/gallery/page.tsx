import { db } from '@/lib/db';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import GalleryClient from './GalleryClient';

export const dynamic = 'force-dynamic';

export default async function GalleryPage() {
  let initiatives: any[] = [];
  try {
    initiatives = await db.initiative.findMany({
      orderBy: { created_at: 'desc' }
    });
  } catch (error) {
    console.error("DB Error:", error);
  }

  const galleryItems: { id: string, url: string, description: string }[] = [];

  initiatives.forEach(init => {
    if (init.gallery_urls && init.gallery_urls.length > 0) {
      init.gallery_urls.forEach((url: string, index: number) => {
        const customDesc = init.gallery_descriptions?.[index];
        const description = customDesc && customDesc.trim() !== '' ? customDesc : init.title;
        galleryItems.push({
          id: `${init.id}-${index}`,
          url,
          description
        });
      });
    }
  });

  return (
    <>
      <Navigation />
      <main className="pt-[112px] bg-white min-h-screen">
        <div className="max-w-[1280px] mx-auto px-5 mb-16">
          <div className="text-center mb-12">
            <span className="font-bold text-sm uppercase tracking-[.15em] mb-3 block" style={{ color: '#C9A84C' }}>
              Our Impact in Pictures
            </span>
            <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold text-[#6E1110] mb-4 font-[family-name:var(--font-plus-jakarta)]">
              Gallery
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore the moments from our recent initiatives and events. Click any image to view it in detail.
            </p>
          </div>
          
          <GalleryClient items={galleryItems} />
        </div>
      </main>
      <Footer />
    </>
  );
}
