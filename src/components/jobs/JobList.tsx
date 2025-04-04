'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import JobCard from './JobCard';
import { Job } from '@/types';

interface JobListProps {
  jobs: Job[];
}

const JobList = ({ jobs }: JobListProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    salary: '',
  });

  const jobTypes = ['full-time', 'part-time', 'contract', 'remote'];
  const locations = ['New York, NY', 'Remote', 'San Francisco, CA', 'London, UK'];
  const salaryRanges = [
    '0-50k',
    '50k-100k',
    '100k-150k',
    '150k-200k',
    '200k+',
  ];

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      type: '',
      location: '',
      salary: '',
    });
  };

  const filteredJobs = jobs.filter((job) => {
    if (filters.type && job.type !== filters.type) return false;
    if (filters.location && job.location !== filters.location) return false;
    if (filters.salary) {
      const [min, max] = filters.salary.split('-').map((v) => parseInt(v.replace('k', '000')));
      if (job.salary.min < min || (max && job.salary.max > max)) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Filter Toggle Button */}
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="md:hidden flex items-center gap-2 mb-4 text-gray-700"
      >
        <Filter className="h-5 w-5" />
        Filters
      </button>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div
          className={`${
            isFilterOpen ? 'block' : 'hidden'
          } md:block w-full md:w-64 space-y-6`}
        >
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Filters</h3>
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:text-primary/80"
              >
                Clear all
              </button>
            </div>

            {/* Job Type Filter */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Job Type</h4>
              <div className="space-y-2">
                {jobTypes.map((type) => (
                  <label key={type} className="flex items-center">
                    <input
                      type="radio"
                      name="type"
                      value={type}
                      checked={filters.type === type}
                      onChange={(e) => handleFilterChange('type', e.target.value)}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="ml-2 capitalize">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="mb-4">
              <h4 className="font-medium mb-2">Location</h4>
              <div className="space-y-2">
                {locations.map((location) => (
                  <label key={location} className="flex items-center">
                    <input
                      type="radio"
                      name="location"
                      value={location}
                      checked={filters.location === location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="ml-2">{location}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Salary Filter */}
            <div>
              <h4 className="font-medium mb-2">Salary Range</h4>
              <div className="space-y-2">
                {salaryRanges.map((range) => (
                  <label key={range} className="flex items-center">
                    <input
                      type="radio"
                      name="salary"
                      value={range}
                      checked={filters.salary === range}
                      onChange={(e) => handleFilterChange('salary', e.target.value)}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="ml-2">{range}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Job List */}
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {filteredJobs.length} Jobs Found
            </h2>
            <select className="border rounded-md px-3 py-2">
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="salary-high">Highest Salary</option>
              <option value="salary-low">Lowest Salary</option>
            </select>
          </div>

          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}

          {filteredJobs.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No jobs found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList; 