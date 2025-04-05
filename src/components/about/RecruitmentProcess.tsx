'use client';

import { Search, Users, FileCheck, Handshake, Star, Clock } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin with a thorough understanding of your requirements, company culture, and technical needs.",
    icon: Search,
    features: [
      "In-depth requirements gathering",
      "Cultural fit assessment",
      "Technical stack analysis"
    ]
  },
  {
    number: "02",
    title: "Talent Search",
    description: "Our experts leverage our extensive network and advanced sourcing techniques to find the perfect candidates.",
    icon: Users,
    features: [
      "Network activation",
      "Advanced candidate screening",
      "Market mapping"
    ]
  },
  {
    number: "03",
    title: "Candidate Selection",
    description: "We rigorously assess and pre-screen candidates to ensure they meet your requirements.",
    icon: FileCheck,
    features: [
      "Technical assessment",
      "Cultural fit evaluation",
      "Reference checks"
    ]
  },
  {
    number: "04",
    title: "Interview Support",
    description: "We manage the entire interview process, providing support and gathering feedback.",
    icon: Handshake,
    features: [
      "Interview coordination",
      "Feedback collection",
      "Offer management"
    ]
  },
  {
    number: "05",
    title: "Placement & Follow-up",
    description: "We ensure a smooth onboarding process and provide ongoing support.",
    icon: Star,
    features: [
      "Onboarding support",
      "Regular check-ins",
      "Performance monitoring"
    ]
  }
];

export default function RecruitmentProcess() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
            Our Process
          </span>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">How We Work</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our proven recruitment process ensures we find the perfect match for your team
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative flex items-start mb-12 group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-1 bg-gradient-to-b from-purple-600 to-blue-600 transform -translate-x-1/2" />
                )}
                
                {/* Step Number and Icon */}
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {step.number}
                  </div>
                  <div className="absolute -right-2 -bottom-2 w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 flex-1">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100/50 transform transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-400/20">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 mb-4">
                      {step.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {step.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="bg-slate-50 rounded-lg p-3 text-sm text-slate-600 flex items-center"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Timeline Indicator */}
        <div className="max-w-5xl mx-auto mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-sm border border-purple-100/50">
            <Clock className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-slate-600">
              Average time to placement: <span className="font-bold text-purple-600">2-4 weeks</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 