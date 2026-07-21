'use client';

export default function TestimonialCarousel({ testimonials }: { testimonials: any[] }) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div className="testimonials-wrapper">
      <div className="testimonials-track" aria-label="User Testimonials">
        {testimonials.map(({ quote, name, role, initials }, i) => (
          <div
            key={i}
            className="testimonial-card rounded-[24px] bg-gradient-to-br from-white to-[#fdf4f4] border border-[#6E1110]/10 relative w-[85vw] sm:w-[400px] shrink-0"
          >
            <div className="text-[100px] font-serif text-[#6E1110] opacity-[0.08] absolute top-[-24px] left-4 leading-none pointer-events-none">
              &ldquo;
            </div>
            <blockquote className="text-[16px] text-gray-800 leading-[1.8] italic mb-6 relative z-10">{quote}</blockquote>
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
        {/* Duplicate for infinite loop */}
        {testimonials.map(({ quote, name, role, initials }, i) => (
          <div
            key={i + "-dup"}
            aria-hidden="true"
            className="testimonial-card rounded-[24px] bg-gradient-to-br from-white to-[#fdf4f4] border border-[#6E1110]/10 relative w-[85vw] sm:w-[400px] shrink-0"
          >
            <div className="text-[100px] font-serif text-[#6E1110] opacity-[0.08] absolute top-[-24px] left-4 leading-none pointer-events-none">
              &ldquo;
            </div>
            <blockquote className="text-[16px] text-gray-800 leading-[1.8] italic mb-6 relative z-10">{quote}</blockquote>
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
    </div>
  );
}
