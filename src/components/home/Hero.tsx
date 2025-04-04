'use client';

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="relative bg-gradient-to-r from-primary to-primary/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Dream Job Today
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with top employers and discover opportunities that match your skills and aspirations.
          </p>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Job title, keywords, or company"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-primary"
                  >
                    <FaSearch className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Search Jobs
              </button>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="mt-8">
            <p className="text-white/80 mb-2">Popular searches:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Software Engineer', 'Product Manager', 'Data Analyst', 'Marketing'].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className="px-4 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">10K+</div>
              <div className="text-white/80">Active Jobs</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">5K+</div>
              <div className="text-white/80">Companies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">50K+</div>
              <div className="text-white/80">Job Seekers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">95%</div>
              <div className="text-white/80">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 