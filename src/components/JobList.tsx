'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, Building, Clock } from 'lucide-react';

// Mock data for featured jobs
const featuredJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    type: 'Full-time',
    postedAt: '2 days ago',
    logo: '/companies/techcorp.png',
  },
  {
    id: 2,
    title: 'Backend Engineer',
    company: 'InnovateX',
    location: 'New York, NY',
    type: 'Full-time',
    postedAt: '1 day ago',
    logo: '/companies/innovatex.png',
  },
  {
    id: 3,
    title: 'DevOps Engineer',
    company: 'CloudTech',
    location: 'Remote',
    type: 'Full-time',
    postedAt: '3 days ago',
    logo: '/companies/cloudtech.png',
  },
  {
    id: 4,
    title: 'UI/UX Designer',
    company: 'DesignHub',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    postedAt: '4 days ago',
    logo: '/companies/designhub.png',
  },
  {
    id: 5,
    title: 'Data Scientist',
    company: 'DataInsights',
    location: 'Boston, MA',
    type: 'Full-time',
    postedAt: '5 days ago',
    logo: '/companies/datainsights.png',
  },
  {
    id: 6,
    title: 'Mobile App Developer',
    company: 'AppWorks',
    location: 'Seattle, WA',
    type: 'Full-time',
    postedAt: '6 days ago',
    logo: '/companies/appworks.png',
  },
];

const JobList = () => {
  const [jobs, setJobs] = useState(featuredJobs);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <Link
          key={job.id}
          href={`/jobs/${job.id}`}
          className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
        >
          <div className="flex items-start">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
              <Building className="w-6 h-6 text-gray-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-2">{job.company}</p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {job.postedAt}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default JobList; 