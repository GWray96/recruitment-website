"use client";

import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

const articles = [
  {
    title: 'The Future of Tech Recruitment in 2024',
    excerpt: 'Explore emerging trends in technical recruitment, from AI-powered assessments to remote hiring strategies.',
    date: 'March 28, 2024',
    category: 'Industry Insights',
    readTime: '5 min read',
    imageUrl: '/blog/tech-recruitment-2024.jpg',
  },
  {
    title: 'Building Inclusive Tech Teams',
    excerpt: 'Best practices for creating diverse and inclusive technical teams that drive innovation and success.',
    date: 'March 25, 2024',
    category: 'Diversity & Inclusion',
    readTime: '4 min read',
    imageUrl: '/blog/inclusive-teams.jpg',
  },
  {
    title: 'Top Skills for Full-Stack Developers',
    excerpt: 'A comprehensive guide to the most in-demand skills for full-stack developers in today\'s market.',
    date: 'March 20, 2024',
    category: 'Career Development',
    readTime: '6 min read',
    imageUrl: '/blog/fullstack-skills.jpg',
  },
];

export default function LatestArticles() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
            Latest Insights
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Industry Insights</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Stay informed with our latest articles on tech recruitment, industry trends, and career development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl hover:shadow-purple-400/20 transition-all duration-300 overflow-hidden transform hover:scale-[1.02]"
            >
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-purple-600 font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{article.readTime}</span>
                  <Link 
                    href="/blog" 
                    className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full shadow-md hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300 group"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
} 