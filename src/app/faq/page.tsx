'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, ArrowRight, Mail, Phone, Star, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { faqCategories, faqData, FAQItem } from '@/data/faqData';

export default function FAQPage() {
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Add an effect to detect mobile devices
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Add visibility state management
  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const toggleFaq = (id: string) => {
    setExpandedFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id)
        : [...prev, id]
    );
  };

  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group FAQs by category for the accordion view
  const faqsByCategory = faqCategories.reduce((acc, category) => {
    acc[category.id] = faqData.filter(faq => faq.category === category.id);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-16" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-400/10 text-white mb-4 border border-blue-400/20">
              Got Questions?
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Find answers to common questions about our recruitment services, processes, and how we can help you.
            </p>
            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 text-white/90">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span>4.9/5 Client Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>250+ Placements</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>98% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Search and Categories */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === 'all'
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-600 hover:bg-slate-100'
                }`}
              >
                All Questions
              </button>
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items - List View */}
          {searchQuery !== '' && (
            <div className="max-w-4xl mx-auto space-y-4 mb-12">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Search Results</h2>
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <div 
                    key={faq.id}
                    className={`bg-white rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-400/20 group ${
                      expandedFaqs.includes(faq.id) ? 'ring-2 ring-purple-500' : ''
                    }`}
                  >
                    <button 
                      className="w-full px-6 py-4 text-left focus:outline-none"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                            <HelpCircle className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-slate-900 group-hover:text-purple-700 transition-colors duration-300">{faq.question}</h3>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-slate-500 transform transition-all duration-300 ${
                            expandedFaqs.includes(faq.id) ? 'rotate-180 text-purple-600' : ''
                          }`}
                        />
                      </div>
                    </button>
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ${
                        expandedFaqs.includes(faq.id) 
                          ? 'max-h-96 pb-4 opacity-100' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-slate-600 mb-4">No results found for &quot;{searchQuery}&quot;</p>
                  <p className="text-slate-500">Try adjusting your search terms or browse our categories instead.</p>
                </div>
              )}
            </div>
          )}

          {/* FAQ Items - Category Accordion */}
          {searchQuery === '' && (
            <div className="max-w-4xl mx-auto space-y-8">
              {faqCategories.map((category) => (
                <div key={category.id} className="bg-white rounded-lg shadow-sm border border-purple-100/50 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(`category-${category.id}`)}
                    className="w-full px-6 py-4 text-left focus:outline-none flex items-center justify-between"
                  >
                    <h2 className="text-xl font-semibold text-slate-900">{category.name}</h2>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-500 transform transition-all duration-300 ${
                        expandedFaqs.includes(`category-${category.id}`) ? 'rotate-180 text-purple-600' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      expandedFaqs.includes(`category-${category.id}`) 
                        ? 'max-h-[5000px] opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 space-y-4">
                      {faqsByCategory[category.id]?.map((faq) => (
                        <div 
                          key={faq.id}
                          className={`bg-white rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-400/20 group ${
                            expandedFaqs.includes(faq.id) ? 'ring-2 ring-purple-500' : ''
                          }`}
                        >
                          <button 
                            className="w-full px-4 py-3 text-left focus:outline-none"
                            onClick={() => toggleFaq(faq.id)}
                          >
                            <div className="flex items-center justify-between">
                              <h3 className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-purple-700 transition-colors duration-300">{faq.question}</h3>
                              <ChevronDown 
                                className={`w-4 h-4 md:w-5 md:h-5 text-slate-500 transform transition-all duration-300 ${
                                  expandedFaqs.includes(faq.id) ? 'rotate-180 text-purple-600' : ''
                                }`}
                              />
                            </div>
                          </button>
                          <div 
                            className={`px-4 overflow-hidden transition-all duration-300 ${
                              expandedFaqs.includes(faq.id) 
                                ? 'max-h-96 pb-3 opacity-100' 
                                : 'max-h-0 opacity-0'
                            }`}
                          >
                            <p className="text-sm md:text-base text-slate-600">{faq.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-purple-100/50">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Still Have Questions?</h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                We&apos;re here to help! Contact our team directly for personalized assistance with your recruitment needs.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300 transform hover:scale-105 group"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </Link>
                <a
                  href="tel:+441223123456"
                  className="inline-flex items-center px-6 py-3 bg-white text-slate-700 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 group border border-slate-200"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 