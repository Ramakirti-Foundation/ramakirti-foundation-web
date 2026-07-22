import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import { AnimatedCounter } from '@/app/components/AnimatedCounter';
import TestimonialCarousel from '@/app/components/TestimonialCarousel';
import './page.css';

export const metadata: Metadata = {
  title: 'Ramakirti Foundation | Best NGO in Gurgaon',
  description: 'A Non-profit organization working for the education to poor and women empowerment, organizing different events for them. Join our mission today.',
  openGraph: {
    title: 'Ramakirti Foundation | Best NGO in Gurgaon',
    description: 'Transforming lives through education, nutrition, and courage in Gurgaon, Haryana.',
    url: 'https://ramakirtifoundation.co.in/',
    type: 'website',
  },
};

import { db } from '@/lib/db';

export default async function HomePage() {
  const dynamicTestimonials = await db.contactMessage.findMany({
    where: { is_testimonial: true },
    orderBy: { created_at: 'desc' },
  });

  let allTestimonials = dynamicTestimonials.map(msg => ({
    stars: 5,
    quote: msg.message,
    name: msg.name || 'Anonymous',
    role: msg.subject?.replace('[Testimonial Submission] ', '') || 'Well Wisher',
    initials: (msg.name || 'AN').substring(0, 2).toUpperCase()
  }));

  if (allTestimonials.length === 0) {
    allTestimonials = [
      {
        stars: 5,
        quote: "Ramakirti Foundation has completely transformed our village. The dedication of their volunteers to educating our children is unparalleled. I've never seen such a positive impact in such a short time.",
        name: "Rahul Sharma",
        role: "Community Member",
        initials: "RS"
      },
      {
        stars: 5,
        quote: "I've been volunteering with them for a year now, and the transparency with which they operate is amazing. Every penny is accounted for, and the smiles on the children's faces are priceless.",
        name: "Priya Patel",
        role: "Volunteer",
        initials: "PP"
      },
      {
        stars: 5,
        quote: "Their women empowerment programs have given me the skills and confidence to start my own small business. I am forever grateful to the team for believing in us.",
        name: "Sunita Devi",
        role: "Beneficiary",
        initials: "SD"
      }
    ];
  }
  return (
    <>
      <Navigation transparent />
      <main id="main-content">
        {/* Skip link */}
        <a
          href="#main-content"
          className="absolute -top-full left-4 bg-[#6E1110] text-white px-5 py-2 rounded-lg font-bold z-[10000] focus:top-4 transition-all"
        >
          Skip to main content
        </a>

        {/* ─── HERO ─── */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero">
          <div
            className="absolute inset-0 bg-cover bg-center hero-bg"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(110,17,16,.82)] via-[rgba(110,17,16,.55)] to-[rgba(201,168,76,.18)]" />
          <div className="relative z-10 text-center text-white px-6 max-w-[940px] mx-auto py-24 w-full mt-12">
            <h1 className="text-[clamp(34px,5vw,56px)] font-[family-name:var(--font-plus-jakarta)] font-extrabold leading-[1.13] mb-6 text-white text-shadow-lg drop-uppercase">
              Ramakirti Foundation
            </h1>
            <p className="text-[20px] text-white/90 mb-10 max-w-[640px] mx-auto leading-[1.65] drop-shadow-md">
              We transform lives through quality education, nutritious meals, and women&apos;s empowerment — one family at a time in Haryana&apos;s most underserved communities.
            </p>
            <div className="hero-buttons-container">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center font-[family-name:var(--font-plus-jakarta)] font-bold text-[18px] text-[#651A16] no-underline bg-white border-2 border-white transition-colors hero-button"
              >
                Donate Now
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center font-[family-name:var(--font-plus-jakarta)] font-bold text-[18px] text-[#651A16] bg-white border-2 border-white transition-colors no-underline hero-button"
              >
                Volunteer With Us
              </Link>
            </div>

            {/* Hero stats */}
            <div className="stats-container mt-12 md:mt-16">
              {[
                { target: 1240, suffix: '+', label: 'Children Educated' },
                { target: 5800, suffix: '+', label: 'Meals Monthly' },
                { target: 320, suffix: '+', label: 'Women Trained' },
              ].map(({ target, suffix, label }, i) => (
                <div key={label} className={`stat-item ${i > 0 ? 'md:border-l border-white/25 md:pl-8' : ''}`}>
                  <span className="block font-[family-name:var(--font-plus-jakarta)] font-extrabold text-[28px] text-white drop-shadow">
                    <AnimatedCounter target={target} suffix={suffix} />
                  </span>
                  <span className="text-sm text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── STATS STRIP ─── */}
        <div className="bg-[#F9FAFB] py-4 border-y-2 border-[#E5C96A]/30 w-full info-strip-wrapper">
          <div className="info-strip-content" aria-label="Quick statistics">
            {[
              { icon: '🗓', text: 'Founded 2021' },
              { icon: '📍', text: 'Gurgaon, Haryana' },
              { icon: '🏛️', text: '80G Tax Exempt' },
              { icon: '⭐', text: '4.9 Rating (24 Reviews)' },
              { icon: '🤝', text: '50+ Active Volunteers' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 font-[family-name:var(--font-plus-jakarta)] font-bold text-[14px] md:text-[15px] text-[#6E1110] mx-4 md:mx-8">
                <span className="text-[20px] md:text-[22px]">{icon}</span>
                {text}
              </div>
            ))}
            {/* Duplicate for infinite scroll */}
            {[
              { icon: '🗓', text: 'Founded 2021' },
              { icon: '📍', text: 'Gurgaon, Haryana' },
              { icon: '🏛️', text: '80G Tax Exempt' },
              { icon: '⭐', text: '4.9 Rating (24 Reviews)' },
              { icon: '🤝', text: '50+ Active Volunteers' },
            ].map(({ icon, text }) => (
              <div key={text + "-dup"} aria-hidden="true" className="flex items-center gap-2 font-[family-name:var(--font-plus-jakarta)] font-bold text-[14px] md:text-[15px] text-[#6E1110] mx-4 md:mx-8">
                <span className="text-[20px] md:text-[22px]">{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* ─── PILLARS ─── */}
        <section className="relative py-24 bg-white overflow-hidden section-pillars" id="pillars" aria-label="Our initiatives">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center pillars-bg hidden md:block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/95 to-white/80 hidden md:block" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-5">
            <div className="text-center mb-16">
              <span className="text-[#C9A84C] font-[family-name:var(--font-plus-jakarta)] font-bold text-sm uppercase tracking-[.15em]">What We Do</span>
              <h2 className="text-[clamp(26px,4vw,40px)] font-[family-name:var(--font-plus-jakarta)] font-bold text-[#6E1110] mt-2 mb-4">Three Pillars of Change</h2>
              <p className="text-gray-700 font-medium max-w-[620px] mx-auto text-[18px]">Every initiative is designed around a single belief: every person deserves a life of dignity, learning, and opportunity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1: Education */}
              <Link href="/initiatives/education" className="pillar-card group bg-white/90 backdrop-blur-sm rounded-[24px] p-8 shadow-sm border border-gray-200 relative overflow-hidden flex flex-col items-start text-left no-underline cursor-pointer transition-all hover:bg-white">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6E1110] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="w-[64px] h-[64px] rounded-xl flex items-center justify-center text-[28px] mb-5 bg-[#6E1110]/5 text-[#6E1110]">
                  📚
                </div>
                <h3 className="text-[22px] font-[family-name:var(--font-plus-jakarta)] font-bold text-[#6E1110] mb-3">Education</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
                  We have set up a Non-Formal education centre in Gurgaon. Our dedicated teachers teach them a good level of education so that they can achieve everything in their life.
                </p>
                <div className="pillar-link inline-flex items-center gap-1.5 font-[family-name:var(--font-plus-jakarta)] font-bold text-sm text-[#6E1110] uppercase tracking-[.05em] no-underline">
                  Learn More →
                </div>
              </Link>

              {/* Pillar 2: Food */}
              <Link href="/initiatives/food" className="pillar-card group bg-white/90 backdrop-blur-sm rounded-[24px] p-8 shadow-sm border border-gray-200 relative overflow-hidden flex flex-col items-start text-left no-underline cursor-pointer transition-all hover:bg-white delay-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6E1110] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="w-[64px] h-[64px] rounded-xl flex items-center justify-center text-[28px] mb-5 bg-[#C9A84C]/10 text-[#6E1110]">
                  🍽️
                </div>
                <h3 className="text-[22px] font-[family-name:var(--font-plus-jakarta)] font-bold text-[#6E1110] mb-3">Food and Nutrition</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
                  We provide free food and other essential items and help the underprivileged. We give food during their classes time as well as distribute food in slum areas for their parents and family too.
                </p>
                <div className="pillar-link inline-flex items-center gap-1.5 font-[family-name:var(--font-plus-jakarta)] font-bold text-sm text-[#6E1110] uppercase tracking-[.05em] no-underline">
                  Learn More →
                </div>
              </Link>

              {/* Pillar 3: Women */}
              <Link href="/initiatives/women" className="pillar-card group bg-white/90 backdrop-blur-sm rounded-[24px] p-8 shadow-sm border border-gray-200 relative overflow-hidden flex flex-col items-start text-left no-underline cursor-pointer transition-all hover:bg-white delay-200">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6E1110] to-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="w-[64px] h-[64px] rounded-xl flex items-center justify-center text-[28px] mb-5 bg-[#C9A84C]/10 text-[#6E1110]">
                  💪
                </div>
                <h3 className="text-[22px] font-[family-name:var(--font-plus-jakarta)] font-bold text-[#6E1110] mb-3">Women Empowerment</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6 flex-grow">
                  It’s a time that each and every girl and woman must realize their value and their position. They have been building the society and nurturing lives as a daughter, sisters, wives and other roles.
                </p>
                <div className="pillar-link inline-flex items-center gap-1.5 font-[family-name:var(--font-plus-jakarta)] font-bold text-sm text-[#6E1110] uppercase tracking-[.05em] no-underline">
                  Learn More →
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─── */}
        <section className="bg-[#FDF8F7] section-testimonials" aria-label="Testimonials">
          <div className="max-w-[1280px] mx-auto px-5">
            <div className="text-center mb-16">
              <span className="text-[#C9A84C] font-[family-name:var(--font-plus-jakarta)] font-bold text-sm uppercase tracking-[.15em]">Voices From the Field</span>
              <h2 className="text-[clamp(26px,4vw,40px)] font-[family-name:var(--font-plus-jakarta)] font-bold text-[#6E1110] mt-2 mb-4">What People Say</h2>
              <p className="text-gray-500 max-w-[620px] mx-auto text-[18px]">Stories from the volunteers, donors, and families who make our work possible.</p>
            </div>

            <div className="-mx-5 px-5">
              <TestimonialCarousel testimonials={allTestimonials} />
            </div>
          </div>
        </section>

        {/* ─── TRUST SECTION ─── */}
        <section className="py-24 bg-white" aria-label="Trust and transparency">
          <div className="max-w-[1280px] mx-auto px-5">
            <div className="text-center mb-16">
              <span className="text-[#C9A84C] font-[family-name:var(--font-plus-jakarta)] font-bold text-sm uppercase tracking-[.15em]">Transparency & Trust</span>
              <h2 className="text-[clamp(26px,4vw,40px)] font-[family-name:var(--font-plus-jakarta)] font-bold text-[#6E1110] mt-2 mb-4">Why Donors Trust Us</h2>
              <p className="text-gray-500 max-w-[620px] mx-auto text-[18px]">We hold ourselves to the highest standards of accountability so you can give with complete confidence.</p>
            </div>

            <div className="trust-cards-container mb-12">
              <div className="trust-card bg-white p-8 rounded-[24px] text-center shadow-sm border border-gray-200 flex flex-col items-center">
                <div className="text-[48px] mb-5" aria-hidden="true">🏛️</div>
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[20px] text-[#6E1110] mb-3">80G Tax Exempt</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed flex-grow">All donations are eligible for income tax deduction under Section 80G(5)(vi). We provide digitally signed receipts instantly.</p>
              </div>

              <div className="trust-card bg-white p-8 rounded-[24px] text-center shadow-sm border border-gray-200 flex flex-col items-center">
                <div className="text-[48px] mb-5" aria-hidden="true">🤝</div>
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[20px] text-[#6E1110] mb-3">On-Ground Impact</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed flex-grow">We are a grassroots NGO. 100% of your contributions go directly into funding programs, not expensive overheads.</p>
              </div>

              <div className="trust-card bg-white p-8 rounded-[24px] text-center shadow-sm border border-gray-200 flex flex-col items-center">
                <div className="text-[48px] mb-5" aria-hidden="true">🔒</div>
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[20px] text-[#6E1110] mb-3">Secure Payments</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed flex-grow">Donations are processed securely with bank-grade encryption via UPI and direct bank transfers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA BANNER ─── */}
        <section className="py-28 bg-[#6E1110] text-center relative overflow-hidden" aria-label="Call to action">
          <div className="absolute top-[-30%] left-[20%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,.15),transparent_60%)] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,.12),transparent_60%)] pointer-events-none" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-5">
            <span className="text-[#E5C96A] font-[family-name:var(--font-plus-jakarta)] font-bold text-sm uppercase tracking-[.15em] drop-shadow">Take Action Today</span>
            <h2 className="text-[clamp(28px,4vw,44px)] font-[family-name:var(--font-plus-jakarta)] font-bold text-white mt-4 mb-5 drop-shadow-md">Ready to Make a Difference?</h2>
            <p className="text-white/85 text-[19px] mb-12 max-w-[580px] mx-auto leading-relaxed">
              Whether you donate, volunteer, or simply share our story — every single action ripples outward and changes a life.
            </p>
            <div className="hero-buttons-container">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center font-[family-name:var(--font-plus-jakarta)] font-bold text-[18px] text-[#651A16] no-underline bg-white border-2 border-white transition-colors hero-button"
              >
                Donate Now
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center font-[family-name:var(--font-plus-jakarta)] font-bold text-[18px] text-[#651A16] bg-white border-2 border-white transition-colors no-underline hero-button"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />


    </>
  );
}
