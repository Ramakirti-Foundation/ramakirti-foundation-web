import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

export const metadata: Metadata = {
  title: 'About Us | Ramakirti Foundation',
  description: 'Learn about Ramakirti Foundation, charitable trust established in 2021. Our team committed helping destitute girls and children rewrite their destiny.',
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        {/* Page Hero */}
        <section
          className="relative text-white overflow-hidden flex items-center"
          style={{
            paddingTop: 'calc(72px + 48px)',
            paddingBottom: '64px',
            minHeight: '340px',
            background: 'linear-gradient(135deg, #3A0D0B 0%, #6E1110 60%, #8B2520 100%)',
          }}
        >
          <div className="absolute top-[-30%] right-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(201,168,76,.2), transparent 58%)' }} />

          <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 text-center">
            <div className="flex items-center justify-center gap-2 text-sm mb-5" style={{ color: 'rgba(255,255,255,.55)' }}>
              <Link href="/" className="hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,.55)' }}>Home</Link>
              <span>›</span>
              <span className="text-white">About Us</span>
            </div>
            <h1 className="text-white font-extrabold mb-4" style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
              About Us
            </h1>
            <p style={{ color: 'rgba(255,255,255,.8)', fontSize: '18px', maxWidth: '640px', margin: '0 auto', lineHeight: '1.6' }}>
              We have been helping children from urban slums and other vulnerable communities to move on in life by providing education and healthcare facilities.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-[#FDF8F7]">
          <div className="max-w-[1280px] mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
              {/* Text Content */}
              <div>
                <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block" style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                  Our Story
                </span>
                <h2 className="font-extrabold mb-6" style={{ color: '#6E1110', fontSize: 'clamp(28px,4vw,40px)', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                  RAMAKIRTI FOUNDATION
                </h2>
                <div className="space-y-5 text-gray-700 text-[16px] leading-[1.85]">
                  <p>
                    Ramakirti Foundation is a charitable organisation committed to creating meaningful and lasting change in the lives of children, women and underserved communities. Established with the belief that every individual deserves access to education, nutrition, dignity and opportunities to grow, we work towards building a more equitable and inclusive society.Our work is rooted in the understanding that meaningful change begins at the grassroots level. Through our initiatives in education, nutrition, community support and women’s empowerment, we strive to address some of the fundamental challenges faced by vulnerable communities.For us, education is more than just learning from books. It is a pathway to confidence, independence and a better future. We work to support children by creating access to learning opportunities and helping them develop the knowledge and skills they need to grow and thrive.Alongside education, we also focus on the nutritional and essential needs of families and communities who require support. Through food distribution, grocery support and community welfare initiatives, we aim to ensure that no individual or family is left without basic necessities during difficult times.</p>
                  <p>
                    We also believe that empowering women is essential to creating stronger families and communities. By supporting women with opportunities, awareness and resources, we aim to encourage confidence, independence and dignity.Our work is made possible through the collective efforts of our team, volunteers, donors, supporters and community partners. Every contribution—whether through time, resources, skills or financial support—helps us reach more people and create a greater impact.</p>
                  <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block" style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                    Our Vision
                  </span>
                  <p>
                    We envision a society where every child has the opportunity to learn, every family has access to basic necessities, and every woman has the opportunity to live with dignity, confidence and independence.
                  </p>
                  <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block" style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                    Our Mission
                  </span>
                  <p>
                    Our mission is to create sustainable social impact by working at the grassroots level and supporting communities through education, nutrition, essential resources and empowerment initiatives.
                  </p>
                  <p>We believe that change does not happen overnight. It begins with one child receiving an opportunity, one family receiving support, one woman gaining confidence and one community coming together to make a difference.Together, we can turn compassion into action and action into lasting change.</p>
                </div>
              </div>

              {/* Images */}
              <div className="about-images-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/Initiatives/A Day in Zinnia/A Day in Zinnia.webp"
                  alt="Ramakirti Foundation team"
                  className="about-image"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/Food For Poor.jpg"
                  alt="Food distribution"
                  className="about-image"
                />
              </div>
            </div>
            <div className="relative z-10 max-w-[1280px] mx-auto px-5">
              <div className="mt-12 flex">
                <Link
                href="/donate"
                className="btn-global-primary no-underline">
                Support Our Mission
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
