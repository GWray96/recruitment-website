'use client';

import React from 'react';
import { Star } from 'lucide-react';

const stats = [
  {
    value: '500+',
    label: 'Successful Placements',
  },
  {
    value: '98%',
    label: 'Client Satisfaction',
  },
  {
    value: '2 weeks',
    label: 'Average Time to Hire',
  },
  {
    value: '200+',
    label: 'Technical Roles Filled',
  },
];

const testimonials = [
  {
    text: 'NexusTech helped us find the perfect candidate for our senior developer role. Their understanding of our technical requirements was exceptional.',
    author: 'Sarah Chen',
    position: 'CTO at TechCorp',
    initial: 'S',
    rating: 5,
  },
  {
    text: 'The team\'s dedication to finding the right fit for both candidates and companies is impressive. They really understand the tech industry.',
    author: 'Michael Rodriguez',
    position: 'Engineering Manager at Innovate Inc',
    initial: 'M',
    rating: 5,
  },
  {
    text: 'I found my dream job through NexusTech. Their personalized approach and industry knowledge made all the difference.',
    author: 'David Thompson',
    position: 'Senior Software Engineer',
    initial: 'D',
    rating: 5,
  },
];

const trustedBy = [
  { name: 'TECH', className: 'text-slate-300' },
  { name: 'INNOVATE', className: 'text-slate-300' },
  { name: 'DIGITAL', className: 'text-slate-300' },
  { name: 'FUTURE', className: 'text-slate-300' },
  { name: 'DATA', className: 'text-slate-300' },
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
            Success Stories
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by Tech Professionals</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join hundreds of successful placements and satisfied clients who have found their perfect match through NexusTech.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-slate-600 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-purple-400/20 transition-all duration-300 p-8 transform hover:scale-[1.02]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white text-lg font-semibold">
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-slate-500">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted By Logos */}
        <div className="text-center">
          <div className="uppercase tracking-wider text-sm font-semibold text-slate-400 mb-8">Trusted By</div>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            {trustedBy.map((company) => (
              <div
                key={company.name}
                className="text-2xl font-bold text-slate-300 hover:text-slate-400 transition-colors duration-300"
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 