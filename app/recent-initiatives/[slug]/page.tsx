import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import InitiativeGallery from '@/app/components/InitiativeGallery';
import { db } from '@/lib/db';



interface PageProps { params: { slug: string } }

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }: PageProps) {
  const id = params.slug;
  let initiative: any = null;
  try {
    initiative = await db.initiative.findUnique({ where: { id } });
  } catch (error) {
    console.error("DB Error:", error);
  }

  if (!initiative) {
    return {
      title: 'Initiative Not Found | Ramakirti Foundation',
      description: 'The initiative you are looking for does not exist.',
    };
  }

  return {
    title: `${initiative.title} | Ramakirti Foundation`,
    description: `Photos and story from ${initiative.title} — a Ramakirti Foundation community initiative in Gurgaon. ${initiative.description.slice(0, 120)}`,
    openGraph: {
      title: `${initiative.title} | Ramakirti Foundation`,
      type: 'website',
      url: `https://ramakirtifoundation.co.in/recent-initiatives/${id}`,
      images: initiative.image_url ? [{ url: initiative.image_url }] : [],
    },
  };
}

export default async function InitiativeDetailPage({ params }: PageProps) {
  const id = params.slug;
  let initiative: any = null;
  try {
    initiative = await db.initiative.findUnique({ where: { id } });
  } catch (error) {
    console.error("DB Error:", error);
  }
  
  if (!initiative) notFound();

  const displayName = initiative.title;
  const coverImage = initiative.image_url;
  const description = initiative.description;
  const galleryImages = initiative.gallery_urls || [];

  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Hero with cover image */}
        <section
          className="relative overflow-hidden flex items-end"
          style={{ minHeight: '540px', paddingTop: '72px' }}
        >
          {coverImage ? (
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={coverImage}
                alt={displayName}
                className="w-full h-full object-cover"
                style={{
                  animation: 'slowZoom 20s ease-out forwards',
                }}
              />
              <style>{`
                @keyframes slowZoom {
                  0% { transform: scale(1); }
                  100% { transform: scale(1.15); }
                }
              `}</style>
            </div>
          ) : (
            <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,#3A0D0B,#6E1110)' }} />
          )}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(58,13,11,.95) 0%, rgba(110,17,16,.6) 50%, transparent 100%)',
            }}
          />
          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pb-14">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-4 text-sm flex-wrap" style={{ color: 'rgba(255,255,255,.6)' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }} className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link href="/recent-initiatives" style={{ color: 'rgba(255,255,255,.6)' }} className="hover:text-white transition-colors">Initiatives</Link>
              <span>›</span>
              <span className="text-white">{displayName}</span>
            </nav>
            <h1
              className="font-extrabold text-white mb-4"
              style={{ fontSize: 'clamp(26px,4vw,52px)', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}
            >
              {displayName}
            </h1>
            <div className="flex flex-wrap gap-3">
              {galleryImages.length > 0 && (
                <span
                  className="text-sm font-bold px-4 py-1.5 rounded-full"
                  style={{ background: 'rgba(201,168,76,.25)', color: '#E5C96A', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}
                >
                  📷 {galleryImages.length} gallery photos
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="py-16" style={{ background: '#FDF8F7' }}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 max-w-3xl mx-auto gap-12 items-start">
              <div>
                <span
                  className="font-bold text-sm uppercase tracking-[.15em] mb-3 block"
                  style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}
                >
                  About This Initiative
                </span>
                <p style={{ fontSize: '17px', color: '#374151', lineHeight: '1.9' }}>{description}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 font-bold text-base text-white no-underline rounded-lg"
                    style={{ background: '#6E1110', padding: '14px 28px', fontFamily: 'var(--font-plus-jakarta, sans-serif)', boxShadow: '0 4px 16px rgba(110,17,16,.3)' }}
                  >
                    Support Our Work
                  </Link>
                  <Link
                    href="/recent-initiatives"
                    className="inline-flex items-center gap-2 font-bold text-base no-underline rounded-lg"
                    style={{ background: '#fff', color: '#6E1110', border: '2px solid #6E1110', padding: '14px 28px', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}
                  >
                    ← All Initiatives
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Gallery */}
        <InitiativeGallery mediaUrls={galleryImages} />
      </main>
      <Footer />
    </>
  );
}
