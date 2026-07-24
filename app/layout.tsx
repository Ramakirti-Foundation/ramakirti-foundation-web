import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Atkinson_Hyperlegible } from 'next/font/google';
import Script from 'next/script';
import WhatsAppFAB from '@/app/components/WhatsAppFAB';
const atkinson = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-atkinson',
});

export const metadata: Metadata = {
  title: 'Ramakirti Foundation | Empowering Communities',
  description: 'Ramakirti Foundation is a non-profit organization dedicated to empowering communities through education, healthcare, and sustainable development.',
  authors: [{ name: 'Ramakirti Foundation' }],
  creator: 'Ramakirti Foundation',
  metadataBase: new URL('https://ramakirtifoundation.co.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ramakirtifoundation.co.in',
    siteName: 'Ramakirti Foundation',
    title: 'Ramakirti Foundation | Empowering Communities',
    description: 'Ramakirti Foundation is a non-profit organization dedicated to empowering communities through education, healthcare, and sustainable development.',
    images: [
      {
        url: '/rf_bg_2.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramakirti Foundation',
    description: 'Empowering communities through education, healthcare, and sustainable development.',
    images: ['/rf_bg_2.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#651A16',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: 'Ramakirti Foundation',
  url: 'https://ramakirtifoundation.co.in',
  logo: 'https://ramakirtifoundation.co.in/logo.png',
  description: 'Non-profit providing education, food distribution, and women empowerment in Gurgaon',
  foundingDate: '2021',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '24',
    bestRating: '5',
    worstRating: '1',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sector 57 Near Government Middle School , TIGRA',
    addressLocality: 'Gurgaon',
    addressRegion: 'Haryana',
    postalCode: '122022',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-88515-02840',
    email: 'support@ramakirtifoundation.co.in',
    contactType: 'General Enquiry',
  },
  sameAs: [
    'https://www.facebook.com/ramakirtifoundation.org',
    'https://www.instagram.com/ramakirtifoundation/',
    'https://www.linkedin.com/company/96037665/',
    'https://www.youtube.com/channel/UCY9gGWwrWTdLH6mxEDo6LFA',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${atkinson.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.razorpay.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning={true} className={`${atkinson.variable} font-sans antialiased text-[19px]`}>
        <main className="min-h-screen">
          {children}
        </main>
        <WhatsAppFAB />

        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
