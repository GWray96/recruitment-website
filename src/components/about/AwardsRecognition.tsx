'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Star, Shield } from 'lucide-react';

const awards = [
  {
    title: "Best Tech Recruitment Agency",
    organization: "East Anglia Business Awards",
    year: "2023",
    icon: Award,
    description: "Recognized for outstanding contribution to tech talent acquisition"
  },
  {
    title: "Excellence in Recruitment",
    organization: "REC Awards",
    year: "2023",
    icon: Trophy,
    description: "Awarded for innovative recruitment solutions and client satisfaction"
  },
  {
    title: "Top 10 UK Tech Recruiters",
    organization: "Tech Recruitment Awards",
    year: "2022",
    icon: Star,
    description: "Ranked among the top tech recruitment agencies in the UK"
  },
  {
    title: "ISO 9001 Certified",
    organization: "British Standards Institution",
    year: "2022",
    icon: Shield,
    description: "Certified for quality management systems"
  }
];

const memberships = [
  {
    name: "APSCo",
    description: "Association of Professional Staffing Companies"
  },
  {
    name: "REC",
    description: "Recruitment & Employment Confederation"
  },
  {
    name: "NRF",
    description: "National Recruitment Federation"
  }
];

export default function AwardsRecognition() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
            Recognition
          </span>
          <h2 className="text-4xl font-bold mb-4 text-slate-900">Awards & Recognition</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our commitment to excellence has been recognized by leading industry organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{award.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{award.organization}</p>
                <p className="text-slate-600 text-sm mb-3">{award.year}</p>
                <p className="text-slate-600">{award.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Industry Memberships</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We are proud members of leading recruitment industry organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {memberships.map((membership, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">{membership.name}</span>
              </div>
              <p className="text-slate-600">{membership.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 