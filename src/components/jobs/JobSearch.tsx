"use client";

import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { JobFilters } from './JobFilters';
import { JobAlert } from './JobAlert';
import { Job } from './JobListing';

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
}

export function JobSearch({ 
  searchQuery, 
  onSearchChange, 
  filters, 
  onFiltersChange,
  sortBy,
  onSortChange,
  onSaveAlert
}: JobSearchProps) {
  const [location, setLocation] = useState('');
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  interface SearchSuggestion {
    title: string;
    type: 'job' | 'company' | 'location';
  }

  // Popular tags with counts
  const popularTags = [
    { name: 'Remote', count: 1234 },
    { name: 'Full-time', count: 856 },
    { name: 'Part-time', count: 432 },
    { name: 'Tech', count: 789 }
  ];

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedSearchQuery.length < 2) {
        setSuggestions([]);
        return;
      }

      // Simulate API call - replace with actual API call
      const mockSuggestions: SearchSuggestion[] = [
        { title: `${debouncedSearchQuery} Developer`, type: 'job' },
        { title: `Senior ${debouncedSearchQuery}`, type: 'job' },
        { title: `${debouncedSearchQuery} Solutions`, type: 'company' },
        { title: `${debouncedSearchQuery} Technologies`, type: 'company' },
      ];

      setSuggestions(mockSuggestions);
    };

    fetchSuggestions();
  }, [debouncedSearchQuery]);

  const handleSearch = () => {
    const searchTerm = [searchQuery, location].filter(Boolean).join(' ');
    onSearchChange(searchTerm);
    setShowSuggestions(false);
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Find Your Next Opportunity</h1>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  placeholder="Job title, keywords, or company"
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
                {/* Autocomplete Suggestions */}
                {showSuggestions && suggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        className="w-full px-4 py-2 text-left hover:bg-purple-50 flex items-center gap-2"
                        onClick={() => {
                          onSearchChange(suggestion.title);
                          setShowSuggestions(false);
                          handleSearch();
                        }}
                      >
                        <span className="text-sm text-slate-600">{suggestion.title}</span>
                        <span className="text-xs text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                          {suggestion.type}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="City or postcode"
                  className="w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowFilters(!showFilters);
                    setShowAlert(false);
                  }}
                  className="p-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-colors"
                  title="Filter options"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </button>
                <button
                  onClick={handleSearch}
                  className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </button>
                <button
                  onClick={() => {
                    setShowAlert(!showAlert);
                    setShowFilters(false);
                  }}
                  className="p-2 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-600 rounded-lg hover:from-purple-100 hover:to-blue-100 transition-colors"
                  title="Create job alert"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="flex items-center justify-center gap-2 text-purple-100 flex-wrap">
            <span>Popular:</span>
            {popularTags.map((tag) => (
              <button
                key={tag.name}
                className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors duration-300 flex items-center gap-2"
                onClick={() => {
                  onSearchChange(tag.name);
                  handleSearch();
                }}
              >
                <span>{tag.name}</span>
                <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-xs">
                  {tag.count}
                </span>
              </button>
            ))}
          </div>

          {/* Expandable Filters */}
          {showFilters && (
            <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Filter Options</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <JobFilters onFiltersChange={onFiltersChange} />
            </div>
          )}

          {/* Job Alert Form */}
          {showAlert && (
            <div className="bg-white rounded-lg shadow-lg p-6 mt-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Create Job Alert</h2>
                <button
                  onClick={() => setShowAlert(false)}
                  className="text-slate-500 hover:text-slate-700"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <JobAlert onSave={(alert) => {
                onSaveAlert(alert);
                setShowAlert(false);
              }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 