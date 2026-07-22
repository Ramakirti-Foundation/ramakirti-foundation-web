import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const QUICK_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/initiatives/education', label: 'Education' },
  { href: '/initiatives/food', label: 'Food and Nutrition' },
  { href: '/initiatives/women', label: 'Women Empowerment' },
  { href: '/requirements', label: 'Requirements' },
];

const GET_INVOLVED = [
  { href: '/donate', label: 'Donate Now' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/contact', label: 'Partner With Us' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-900 text-gray-300 pt-20 pb-8 footer-section" role="contentinfo">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 mb-16">
          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-4 no-underline mb-4">
              <Image src="/img/logo.jpg" alt="Ramakirti Foundation" width={42} height={42} className="rounded-md border border-gray-800" />
              <div>
                <div className="font-bold text-[16px] text-white">
                  Ramakirti Foundation
                </div>
                <div className="text-[11px] text-[#C9A84C] font-semibold tracking-wide">
                  Educate. Nourish. Empower.
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mt-4 max-w-sm">
              RAMAKIRTI FOUNDATION has been established as a charitable trust, backed by a dedicated team. It was established in year 2021, is one of the emerging non – profit organization in India. Our main aim is to provide a better life and education to the under privileged / destitute girls / children as we know they deserve the best of all. Education is the part and parcel of lives as well as society, life without education is simply beyond imaginations.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-6" aria-label="Social media links">
              {[
                { href: 'https://www.facebook.com/ramakirtifoundation.org', label: 'Facebook', icon: <FaFacebook size={22} /> },
                { href: 'https://www.instagram.com/ramakirtifoundation/', label: 'Instagram', icon: <FaInstagram size={22} /> },
                { href: 'https://www.linkedin.com/company/96037665/', label: 'LinkedIn', icon: <FaLinkedin size={22} /> },
                { href: 'https://www.youtube.com/channel/UCY9gGWwrWTdLH6mxEDo6LFA', label: 'YouTube', icon: <FaYoutube size={22} /> },
                { href: 'https://wa.me/918851502840', label: 'WhatsApp', icon: <FaWhatsapp size={22} /> },
              ].map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="w-[42px] h-[42px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#651A16] hover:border-[#651A16] hover:-translate-y-[2px] transition-all duration-200 no-underline"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="text-white text-[14px] font-bold uppercase tracking-[.05em] mb-6">
              Quick Links
            </h5>
            <div className="flex flex-col gap-3">
              {QUICK_LINKS.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-base text-gray-400 hover:text-[#C9A84C] transition-colors no-underline flex items-start gap-2 font-medium"
                >
                  <span className="shrink-0 mt-0.5">→</span>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Get Involved */}
          <div>
            <h5 className="text-white text-[14px] font-bold uppercase tracking-[.05em] mb-6">
              Get Involved
            </h5>
            <div className="flex flex-col gap-3">
              {GET_INVOLVED.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-base text-gray-400 hover:text-[#C9A84C] transition-colors no-underline flex items-start gap-2 font-medium"
                >
                  <span className="shrink-0 mt-0.5">→</span>
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white text-[14px] font-bold uppercase tracking-[.05em] mb-6">
              Contact Us
            </h5>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-base text-gray-400 leading-relaxed font-medium">
                <span className="mt-1 text-[#C9A84C]">📍</span>
                <span>
                  Ramakirti Foundation, Sector 57, Tigra, behind the Legend Apartment, Gurugram, Haryana
                </span>
              </div>
              <div className="flex items-center gap-3 text-base text-gray-400 font-medium">
                <span className="text-[#C9A84C]">📞</span>
                <a href="tel:+918851502840" className="text-gray-400 hover:text-[#C9A84C] transition-colors no-underline">
                  +91 88515-02840
                </a>
              </div>
              <div className="flex items-center gap-3 text-base text-gray-400 font-medium">
                <span className="text-[#C9A84C]">✉️</span>
                <a href="mailto:support@ramakirtifoundation.co.in" className="text-gray-400 hover:text-[#C9A84C] transition-colors no-underline">
                  support@ramakirtifoundation.co.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-base text-gray-400 font-medium">
                <span className="text-[#C9A84C]">🕐</span>
                <span>Mon–Sat, 9 AM – 6 PM</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500 flex-wrap font-medium">
          <span className="copyright">© Ramakirti Foundation. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors no-underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors no-underline">
              Terms of Use
            </Link>
            <Link href="/refund" className="text-gray-500 hover:text-white transition-colors no-underline">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
