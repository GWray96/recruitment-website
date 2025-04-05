'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Code, Trophy, Database, Wrench, Users, Megaphone, Coffee, Calendar, Star, Award, MapPin, Phone, Mail, Clock } from 'lucide-react';
import CountUp from 'react-countup';

const About = () => {
  const [activeSpecialism, setActiveSpecialism] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const specialisms = [
    { 
      icon: <Code className="w-6 h-6 text-white" />, 
      title: 'Software Development & Testing',
      description: 'Expert placement of developers, testers, and QA engineers across all technologies and frameworks.'
    },
    { 
      icon: <Trophy className="w-6 h-6 text-white" />, 
      title: 'Projects, Change & Business Analysis',
      description: 'Connecting skilled project managers, business analysts, and change specialists with organizations.'
    },
    { 
      icon: <Database className="w-6 h-6 text-white" />, 
      title: 'Advanced Data and BI',
      description: 'Specialized recruitment for data scientists, analysts, and BI professionals across industries.'
    },
    { 
      icon: <Wrench className="w-6 h-6 text-white" />, 
      title: 'Infrastructure & Support',
      description: 'Expert placement of infrastructure engineers, DevOps specialists, and IT support professionals.'
    },
    { 
      icon: <Users className="w-6 h-6 text-white" />, 
      title: 'IT Leadership',
      description: 'Strategic recruitment for CTOs, IT Directors, and senior technology leaders.'
    },
    { 
      icon: <Megaphone className="w-6 h-6 text-white" />, 
      title: 'Digital Marketing',
      description: 'Connecting digital marketing specialists, SEO experts, and content strategists with forward-thinking brands.'
    },
  ];

  const timeline = [
    { year: '2018', title: 'Foundation', description: 'NexusTech was founded with a vision to revolutionize tech recruitment in East Anglia.' },
    { year: '2019', title: 'Growth', description: 'Expanded our team and established strong relationships with local tech companies.' },
    { year: '2020', title: 'Innovation', description: 'Launched our virtual coffee meetings and remote recruitment processes.' },
    { year: '2021', title: 'Expansion', description: 'Opened our Cambridge office and expanded our service offerings.' },
    { year: '2022', title: 'Recognition', description: 'Awarded Best Tech Recruitment Agency in East Anglia.' },
    { year: '2023', title: 'Today', description: 'Continuing to grow and innovate in the tech recruitment space.' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSpecialism(0);
          }
        });
      },
      { 
        threshold: [0.1, 0.2, 0.3], // Multiple thresholds for better mobile detection
        rootMargin: '0px 0px -10% 0px' // Adjust the root margin for better mobile detection
      }
    );

    // Store the ref value in a variable
    const currentRef = sectionRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      // Use the stored variable in the cleanup function
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="why-nexustech" className="py-16 px-4 md:px-8 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Why NexusTech Section */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3 transform transition-all duration-300 hover:scale-105">
              Our Story
            </span>
            <h2 className="text-4xl font-bold mb-4">Why NexusTech?</h2>
            <p className="text-lg text-slate-600">
              We&apos;re more than just a recruitment agency - we&apos;re your strategic partner in building successful tech teams.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                <CountUp 
                  end={15} 
                  suffix="+" 
                  enableScrollSpy 
                  scrollSpyOnce 
                  duration={2}
                  start={0}
                  delay={0}
                />
              </div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                <CountUp end={250} suffix="+" enableScrollSpy scrollSpyOnce duration={2} separator="," />
              </div>
              <div className="text-slate-600">Successful Placements</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                <CountUp end={1000} enableScrollSpy scrollSpyOnce duration={2} separator="," />
              </div>
              <div className="text-slate-600">Client Companies</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
              <div className="text-3xl font-bold text-pink-600 mb-2">
                <CountUp end={98} suffix="%" enableScrollSpy scrollSpyOnce duration={2} />
              </div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 text-left">
            <p>
              NexusTech Recruitment was born from a passion for connecting great talent with
              innovative companies. Our founder&apos;s experience in both technology and recruitment
              highlighted a gap in the market for a more personalized, tech-focused approach.
            </p>

            <p>
              After weeks of brainstorming, NexusTech was inspired by childhood ambition and a
              vision to revolutionize tech recruitment. The name represents our commitment to
              being at the intersection of technology and human connection - a nexus where
              talent meets opportunity.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Our Expertise</h3>

            <p>
              NexusTech Recruitment is a specialist IT recruitment agency with deep-rooted networks
              across East Anglia. We understand the unique challenges of building tech teams in
              this region and have developed strong relationships with both local businesses
              and tech professionals.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3 transform transition-all duration-300 hover:scale-105">
              Our Journey
            </span>
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Our Timeline</h3>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
              From our humble beginnings to becoming a leading tech recruitment agency in East Anglia.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-600"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className="relative flex items-center">
                  {/* Left side content (even indices) */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-0 text-right mr-[-8rem]' : 'pl-8'}`}>
                    {index % 2 === 0 ? (
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
                        <div className="text-purple-600 font-bold mb-2 group-hover:text-purple-700 transition-colors duration-300">{item.year}</div>
                        <h4 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-purple-800 transition-colors duration-300">{item.title}</h4>
                        <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{item.description}</p>
                      </div>
                    ) : (
                      <div className="h-full"></div>
                    )}
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center z-10 shadow-md">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Right side content (odd indices) */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pl-8 text-left ml-16'}`}>
                    {index % 2 === 1 ? (
                      <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-blue-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20 group">
                        <div className="text-blue-600 font-bold mb-2 group-hover:text-blue-700 transition-colors duration-300">{item.year}</div>
                        <h4 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-blue-800 transition-colors duration-300">{item.title}</h4>
                        <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{item.description}</p>
                      </div>
                    ) : (
                      <div className="h-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Specialisms */}
        <div className="mt-16">
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-4 transform transition-all duration-300 hover:scale-105">
              Expertise
            </span>
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Our Specialisms</h3>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
              With our in-depth knowledge of the tech industry and a commitment to building lasting
              relationships, we&apos;re here to help you find the perfect match.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specialisms.map((specialism, index) => (
              <div
                key={index}
                className={`p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-purple-100/50 transition-all duration-300 ${
                  activeSpecialism === index 
                    ? 'shadow-lg shadow-purple-400/30 scale-105 border-purple-300' 
                    : 'hover:shadow-lg hover:shadow-purple-400/20 hover:scale-105'
                }`}
                onMouseEnter={() => setActiveSpecialism(index)}
                onMouseLeave={() => setActiveSpecialism(null)}
              >
                <div className={`w-12 h-12 mb-4 flex items-center justify-center text-2xl bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg transform transition-all duration-300 ${
                  activeSpecialism === index ? 'scale-110 rotate-3' : ''
                }`}>
                  {specialism.icon}
                </div>
                <h4 className="font-semibold text-lg text-slate-900 mb-2">{specialism.title}</h4>
                <p className="text-slate-700 text-sm font-medium">{specialism.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-4 transform transition-all duration-300 hover:scale-105">
              Why Choose Us
            </span>
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Benefits of Working with Us</h3>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
              We offer a unique approach to tech recruitment that sets us apart from the competition.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
              <div className="w-12 h-12 mb-4 flex items-center justify-center text-2xl bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">Specialized Expertise</h4>
              <p className="text-slate-700 text-sm font-medium">Our team has deep knowledge of the tech industry and understands the specific needs of tech professionals.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
              <div className="w-12 h-12 mb-4 flex items-center justify-center text-2xl bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">Time-Saving Process</h4>
              <p className="text-slate-700 text-sm font-medium">We streamline the recruitment process, saving you time and helping you find the right candidates faster.</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
              <div className="w-12 h-12 mb-4 flex items-center justify-center text-2xl bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">Precision Matching</h4>
              <p className="text-slate-700 text-sm font-medium">Our advanced matching algorithms ensure that we connect you with candidates who perfectly match your requirements.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/virtual-coffee"
            className="group px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-200 inline-flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-110"
          >
            <span>Let&apos;s Have a Virtual Coffee</span>
            <svg 
              className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-12" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Coffee cup outline */}
              <path 
                d="M18 8h-1V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2H6a2 2 0 00-2 2v3a7 7 0 1014 0v-3a2 2 0 00-2-2z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              {/* Coffee handle */}
              <path 
                d="M18 8h-1V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2H6a2 2 0 00-2 2v3a7 7 0 1014 0v-3a2 2 0 00-2-2z" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
              {/* Coffee liquid */}
              <path 
                d="M6 13h12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;