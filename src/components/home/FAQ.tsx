'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What makes NexusTech Recruitment different from other agencies?",
      answer: "At NexusTech Recruitment, we combine cutting-edge technology with deep industry expertise. Our team of specialized tech recruiters, many with hands-on development experience, ensures precise matching of skills and culture. We maintain a 95% successful placement rate and help candidates achieve an average 25% salary increase."
    },
    {
      question: "How does NexusTech's recruitment process work?",
      answer: "Our streamlined process typically takes 2-4 weeks, utilizing advanced AI matching technology alongside personal consultation. We begin with a thorough understanding of your needs, conduct precise matching, facilitate interviews, and provide comprehensive support through to successful placement and beyond."
    },
    {
      question: "What technical roles does NexusTech specialize in?",
      answer: "We specialize in placing professionals across the entire tech spectrum, including Software Engineering, Cloud Architecture, DevOps, AI/ML Engineering, Data Science, Cybersecurity, and Technical Leadership roles. We work with both cutting-edge startups and established enterprise organizations."
    },
    {
      question: "Does NexusTech offer flexible working arrangements?",
      answer: "Yes, we understand the modern workplace's evolving nature. We offer opportunities across remote, hybrid, and office-based positions, always ensuring that working arrangements align with both candidate preferences and company culture."
    },
    {
      question: "What support does NexusTech provide during and after placement?",
      answer: "We provide end-to-end support including technical CV optimization, interview preparation, coding assessment guidance, and salary negotiation. Post-placement, we maintain regular check-ins during the onboarding period and offer ongoing career development support."
    }
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn more about how NexusTech Recruitment can accelerate your tech career or help build your dream team
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button 
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 text-slate-500 transform transition-transform duration-200 ${
                      expandedFaqs.includes(index) ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-200 ${
                  expandedFaqs.includes(index) ? 'max-h-96 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            View All FAQs
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 