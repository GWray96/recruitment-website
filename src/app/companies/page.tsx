'use client';

import React, { useState } from 'react';
import { Search, Building, MapPin, Users } from 'lucide-react';

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Search Section */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Featured Companies</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search companies..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Company Card Template */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                <Building className="w-8 h-8 text-gray-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  TechCorp Solutions
                </h3>
                <p className="text-gray-600 mb-2">Technology • Software • AI</p>
                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    500+ employees
                  </div>
                </div>
                <div className="mt-4">
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    View Company Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* More company cards would be rendered here */}
        </div>
      </section>
    </main>
  );
} 