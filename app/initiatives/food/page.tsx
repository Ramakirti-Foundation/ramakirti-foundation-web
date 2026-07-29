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
              Food and Nutrition
            </h1>
            <p className="description">
              We provide free food and other essential items and help the underprivileged. We give food during their classes time as well as distribute food in slum areas for their parents and family too.
            </p>
          </div>
        </section>

        <section className="relative py-24 border-t border-gray-100 overflow-hidden">
          {/* Background image on the left */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-image hidden md:block"
          />
          {/* Gradient overlay: solid white on right fading to transparent on left */}
          <div className="absolute inset-0 bg-gradient-to-l from-white via-white/95 to-white/10 md:to-transparent hidden md:block" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-5 flex justify-end">
            <div className="max-w-[700px]">
              {/* <h2 className="font-extrabold mb-6 section-title">
                Eradicating Hunger, One Meal at a Time
              </h2> */}
              <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block" style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                Nourishing Communities with Care and Dignity
              </span>
              <div className="space-y-5 text-gray-800 font-medium text-[16.5px] leading-[1.85]">
                <p>
                  Access to nutritious food is a basic human need. Yet many families and individuals continue to struggle with food insecurity and the rising cost of essential groceries.Through our food and nutrition initiatives, Ramakirti Foundation works to support vulnerable individuals and families by providing meals, groceries and essential food supplies wherever support is needed.
                </p>
                <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block" style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                  Our Aim
                </span>
                <p>
                  Our aim is not only to provide food but also to ensure that people receive support with dignity, compassion and respect.
                </p>
                <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block" style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                  Our work includes:
                </span>
                <ul style={{ listStyleType: 'disc', listStylePosition: 'outside', color: 'black' }}>
                  <li>Distribution of nutritious meals</li>
                  <li>Grocery and ration support</li>
                  <li>Support for vulnerable families</li>
                  <li>Community food distribution drives</li>
                  <li>Emergency food assistance wherever possible</li>
                </ul>
                <p>
                  Every meal can make a difference. For a child, it can provide the energy to learn. For a family, it can provide relief during a difficult time.
                </p>
                <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block" style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                  Our Goal
                </span>
                <p>
                  To help ensure that no individual or family in the communities we serve has to face hunger without support.Together, we can help nourish lives and build stronger communities.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/donate"
                  className="btn-global-primary no-underline">
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
