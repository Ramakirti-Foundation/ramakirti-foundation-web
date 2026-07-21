import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import './page.css';

export const metadata: Metadata = {
  title: 'Education Initiative | Ramakirti Foundation',
  description: 'Education is a right to everyone. We have setup non-formal education centres in Gurgaon to teach the underprivileged.',
};

export default function EducationInitiativePage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <section
          className="relative text-white overflow-hidden flex items-center hero-section"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/img/Education is right to everyone.webp"
            alt="Education Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 text-center">
            <div className="flex items-center justify-center gap-2 text-sm mb-5 breadcrumb">
              <Link href="/" className="hover:text-white transition-colors breadcrumb-link">Home</Link>
              <span>›</span>
              <span className="text-white">Initiatives</span>
              <span>›</span>
              <span className="text-white">Education</span>
            </div>
            <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block subtitle">
              Our Core Pillar
            </span>
            <h1 className="text-white font-extrabold mb-4 title">
              Education is a Right to Everyone
            </h1>
            <p className="description">
              We have set up a Non-Formal education centre in Gurgaon. Our dedicated teachers teach them a good level of education so that they can achieve everything in their life.
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
              <h2 className="font-extrabold mb-6 section-title">
                Empowering Through Knowledge
              </h2>
              <div className="space-y-5 text-gray-800 font-medium text-[16.5px] leading-[1.85]">
                <p>
                  We are pleased to announce that our organization has recently established a new Non-Formal education centre in the beautiful city of Gurgaon. Our main objective behind this initiative is to provide access to quality education to underprivileged individuals who lack access to formal education systems. Our highly dedicated and passionate teachers are fully committed to imparting impactful knowledge to students, enabling them to gain an in-depth understanding of subjects that will allow them to achieve success throughout their lives.
                </p>
                <p>
                  At our Non-Formal education centre, we believe that education is a human right and that everyone should receive the opportunity to learn, grow, and fulfill their potential. Our center provides all the necessary resources to students, including books, writing materials, and learning tools that are essential for an enriching academic experience. Join us, and become a pioneer in transforming lives through education.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="/donate"
                  className="btn-global-primary no-underline">
                  Support a Child's Education
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
