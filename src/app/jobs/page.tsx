'use client';

import { useState, useEffect } from 'react';
import { JobSearch } from '@/components/jobs/JobSearch';
import { JobListing } from '@/components/jobs/JobListing';
import { JobDetails } from '@/components/jobs/JobDetails';
import { JobListingSkeleton } from '@/components/jobs/JobListingSkeleton';
import { JobComparison } from '@/components/jobs/JobComparison';
import { JobAlert } from '@/components/jobs/JobAlert';
import { jobs } from '@/data/jobs';
import type { Job } from '@/components/jobs/JobListing';

export default function OpportunitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    jobTypes: [] as string[],
    salaryRange: [0, 200000] as [number, number]
  });
  const [sortBy, setSortBy] = useState('relevance');
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(10);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [paginatedJobs, setPaginatedJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedJobs, setSelectedJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showComparison, setShowComparison] = useState(false);

  // Initialize data and select first job
  useEffect(() => {
    setFilteredJobs(jobs);
    setPaginatedJobs(jobs.slice(0, jobsPerPage));
    // Automatically select the first job
    if (jobs.length > 0) {
      setSelectedJob(jobs[0]);
    }
    setIsLoading(false);
  }, [jobsPerPage]);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle filtering and pagination
  useEffect(() => {
    let filtered = [...jobs];
    console.log('Initial jobs:', filtered);

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log('After search filter:', filtered);
    }

    // Apply job type filters
    if (filters.jobTypes.length > 0) {
      filtered = filtered.filter(job => 
        filters.jobTypes.some(type => type.toLowerCase() === job.type.toLowerCase())
      );
      console.log('After job type filter:', filtered);
    }

    // Apply salary filter
    if (filters.salaryRange[0] > 0 || filters.salaryRange[1] < 200000) {
      filtered = filtered.filter(job => {
        // Extract the first number from the salary range (e.g., "£65,000 - £85,000" -> 65000)
        const salaryMatch = job.salary.match(/\d+/);
        if (!salaryMatch) return false;
        const salary = parseInt(salaryMatch[0]);
        return salary >= filters.salaryRange[0] && salary <= filters.salaryRange[1];
      });
      console.log('After salary filter:', filtered);
    }

    // Apply sorting
    if (sortBy !== 'relevance') {
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'date':
            return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
          case 'salary':
            const salaryMatchA = a.salary.match(/\d+/);
            const salaryMatchB = b.salary.match(/\d+/);
            if (!salaryMatchA || !salaryMatchB) return 0;
            const salaryA = parseInt(salaryMatchA[0]);
            const salaryB = parseInt(salaryMatchB[0]);
            return salaryB - salaryA;
          default:
            return 0;
        }
      });
      console.log('After sorting:', filtered);
    }

    setFilteredJobs(filtered);
    console.log('Final filtered jobs:', filtered);

    // Update paginated jobs
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    setPaginatedJobs(filtered.slice(startIndex, endIndex));
    console.log('Paginated jobs:', filtered.slice(startIndex, endIndex));
  }, [searchQuery, filters, sortBy, currentPage, jobsPerPage]);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filters, sortBy]);

  const handleJobSelect = (job: Job) => {
    console.log('Selecting job:', job);
    setSelectedJob(job);
  };

  const handleJobSave = (jobId: string) => {
    // Implement save functionality
    console.log('Saving job:', jobId);
  };

  const handleJobShare = (jobId: string) => {
    // Implement share functionality
    console.log('Sharing job:', jobId);
  };

  const handleJobCompare = (job: Job) => {
    setSelectedJobs(prev => {
      if (prev.find(j => j.id === job.id)) {
        return prev.filter(j => j.id !== job.id);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, job];
    });
  };

  const handleRemoveFromComparison = (jobId: string) => {
    setSelectedJobs(prev => prev.filter(job => job.id !== jobId));
  };

  const handleApply = (jobId: string) => {
    // Implement apply functionality
    console.log('Applying to job:', jobId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <JobSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filters={{
          jobTypes: filters.jobTypes,
          salaryRange: filters.salaryRange
        }}
        onFiltersChange={(newFilters) => {
          setFilters({
            ...filters,
            ...newFilters
          });
        }}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onSaveAlert={(alert) => console.log('Creating alert:', alert)}
      />

      <div className="container mx-auto px-4 pb-12">
        {/* Results Header */}
        <div className="mt-8 flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              {filteredJobs.length} Job Opportunities
            </h2>
            {selectedJobs.length > 0 && (
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                Compare ({selectedJobs.length}/3)
              </button>
            )}
          </div>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            {isLoading ? (
              // Show skeletons while loading
              Array(5).fill(null).map((_, index) => (
                <JobListingSkeleton key={index} />
              ))
            ) : (
              // Show actual job listings
              paginatedJobs.map(job => (
                <JobListing
                  key={job.id}
                  {...job}
                  isSelected={selectedJob?.id === job.id}
                  onSelect={handleJobSelect}
                  onSave={handleJobSave}
                  onShare={handleJobShare}
                />
              ))
            )}
          </div>

          {/* Job Details or Comparison */}
          <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] z-10">
            {showComparison ? (
              <JobComparison
                selectedJobs={selectedJobs}
                onRemoveJob={handleRemoveFromComparison}
                onApply={handleApply}
              />
            ) : selectedJob ? (
              <JobDetails
                job={selectedJob}
                onApply={handleApply}
                onCompare={handleJobCompare}
                isInComparison={selectedJobs.some(j => j.id === selectedJob.id)}
              />
            ) : (
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full flex items-center justify-center">
                <p className="text-slate-500">Select a job to view details</p>
              </div>
            )}
          </div>
        </div>

        {/* Pagination */}
        {filteredJobs.length > jobsPerPage && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="px-3 py-1 text-slate-600">
                Page {currentPage} of {Math.ceil(filteredJobs.length / jobsPerPage)}
              </span>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredJobs.length / jobsPerPage)))}
                disabled={currentPage === Math.ceil(filteredJobs.length / jobsPerPage)}
                className="px-3 py-1 rounded-md bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
} 