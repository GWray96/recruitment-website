import { Job } from './JobListing';

interface JobComparisonProps {
  selectedJobs: Job[];
  onRemoveJob: (jobId: string) => void;
  onApply: (jobId: string) => void;
}

export function JobComparison({ selectedJobs, onRemoveJob, onApply }: JobComparisonProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-slate-900">Compare Jobs</h3>
        <span className="text-sm text-slate-500">{selectedJobs.length}/3 jobs selected</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="space-y-6">
          {selectedJobs.map((job) => (
            <div key={job.id} className="relative">
              <button
                onClick={() => onRemoveJob(job.id)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50"
              >
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-slate-900 mb-1">{job.title}</h4>
                <p className="text-sm text-slate-600 mb-2">{job.company}</p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded-full">
                    {job.type}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium text-slate-700 bg-slate-100 rounded-full">
                    {job.location}
                  </span>
                  <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                    {job.salary}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onApply(job.id)}
                  className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedJobs.length === 0 && (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-slate-500">Select jobs to compare</p>
        </div>
      )}
    </div>
  );
} 