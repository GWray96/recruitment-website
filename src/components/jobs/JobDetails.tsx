import { motion } from 'framer-motion';
import { MapPin, Clock, Building2, Briefcase, Star, ArrowRight } from 'lucide-react';
import type { Job } from './JobListing';

interface JobDetailsProps {
  job: Job;
  onApply: (jobId: string) => void;
  onCompare: (job: Job) => void;
  isInComparison: boolean;
}

export function JobDetails({ job, onApply, onCompare, isInComparison }: JobDetailsProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-start gap-4">
        {job.logo ? (
          <img
            src={job.logo}
            alt={`${job.company} logo`}
            className="w-16 h-16 rounded-lg object-contain"
          />
        ) : (
          <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center">
            <Building2 className="w-8 h-8 text-purple-600" />
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-slate-900">{job.title}</h2>
          <p className="text-lg text-slate-600">{job.company}</p>
          
          <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{job.posted}</span>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-slate-900 font-medium">{job.salary}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Description</h3>
          <p className="text-slate-600">{job.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Benefits</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            {job.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onApply(job.id)}
          className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
        >
          Apply Now
          <ArrowRight className="w-4 h-4" />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCompare(job)}
          className={`p-3 rounded-lg transition-colors ${
            isInComparison
              ? 'bg-purple-100 text-purple-600'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
          title={isInComparison ? 'Remove from comparison' : 'Add to comparison'}
        >
          <Star className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
} 