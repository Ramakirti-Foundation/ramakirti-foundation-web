'use client';

import { useState } from 'react';

export default function TestimonialCarousel({ testimonials }: { testimonials: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const { quote, name, initials } = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-12 py-8">
      <div className="flex items-center justify-center">
        {testimonials.length > 1 && (
          <button 
            onClick={prev} 
            className="absolute -left-2 sm:left-0 md:left-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#6E1110] hover:bg-[#6E1110] hover:text-white transition-colors border border-gray-100"
            aria-label="Previous testimonial"
          >
            &#8592;
          </button>
        )}

        <div className="testimonial-card rounded-[24px] bg-gradient-to-br from-white to-[#fdf4f4] border border-[#6E1110]/10 relative w-full shrink-0 shadow-sm px-10 sm:px-16 md:px-24 py-10 transition-opacity duration-300 mx-auto">
          <div className="text-[80px] sm:text-[100px] font-serif text-[#6E1110] opacity-[0.08] absolute top-[-16px] sm:top-[-24px] left-4 sm:left-8 leading-none pointer-events-none">
            &ldquo;
          </div>
          <blockquote className="text-[16px] sm:text-[18px] text-gray-800 leading-[1.8] italic mb-8 relative z-10 text-center min-h-[140px] sm:min-h-[120px] flex items-center justify-center">
            "{quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-4 mt-auto">
            <div className="w-[50px] h-[50px] sm:w-[56px] sm:h-[56px] rounded-full bg-gradient-to-br from-[#6E1110] to-[#8B2520] flex items-center justify-center text-white font-[family-name:var(--font-plus-jakarta)] font-extrabold text-[20px] sm:text-[22px] flex-shrink-0">
              {initials}
            </div>
            <div className="text-left">
              <div className="font-[family-name:var(--font-plus-jakarta)] font-bold text-[16px] sm:text-[17px] text-[#6E1110] mb-0.5">{name}</div>
              <div className="text-[12px] sm:text-[13px] text-gray-500 font-medium">
                <span className="inline-flex items-center bg-[#F9FAFB] text-[#6E1110] px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm">✓ Verified</span>
              </div>
            </div>
          </div>
        </div>

        {testimonials.length > 1 && (
          <button 
            onClick={next} 
            className="absolute -right-2 sm:right-0 md:right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md flex items-center justify-center text-[#6E1110] hover:bg-[#6E1110] hover:text-white transition-colors border border-gray-100"
            aria-label="Next testimonial"
          >
            &#8594;
          </button>
        )}
      </div>
      
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentIndex ? 'bg-[#6E1110]' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
