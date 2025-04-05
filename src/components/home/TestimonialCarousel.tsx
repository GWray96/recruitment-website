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
    quote: "Alex contacted me and described a position that seemed ideally suited to my qualifications. He recognized how my skills and background aligned perfectly with the position's requirements. He provided consistent support and encouragement throughout the hiring process. Therefore, I highly recommend Alex.",
    author: "Tech Professional",
    role: "Software Engineer"
  },
  {
    quote: "Alex's deep understanding of the Test Automation industry, transparency, and proactive support made all the difference. Thanks to his efforts, I successfully secured my new role. I highly recommend him to any tech professional looking for their next opportunity.",
    author: "Test Automation Specialist",
    role: "QA Engineer"
  },
  {
    quote: "I was struggling for some time with my job search, but with Alex's help I was able to polish up my CV, get some great interviews and end up in a job that feels like a perfect fit. I fully recommend reaching out if you're looking for tech roles in the area.",
    author: "Tech Professional",
    role: "Developer"
  },
  {
    quote: "Alex goes above and beyond for his clients. From the first interview I had with him, I could tell that he's very knowledgeable working with software developers and that he has a vast network of connections with companies in the Suffolk area. I'd recommend anyone who is looking for a job in tech to reach out to him.",
    author: "Software Developer",
    role: "Full Stack Engineer"
  },
  {
    quote: "I worked with Alex a number of years ago before he set up his own business. When a recent opportunity came up, having not spoken to him for a significant period of time, he sought me out as a suitable candidate. The role was a good match for both myself and the client and he had great knowledge of the company, culture, market and made the process very straightforward. After successfully securing the contract, in my time working with Alex he always provides excellent service, keeping in touch regularly, is very responsive and gives all the information required in a timely manner. I would highly recommend Alex as a excellent recruitment partner.",
    author: "Long-term Client",
    role: "Senior Developer"
  },
  {
    quote: "I would highly recommend Alex to help in your job search. Alex recently helped me in securing a new role. It was an extremely smooth process during which the communication was excellent and Alex kept me fully up to date with the progress of my application.",
    author: "Recent Placement",
    role: "Tech Professional"
  }
];

// Memoize the testimonial card component
const TestimonialCard = memo(({ testimonial, onClick }: { testimonial: Testimonial; onClick: () => void }) => {
  // Check if we're on a mobile device
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div 
      className={`bg-white rounded-2xl shadow-xl p-4 md:p-6 relative flex flex-col ${
        isMobile ? 'h-[300px]' : 'h-[420px]'
      }`}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    >
      {/* Quotation mark in top right */}
      <div className="absolute top-0 right-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <Quote className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </div>
      
      {/* Profile Image Placeholder */}
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-200 mb-2 md:mb-3 flex items-center justify-center">
        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      </div>
      
      {/* Rating */}
      <div className="flex justify-center mb-2">
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="flex-grow flex items-center justify-center px-2 md:px-4">
        <p className={`text-gray-700 italic text-center line-clamp-5 md:line-clamp-6 ${
          isMobile ? 'text-sm md:text-base' : 'text-base md:text-lg'
        }`}>
          &quot;{testimonial.quote}&quot;
        </p>
      </div>

      {/* Author */}
      <div className="text-center mt-2 md:mt-4">
        <p className="text-gray-900 font-semibold text-base md:text-lg">{testimonial.author}</p>
        {testimonial.role && (
          <p className="text-gray-600 text-sm md:text-base">{testimonial.role}</p>
        )}
      </div>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    }
    
    if (isRightSwipe) {
      handlePrev();
    }
  };

  const getPositionStyles = useCallback((index: number) => {
    const total = testimonials.length;
    const isActive = index === currentIndex;
    
    // Check if we're on a mobile device
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    // Calculate relative position from current index (-2, -1, 0, 1, 2)
    let relativePosition = ((index - currentIndex + total) % total);
    if (relativePosition > total / 2) {
      relativePosition = relativePosition - total;
    }
    
    // Define spacing and calculate position - adjust for mobile
    const spacing = isMobile ? 280 : 320;
    const x = relativePosition * spacing;
    const y = Math.abs(relativePosition) * (isMobile ? 20 : 30);
    
    // Calculate scale and opacity based on distance from center
    const scale = isActive ? 1 : (isMobile ? 0.6 : 0.75);
    const opacity = isActive ? 1 : (isMobile ? 0.2 : 0.3);
    const zIndex = isActive ? 10 : 5 - Math.abs(relativePosition);

    return {
      zIndex,
      transform: `translate3d(${x + (isMobile ? 0 : 35)}px, ${y}px, 0) scale(${scale})`,
      opacity,
      willChange: 'transform, opacity',
    };
  }, [currentIndex]);

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-purple-100/50 via-blue-50/50 to-pink-50/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-4 md:mb-8">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
              Testimonials
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">What Our Clients Say</h2>
          </div>

          <div 
            className="relative h-[450px] md:h-[600px] pb-16"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className={`absolute ${isMobile ? 'left-1/2 transform -translate-x-1/2' : 'left-1/4'} top-8 w-full`}>
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

            {/* Mobile Navigation Buttons */}
            {isMobile && (
              <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all"
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all"
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                  }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
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