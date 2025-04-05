import React, { useState } from 'react';
import { Job } from './JobListing';

interface JobFiltersProps {
  onFiltersChange: (filters: {
    jobTypes: string[];
    salaryRange: [number, number];
  }) => void;
}

export function JobFilters({ onFiltersChange }: JobFiltersProps) {
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 200000]);

  const handleJobTypeChange = (type: string) => {
    const newJobTypes = jobTypes.includes(type)
      ? jobTypes.filter(t => t !== type)
      : [...jobTypes, type];
    setJobTypes(newJobTypes);
    updateFilters(newJobTypes, salaryRange);
  };

  const updateFilters = (
    types: string[],
    salary: [number, number]
  ) => {
    onFiltersChange({
      jobTypes: types,
      salaryRange: salary
    });
  };

  const handleClear = () => {
    setJobTypes([]);
    setSalaryRange([0, 200000]);
    updateFilters([], [0, 200000]);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Job Types */}
          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-3">Job Type</h3>
            <div className="space-y-2">
              {['Full-time', 'Part-time', 'Contract', 'Remote', 'Hybrid'].map(type => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={jobTypes.includes(type)}
                    onChange={() => handleJobTypeChange(type)}
                    className="h-4 w-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-slate-600">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Salary Range */}
          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-3">Salary Range</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-600">Min Salary</label>
                <select
                  value={salaryRange[0]}
                  onChange={(e) => {
                    const newRange: [number, number] = [Number(e.target.value), salaryRange[1]];
                    setSalaryRange(newRange);
                    updateFilters(jobTypes, newRange);
                  }}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 rounded-md"
                >
                  {[0, 30000, 50000, 70000, 90000, 120000].map(value => (
                    <option key={value} value={value}>
                      ${value.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm text-slate-600">Max Salary</label>
                <select
                  value={salaryRange[1]}
                  onChange={(e) => {
                    const newRange: [number, number] = [salaryRange[0], Number(e.target.value)];
                    setSalaryRange(newRange);
                    updateFilters(jobTypes, newRange);
                  }}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 rounded-md"
                >
                  {[50000, 70000, 90000, 120000, 150000, 200000].map(value => (
                    <option key={value} value={value}>
                      ${value.toLocaleString()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-200">
        <button
          onClick={handleClear}
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          Clear
        </button>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-600">
            {jobTypes.length} filters applied
          </span>
          <button
            onClick={() => onFiltersChange({ jobTypes, salaryRange })}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
} 