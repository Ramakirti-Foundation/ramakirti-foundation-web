import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import './page.css';

export const metadata: Metadata = {
  title: 'Women Empowerment | Ramakirti Foundation',
  description: 'It\'s high time that each and every girl, women must realise their value and their positions. Join our women empowerment programs.',
};

export default function WomenEmpowermentPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section
          className="relative text-white overflow-hidden flex items-center hero-section"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/Women Empowerment.jpg"
            alt="Women Empowerment Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 text-center">
            <div className="flex items-center justify-center gap-2 text-sm mb-5 breadcrumb">
              <Link href="/" className="hover:text-white transition-colors breadcrumb-link">Home</Link>
              <span>›</span>
              <span className="text-white">Initiatives</span>
              <span>›</span>
              <span className="text-white">Women Empowerment</span>
            </div>
            <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block subtitle">
              Our Core Pillar
            </span>
            <h1 className="text-white font-extrabold mb-4 title">
              Women Empowerment
            </h1>
            <p className="description">
              It’s time that each and every girl and woman must realize their value and their position. They have been building the society and nurturing lives as daughters, sisters, wives, and other roles.
            </p>
          </div>
        </section>

        <section className="relative py-24 border-t border-gray-100 overflow-hidden">
          {/* Background image on the right */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-image hidden md:block"
          />
          {/* Gradient overlay: solid white on left fading to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10 md:to-transparent hidden md:block" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-5">
            <div className="max-w-[700px]">
              <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block subtitle">
                Empowering Women. Strengthening Communities.
              </span>
              <div className="space-y-5 text-gray-800 font-medium text-[16.5px] leading-[1.85]">
                <p>
                  When women have access to opportunities, knowledge and support, entire families and communities become stronger.At Ramakirti Foundation, we believe that women deserve the opportunity to live with confidence, dignity and independence. Our women’s empowerment initiatives aim to create awareness, provide support and encourage opportunities that help women move towards greater self-reliance.</p>
                <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block subtitle">
                  Our work focuses on:
                </span>
                <ul style={{ listStyleType: 'disc', listStylePosition: 'outside', color: 'black' }}>
                  <li>Promoting awareness and confidence</li>
                  <li>Encouraging skill development</li>
                  <li>Supporting financial independence</li>
                  <li>Creating awareness about opportunities and resources</li>
                  <li>Promoting dignity, equality and inclusion</li>
                  <li>Supporting women in building a more secure future</li>
                </ul>
                <p>
                  <strong>The Rani Story</strong> is one of our key initiatives that documents and celebrates the journeys of women in our empowerment programs — giving voice to their struggles, triumphs, and aspirations as an inspiration to others.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-[#6E1110] font-bold">
                  <li><span className="text-gray-800 font-medium">Vocational training centers for tailoring, beauty, and crafts.</span></li>
                  <li><span className="text-gray-800 font-medium">Financial literacy and entrepreneurship workshops.</span></li>
                  <li><span className="text-gray-800 font-medium">Maternal health awareness and counseling sessions.</span></li>
                </ul>
              </div>
              <div className="mt-10">
                <Link
                  href="/volunteer"
                  className="btn-global-primary no-underline">
                  Volunteer for this Cause
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
