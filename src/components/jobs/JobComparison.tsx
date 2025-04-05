import { motion } from 'framer-motion';
import { X, ArrowRight, MapPin, Briefcase, Clock } from 'lucide-react';
import type { Job } from './JobListing';

interface JobComparisonProps {
  selectedJobs: Job[];
  onRemoveJob: (jobId: string) => void;
  onApply: (jobId: string) => void;
}

export function JobComparison({ selectedJobs, onRemoveJob, onApply }: JobComparisonProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-slate-900">Compare Jobs</h2>
        <div className="text-sm text-slate-600">
          {selectedJobs.length}/3 jobs selected
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedJobs.map((job) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative bg-slate-50 rounded-lg p-4"
          >
            <button
              onClick={() => onRemoveJob(job.id)}
              className="absolute top-2 right-2 p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-slate-900">{job.title}</h3>
              <p className="text-slate-600">{job.company}</p>
            </div>

            <div className="space-y-2 text-sm text-slate-600">
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onApply(job.id)}
              className="mt-4 w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        ))}
      </div>

      {selectedJobs.length === 0 && (
        <div className="text-center py-8 text-slate-600">
          Select jobs to compare them
        </div>
      )}
    </div>
  );
} 