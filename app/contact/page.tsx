'use client';

import { useState } from 'react';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (k: keyof ContactForm, v: string) => setForm((prev) => ({ ...prev, [k]: v }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/contact/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Send failed');
      setStatus('success');
    } catch {
      setErrorMsg('Could not send message. Please email us directly or WhatsApp.');
      setStatus('error');
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#3A0D0B] via-[#651A16] to-[#8B2520] py-24 px-6 text-center">
          <div className="max-w-[700px] mx-auto">
            <span className="text-[#E5C96A] font-[family-name:var(--font-plus-jakarta)] font-bold text-sm uppercase tracking-[.15em]">Reach Out</span>
            <h1 className="text-[clamp(28px,4vw,44px)] font-[family-name:var(--font-plus-jakarta)] font-extrabold text-white mt-2 mb-4">
              Contact Us
            </h1>
            <p className="text-white text-[19px]">Whether you want to donate, partner, or simply know more — we&apos;re here.</p>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
            {/* Contact info */}
            <div>
              <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[28px] text-[#651A16] mb-8">Get in Touch</h2>
              <div className="space-y-6">
                {[
                  { icon: '📍', title: 'Address', items: [{ content: 'Sector 57 Near Government Middle School , TIGRA, Gurgaon — 122022, Haryana', href: undefined }] },
                  { icon: '📞', title: 'Phone / WhatsApp', items: [{ content: '+91 88515-02840', href: 'tel:+918851502840' }, { content: '+91 88264-98125', href: 'tel:+918826498125' }] },
                  { icon: '✉️', title: 'Email', items: [{ content: 'support@ramakirtifoundation.co.in', href: 'mailto:support@ramakirtifoundation.co.in' }] },
                  { icon: '🕐', title: 'Office Hours', items: [{ content: 'Monday to Saturday, 9 AM – 6 PM IST', href: undefined }] },
                ].map(({ icon, title, items }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-[rgba(101,26,22,.1)] flex items-center justify-center text-[22px] flex-shrink-0">
                      {icon}
                    </div>
                    <div>
                      <div className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[15px] text-gray-800 mb-0.5">{title}</div>
                      <div className="flex flex-col">
                        {items.map((item, i) => (
                          item.href ? (
                            <a key={i} href={item.href} className="text-[#651A16] font-bold hover:underline no-underline text-base email-text">{item.content}</a>
                          ) : (
                            <p key={i} className="text-[#651A16] font-bold text-base email-text">{item.content}</p>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-10 p-6 bg-[#F0FCF4] border border-[rgba(37,211,102,.2)] rounded-2xl">
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[18px] text-gray-800 mb-2">💬 Instant Support</h3>
                <p className="text-gray-600 text-sm mb-4">For quick queries, WhatsApp us directly. We typically reply within 2 hours.</p>
                <a
                  href="https://wa.me/918851502840?text=Hi%20Ramakirti%20Foundation%2C%20I%20would%20like%20to%20know%20more"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-support-btn no-underline"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
                  WhatsApp Now →
                </a>
              </div>

              {/* Corporate CSR */}
              <div className="mt-6 p-6 bg-[#F9FAFB] border border-gray-200 rounded-2xl shadow-sm">
                <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[18px] text-[#651A16] mb-2">🏢 Corporate CSR / Partnerships</h3>
                <p className="text-gray-600 text-sm">
                  Looking to fulfill your CSR mandate or partner with a transparent NGO? We offer employee volunteering, brand placement, and impact reporting. Email us at{' '}
                  <a href="mailto:info@ramakirtifoundation.co.in" className="text-[#651A16] font-bold hover:underline no-underline email-text">
                    info@ramakirtifoundation.co.in
                  </a>
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {status === 'success' ? (
                <div className="bg-white rounded-3xl p-10 shadow-[0_4px_32px_rgba(101,26,22,.1)] border border-[rgba(101,26,22,.08)] text-center">
                  <div className="text-[64px] mb-4">✅</div>
                  <h3 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[24px] text-[#651A16] mb-3">Message Sent!</h3>
                  <p className="text-gray-500">Thank you, {form.name.split(' ')[0]}. We&apos;ll get back to you at <strong>{form.email}</strong> within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-wrapper bg-white rounded-3xl p-5 md:p-10 shadow-[0_4px_32px_rgba(101,26,22,.1)] border border-[rgba(101,26,22,.08)]">
                  <h2 className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[22px] text-[#651A16] mb-6">Send a Message</h2>
                  <div className="space-y-4 form-group">
                    <input type="text" placeholder="Your Name *" value={form.name} onChange={(e) => update('name', e.target.value)} required />
                    <input type="email" placeholder="Email Address *" value={form.email} onChange={(e) => update('email', e.target.value)} required />
                    <input type="tel" placeholder="Phone (optional)" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                    <select value={form.subject} onChange={(e) => update('subject', e.target.value)} required>
                      <option value="">Subject</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Donation">Donation / Payment Help</option>
                      <option value="Volunteer">Volunteering</option>
                      <option value="Corporate CSR">Corporate CSR</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Media">Media / Press</option>
                    </select>
                    <textarea placeholder="Your Message *" value={form.message} onChange={(e) => update('message', e.target.value)} rows={5} required />
                  </div>
                  {errorMsg && <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700 mt-4 mb-2">{errorMsg}</div>}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="mt-5 btn-global-primary"
                  >
                    {status === 'loading' ? (
                      <><span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin align-middle mr-2" /> Sending…</>
                    ) : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
