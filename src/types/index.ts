export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  description: string;
  requirements: string[];
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  postedAt: string;
  expiresAt: string;
  employerId: string;
}

export interface Candidate {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  location: string;
  skills: string[];
  experience: {
    title: string;
    company: string;
    startDate: string;
    endDate?: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    graduationYear: string;
  }[];
  resumeUrl?: string;
}

export interface Employer {
  id: string;
  companyName: string;
  email: string;
  phone?: string;
  location: string;
  description: string;
  website?: string;
  logoUrl?: string;
  industry: string;
  size: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  excerpt: string;
  imageUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl?: string;
  rating: number;
} 