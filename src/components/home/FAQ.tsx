'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQ() {
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'candidates', name: 'For Candidates' },
    { id: 'employers', name: 'For Employers' },
    { id: 'process', name: 'Our Process' },
    { id: 'services', name: 'Services' }
  ];

  const faqs = [
    {
      question: "What makes NexusTech Recruitment different from other agencies?",
      answer: "At NexusTech Recruitment, we combine cutting-edge technology with deep industry expertise. Our team of specialized tech recruiters, many with hands-on development experience, ensures precise matching of skills and culture. We maintain a 95% successful placement rate and help candidates achieve an average 25% salary increase.",
      category: 'process'
    },
    {
      question: "How does NexusTech's recruitment process work?",
      answer: "Our streamlined process typically takes 2-4 weeks, utilizing advanced AI matching technology alongside personal consultation. We begin with a thorough understanding of your needs, conduct precise matching, facilitate interviews, and provide comprehensive support through to successful placement and beyond.",
      category: 'process'
    },
    {
      question: "What technical roles does NexusTech specialize in?",
      answer: "We specialize in placing professionals across the entire tech spectrum, including Software Engineering, Cloud Architecture, DevOps, AI/ML Engineering, Data Science, Cybersecurity, and Technical Leadership roles. We work with both cutting-edge startups and established enterprise organizations.",
      category: 'services'
    },
    {
      question: "Does NexusTech offer flexible working arrangements?",
      answer: "Yes, we understand the modern workplace's evolving nature. We offer opportunities across remote, hybrid, and office-based positions, always ensuring that working arrangements align with both candidate preferences and company culture.",
      category: 'candidates'
    },
    {
      question: "What support does NexusTech provide during and after placement?",
      answer: "We provide end-to-end support including technical CV optimization, interview preparation, coding assessment guidance, and salary negotiation. Post-placement, we maintain regular check-ins during the onboarding period and offer ongoing career development support.",
      category: 'candidates'
    },
    {
      question: "How do you ensure quality matches for employers?",
      answer: "We use a combination of AI-powered matching algorithms and human expertise to ensure the best fit. Our process includes thorough technical assessments, cultural alignment checks, and detailed reference verification. We also provide comprehensive candidate profiles and facilitate structured interviews.",
      category: 'employers'
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including FinTech, HealthTech, EdTech, E-commerce, and Enterprise Software. Our expertise in these sectors allows us to understand specific industry requirements and match candidates with relevant opportunities.",
      category: 'services'
    },
    {
      question: "How do you handle data privacy and confidentiality?",
      answer: "We take data privacy seriously and comply with all relevant regulations including GDPR. All candidate and client information is stored securely, and we maintain strict confidentiality throughout the recruitment process.",
      category: 'process'
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-4 transform transition-all duration-300 hover:scale-105">
            Got Questions?
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn more about how NexusTech Recruitment can accelerate your tech career or help build your dream team
          </p>
        </div>

        {/* Search and Categories */}
        <div className="max-w-3xl mx-auto mb-8">
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
            {categories.map((category) => (
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

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-400/20 group ${
                expandedFaqs.includes(index) ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <button 
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
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
                      expandedFaqs.includes(index) ? 'rotate-180 text-purple-600' : ''
                    }`}
                  />
                </div>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  expandedFaqs.includes(index) 
                    ? 'max-h-96 pb-4 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300 transform hover:scale-105 group"
          >
            View All FAQs
            <ArrowRight className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
} 