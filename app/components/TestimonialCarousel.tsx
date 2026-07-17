'use client';

export default function TestimonialCarousel({ testimonials }: { testimonials: any[] }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="overflow-x-auto pb-8 snap-x snap-mandatory flex gap-6 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
      `}} />
      {testimonials.map(({ stars, quote, name, role, initials }, i) => (
        <div
          key={i}
          className="testimonial-card p-8 rounded-[24px] bg-gradient-to-br from-white to-[#fdf4f4] border border-[#6E1110]/10 relative min-w-[320px] sm:min-w-[400px] max-w-[450px] snap-center shrink-0"
        >
          <div className="text-[100px] font-serif text-[#6E1110] opacity-[0.08] absolute top-[-24px] left-4 leading-none pointer-events-none">
            &ldquo;
          </div>
          <div className="flex gap-1 mb-5 text-[20px]">{'⭐'.repeat(stars)}</div>
          <blockquote className="text-[16.5px] text-gray-800 leading-[1.8] italic mb-6 relative z-10">{quote}</blockquote>
          <div className="flex items-center gap-4 mt-auto">
            <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#6E1110] to-[#8B2520] flex items-center justify-center text-white font-[family-name:var(--font-plus-jakarta)] font-extrabold text-[18px] flex-shrink-0">
              {initials}
            </div>
            <div>
              <div className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[15px] text-[#6E1110] mb-0.5">{name}</div>
              <div className="text-[13px] text-gray-500 font-medium">
                {role} <span className="ml-1 inline-flex items-center bg-[#F9FAFB] text-[#6E1110] px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm">✓ Verified</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
