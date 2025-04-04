'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Simon contacted me and described a position that seemed ideally suited to my qualifications. He recognized how my skills and background aligned perfectly with the position's requirements. He provided consistent support and encouragement throughout the hiring process. Therefore, I highly recommend Simon.",
    author: "Tech Professional",
    role: "Software Engineer"
  },
  {
    quote: "Simon's deep understanding of the Test Automation industry, transparency, and proactive support made all the difference. Thanks to his efforts, I successfully secured my new role. I highly recommend him to any tech professional looking for their next opportunity.",
    author: "Test Automation Specialist",
    role: "QA Engineer"
  },
  {
    quote: "I was struggling for some time with my job search, but with Simon's help I was able to polish up my CV, get some great interviews and end up in a job that feels like a perfect fit. I fully recommend reaching out if you're looking for tech roles in the area.",
    author: "Tech Professional",
    role: "Developer"
  },
  {
    quote: "Simon goes above and beyond for his clients. From the first interview I had with him, I could tell that he's very knowledgeable working with software developers and that he has a vast network of connections with companies in the Suffolk area. I'd recommend anyone who is looking for a job in tech to reach out to him.",
    author: "Software Developer",
    role: "Full Stack Engineer"
  },
  {
    quote: "I worked with Simon a number of years ago before he set up his own business. When a recent opportunity came up, having not spoken to him for a significant period of time, he sought me out as a suitable candidate. The role was a good match for both myself and the client and he had great knowledge of the company, culture, market and made the process very straightforward. After successfully securing the contract, in my time working with Simon he always provides excellent service, keeping in touch regularly, is very responsive and gives all the information required in a timely manner. I would highly recommend Simon as a excellent recruitment partner.",
    author: "Long-term Client",
    role: "Senior Developer"
  },
  {
    quote: "I would highly recommend Simon to help in your job search. Simon recently helped me in securing a new role. It was an extremely smooth process during which the communication was excellent and Simon kept me fully up to date with the progress of my application.",
    author: "Recent Placement",
    role: "Tech Professional"
  }
];

// Memoize the testimonial card component
const TestimonialCard = memo(({ testimonial, onClick }: { testimonial: Testimonial; onClick: () => void }) => (
  <div 
    className="bg-white rounded-2xl shadow-xl p-6 relative h-[420px] flex flex-col"
    style={{
      willChange: 'transform',
      transform: 'translateZ(0)'
    }}
  >
    {/* Quotation mark in top right */}
    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
      <Quote className="w-6 h-6 text-white" />
    </div>
    
    {/* Profile Image Placeholder */}
    <div className="w-12 h-12 rounded-full bg-gray-200 mb-3 flex items-center justify-center">
      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    </div>
    
    {/* Rating */}
    <div className="flex justify-center mb-2">
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>

    {/* Quote */}
    <div className="flex-grow flex items-center justify-center px-4">
      <p className="text-base text-gray-700 italic text-center line-clamp-6">
        &quot;{testimonial.quote}&quot;
      </p>
    </div>

    {/* Author */}
    <div className="text-center mt-4">
      <p className="text-gray-900 font-semibold">{testimonial.author}</p>
      {testimonial.role && (
        <p className="text-gray-600 text-sm">{testimonial.role}</p>
      )}
    </div>
  </div>
));

TestimonialCard.displayName = 'TestimonialCard';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getPositionStyles = useCallback((index: number) => {
    const total = testimonials.length;
    const isActive = index === currentIndex;
    
    // Calculate relative position from current index (-2, -1, 0, 1, 2)
    let relativePosition = ((index - currentIndex + total) % total);
    if (relativePosition > total / 2) {
      relativePosition = relativePosition - total;
    }
    
    // Define spacing and calculate position
    const spacing = 320;
    const x = relativePosition * spacing;
    const y = Math.abs(relativePosition) * 30;
    
    // Calculate scale and opacity based on distance from center
    const scale = isActive ? 1 : 0.75;
    const opacity = isActive ? 1 : 0.3;
    const zIndex = isActive ? 10 : 5 - Math.abs(relativePosition);

    return {
      zIndex,
      transform: `translate3d(${x + 35}px, ${y}px, 0) scale(${scale})`,
      opacity,
      willChange: 'transform, opacity',
    };
  }, [currentIndex]);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-100/50 via-blue-50/50 to-pink-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-4">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-slate-900">What Our Clients Say</h2>
          </div>

          <div className="relative h-[600px] pb-16">
            <div className="absolute left-1/4 top-8 w-full">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  animate={getPositionStyles(index)}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  className="absolute left-0 top-0 w-full max-w-xl cursor-pointer"
                  style={{
                    backfaceVisibility: 'hidden',
                    perspective: 1000,
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity',
                    transform: 'translateZ(0)'
                  }}
                >
                  <TestimonialCard testimonial={testimonial} onClick={() => setCurrentIndex(index)} />
                </motion.div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 