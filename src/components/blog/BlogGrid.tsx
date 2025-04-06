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
    <section className="relative py-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-4xl font-bold text-[#111827]">{title}</h2>
            )}
            {description && (
              <p className="mt-4 text-lg font-medium text-[#1f2937]">{description}</p>
            )}
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No posts found.</p>
          </div>
        )}
      </div>
    </section>
  );
} 