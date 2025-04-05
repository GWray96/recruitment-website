import React from 'react';
import { Building, MapPin, Clock, ArrowRight } from 'lucide-react';

const opportunities = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    posted: '2 days ago',
    type: 'Full Time',
    salary: '$120k - $150k',
    description: 'We are looking for a Senior Frontend Developer to join our team...',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with Next.js',
      'Understanding of web performance optimization'
    ]
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    location: 'Remote',
    posted: '3 days ago',
    type: 'Full Time',
    salary: '$100k - $130k',
    description: 'Join our growing team as a Full Stack Developer...',
    requirements: [
      '3+ years of full stack development',
      'Experience with Node.js and React',
      'Database design and optimization',
      'API development experience'
    ]
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'Cloud Systems Inc',
    location: 'New York, NY',
    posted: '1 day ago',
    type: 'Full Time',
    salary: '$130k - $160k',
    description: 'We are seeking a DevOps Engineer to help build and maintain our infrastructure...',
    requirements: [
      'AWS certification',
      'Experience with Kubernetes',
      'CI/CD pipeline implementation',
      'Infrastructure as Code (Terraform)'
    ]
  }
];

export default function LatestOpportunities() {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-100 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium mb-4">
            Latest Opportunities
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Find Your Next Tech Role
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover exciting opportunities with leading tech companies. Browse our latest openings and find your perfect match.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {opportunities.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">
                    {job.title}
                  </h3>
                  <p className="text-slate-600">{job.company}</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-slate-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  {job.location}
                </div>
                <div className="flex items-center text-slate-600">
                  <Clock className="w-4 h-4 mr-2" />
                  {job.posted}
                </div>
                <div className="flex items-center text-slate-600">
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                    {job.type}
                  </span>
                  <span className="ml-2 text-slate-600">{job.salary}</span>
                </div>
              </div>

              <p className="text-slate-600 mb-4 line-clamp-2">
                {job.description}
              </p>

              <div className="space-y-2 mb-6">
                {job.requirements.slice(0, 3).map((req, index) => (
                  <div key={index} className="flex items-center text-slate-600">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                    {req}
                  </div>
                ))}
                {job.requirements.length > 3 && (
                  <div className="text-slate-500 text-sm">
                    +{job.requirements.length - 3} more requirements
                  </div>
                )}
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group">
                View Details
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-white text-slate-900 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
            View All Opportunities
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
} 