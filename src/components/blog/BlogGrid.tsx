import React from 'react';
import { BlogPost } from '@/data/blogPosts';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
  title?: string;
  description?: string;
}

export default function BlogGrid({ posts, title, description }: BlogGridProps) {
  return (
    <section className="relative py-10 sm:py-12 md:py-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-8 sm:mb-12">
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827]">{title}</h2>
            )}
            {description && (
              <p className="mt-2 sm:mt-4 text-base sm:text-lg text-[#1f2937]">{description}</p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <p className="text-gray-500 text-base sm:text-lg">No posts found.</p>
          </div>
        )}
      </div>
    </section>
  );
} 