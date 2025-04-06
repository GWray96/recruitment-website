'use client';

import React from 'react';
import { Users, Target, Award, Heart, Star, Code, Trophy, Database, Wrench, Megaphone, Coffee, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import SuccessStories from '@/components/about/SuccessStories';
import AwardsRecognition from '@/components/about/AwardsRecognition';
import RecruitmentProcess from '@/components/about/RecruitmentProcess';

export default function AboutPage() {
  const timeline = [
    { year: '2018', title: 'Foundation', description: 'NexusTech was founded with a vision to revolutionize tech recruitment in East Anglia.' },
    { year: '2019', title: 'Growth', description: 'Expanded our team and established strong relationships with local tech companies.' },
    { year: '2020', title: 'Innovation', description: 'Launched our virtual coffee meetings and remote recruitment processes.' },
    { year: '2021', title: 'Expansion', description: 'Opened our Cambridge office and expanded our service offerings.' },
    { year: '2022', title: 'Recognition', description: 'Awarded Best Tech Recruitment Agency in East Anglia.' },
    { year: '2023', title: 'Today', description: 'Continuing to grow and innovate in the tech recruitment space.' },
  ];

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

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      experience: '15+ years of experience in recruitment and technology',
      image: '/team/sarah.jpg',
      specialties: ['Strategic Leadership', 'Tech Industry Vision', 'Team Development']
    },
    {
      name: 'David Chen',
      role: 'Head of Technical Recruitment',
      experience: '12+ years in technical recruitment',
      image: '/team/david.jpg',
      specialties: ['Software Development', 'Cloud Architecture', 'DevOps']
    },
    {
      name: 'Emma Williams',
      role: 'Client Success Director',
      experience: '10+ years in client relationships',
      image: '/team/emma.jpg',
      specialties: ['Account Management', 'Business Development', 'Strategic Partnerships']
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About NexusTech Recruitment
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              We&apos;re on a mission to transform the recruitment landscape by connecting exceptional talent 
              with innovative companies. Our deep understanding of technology and human connection makes us 
              the perfect partner for your career or hiring journey.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '10+', label: 'Years Experience', color: 'purple' },
              { value: '250+', label: 'Successful Placements', color: 'blue' },
              { value: '1000+', label: 'Client Companies', color: 'indigo' },
              { value: '98%', label: 'Client Satisfaction', color: 'pink' }
            ].map((stat, index) => (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center shadow-sm border ${
                  stat.color === 'purple' ? 'border-purple-100/50 hover:shadow-purple-400/20' :
                  stat.color === 'blue' ? 'border-blue-100/50 hover:shadow-blue-400/20' :
                  stat.color === 'indigo' ? 'border-indigo-100/50 hover:shadow-indigo-400/20' :
                  'border-pink-100/50 hover:shadow-pink-400/20'
                } transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <div className={`text-3xl font-bold mb-2 ${
                  stat.color === 'purple' ? 'text-purple-600' :
                  stat.color === 'blue' ? 'text-blue-600' :
                  stat.color === 'indigo' ? 'text-indigo-600' :
                  'text-pink-600'
                }`}>
                  {stat.value}
                </div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h3>
              <p className="text-slate-600 mb-6">
                To revolutionize the tech recruitment landscape by creating meaningful connections 
                between exceptional talent and innovative companies, while setting new standards 
                for personalized service and technological excellence in recruitment.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="ml-3 text-slate-600">Connecting top tech talent with innovative companies</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="ml-3 text-slate-600">Providing personalized recruitment solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="ml-3 text-slate-600">Fostering long-term partnerships</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h3>
              <p className="text-slate-600 mb-6">
                To be the most trusted and innovative tech recruitment partner in East Anglia, 
                known for our deep industry expertise, technological innovation, and commitment 
                to building lasting relationships that drive success for both candidates and clients.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="ml-3 text-slate-600">Leading innovation in recruitment technology</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="ml-3 text-slate-600">Setting industry standards for service excellence</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="ml-3 text-slate-600">Expanding our impact across East Anglia</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStories />

      {/* Our Story Section with Timeline */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/patterns/wave.svg')] opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
                Our Story
              </span>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">The NexusTech Journey</h2>
            </div>
            <div className="prose prose-lg max-w-none text-slate-700 text-center mb-12">
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
            </div>
            
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-blue-600"></div>
              <div className="space-y-16">
                {timeline.map((item, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-0 text-right mr-[-8rem]' : 'pl-8'}`}>
                      {index % 2 === 0 ? (
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
                          <div className="text-purple-600 font-bold mb-2 group-hover:text-purple-700">{item.year}</div>
                          <h4 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-purple-800">{item.title}</h4>
                          <p className="text-slate-600 group-hover:text-slate-700">{item.description}</p>
                        </div>
                      ) : (
                        <div className="h-full"></div>
                      )}
                    </div>
                    
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center z-10 shadow-md">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pl-8 text-left ml-16'}`}>
                      {index % 2 === 1 ? (
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-blue-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/20 group">
                          <div className="text-blue-600 font-bold mb-2 group-hover:text-blue-700">{item.year}</div>
                          <h4 className="font-semibold text-lg text-slate-900 mb-2 group-hover:text-blue-800">{item.title}</h4>
                          <p className="text-slate-600 group-hover:text-slate-700">{item.description}</p>
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
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
              Our Values
            </span>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-700">People First</h3>
              <p className="text-slate-600 group-hover:text-slate-700">
                We believe in putting people at the center of everything we do, fostering meaningful connections and long-lasting relationships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-700">Excellence</h3>
              <p className="text-slate-600 group-hover:text-slate-700">
                We strive for excellence in every interaction and placement, ensuring the highest standards of service delivery.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-700">Innovation</h3>
              <p className="text-slate-600 group-hover:text-slate-700">
                We continuously innovate our processes and technologies to provide the best possible recruitment experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-700">Integrity</h3>
              <p className="text-slate-600 group-hover:text-slate-700">
                We maintain the highest standards of integrity, transparency, and ethical conduct in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process */}
      <RecruitmentProcess />

      {/* Specialisms Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
              Our Expertise
            </span>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Areas of Specialization</h2>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
              With our in-depth knowledge of the tech industry and a commitment to building lasting
              relationships, we&apos;re here to help you find the perfect match.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specialisms.map((specialism, index) => (
              <div
                key={index}
                className="p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-purple-100/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/20 hover:scale-105"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center text-2xl bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                  {specialism.icon}
                </div>
                <h4 className="font-semibold text-lg text-slate-900 mb-2">{specialism.title}</h4>
                <p className="text-slate-700 text-sm font-medium">{specialism.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <AwardsRecognition />

      {/* Team Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
              Our Team
            </span>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Meet Our Leadership</h2>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
              Our experienced leadership team brings together expertise in technology, recruitment, and business strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                    {/* Add actual images later */}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-purple-700">{member.name}</h3>
                  <p className="text-blue-600 mb-2 font-medium">{member.role}</p>
                  <p className="text-sm text-slate-600 mb-4">{member.experience}</p>
                  <div className="space-y-2">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mr-2 mb-2">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Culture & Locations */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
        <div className="container mx-auto px-4">
          {/* Work Culture */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
                Our Culture
              </span>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Life at NexusTech</h2>
              <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
                We believe in creating an environment where innovation thrives and people can do their best work.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-slate-600">
                  Flexible working hours, remote work options, and a focus on mental well-being.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Collaborative Spirit</h3>
                <p className="text-slate-600">
                  Open communication, knowledge sharing, and team-based problem solving.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Mindset</h3>
                <p className="text-slate-600">
                  Continuous learning, professional development, and career progression opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Office Locations */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
                Our Offices
              </span>
              <h2 className="text-4xl font-bold mb-4 text-slate-900">Where to Find Us</h2>
              <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
                Strategically located across East Anglia to better serve our clients and candidates.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Cambridge</h3>
                <p className="text-slate-600 mb-4">
                  St John&apos;s Innovation Centre<br />
                  Cowley Road<br />
                  Cambridge, CB4 0WS
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>01223 123 456</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>cambridge@nexustech.co.uk</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Mon-Fri: 9:00-17:30</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Norwich</h3>
                <p className="text-slate-600 mb-4">
                  The Union Building<br />
                  51-59 Rose Lane<br />
                  Norwich, NR1 1BY
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>01603 123 456</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>norwich@nexustech.co.uk</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Mon-Fri: 9:00-17:30</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ipswich</h3>
                <p className="text-slate-600 mb-4">
                  Epsilon House<br />
                  West Road<br />
                  Ipswich, IP3 9FJ
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-slate-600">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>01473 123 456</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>ipswich@nexustech.co.uk</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Mon-Fri: 9:00-17:30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-12 relative">
            <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5 rounded-2xl"></div>
            <div className="relative">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
                  Get Started
                </span>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Ready to Transform Your Tech Recruitment?
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  Let&apos;s discuss how we can help you find the perfect tech talent for your organization.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2 text-purple-700">Quick Response</h3>
                  <p className="text-slate-600 mb-4">
                    Get in touch with our team and receive a response within 24 hours.
                  </p>
                  <div className="flex items-center gap-2 text-purple-600">
                    <Phone className="w-4 h-4" />
                    <a href="tel:01223123456" className="hover:text-purple-700 transition-colors">
                      01223 123 456
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-purple-600 mt-2">
                    <Mail className="w-4 h-4" />
                    <a href="mailto:hello@nexustech.co.uk" className="hover:text-purple-700 transition-colors">
                      hello@nexustech.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">Visit Us</h3>
                  <p className="text-slate-600 mb-4">
                    Drop by our office for a face-to-face consultation.
                  </p>
                  <div className="flex items-center gap-2 text-blue-600">
                    <MapPin className="w-4 h-4" />
                    <span>Cambridge • Norwich • Ipswich</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 mt-2">
                    <Clock className="w-4 h-4" />
                    <span>Mon-Fri: 9:00-17:30</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 