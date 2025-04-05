'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Users, Code, Star, Briefcase, TrendingUp } from 'lucide-react';

interface SuccessStory {
  company: string;
  location: string;
  industry: string;
  achievement: string;
  metrics: string;
  icon: keyof typeof icons;
}

const icons = {
  Building2,
  Users,
  Code,
  Star,
  Briefcase,
  TrendingUp
};

const stories: SuccessStory[] = [
  {
    company: "TechVision Solutions",
    location: "Cambridge",
    industry: "FinTech",
    achievement: "Scaled engineering team from 5 to 50 developers",
    metrics: "10x growth in 12 months",
    icon: "TrendingUp"
  },
  {
    company: "DataSphere Analytics",
    location: "Norwich",
    industry: "Data Analytics",
    achievement: "Built entire data science department from scratch",
    metrics: "15 specialist roles filled",
    icon: "Code"
  },
  {
    company: "CloudNative Ltd",
    location: "Ipswich",
    industry: "Cloud Infrastructure",
    achievement: "Established DevOps team across multiple locations",
    metrics: "8 critical positions filled",
    icon: "Building2"
  },
  {
    company: "AI Innovations",
    location: "Cambridge",
    industry: "Artificial Intelligence",
    achievement: "Recruited specialized ML engineering team",
    metrics: "12 AI experts placed",
    icon: "Star"
  },
  {
    company: "SecureNet Systems",
    location: "Norwich",
    industry: "Cybersecurity",
    achievement: "Built security operations center team",
    metrics: "100% retention rate",
    icon: "Users"
  }
];

const StoryCard = memo(({ story, isActive }: { story: SuccessStory; isActive: boolean }) => {
  const Icon = icons[story.icon];
  
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 transition-all duration-500 ${
      isActive ? 'scale-105 shadow-xl' : 'scale-95 opacity-50'
    }`}>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-1">{story.company}</h3>
          <p className="text-blue-600 font-medium">{story.location}</p>
        </div>
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="bg-slate-50 rounded-lg p-4">
          <p className="text-sm font-medium text-slate-600">Industry</p>
          <p className="text-slate-900">{story.industry}</p>
        </div>
        
        <div className="bg-slate-50 rounded-lg p-4">
          <p className="text-sm font-medium text-slate-600">Achievement</p>
          <p className="text-slate-900">{story.achievement}</p>
        </div>
        
        <div className="bg-slate-50 rounded-lg p-4">
          <p className="text-sm font-medium text-slate-600">Key Metrics</p>
          <p className="text-slate-900">{story.metrics}</p>
        </div>
      </div>
    </div>
  );
});

StoryCard.displayName = 'StoryCard';

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const next = useCallback(() => {
    setDirection(1);
    setCurrentIndex((current) => (current + 1) % stories.length);
  }, []);

  const previous = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((current) => (current - 1 + stories.length) % stories.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible) {
        next();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [next, isVisible]);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-100/50 via-blue-50/50 to-pink-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
            Success Stories
          </span>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Client Success Stories</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how we&apos;ve helped companies across East Anglia build their dream teams
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: `${-currentIndex * 100}%`
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                onViewportEnter={() => setIsVisible(true)}
                onViewportLeave={() => setIsVisible(false)}
              >
                {stories.map((story, index) => (
                  <div
                    key={index}
                    className="min-w-full"
                  >
                    <StoryCard story={story} isActive={index === currentIndex} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={previous}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 