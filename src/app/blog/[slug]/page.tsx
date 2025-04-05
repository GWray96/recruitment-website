import Link from 'next/link';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { notFound } from 'next/navigation';
import PlaceholderImage from '@/components/ui/PlaceholderImage';

// Define the correct type for Next.js 15
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function BlogPostPage({ params }: Props) {
  // Await the params since it's a Promise in Next.js 15
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) {
    notFound();
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(147,51,234,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(37,99,235,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(147,51,234,0.02)_0%,rgba(37,99,235,0.02)_50%,rgba(147,51,234,0.02)_100%)]"></div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700">
        {/* Soft pattern overlay for hero */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.purple.400/0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.blue.400/0.2),transparent_70%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-28 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Category Badge */}
            <div className="mb-6">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm ${
                post.category === 'candidate' 
                  ? 'bg-white/10 text-white border border-white/20' 
                  : 'bg-white/10 text-white border border-white/20'
              }`}>
                {post.category === 'candidate' ? 'For Candidates' : 'For Employers'}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {post.title}
            </h1>

            {/* Author and Meta */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center font-medium text-white border border-white/20">
                {post.author.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-blue-100">{post.date} · {post.readTime}</p>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[2/1] rounded-xl overflow-hidden mb-12 shadow-xl ring-1 ring-black/5">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-blue-700/10 z-10"></div>
              <PlaceholderImage
                title={post.title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50 rounded-xl -z-10"></div>
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              {/* Tags */}
              <div className="mt-8 pt-8 border-t border-gray-200/50">
                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-blue-700 rounded-full text-sm border border-blue-100/50 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="relative">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group"
                    >
                      <article className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-lg border border-gray-200/50">
                        <div className="relative aspect-[3/2]">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-blue-700/10 group-hover:opacity-75 transition-opacity duration-300 z-10"></div>
                          <PlaceholderImage 
                            title={relatedPost.title} 
                            width={600} 
                            height={400} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {relatedPost.readTime}
                          </p>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
} 