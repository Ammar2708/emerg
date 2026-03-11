"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Rodriguez",
    location: "North Hills, London",
    image: "/img2.webp",
    text: `Burst pipe at 2 AM - HS was there quickly and handled everything professionally. Clean work area, explained everything clearly. Highly recommend!`,
  },
  {
    id: 2,
    name: "James Carter",
    location: "Downtown London",
    image: "/img2.webp",
    text: `Fast response and very professional team. They fixed our electrical issue in no time. Their NICEIC approval gave us great peace of mind.`,
  },
  {
    id: 3,
    name: "Samantha Lee",
    location: "West Valley",
    image: "/img2.webp",
    text: `Excellent emergency service. Friendly staff and transparent pricing. No hidden fees, even for a late-night call out.`,
  },
];

export default function Comments() {
  const [current, setCurrent] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Added : number to fix the implicitly 'any' type error
  const triggerNext = (index: number) => {
    if (isFading) return; // Prevent double-clicks during transition
    setIsFading(true);
    setTimeout(() => {
      setCurrent(index);
      setIsFading(false);
    }, 300); // Shorter duration for better UX
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const next = current === testimonials.length - 1 ? 0 : current + 1;
      triggerNext(next);
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const prevSlide = () => {
    const index = current === 0 ? testimonials.length - 1 : current - 1;
    triggerNext(index);
  };

  const nextSlide = () => {
    const index = current === testimonials.length - 1 ? 0 : current + 1;
    triggerNext(index);
  };

  return (
    <section className="bg-[#1B253A] py-20 md:py-28 text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-[#EFAC19]/10 text-[#EFAC19] px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest">
            <Star size={14} fill="currentColor" /> Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-black">What Our Customers Say</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real feedback from London residents who trust HS Construction and Electrical for their emergency needs.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Decorative Quote Background */}
          <Quote className="absolute -top-10 -left-10 w-32 h-32 text-white/5 rotate-12 hidden lg:block" />

          <div className="relative bg-white text-[#1A1A1A] rounded-[2.5rem] shadow-2xl p-8 md:p-16 transition-all duration-500">
            
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="text-[#EFAC19]" fill="#EFAC19" />
              ))}
            </div>

            {/* Testimonial Text */}
            <div className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <p className="text-xl md:text-2xl font-medium italic leading-relaxed text-center mb-10 text-gray-700">
                "{testimonials[current].text}"
              </p>

              {/* User Identity */}
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 relative mb-4 p-1 bg-[#EFAC19] rounded-full">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    fill
                    className="rounded-full object-cover border-4 border-white"
                  />
                </div>
                <h4 className="font-black text-xl">{testimonials[current].name}</h4>
                <p className="text-[#EFAC19] font-bold text-sm uppercase tracking-tighter">
                  {testimonials[current].location}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 md:-px-12 pointer-events-none">
              <button
                onClick={prevSlide}
                className="pointer-events-auto bg-white hover:bg-[#EFAC19] hover:text-white text-[#1B253A] p-4 rounded-full shadow-2xl transition-all duration-300 -translate-x-1/2 hidden lg:flex"
              >
                <ChevronLeft size={24} strokeWidth={3} />
              </button>
              <button
                onClick={nextSlide}
                className="pointer-events-auto bg-white hover:bg-[#EFAC19] hover:text-white text-[#1B253A] p-4 rounded-full shadow-2xl transition-all duration-300 translate-x-1/2 hidden lg:flex"
              >
                <ChevronRight size={24} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Modern Progress Dots */}
          <div className="flex justify-center mt-12 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => triggerNext(index)}
                className={`transition-all duration-500 rounded-full h-2 ${
                  current === index ? "w-10 bg-[#EFAC19]" : "w-2 bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}