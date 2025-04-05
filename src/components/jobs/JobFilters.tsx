"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react';

interface JobFiltersProps {
  filters: {
    jobTypes: string[];
    salaryRange: [number, number];
  };
  onFiltersChange: (filters: { jobTypes: string[]; salaryRange: [number, number] }) => void;
}

export function JobFilters({ filters, onFiltersChange }: JobFiltersProps) {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const jobTypeOptions = [
    { value: 'Full-time', label: 'Full-time' },
    { value: 'Part-time', label: 'Part-time' },
    { value: 'Contract', label: 'Contract' },
    { value: 'Remote', label: 'Remote' },
    { value: 'Internship', label: 'Internship' }
  ];

  const handleJobTypeChange = (type: string) => {
    const newTypes = filters.jobTypes.includes(type)
      ? filters.jobTypes.filter(t => t !== type)
      : [...filters.jobTypes, type];
    onFiltersChange({ ...filters, jobTypes: newTypes });
  };

  const handleSalaryChange = (type: 'min' | 'max', value: number) => {
    const newRange: [number, number] = type === 'min'
      ? [Math.max(0, value), filters.salaryRange[1]]
      : [filters.salaryRange[0], Math.max(filters.salaryRange[0], value)];
    onFiltersChange({ ...filters, salaryRange: newRange });
  };

  const hasActiveFilters = filters.jobTypes.length > 0 || filters.salaryRange[0] > 0 || filters.salaryRange[1] < 200000;

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-purple-600" />
          <h3 className="text-lg font-semibold text-slate-900">Filters</h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={() => onFiltersChange({ jobTypes: [], salaryRange: [0, 200000] })}
            className="text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Clear All
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* Job Types */}
        <div>
          <h4 className="text-sm font-medium text-slate-900 mb-2">Job Type</h4>
          <div className="flex flex-wrap gap-2">
            {jobTypeOptions.map((option) => (
              <motion.button
                key={option.value}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleJobTypeChange(option.value)}
                className={`px-3 py-1 rounded-full text-sm ${
                  filters.jobTypes.includes(option.value)
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {option.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Salary Range */}
        <div>
          <h4 className="text-sm font-medium text-slate-900 mb-2">Salary Range</h4>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input
                type="number"
                value={filters.salaryRange[0]}
                onChange={(e) => handleSalaryChange('min', parseInt(e.target.value) || 0)}
                className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                placeholder="Min"
              />
            </div>
            <span className="text-slate-600">to</span>
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">$</span>
              <input
                type="number"
                value={filters.salaryRange[1]}
                onChange={(e) => handleSalaryChange('max', parseInt(e.target.value) || 0)}
                className="w-full pl-8 pr-4 py-2 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                placeholder="Max"
              />
            </div>
          </div>
        </div>

        {/* Advanced Filters Toggle */}
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="w-full flex items-center justify-between px-4 py-2 text-sm text-slate-600 hover:text-slate-900"
        >
          <span>Advanced Filters</span>
          {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Advanced Filters */}
        <AnimatePresence>
          {showAdvanced && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-4 overflow-hidden"
            >
              {/* Experience Level */}
              <div>
                <h4 className="text-sm font-medium text-slate-900 mb-2">Experience Level</h4>
                <div className="flex flex-wrap gap-2">
                  {['Entry Level', 'Mid Level', 'Senior', 'Lead', 'Executive'].map((level) => (
                    <motion.button
                      key={level}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-600 hover:bg-slate-200"
                    >
                      {level}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Posted Date */}
              <div>
                <h4 className="text-sm font-medium text-slate-900 mb-2">Posted Date</h4>
                <div className="flex flex-wrap gap-2">
                  {['Last 24 hours', 'Last 3 days', 'Last week', 'Last month'].map((date) => (
                    <motion.button
                      key={date}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1 rounded-full text-sm bg-slate-100 text-slate-600 hover:bg-slate-200"
                    >
                      {date}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 