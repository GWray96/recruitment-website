'use client';

import React, { useState } from 'react';
import { Search, Calendar, User, Tag } from 'lucide-react';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-gray-600 mb-8">
              Insights, trends, and advice from the recruitment experts.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post Card */}
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>March 15, 2024</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>John Doe</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    The Future of Remote Work: Trends and Predictions
                  </a>
                </h2>
                <p className="text-gray-600 mb-4">
                  Explore the latest trends in remote work and how they're shaping the future of recruitment.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Tag className="w-4 h-4 mr-1" />
                  <span>Remote Work, Future of Work</span>
                </div>
              </div>
            </article>
            {/* More blog post cards would be rendered here */}
          </div>
        </div>
      </section>
    </main>
  );
} 