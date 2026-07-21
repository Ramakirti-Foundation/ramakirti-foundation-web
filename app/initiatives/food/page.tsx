import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import './page.css';

export const metadata: Metadata = {
  title: 'Assist The Poor | Ramakirti Foundation',
  description: 'We provide free food and other essential items and help the underprivileged. We give food during their classes time as well as distribute food in slum areas.',
};

export default function FoodInitiativePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section
          className="relative text-white overflow-hidden flex items-center hero-section"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/Food For Poor.jpg"
            alt="Food Distribution Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 text-center">
            <div className="flex items-center justify-center gap-2 text-sm mb-5 breadcrumb">
              <Link href="/" className="hover:text-white transition-colors breadcrumb-link">Home</Link>
              <span>›</span>
              <span className="text-white">Initiatives</span>
              <span>›</span>
              <span className="text-white">Assist The Poor</span>
            </div>
            <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block subtitle">
              Our Core Pillar
            </span>
            <h1 className="text-white font-extrabold mb-4 title">
              Food For Poor
            </h1>
            <p className="description">
              We provide free food and other essential items and help the underprivileged. We give food during their classes time as well as distribute food in slum areas for their parents and family too.
            </p>
          </div>
        </section>

        <section className="relative py-24 border-t border-gray-100 overflow-hidden">
          {/* Background image on the left */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-image"
          />
          {/* Gradient overlay: solid white on right fading to transparent on left */}
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/95 to-white/10 md:to-transparent" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-5 flex justify-end">
            <div className="max-w-[700px]">
              <h2 className="font-extrabold mb-6 section-title">
                Eradicating Hunger, One Meal at a Time
              </h2>
              <div className="space-y-5 text-gray-800 font-medium text-[16.5px] leading-[1.85]">
                <p>
                  Our organization is proud to offer invaluable assistance to the underprivileged. We recognize the challenges that many people face in making ends meet and strive to provide support wherever possible. Specifically, we provide free food and other essential items to those in need. Our services extend beyond simply providing food – we also work tirelessly to distribute our resources in a way that is most impactful. For example, during the day, we provide food to students who may not receive regular meals otherwise. We also make it a priority to distribute food to slum areas, ensuring that parents and their families have access to the nutrition they need. Our goal is to make a meaningful difference in the lives of those we assist, and we are committed to continuing to do so for as long as there is a need.
                </p>
                <p>
                  We distribute free nutritious meals, ration kits, and essential items to families living in Gurgaon's slum communities. We ensure that the children studying at our centres receive a healthy meal, which often acts as a major incentive for parents to send them to study.
                </p>
                <p>
                  Beyond daily meals, we organize massive food distribution drives during festivals and special occasions, bringing joy and a sense of community to those who need it most. During crises, such as the pandemic, we scale our operations to provide comprehensive ration kits and essential supplies like masks to vulnerable families.
                </p>

                <div className="mt-8 p-6 bg-[#FDF8F7] border border-[#6E1110]/10 rounded-xl">
                  <h3 className="font-bold text-[#6E1110] mb-2 font-[family-name:var(--font-plus-jakarta)] text-[18px]">Our Impact</h3>
                  <p className="text-gray-600 text-[15px]">
                    Over <strong>5,800+ meals</strong> are distributed monthly, ensuring families don't have to choose between feeding their children and educating them.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center font-[family-name:var(--font-plus-jakarta)] font-bold text-[18px] text-white px-9 py-[18px] rounded-2xl min-w-[250px] no-underline bg-[#651A16] hover:bg-[#8B2520] transition-colors"
                >
                  Donate a Meal Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </>
  );
}
