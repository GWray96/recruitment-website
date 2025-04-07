'use client';

import { useState, useEffect, useRef } from 'react';
import { JobSearch } from '@/components/jobs/JobSearch';
import { JobListing } from '@/components/jobs/JobListing';
import { JobDetails } from '@/components/jobs/JobDetails';
import { JobListingSkeleton } from '@/components/jobs/JobListingSkeleton';
import { JobComparison } from '@/components/jobs/JobComparison';
import { JobAlert } from '@/components/jobs/JobAlert';
import { jobs } from '@/data/jobs';
import type { Job } from '@/components/jobs/JobListing';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import FAQ from '@/components/shared/FAQ';
import { MapPin, Briefcase, Clock, X, Loader2, Scale, Share2 } from 'lucide-react';

// Define a type for the job data from the data file
type DataJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedDate: string;
  description: string;
  requirements: string[];
  benefits: string[];
  logo?: string;
};

// Convert data job to component job
const convertToComponentJob = (dataJob: DataJob): Job => {
  return {
    ...dataJob,
    posted: dataJob.postedDate // Map postedDate to posted
  };
};

const jobBoardFAQs = [
  {
    question: "How often are new jobs posted?",
    answer: "Our job board is updated daily with new tech opportunities. We recommend checking back regularly or setting up job alerts to be notified when roles matching your criteria are posted."
  },
  {
    question: "How do I apply for a job?",
    answer: "Click the 'Apply Now' button on any job listing to submit your application. You'll need to provide your CV and a brief introduction. Our recruiters will review your application and contact you within 48 hours."
  },
  {
    question: "Can I save jobs to apply later?",
    answer: "Yes, you can save jobs to your favorites by clicking the bookmark icon. Create an account to access your saved jobs from any device and manage your applications."
  },
  {
    question: "What information is included in job listings?",
    answer: "Each listing includes the role description, required skills, experience level, salary range, location (including remote options), company information, and benefits package. We ensure all crucial details are provided upfront."
  },
  {
    question: "How can I make my application stand out?",
    answer: "Tailor your CV to highlight relevant skills and experience for each role, include a personalized cover letter, and ensure your technical skills section is up-to-date. Our recruiters can also provide application tips specific to each role."
  },
  {
    question: "What happens after I apply?",
    answer: "Our recruiters will review your application and contact you to discuss the role in detail. If you're a good match, we'll arrange an initial interview and guide you through the entire process, including interview preparation and offer negotiation."
  }
];

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
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showQuickApply, setShowQuickApply] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState<Job[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showSearchHistory, setShowSearchHistory] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const { ref: infiniteScrollRef, inView } = useInView({
    threshold: 0,
    rootMargin: '200px'
  });
  const jobListingsRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileJobDetails, setShowMobileJobDetails] = useState(false);

  // Initialize data and select first job
  useEffect(() => {
    // Convert data jobs to component jobs
    const componentJobs = jobs.map(convertToComponentJob);
    setFilteredJobs(componentJobs);
    setPaginatedJobs(componentJobs.slice(0, jobsPerPage));
    // Automatically select the first job
    if (componentJobs.length > 0) {
      setSelectedJob(componentJobs[0]);
    }
    setIsLoading(false);

    // Load search history from localStorage
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }

    // Load recently viewed jobs from localStorage
    const savedRecent = localStorage.getItem('recentlyViewed');
    if (savedRecent) {
      setRecentlyViewed(JSON.parse(savedRecent));
    }
  }, [jobsPerPage]);

  // Handle sticky search bar
  useEffect(() => {
    const handleScroll = () => {
      if (searchRef.current) {
        const searchBarPosition = searchRef.current.getBoundingClientRect().top;
        setIsSticky(searchBarPosition <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle filtering and pagination
  useEffect(() => {
    // Convert data jobs to component jobs
    let filtered = jobs.map(convertToComponentJob);

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(job => 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Add to search history if not already present
      if (!searchHistory.includes(searchQuery)) {
        const newHistory = [searchQuery, ...searchHistory].slice(0, 5);
        setSearchHistory(newHistory);
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      }
    }

    // Apply job type filters
    if (filters.jobTypes.length > 0) {
      filtered = filtered.filter(job => 
        filters.jobTypes.some(type => type.toLowerCase() === job.type.toLowerCase())
      );
    }

    // Apply salary filter
    if (filters.salaryRange[0] > 0 || filters.salaryRange[1] < 200000) {
      filtered = filtered.filter(job => {
        const salaryMatch = job.salary.match(/\d+/);
        if (!salaryMatch) return false;
        const salary = parseInt(salaryMatch[0]);
        return salary >= filters.salaryRange[0] && salary <= filters.salaryRange[1];
      });
    }

    // Apply sorting
    if (sortBy !== 'relevance') {
      filtered.sort((a, b) => {
        switch (sortBy) {
          case 'date':
            return new Date(b.posted).getTime() - new Date(a.posted).getTime();
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
    }

    setFilteredJobs(filtered);

    // Update paginated jobs - now accumulating instead of slicing
    const endIndex = currentPage * jobsPerPage;
    setPaginatedJobs(filtered.slice(0, endIndex));
  }, [searchQuery, filters, sortBy, currentPage, jobsPerPage, searchHistory]);

  // Handle infinite scroll
  useEffect(() => {
    if (inView && !isLoadingMore && hasMore) {
      setIsLoadingMore(true);
      // Simulate loading delay
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsLoadingMore(false);
      }, 500);
    }
  }, [inView, isLoadingMore, hasMore]);

  // Update hasMore state when filtered jobs change
  useEffect(() => {
    const endIndex = currentPage * jobsPerPage;
    setHasMore(endIndex < filteredJobs.length);
  }, [filteredJobs.length, currentPage, jobsPerPage]);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the lg breakpoint
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const handleJobSelect = (job: Job) => {
    console.log('Selecting job:', job);
    setSelectedJob(job);
    
    // Add to recently viewed
    const updatedRecent = [job, ...recentlyViewed.filter(j => j.id !== job.id)].slice(0, 5);
    setRecentlyViewed(updatedRecent);
    localStorage.setItem('recentlyViewed', JSON.stringify(updatedRecent));
    
    // Show mobile job details modal if on mobile
    if (isMobile) {
      setShowMobileJobDetails(true);
    }
  };

  const handleJobSave = (job: Job) => {
    // Implement save functionality
    console.log('Saving job:', job.id);
  };

  const handleJobShare = (job: Job) => {
    // Implement share functionality
    console.log('Sharing job:', job.id);
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
    setShowQuickApply(true);
  };

  const handleQuickApply = () => {
    // Implement quick apply functionality
    console.log('Quick applying to job:', selectedJob?.id);
    setShowQuickApply(false);
  };

  const handleClearSearchHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  const handleSearchFromHistory = (term: string) => {
    setSearchQuery(term);
    setShowSearchHistory(false);
  };

  const handleSaveAlert = (alert: any) => {
    console.log('Creating alert:', alert);
    // Here you would typically save the alert to your backend
  };

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (jobListingsRef.current) {
        setScrollPosition(jobListingsRef.current.scrollTop);
      }
    };

    const listingsContainer = jobListingsRef.current;
    if (listingsContainer) {
      listingsContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (listingsContainer) {
        listingsContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleCloseMobileJobDetails = () => {
    setShowMobileJobDetails(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <JobSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filters={filters}
        onFiltersChange={setFilters}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onSaveAlert={handleSaveAlert}
        showSearchHistory={showSearchHistory}
        setShowSearchHistory={setShowSearchHistory}
        searchHistory={searchHistory}
        onSearchFromHistory={handleSearchFromHistory}
        onClearSearchHistory={handleClearSearchHistory}
      />

      <div className="container mx-auto px-4 py-8 flex-grow mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Job Listings - Left Column (Desktop) */}
          <div className="lg:col-span-1">
            <div 
              ref={jobListingsRef}
              className="space-y-4 lg:space-y-6 max-h-[calc(100vh-12rem)] overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            >
              {paginatedJobs.map((job) => (
                <JobListing
                  key={job.id}
                  job={job}
                  isSelected={selectedJob?.id === job.id}
                  onSelect={handleJobSelect}
                  onSave={handleJobSave}
                  onShare={handleJobShare}
                />
              ))}
              {isLoadingMore && (
                <div className="flex justify-center py-4">
                  <Loader2 className="w-6 h-6 text-purple-600 animate-spin" />
                </div>
              )}
              <div ref={infiniteScrollRef} className="h-4" />
            </div>
          </div>

          {/* Job Details - Right Column (Desktop) */}
          <div className="hidden lg:block lg:col-span-2 sticky top-8">
            {selectedJob ? (
              <div className="bg-white rounded-lg shadow">
                <JobDetails
                  job={selectedJob}
                  onApply={handleApply}
                  onCompare={handleJobCompare}
                  isInComparison={selectedJobs.some(job => job.id === selectedJob.id)}
                />
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center min-h-[400px]">
                <div className="text-center">
                  <h3 className="text-lg font-medium text-slate-900 mb-2">Select a job to view details</h3>
                  <p className="text-slate-600">
                    Click on a job listing to see more information and apply.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Job Details Modal */}
      <AnimatePresence>
        {isMobile && showMobileJobDetails && selectedJob && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center"
            onClick={handleCloseMobileJobDetails}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-t-2xl w-full h-[90vh] overflow-hidden flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag Handle */}
              <div className="w-full flex justify-center py-2">
                <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
              </div>
              
              {/* Close Button */}
              <button
                onClick={handleCloseMobileJobDetails}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 active:bg-gray-300 transition-colors"
                aria-label="Close job details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content Container */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="p-4 pb-8">
                  <JobDetails
                    job={selectedJob}
                    onApply={handleApply}
                    onCompare={handleJobCompare}
                    isInComparison={selectedJobs.some(job => job.id === selectedJob.id)}
                  />
                </div>
              </div>

              {/* Fixed Apply Button */}
              <div className="p-4 border-t border-gray-100 bg-white">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleJobCompare(selectedJob)}
                      className={`p-3 rounded-lg transition-colors ${
                        selectedJobs.some(job => job.id === selectedJob.id)
                          ? 'bg-purple-100 text-purple-600'
                          : 'text-gray-400 hover:text-purple-600'
                      }`}
                      aria-label="Compare job"
                    >
                      <Scale className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleJobShare(selectedJob)}
                      className="p-3 text-gray-400 hover:text-purple-600 transition-colors rounded-lg"
                      aria-label="Share job"
                    >
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                  <button
                    onClick={() => handleApply(selectedJob.id)}
                    className="flex-1 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 active:bg-purple-800 transition-colors font-medium"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Job Comparison */}
      <AnimatePresence>
        {selectedJobs.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-10"
          >
            <JobComparison
              selectedJobs={selectedJobs}
              onRemoveJob={handleRemoveFromComparison}
              onApply={handleApply}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <FAQ 
        title="Job Search FAQs"
        description="Everything you need to know about finding and applying for your next tech role."
        faqs={jobBoardFAQs}
      />
    </div>
  );
} 