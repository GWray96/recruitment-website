import { motion } from 'framer-motion';
import { MapPin, Clock, Building2, Briefcase, Star, ArrowRight, Scale } from 'lucide-react';
import Image from 'next/image';
import type { Job } from './JobListing';

// Get company initials
const getCompanyInitials = (company: string): string => {
  return company
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

interface JobDetailsProps {
  job: Job;
  onApply: (jobId: string) => void;
  onCompare: (job: Job) => void;
  isInComparison: boolean;
}

export function JobDetails({ job, onApply, onCompare, isInComparison }: JobDetailsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
        <div className="w-16 h-16 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 font-semibold text-xl shrink-0">
          {getCompanyInitials(job.company)}
        </div>
        <div className="flex-1">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{job.title}</h2>
          <p className="text-base sm:text-lg text-gray-600">{job.company}</p>
          <div className="mt-3 flex flex-wrap gap-3 sm:gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Briefcase className="h-4 w-4" />
              {job.type}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {job.posted}
            </span>
          </div>
        </div>
        <div className="hidden sm:flex gap-2">
          <button
            onClick={() => onCompare(job)}
            className={`p-2 rounded-lg transition-colors ${
              isInComparison
                ? 'bg-purple-100 text-purple-600'
                : 'text-gray-400 hover:text-purple-600'
            }`}
          >
            <Scale className="h-5 w-5" />
          </button>
          <button
            onClick={() => onApply(job.id)}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Apply Now
          </button>
        </div>
      </div>

      <div className="mt-6 sm:mt-8">
        <h3 className="text-lg font-semibold text-gray-900">Description</h3>
        <p className="mt-2 text-gray-600 text-base leading-relaxed">{job.description}</p>
      </div>

      <div className="mt-6 sm:mt-8">
        <h3 className="text-lg font-semibold text-gray-900">Requirements</h3>
        <ul className="mt-2 space-y-2">
          {job.requirements.map((req, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
              <span className="text-base leading-relaxed">{req}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 sm:mt-8">
        <h3 className="text-lg font-semibold text-gray-900">Benefits</h3>
        <ul className="mt-2 space-y-2">
          {job.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
              <span className="text-base leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 