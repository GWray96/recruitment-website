'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, XCircle, ArrowRight, Building, User, Briefcase, Clock, Target, Award } from 'lucide-react';

const ValueProposition = () => {
  const [activeCard, setActiveCard] = useState<'candidates' | 'employers' | 'expertise' | 'time' | 'matching' | null>(null);
  const [counters, setCounters] = useState({
    candidates: 0,
    employers: 0,
    placements: 0,
    satisfaction: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activePainPoint, setActivePainPoint] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const candidatePainPoints = [
    "Submitting applications but rarely hearing back?",
    "Feeling lost in your job search with no clear direction?",
    "Unsure if you're getting the best opportunities available?"
  ];

  const employerPainPoints = [
    "Wasting time sifting through unqualified applicants?",
    "Losing top candidates to competitors due to slow hiring processes?",
    "Struggling to find candidates who fit your company culture?"
  ];

  useEffect(() => {
    if (typeof window === 'undefined' || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate counters
          const targetValues = {
            candidates: 500,
            employers: 120,
            placements: 250,
            satisfaction: 98
          };
          
          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepDuration = duration / steps;
          
          let currentStep = 0;
          
          const interval = setInterval(() => {
            currentStep++;
            
            setCounters({
              candidates: Math.min(Math.floor((targetValues.candidates / steps) * currentStep), targetValues.candidates),
              employers: Math.min(Math.floor((targetValues.employers / steps) * currentStep), targetValues.employers),
              placements: Math.min(Math.floor((targetValues.placements / steps) * currentStep), targetValues.placements),
              satisfaction: Math.min(Math.floor((targetValues.satisfaction / steps) * currentStep), targetValues.satisfaction)
            });
            
            if (currentStep >= steps) {
              clearInterval(interval);
            }
          }, stepDuration);
          
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="w-full py-16 relative min-h-[800px] overflow-hidden bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
            <div className="text-3xl font-bold text-purple-600 mb-2">{counters.candidates}+</div>
            <div className="text-slate-600">Tech Professionals</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
            <div className="text-3xl font-bold text-blue-600 mb-2">{counters.employers}</div>
            <div className="text-slate-600">Client Companies</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
            <div className="text-3xl font-bold text-indigo-600 mb-2">{counters.placements}</div>
            <div className="text-slate-600">Successful Placements</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
            <div className="text-3xl font-bold text-pink-600 mb-2">{counters.satisfaction}%</div>
            <div className="text-slate-600">Client Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3 transform transition-all duration-300 hover:scale-105">
            Who We Help
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Is this you?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Candidates Column */}
          <div 
            className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ease-in-out transform ${
              activeCard === 'candidates' ? 'scale-[1.02] shadow-2xl shadow-purple-400/30' : 'hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-400/30'
            } bg-white`}
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
            onMouseEnter={() => setActiveCard('candidates')}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Content */}
            <div className="relative p-8">
              <div className={`w-12 h-12 mb-6 flex items-center justify-center text-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transform transition-all duration-300 ${
                activeCard === 'candidates' ? 'scale-110 rotate-3' : ''
              }`}>
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">For Candidates</h2>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Struggling to Find the Right Job?</h3>
              <p className="text-slate-600 mb-6">
                Navigating the job market can be overwhelming. If you&apos;re not landing interviews or finding roles that truly fit your skills, your career growth could be at a standstill.
              </p>
              
              <h4 className="text-xl font-semibold mb-4 text-slate-800">Do any of these sound familiar?</h4>
              <ul className="space-y-3 mb-6">
                {candidatePainPoints.map((point, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start space-x-2 transition-all duration-300 ${
                      activePainPoint === index ? 'transform translate-x-2' : ''
                    }`}
                    onMouseEnter={() => setActivePainPoint(index)}
                    onMouseLeave={() => setActivePainPoint(null)}
                  >
                    <span className={`flex-shrink-0 transition-all duration-300 ${
                      activePainPoint === index ? 'text-green-500 scale-110' : 'text-red-500'
                    }`}>
                      {activePainPoint === index ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    </span>
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-slate-600 mb-8">
                At <span className="font-bold text-purple-600">NexusTech Recruitment</span>, we connect top tech talent with companies that value their skills. Let us take the stress out of your job search and guide you toward the right opportunity.
              </p>

              <div className="flex justify-center">
                <a 
                  href="/candidates" 
                  className="group relative inline-flex w-3/4 justify-center items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                  }}
                >
                  <span className="block transition-opacity duration-300 group-hover:opacity-0">Help Me Find An Opportunity</span>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Let&apos;s Get Started <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Employers Column */}
          <div 
            className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ease-in-out transform ${
              activeCard === 'employers' ? 'scale-[1.02] shadow-2xl shadow-blue-400/30' : 'hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-400/30'
            } bg-white`}
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
            onMouseEnter={() => setActiveCard('employers')}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Content */}
            <div className="relative p-8">
              <div className={`w-12 h-12 mb-6 flex items-center justify-center text-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transform transition-all duration-300 ${
                activeCard === 'employers' ? 'scale-110 rotate-3' : ''
              }`}>
                <Building className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">For Employers</h2>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Struggling to Find Top Tech Talent?</h3>
              <p className="text-slate-600 mb-6">
                Hiring the right professionals is critical to your business&apos;s success. If your hiring process isn&apos;t delivering skilled candidates who fit your culture, your team&apos;s potential—and your business—may be at risk.
              </p>
              
              <h4 className="text-xl font-semibold mb-4 text-slate-800">Do any of these sound familiar?</h4>
              <ul className="space-y-3 mb-6">
                {employerPainPoints.map((point, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start space-x-2 transition-all duration-300 ${
                      activePainPoint === index + 3 ? 'transform translate-x-2' : ''
                    }`}
                    onMouseEnter={() => setActivePainPoint(index + 3)}
                    onMouseLeave={() => setActivePainPoint(null)}
                  >
                    <span className={`flex-shrink-0 transition-all duration-300 ${
                      activePainPoint === index + 3 ? 'text-green-500 scale-110' : 'text-red-500'
                    }`}>
                      {activePainPoint === index + 3 ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                    </span>
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-slate-600 mb-8">
                At <span className="font-bold text-blue-600">NexusTech Recruitment</span>, we understand the challenges of building a strong tech team. Our specialized approach helps you find candidates who not only have the right skills but also align with your company&apos;s values and culture.
              </p>

              <div className="flex justify-center">
                <a 
                  href="/employers" 
                  className="group relative inline-flex w-3/4 justify-center items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                  }}
                >
                  <span className="block transition-opacity duration-300 group-hover:opacity-0">Help Me Find Top Talent</span>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Let&apos;s Get Started <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3 transform transition-all duration-300 hover:scale-105">
              Our Approach
            </span>
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Why Choose NexusTech?</h3>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
              We take a personalized approach to recruitment, focusing on building lasting relationships and understanding your unique needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="group bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 relative overflow-hidden"
              onMouseEnter={() => setActiveCard('expertise')}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100/0 to-blue-100/0 group-hover:from-purple-100/30 group-hover:to-blue-100/30 transition-all duration-500"></div>
              
              {/* Animated icon */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center text-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10">
                <Briefcase className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h4 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">Specialized Expertise</h4>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  Our team has deep knowledge of the tech industry and understands the specific skills and qualifications needed for each role.
                </p>
                
                {/* Hidden content that appears on hover */}
                <div className="mt-4 pt-4 border-t border-purple-100/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                      Industry-specific knowledge
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                      Technical skill assessment
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                      Market trend insights
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div 
              className="group bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 relative overflow-hidden"
              onMouseEnter={() => setActiveCard('time')}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/0 to-indigo-100/0 group-hover:from-blue-100/30 group-hover:to-indigo-100/30 transition-all duration-500"></div>
              
              {/* Animated icon */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10">
                <Clock className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h4 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-300">Time-Saving Process</h4>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  We handle the time-consuming aspects of recruitment, from screening candidates to scheduling interviews, so you can focus on your business.
                </p>
                
                {/* Hidden content that appears on hover */}
                <div className="mt-4 pt-4 border-t border-blue-100/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      Streamlined candidate screening
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      Automated interview scheduling
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                      Quick feedback loops
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div 
              className="group bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 relative overflow-hidden"
              onMouseEnter={() => setActiveCard('matching')}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/0 to-pink-100/0 group-hover:from-indigo-100/30 group-hover:to-pink-100/30 transition-all duration-500"></div>
              
              {/* Animated icon */}
              <div className="w-12 h-12 mb-4 flex items-center justify-center text-2xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10">
                <Target className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h4 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors duration-300">Precision Matching</h4>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  We don&apos;t just find candidates with the right skills; we find candidates who align with your company culture and values.
                </p>
                
                {/* Hidden content that appears on hover */}
                <div className="mt-4 pt-4 border-t border-indigo-100/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                      Culture fit assessment
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                      Skill-to-role alignment
                    </li>
                    <li className="flex items-center text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></span>
                      Long-term potential evaluation
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition; 