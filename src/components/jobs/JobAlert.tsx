import React, { useState } from 'react';

interface JobAlertProps {
  onSave: (alert: {
    query: string;
    location: string;
    frequency: 'daily' | 'weekly' | 'monthly';
    jobTypes: string[];
    salaryRange: [number, number];
  }) => void;
}

export function JobAlert({ onSave }: JobAlertProps) {
  const [jobQuery, setJobQuery] = useState('');
  const [location, setLocation] = useState('');
  const [frequency, setFrequency] = useState<'daily' | 'weekly' | 'monthly'>('daily');
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<[number, number]>([0, 200000]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ 
      query: jobQuery, 
      location, 
      frequency,
      jobTypes,
      salaryRange
    });
    setJobQuery('');
    setLocation('');
    setFrequency('daily');
    setJobTypes([]);
    setSalaryRange([0, 200000]);
  };

  const handleClear = () => {
    setJobQuery('');
    setLocation('');
    setFrequency('daily');
    setJobTypes([]);
    setSalaryRange([0, 200000]);
  };

  const handleJobTypeChange = (type: string) => {
    setJobTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-8 mb-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <label htmlFor="jobQuery" className="block text-sm font-medium text-slate-700 mb-1">
              Job Title or Keywords
            </label>
            <input
              type="text"
              id="jobQuery"
              value={jobQuery}
              onChange={(e) => setJobQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="e.g. Software Engineer"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="e.g. London, UK"
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-2">Job Type</h3>
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
        <div className="space-y-4">
          <div>
            <label htmlFor="frequency" className="block text-sm font-medium text-slate-700 mb-1">
              Alert Frequency
            </label>
            <select
              id="frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value as 'daily' | 'weekly' | 'monthly')}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-900 mb-2">Salary Range</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm text-slate-600">Min Salary</label>
                <select
                  value={salaryRange[0]}
                  onChange={(e) => setSalaryRange([Number(e.target.value), salaryRange[1]])}
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
                  onChange={(e) => setSalaryRange([salaryRange[0], Number(e.target.value)])}
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
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={handleClear}
          className="text-sm text-slate-600 hover:text-slate-900"
        >
          Clear
        </button>
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-600">
            {jobTypes.length + (jobQuery ? 1 : 0) + (location ? 1 : 0)} criteria set
          </span>
          <button
            type="submit"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Create Alert
          </button>
        </div>
      </div>
    </form>
  );
} 