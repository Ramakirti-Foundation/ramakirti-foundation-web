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
              {/* <h2 className="font-extrabold mb-6 section-title">
                Empowering Through Knowledge
              </h2> */}
              <div className="space-y-5 text-gray-800 font-medium text-[16.5px] leading-[1.85]">
                <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block" style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                  Every Child Deserves the Opportunity to Learn.
                </span>
                <p>
                  Education has the power to transform lives. It gives children the confidence to dream, the knowledge to grow and the opportunity to build a better future.
                </p>
                <p>
                  At Ramakirti Foundation, we work to support children from underserved communities by providing access to educational support and learning opportunities. Our goal is to help children continue their learning journey and develop the confidence and skills they need to move forward in life.Our education initiatives focus on creating a supportive learning environment where children can learn at their own pace, develop their abilities and discover their potential.
                </p>
                <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block" style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                  Our work includes:
                </span>
                <ul style={{ listStyleType: 'disc', listStylePosition: 'inside', color: 'black' }}>
                  <li>Educational support for children</li>
                  <li>Academic learning assistance</li>
                  <li>Support with educational materials</li>
                  <li>Encouraging regular learning and school participation</li>
                  <li>Creating a safe and supportive learning environment</li>
                  <li>Supporting children's overall development</li>
                </ul>
                <p>We believe that education should not be limited by a child's financial circumstances. Every child deserves the chance to learn, grow and dream of a brighter future.</p>
                <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block" style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                  Our Goal
                </span>
                <p>To help children become more confident, capable and independent individuals by providing them with the support and opportunities they need to learn and grow.Because education is not just preparation for life—it is the foundation of a better life.</p>
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
