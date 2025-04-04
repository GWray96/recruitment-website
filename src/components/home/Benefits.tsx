'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Target, Zap, ShieldCheck, HeartHandshake, Briefcase, Compass, MessageSquare, GraduationCap, Rocket } from 'lucide-react';

interface BenefitItem {
  icon: React.ReactNode;
  text: string;
}

const employerBenefits: BenefitItem[] = [
  { icon: <Users className="w-6 h-6" />, text: 'Access to Top Tech Talent – We connect you with highly skilled professionals who align with your business needs and culture.' },
  { icon: <Target className="w-6 h-6" />, text: 'Tailored Recruitment Solutions – No cookie-cutter approach. We customize our search to find the right candidates for your team.' },
  { icon: <Zap className="w-6 h-6" />, text: 'Efficient Hiring Process – We move fast, reducing time-to-hire while ensuring you secure the best talent before competitors do.' },
  { icon: <ShieldCheck className="w-6 h-6" />, text: 'Quality Over Quantity – Every candidate is pre-vetted to ensure they meet your requirements, saving you time and effort.' },
  { icon: <HeartHandshake className="w-6 h-6" />, text: 'Ongoing Support – We stay connected even after the hire to ensure long-term success.' },
];

const candidateBenefits: BenefitItem[] = [
  { icon: <Briefcase className="w-6 h-6" />, text: 'Exclusive Job Opportunities – Gain access to roles that aren\'t advertised anywhere else.' },
  { icon: <Compass className="w-6 h-6" />, text: 'Personalized Career Guidance – We take the time to understand your skills, goals, and preferences to match you with the right opportunities.' },
  { icon: <MessageSquare className="w-6 h-6" />, text: 'Seamless Communication – We keep you informed at every stage, so you\'re never left wondering what\'s next.' },
  { icon: <GraduationCap className="w-6 h-6" />, text: 'Expert Interview Prep – From CV advice to interview coaching, we help you stand out from the competition.' },
  { icon: <Rocket className="w-6 h-6" />, text: 'Support Beyond Placement – Our commitment doesn\'t end once you accept an offer. We\'re here for your career growth.' },
];

export default function Benefits() {
  const [showEmployer, setShowEmployer] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowEmployer((prev) => !prev);
    }, 7000); // Toggle every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-4">
            Our Benefits
          </span>
          <h2 className="text-4xl font-bold text-center mb-8 text-slate-900">
            The NexusTech Advantage: What You Gain
          </h2>
          
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-slate-600">
            When you partner with <strong className="text-blue-600">NexusTech Recruitment</strong>, you get more than just a job listing or a pile of resumes. 
            You gain a <strong className="text-blue-600">strategic recruitment partner</strong> dedicated to delivering real results.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-md w-1/2 max-w-md">
            <div className="flex">
              <button
                className={`flex-1 px-6 py-2 rounded-full transition-all ${
                  showEmployer
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
                onClick={() => setShowEmployer(true)}
              >
                For Employers
              </button>
              <button
                className={`flex-1 px-6 py-2 rounded-full transition-all ${
                  !showEmployer
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : 'text-slate-600 hover:text-blue-600'
                }`}
                onClick={() => setShowEmployer(false)}
              >
                For Candidates
              </button>
            </div>
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={showEmployer ? 'employer' : 'candidate'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
              style={{
                willChange: 'transform, opacity',
                transform: 'translateZ(0)'
              }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(showEmployer ? employerBenefits : candidateBenefits).map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-purple-100/50 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      willChange: 'transform',
                      transform: 'translateZ(0)'
                    }}
                  >
                    <div className="w-12 h-12 mb-4 flex items-center justify-center text-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg">
                      {benefit.icon}
                    </div>
                    <p className="text-slate-700 leading-relaxed">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="text-center mt-16">
          <a
            href="/virtual-coffee"
            className="group px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-200 inline-flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-110"
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          >
            <span>Let&apos;s Get Started</span>
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 