import Link from 'next/link';
import { BlogPost } from '@/data/blogPosts';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  // Function to get initials from author name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <article className="relative bg-gradient-to-br from-white via-white to-blue-50/30 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:to-purple-50/30 flex flex-col h-full group backdrop-blur-sm">
      {/* Card background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/10 via-transparent to-blue-100/10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.purple.100/0.1),transparent_50%)] pointer-events-none"></div>
      
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full relative">
        {/* Category Badge */}
        <div className="px-4 sm:px-6 pt-3 sm:pt-4 relative">
          <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-sm ${
            post.category === 'candidate' 
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
              : 'bg-gradient-to-r from-purple-600 to-purple-700 text-white'
          }`}>
            {post.category === 'candidate' ? 'For Candidates' : 'For Employers'}
          </span>
        </div>

        {/* Image Container */}
        <div className="relative aspect-[16/9] mt-3 sm:mt-4">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-blue-700/10 group-hover:opacity-75 transition-opacity duration-300 z-10"></div>
          <PlaceholderImage 
            title={post.title} 
            width={600} 
            height={400} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-4 sm:p-6 flex-1 flex flex-col relative">
          <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-700 text-white text-xs sm:text-sm font-medium flex-shrink-0 shadow-sm">
              {getInitials(post.author.name)}
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">{post.author.name}</p>
              <p className="text-xs text-gray-500 truncate">{post.author.role}</p>
            </div>
          </div>
          
          <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-purple-900 to-blue-900 bg-clip-text text-transparent mb-2 sm:mb-3 line-clamp-2 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
            {post.title}
          </h3>
          
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-5 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between pt-3 sm:pt-4 mt-auto border-t border-gray-100/50">
            <div className="flex items-center text-xs sm:text-sm text-gray-500">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 sm:py-1 text-xs font-medium bg-gradient-to-r from-purple-50 to-blue-50 text-blue-700 rounded-full border border-blue-100/50 shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
} 