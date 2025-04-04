'use client';

import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Job {
  id: string;
  title: string;
  company: string;
  salary: string;
  location: string;
  skills: string[];
  postedDate: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
}

// Sample data - in a real app, this would come from an API
const SAMPLE_JOBS: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    salary: '£65,000 - £85,000',
    location: 'London, UK',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    postedDate: '2 days ago',
    type: 'Full-time',
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Innovation Labs',
    salary: '£55,000 - £75,000',
    location: 'Remote',
    skills: ['Agile', 'Product Strategy', 'User Research'],
    postedDate: '1 day ago',
    type: 'Full-time',
  },
  {
    id: '3',
    title: 'Technical Project Manager',
    company: 'Digital Ventures',
    salary: '£60,000 - £80,000',
    location: 'Remote',
    skills: ['Agile', 'Scrum', 'JIRA'],
    postedDate: '2 days ago',
    type: 'Contract',
  },
  {
    id: '4',
    title: 'Backend Developer',
    company: 'FinTech Solutions',
    salary: '£70,000 - £90,000',
    location: 'Remote',
    skills: ['Node.js', 'Python', 'PostgreSQL'],
    postedDate: '1 day ago',
    type: 'Full-time',
  },
  {
    id: '5',
    title: 'QA Engineer',
    company: 'Quality First',
    salary: '£40,000 - £55,000',
    location: 'Manchester, UK',
    skills: ['Selenium', 'Jest', 'Cypress'],
    postedDate: '1 day ago',
    type: 'Full-time',
  },
  {
    id: '6',
    title: 'Solutions Architect',
    company: 'Enterprise Systems',
    salary: '£85,000 - £110,000',
    location: 'London, UK',
    skills: ['AWS', 'System Design', 'Microservices'],
    postedDate: '2 days ago',
    type: 'Full-time',
  },
];

export default function RecentOpportunities() {
  const [recentJobs, setRecentJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Sort jobs by posted date and take the 6 most recent
    const sortedJobs = [...SAMPLE_JOBS].sort((a, b) => {
      const aDays = parseInt(a.postedDate);
      const bDays = parseInt(b.postedDate);
      return aDays - bDays;
    }).slice(0, 6);
    
    setRecentJobs(sortedJobs);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Recent Opportunities</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover the latest job opportunities in tech. From remote positions to on-site roles, find your next career move.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentJobs.map((job) => (
            <div 
              key={job.id} 
              className="group bg-white rounded-lg border border-gray-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex gap-3 min-w-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-semibold text-purple-600">{job.company[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-black mb-0.5 line-clamp-2 leading-tight">{job.title}</h3>
                    <p className="text-gray-500 truncate">{job.company}</p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-full whitespace-nowrap flex-shrink-0 h-fit">
                  {job.type}
                </span>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-2">
                <div className="flex items-center gap-1.5 min-w-0">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{job.location}</span>
                </div>
                <span className="mx-2 text-gray-300">•</span>
                <span className="truncate">{job.salary}</span>
              </div>

              <div className="flex items-center text-sm text-gray-600 mb-3">
                <span>{job.postedDate}</span>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {job.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-0.5 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 text-sm rounded-full border border-purple-100 whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-end">
                <Link
                  href={`/jobs/${job.id}`}
                  className="text-purple-600 hover:text-purple-700 inline-flex items-center gap-1 group/link text-sm"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
          >
            View All Opportunities
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
} 