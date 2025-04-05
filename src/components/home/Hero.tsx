'use client';

import { useState } from 'react';
import Link from 'next/link';
import ReviewWidget from "../ReviewWidget"

export default function Hero() {
  const [activeLogo, setActiveLogo] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      {/* Hero content - Centered */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pill-shaped banner */}
          <div className="inline-block mb-6 transform transition-all duration-300 hover:scale-105">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md">
              • IT Recruitment Specialists in East Anglia
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
            Connecting <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Elite Talent</span> with Top Tech Companies
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 mb-8 transform transition-all duration-300 hover:translate-y-1">
            With deep industry expertise and a personalized approach, we help companies build world-class technical teams while connecting skilled professionals with life-changing career opportunities.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/candidates" 
              className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md w-full sm:w-auto text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                I&apos;m Looking For A New Opportunity
                <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a 
              href="/employers" 
              className="group px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md border border-blue-200 w-full sm:w-auto text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-50"
            >
              <span className="flex items-center justify-center">
                I&apos;m Looking For Top Tier Talent
                <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>

          {/* Social Proof Widget */}
          <div className="mt-12 flex justify-center transform transition-all duration-500 hover:scale-105">
            <ReviewWidget />
          </div>

          {/* Trusted By Section */}
          <div className="mt-12">
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider">Trusted By</p>
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
              {/* Tech Corp Logo */}
              <div 
                className={`transform transition-all duration-300 ${activeLogo === 0 ? 'scale-110' : 'hover:scale-105'}`}
                onMouseEnter={() => setActiveLogo(0)}
                onMouseLeave={() => setActiveLogo(null)}
              >
                <svg className={`h-10 w-auto transition-colors duration-300 ${activeLogo === 0 ? 'text-purple-500' : 'text-slate-300'}`} viewBox="0 0 120 40" fill="currentColor">
                  <rect x="10" y="10" width="30" height="20" rx="2"/>
                  <text x="45" y="25" fontSize="14">TECH</text>
                </svg>
              </div>

              {/* Innovate Inc Logo */}
              <div 
                className={`transform transition-all duration-300 ${activeLogo === 1 ? 'scale-110' : 'hover:scale-105'}`}
                onMouseEnter={() => setActiveLogo(1)}
                onMouseLeave={() => setActiveLogo(null)}
              >
                <svg className={`h-10 w-auto transition-colors duration-300 ${activeLogo === 1 ? 'text-blue-500' : 'text-slate-300'}`} viewBox="0 0 120 40" fill="currentColor">
                  <circle cx="25" cy="20" r="12"/>
                  <text x="45" y="25" fontSize="14">INNOVATE</text>
                </svg>
              </div>

              {/* Digital Solutions Logo */}
              <div 
                className={`transform transition-all duration-300 ${activeLogo === 2 ? 'scale-110' : 'hover:scale-105'}`}
                onMouseEnter={() => setActiveLogo(2)}
                onMouseLeave={() => setActiveLogo(null)}
              >
                <svg className={`h-10 w-auto transition-colors duration-300 ${activeLogo === 2 ? 'text-pink-500' : 'text-slate-300'}`} viewBox="0 0 120 40" fill="currentColor">
                  <polygon points="20,10 30,30 10,30"/>
                  <text x="35" y="25" fontSize="14">DIGITAL</text>
                </svg>
              </div>

              {/* Future Systems Logo */}
              <div 
                className={`transform transition-all duration-300 ${activeLogo === 3 ? 'scale-110' : 'hover:scale-105'}`}
                onMouseEnter={() => setActiveLogo(3)}
                onMouseLeave={() => setActiveLogo(null)}
              >
                <svg className={`h-10 w-auto transition-colors duration-300 ${activeLogo === 3 ? 'text-indigo-500' : 'text-slate-300'}`} viewBox="0 0 120 40" fill="currentColor">
                  <path d="M10,20 Q25,5 40,20"/>
                  <text x="45" y="25" fontSize="14">FUTURE</text>
                </svg>
              </div>

              {/* Data Co Logo */}
              <div 
                className={`transform transition-all duration-300 ${activeLogo === 4 ? 'scale-110' : 'hover:scale-105'}`}
                onMouseEnter={() => setActiveLogo(4)}
                onMouseLeave={() => setActiveLogo(null)}
              >
                <svg className={`h-10 w-auto transition-colors duration-300 ${activeLogo === 4 ? 'text-teal-500' : 'text-slate-300'}`} viewBox="0 0 120 40" fill="currentColor">
                  <rect x="10" y="10" width="20" height="20" transform="rotate(45 20 20)"/>
                  <text x="35" y="25" fontSize="14">DATA</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}