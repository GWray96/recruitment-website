'use client';

import React from 'react';
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import PlaceholderImage from '@/components/ui/PlaceholderImage';
import BlogGrid from '@/components/blog/BlogGrid';

// This would come from your data file
const categories = [
  { name: 'Recruitment Tips', icon: '🎯', description: 'Expert advice on modern recruitment strategies' },
  { name: 'Career Development', icon: '📈', description: 'Guide your career path to success' },
  { name: 'Industry Insights', icon: '💡', description: 'Latest trends in tech recruitment' },
];

export default function BlogPage() {
  const featuredPost = blogPosts[0]; // Use the first blog post as featured
  const recentPosts = blogPosts.slice(1, 4); // Use the next 3 posts for recent posts

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(147,51,234,0.07),transparent)]"></div>
      
      {/* Content Container */}
      <div className="relative">
        {/* Hero Section with Featured Post */}
        <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 border-b">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.purple.400/0.3),transparent_50%)]"></div>
          {/* Dot pattern overlay for hero */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="max-w-7xl mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-28 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6 lg:sticky lg:top-24">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm">Featured Article</span>
                <h1 className="text-4xl font-bold text-white tracking-tight">
                  {featuredPost.title}
                </h1>
                <p className="text-xl text-blue-50">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center font-medium text-white">
                    {featuredPost.author.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-white font-medium">{featuredPost.author.name}</p>
                    <p className="text-blue-100">{featuredPost.date} · {featuredPost.readTime}</p>
                  </div>
                </div>
                <Link 
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center px-6 py-3 border border-white/20 text-base font-medium rounded-md shadow-sm text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200"
                >
                  Read More
                </Link>
              </div>
              <div className="relative w-full aspect-[4/3] lg:aspect-[3/2]">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-blue-700/10"></div>
                <PlaceholderImage
                  title={featuredPost.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white pointer-events-none"></div>
          <BlogGrid
            posts={recentPosts}
            title="Latest Articles"
            description="Stay up to date with the latest insights in tech recruitment"
          />
        </section>

        {/* Categories Section */}
        <section className="relative py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Explore Topics</h2>
              <p className="mt-4 text-xl text-gray-500">Find the insights you need in our curated categories</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 relative"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-gray-500">{category.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-600 to-purple-600 py-16">
          {/* Dot pattern overlay for newsletter */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
              <p className="mt-4 text-xl text-blue-50">
                Get the latest recruitment insights and career tips delivered to your inbox.
              </p>
              <form className="mt-8 sm:flex justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:max-w-xs px-5 py-3 border border-white/20 rounded-md shadow-sm bg-white/10 backdrop-blur-sm text-white placeholder-blue-200 focus:ring-white/30 focus:border-white/30"
                />
                <button
                  type="submit"
                  className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto px-6 py-3 border border-white/20 text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-blue-600"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-3 text-sm text-blue-100">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 