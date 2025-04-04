import { Job, Testimonial, BlogPost } from '@/types';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'New York, NY',
    type: 'full-time',
    description: 'We are looking for an experienced Frontend Developer to join our team...',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with Next.js',
      'Understanding of modern web technologies',
    ],
    salary: {
      min: 120000,
      max: 180000,
      currency: 'USD',
    },
    postedAt: '2024-03-15',
    expiresAt: '2024-04-15',
    employerId: 'emp1',
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Innovation Labs',
    location: 'Remote',
    type: 'full-time',
    description: 'Seeking a Product Manager to drive our product development...',
    requirements: [
      '3+ years of product management experience',
      'Strong analytical skills',
      'Experience with agile methodologies',
      'Excellent communication skills',
    ],
    salary: {
      min: 100000,
      max: 150000,
      currency: 'USD',
    },
    postedAt: '2024-03-14',
    expiresAt: '2024-04-14',
    employerId: 'emp2',
  },
];

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    company: 'TechCorp Inc.',
    content: 'The recruitment process was smooth and professional. I found my dream job within weeks!',
    rating: 5,
    imageUrl: '/testimonials/sarah.jpg',
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'Innovation Labs',
    content: 'Great platform for finding talented candidates. The matching algorithm is impressive.',
    rating: 4,
    imageUrl: '/testimonials/michael.jpg',
  },
];

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Ace Your Technical Interview',
    content: 'Technical interviews can be challenging...',
    author: 'Jane Smith',
    publishedAt: '2024-03-10',
    tags: ['career-advice', 'interview-tips', 'tech-careers'],
    excerpt: 'Learn the best strategies to succeed in your technical interviews...',
    imageUrl: '/blog/technical-interview.jpg',
  },
  {
    id: '2',
    title: 'Remote Work: The Future of Employment',
    content: 'The pandemic has changed how we work...',
    author: 'John Doe',
    publishedAt: '2024-03-08',
    tags: ['remote-work', 'future-of-work', 'employment-trends'],
    excerpt: 'Explore the impact of remote work on the job market...',
    imageUrl: '/blog/remote-work.jpg',
  },
]; 