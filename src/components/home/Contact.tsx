"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Calendar, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-4 transform transition-all duration-300 hover:scale-105">
            Get in Touch
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Schedule a call with our team or reach out to us directly. We&apos;re here to help with your tech recruitment needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details Column */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20 group">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-purple-700 transition-colors duration-300">Contact Information</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 group/item">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center transform transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 group-hover/item:text-purple-700 transition-colors duration-300">Office Location</h4>
                    <p className="text-slate-600 mt-1">
                      123 Tech Street<br />
                      Cambridge, CB1 1AB<br />
                      United Kingdom
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 group/item">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center transform transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 group-hover/item:text-purple-700 transition-colors duration-300">Phone</h4>
                    <p className="text-slate-600 mt-1">+44 (0) 1223 456 789</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 group/item">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center transform transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 group-hover/item:text-purple-700 transition-colors duration-300">Email</h4>
                    <p className="text-slate-600 mt-1">hello@nexustech.com</p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4 group/item">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center transform transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-3">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-900 group-hover/item:text-purple-700 transition-colors duration-300">Working Hours</h4>
                    <p className="text-slate-600 mt-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20 group">
              <div className="h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-105">
                <div className="text-center">
                  <span className="text-4xl mb-4 block transform transition-all duration-300 group-hover:scale-110">🗺️</span>
                  <p className="text-slate-600">Map will be displayed here</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Booking Column */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20 group">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 group-hover:text-purple-700 transition-colors duration-300">Schedule a Call</h3>
            
            <div className="space-y-6">
              <p className="text-slate-600">
                Book a time to speak with our team about your recruitment needs. We&apos;ll discuss your requirements and how we can help.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${
                    isSubmitting 
                      ? 'bg-slate-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : showSuccess ? (
                    <span className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      Send Message
                      <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  )}
                </button>
              </form>

              {/* Alternative Contact */}
              <div className="text-center">
                <p className="text-slate-600 mb-4">
                  Prefer to reach out directly?
                </p>
                <Link
                  href="mailto:hello@nexustech.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300 transform hover:scale-105 group"
                >
                  Send us an Email
                  <Mail className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 