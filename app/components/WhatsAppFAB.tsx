'use client';

import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFAB() {
  const pathname = usePathname();

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <a
      href="https://wa.me/918851502840?text=Hi,%20I%20want%20to%20know%20more%20about%20volunteering/donating"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bg-[#25D366] text-white rounded-full shadow-lg hover:-translate-y-1 hover:shadow-xl hover:bg-[#1FAF53] transition-all duration-300 flex items-center justify-center cursor-pointer group whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-fab-icon" />
    </a>
  );
}
