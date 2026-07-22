import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import './page.css';

export const metadata: Metadata = {
    title: 'Grocery Initiative | Ramakirti Foundation',
    description: 'Providing essential support and grocery distribution for families facing financial hardship.',
};

export default function GroceryInitiativePage() {
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
                            <span className="text-white">Grocery</span>
                        </div>
                        <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block subtitle">
                            Essential Support
                        </span>
                        <h1 className="text-white font-extrabold mb-4 title">
                            Grocery Distribution
                        </h1>
                        <p className="description">
                            Supporting Families Through Difficult Times
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
                                    Essential Support for Families
                                </span>
                                <p>
                                    For families facing financial hardship, even basic household essentials can become difficult to afford. Through our essential support initiatives, we aim to provide assistance to families and individuals who need help with everyday necessities.
                                </p>
                                <p>This may include grocery support, essential household supplies and other forms of community assistance based on identified needs.</p>
                                <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block" style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                                    Our Aim
                                </span>
                                <p>Our aim is to provide timely support while preserving the dignity and self-respect of every individual we serve.</p>
                            </div>
                            <div className="mt-12">
                                <Link
                                    href="/donate"
                                    className="btn-global-primary no-underline">
                                    Donate Now
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
