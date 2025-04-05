'use client';

import React from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  FileText, 
  Wrench, 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  Users,
  FileSpreadsheet,
  MessageSquare,
  Briefcase,
  DollarSign,
  ClipboardList,
  BarChart,
  Settings,
  BookMarked,
  Lightbulb,
  Target,
  Download,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-16" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-400/10 text-white mb-4 border border-blue-400/20">
              Free Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything You Need to Succeed
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Access our comprehensive collection of templates, guides, and tools to enhance your career or build your team.
            </p>
            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 text-white/90">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>10,000+ Downloads</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>100% Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Job Seekers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              For Job Seekers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Essential resources to help you land your dream tech job and advance your career.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              icon={<FileSpreadsheet className="w-5 h-5" />}
              title="ATS-Optimized CV Template"
              description="Professional CV template designed to pass Applicant Tracking Systems"
              link="/resources/cv-template"
              downloads="2,500+"
              rating={4.9}
              timeToComplete="5 mins"
              isPopular={true}
            />
            <ResourceCard
              icon={<MessageSquare className="w-5 h-5" />}
              title="Cover Letter Generator"
              description="Create compelling cover letters tailored to tech roles"
              link="/resources/cover-letter"
              downloads="1,800+"
              rating={4.8}
              timeToComplete="10 mins"
            />
            <ResourceCard
              icon={<ClipboardList className="w-5 h-5" />}
              title="Technical Interview Guide"
              description="Comprehensive guide to ace your technical interviews"
              link="/resources/interview-guide"
              downloads="3,200+"
              rating={4.9}
              timeToComplete="15 mins"
              isPopular={true}
            />
            <ResourceCard
              icon={<DollarSign className="w-5 h-5" />}
              title="Salary Negotiation Toolkit"
              description="Templates and scripts for successful salary negotiations"
              link="/resources/salary-toolkit"
              downloads="1,500+"
              rating={4.7}
              timeToComplete="20 mins"
            />
            <ResourceCard
              icon={<Target className="w-5 h-5" />}
              title="Career Path Planner"
              description="Interactive tool to plan your tech career progression"
              link="/resources/career-planner"
              downloads="900+"
              rating={4.8}
              timeToComplete="30 mins"
            />
            <ResourceCard
              icon={<BookMarked className="w-5 h-5" />}
              title="Portfolio Builder Guide"
              description="Step-by-step guide to create an impressive tech portfolio"
              link="/resources/portfolio-guide"
              downloads="1,200+"
              rating={4.9}
              timeToComplete="25 mins"
            />
          </div>
        </div>
      </section>

      {/* For Employers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              For Employers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tools and templates to streamline your hiring process and build strong teams.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              icon={<FileText className="w-5 h-5" />}
              title="Job Description Templates"
              description="Professional templates for technical roles"
              link="/resources/job-templates"
              downloads="1,800+"
              rating={4.8}
              timeToComplete="10 mins"
              isPopular={true}
            />
            <ResourceCard
              icon={<Settings className="w-5 h-5" />}
              title="Technical Assessment Guide"
              description="Framework for evaluating technical candidates"
              link="/resources/assessment-guide"
              downloads="1,200+"
              rating={4.7}
              timeToComplete="15 mins"
            />
            <ResourceCard
              icon={<Users className="w-5 h-5" />}
              title="Team Structure Templates"
              description="Organizational charts and role frameworks"
              link="/resources/team-templates"
              downloads="950+"
              rating={4.8}
              timeToComplete="20 mins"
            />
            <ResourceCard
              icon={<Wrench className="w-5 h-5" />}
              title="Onboarding Checklist"
              description="Comprehensive onboarding process template"
              link="/resources/onboarding"
              downloads="1,500+"
              rating={4.9}
              timeToComplete="5 mins"
              isPopular={true}
            />
            <ResourceCard
              icon={<BarChart className="w-5 h-5" />}
              title="Skills Matrix Template"
              description="Tool to map and track team capabilities"
              link="/resources/skills-matrix"
              downloads="800+"
              rating={4.7}
              timeToComplete="15 mins"
            />
            <ResourceCard
              icon={<Lightbulb className="w-5 h-5" />}
              title="Remote Work Guide"
              description="Best practices for remote team management"
              link="/resources/remote-guide"
              downloads="1,100+"
              rating={4.8}
              timeToComplete="25 mins"
            />
          </div>
        </div>
      </section>

      {/* Industry Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Industry Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest trends and best practices in tech recruitment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ResourceCard
              icon={<BarChart className="w-5 h-5" />}
              title="Tech Salary Guide"
              description="Comprehensive salary insights for tech roles"
              link="/resources/salary-guide"
              downloads="2,800+"
              rating={4.9}
              timeToComplete="30 mins"
              isPopular={true}
            />
            <ResourceCard
              icon={<BookOpen className="w-5 h-5" />}
              title="Tech Stack Report"
              description="Analysis of popular technologies and frameworks"
              link="/resources/tech-stack"
              downloads="1,600+"
              rating={4.8}
              timeToComplete="20 mins"
            />
            <ResourceCard
              icon={<Target className="w-5 h-5" />}
              title="Remote Work Statistics"
              description="Data and insights on remote work trends"
              link="/resources/remote-stats"
              downloads="1,200+"
              rating={4.7}
              timeToComplete="15 mins"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Trusted by Tech Professionals
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of tech professionals who have used our resources to advance their careers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="font-semibold">4.9/5 Average Rating</span>
              </div>
              <p className="text-gray-600">Based on 2,500+ reviews from tech professionals</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <Users className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-semibold">10,000+ Downloads</span>
              </div>
              <p className="text-gray-600">Resources downloaded by tech professionals worldwide</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="font-semibold">100% Free</span>
              </div>
              <p className="text-gray-600">All resources available at no cost</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ResourceCard({ 
  icon, 
  title, 
  description, 
  link,
  downloads,
  rating,
  timeToComplete,
  isPopular = false
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  downloads: string;
  rating: number;
  timeToComplete: string;
  isPopular?: boolean;
}) {
  return (
    <Link href={link}>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow relative">
        {isPopular && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-medium px-3 py-1 rounded-tl-lg rounded-bl-lg">
            Popular
          </div>
        )}
        <div className="flex items-start">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
            <div className="text-white">
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Download className="w-4 h-4 mr-1" />
                {downloads}
              </div>
              <div className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                {rating}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {timeToComplete}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 