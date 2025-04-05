"use client";

import { useState, useEffect, useMemo } from 'react';
import { JobFilters } from './JobFilters';
import { JobAlert } from './JobAlert';
import { Job } from './JobListing';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Filter, Bell, X, Clock, ChevronRight, TrendingUp } from 'lucide-react';

interface JobSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filters: {
    jobTypes: string[];
    salaryRange: [number, number];
  };
  onFiltersChange: (filters: { jobTypes: string[]; salaryRange: [number, number] }) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onSaveAlert: (alert: any) => void;
  showSearchHistory: boolean;
  setShowSearchHistory: (show: boolean) => void;
  searchHistory: string[];
  onSearchFromHistory: (term: string) => void;
  onClearSearchHistory: () => void;
}

export function JobSearch({
  searchQuery,
  onSearchChange,
  filters,
  onFiltersChange,
  sortBy,
  onSortChange,
  onSaveAlert,
  showSearchHistory,
  setShowSearchHistory,
  searchHistory,
  onSearchFromHistory,
  onClearSearchHistory
}: JobSearchProps) {
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Use useMemo to memoize the arrays
  const popularJobs = useMemo(() => [
    'Software Engineer',
    'Product Manager',
    'Data Scientist',
    'UX Designer',
    'Marketing Manager',
    'Sales Representative',
    'Customer Service',
    'Project Manager',
    'Business Analyst',
    'HR Manager'
  ], []);

  const popularCompanies = useMemo(() => [
    'Google',
    'Microsoft',
    'Amazon',
    'Apple',
    'Facebook',
    'Netflix',
    'Tesla',
    'Adobe',
    'Salesforce',
    'IBM'
  ], []);

  // Update suggestions based on search query
  useEffect(() => {
    if (searchQuery.length > 0) {
      const jobMatches = popularJobs.filter(job =>
        job.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const companyMatches = popularCompanies.filter(company =>
        company.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions([...jobMatches, ...companyMatches].slice(0, 5));
    } else {
      setSuggestions([]);
    }
  }, [searchQuery, popularJobs, popularCompanies]);

  const handleSearch = () => {
    const searchTerm = [searchQuery, location].filter(Boolean).join(' ');
    onSearchChange(searchTerm);
    setSuggestions([]);
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 pt-32 pb-24 relative overflow-hidden">
      {/* Background pattern for better visibility */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 text-center drop-shadow-md"
          >
            Find Your Next Opportunity
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/90 text-center mb-8 max-w-2xl mx-auto"
          >
            Discover thousands of job opportunities with all the information you need. Search, filter, and apply to your dream job.
          </motion.p>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-lg shadow-xl p-5 mb-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-purple-500" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onFocus={() => {
                    setShowSearchHistory(true);
                  }}
                  onBlur={() => setTimeout(() => {
                    setShowSearchHistory(false);
                  }, 200)}
                  placeholder="Job title, keywords, or company"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                {/* Autocomplete Suggestions */}
                <AnimatePresence>
                  {showSearchHistory && suggestions.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200"
                    >
                      {suggestions.map((suggestion, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="w-full px-4 py-2 text-left hover:bg-purple-50 flex items-center gap-2"
                          onClick={() => {
                            onSearchChange(suggestion);
                            handleSearch();
                          }}
                        >
                          <span className="text-sm text-slate-600">{suggestion}</span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Search History */}
                <AnimatePresence>
                  {showSearchHistory && searchHistory.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200"
                    >
                      <div className="p-2 border-b border-gray-200 flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-600">Recent Searches</span>
                        <button
                          onClick={onClearSearchHistory}
                          className="text-xs text-slate-500 hover:text-slate-700"
                        >
                          Clear All
                        </button>
                      </div>
                      {searchHistory.map((term, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="w-full px-4 py-2 text-left hover:bg-purple-50 flex items-center justify-between"
                          onClick={() => onSearchFromHistory(term)}
                        >
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-slate-400" />
                            <span className="text-sm text-slate-600">{term}</span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-purple-500" />
                </div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City or postcode"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowFilters(!showFilters);
                    setShowAlertModal(false);
                  }}
                  className="p-3 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-colors"
                  title="Filter options"
                >
                  <Filter className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSearch}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center gap-2 font-medium"
                >
                  <Search className="w-5 h-5" />
                  Search
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowAlertModal(true);
                    setShowFilters(false);
                  }}
                  className="p-3 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-colors"
                  title="Create job alert"
                >
                  <Bell className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Expandable Filters */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white rounded-lg shadow-lg p-6 mt-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-slate-900">Filter Options</h2>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowFilters(false)}
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
                <JobFilters filters={filters} onFiltersChange={onFiltersChange} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Job Alert Modal */}
      <AnimatePresence>
        {showAlertModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowAlertModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-slate-900">Create Job Alert</h3>
                <button
                  onClick={() => setShowAlertModal(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <JobAlert onSave={(alert) => {
                onSaveAlert(alert);
                setShowAlertModal(false);
              }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 