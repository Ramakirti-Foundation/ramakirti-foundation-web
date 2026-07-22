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
                  src="/img/Initiatives/A Day in Parsona/A Day in Pasona.webp"
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
          </div>
        </section>

        {/* Mission Section */}
        <section className="relative py-24 border-t border-gray-100 overflow-hidden">
          {/* Background image on the right */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center hidden md:block"
            style={{ backgroundImage: "url('/img/Initiatives/Children and Parent Councelling Session/Gallery/IMG-20230717-WA0010.jpg')" }}
          />
          {/* Gradient overlay: solid white on left fading to transparent on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10 md:to-transparent hidden md:block" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-5">
            <div className="max-w-[750px]">
              <span className="font-bold text-sm uppercase tracking-[.15em] mb-4 block" style={{ color: '#C9A84C', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                Why We Exist
              </span>
              <h2 className="font-extrabold mb-8" style={{ color: '#6E1110', fontSize: 'clamp(28px,4vw,40px)', fontFamily: 'var(--font-plus-jakarta, sans-serif)' }}>
                OUR MISSION
              </h2>
              <div className="text-gray-800 font-medium text-[16.5px] leading-[1.85] text-left space-y-5">
                <p>
                  Our organization is dedicated to making a meaningful difference in the lives of underprivileged souls who need our help. Our uplifting work gives hope and support to those who may otherwise face difficult and challenging times, and we take pride in being a trusted partner in making a positive impact in the world.
                </p>
                <p>
                  But to achieve our goals, we need your help. Whether through kind donations or your own precious time, your support will go a long way in making a difference. There’s no limit to the positive change we can make when we work together to support those in need. So please, join us in our mission to help the underprivileged, as it wouldn’t be possible without your generosity and compassion.
                </p>
                <p>
                  As a compassionate community we aim to extend our assistance to those who are less fortunate. To achieve this goal, our organization has endeavored to provide financial aid to the impoverished individuals, families, and communities. As empathetic citizens, we also aim to provide them with the much-needed moral support to empower them to overcome their difficult situations.
                </p>
                <p>
                  In addition, we regularly conduct awareness campaigns to promote greater understanding and support for those living in poverty. By providing a safe and supportive environment for these individuals, we hope to create a community of care and compassion that will provide them with the resources they need to thrive. We believe that everyone deserves equal opportunities in life, irrespective of their economic background, and we are committed to making a difference by extending a helping hand to those in need.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href="/donate"
                  className="btn-global-primary no-underline"
                >
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
