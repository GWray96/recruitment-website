export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  postedDate: string;
  skills: string[];
  isNew?: boolean;
  isUrgent?: boolean;
  description: string;
  requirements: string[];
  benefits: string[];
  responsibilities: string[];
  workHours: string;
  workEnvironment: string;
  teamSize: string;
  reportingStructure: string;
  growthOpportunities: string[];
  companyCulture: string;
  applicationProcess: string[];
}

interface JobListingProps extends Job {
  onSelect: (job: Job) => void;
  onSave: (jobId: string) => void;
  onShare: (jobId: string) => void;
  isSelected?: boolean;
}

export function JobListing({
  id,
  title,
  company,
  location,
  salary,
  type,
  postedDate,
  skills,
  isNew,
  isUrgent,
  description,
  requirements,
  benefits,
  responsibilities,
  workHours,
  workEnvironment,
  teamSize,
  reportingStructure,
  growthOpportunities,
  companyCulture,
  applicationProcess,
  onSelect,
  onSave,
  onShare,
  isSelected,
}: JobListingProps) {
  const jobData = {
    id,
    title,
    company,
    location,
    salary,
    type,
    postedDate,
    skills,
    isNew,
    isUrgent,
    description,
    requirements,
    benefits,
    responsibilities,
    workHours,
    workEnvironment,
    teamSize,
    reportingStructure,
    growthOpportunities,
    companyCulture,
    applicationProcess,
  };

  return (
    <div
      onClick={() => onSelect(jobData)}
      className={`group bg-white rounded-lg p-6 shadow-sm border border-gray-200 
        hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300 
        hover:-translate-y-1 cursor-pointer relative ${
          isSelected ? 'ring-2 ring-purple-600' : ''
        }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex-shrink-0 flex items-center justify-center">
            <span className="text-xl font-semibold text-purple-600">{company[0]}</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1 text-slate-900 group-hover:text-purple-600 transition-colors">{title}</h3>
            <p className="text-slate-600">{company}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {isNew && (
            <span className="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full shadow-sm">
              New
            </span>
          )}
          {isUrgent && (
            <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full shadow-sm">
              Urgent
            </span>
          )}
          <span className="px-3 py-1 text-white text-sm rounded-full bg-gradient-to-r from-purple-600 to-blue-600">
            {type}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap gap-y-2 text-slate-600 mb-4">
        <div className="flex items-center gap-1 w-1/2">
          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1 w-1/2">
          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium">{salary}</span>
        </div>
        <div className="flex items-center gap-1 w-1/2">
          <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{postedDate}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gradient-to-r from-purple-50 to-blue-50 text-purple-700 text-sm rounded-full border border-purple-100"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSave(id);
            }}
            className="p-2 text-gray-500 hover:text-purple-600 rounded-full hover:bg-purple-50"
            title="Save job"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onShare(id);
            }}
            className="p-2 text-gray-500 hover:text-purple-600 rounded-full hover:bg-purple-50"
            title="Share job"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(jobData);
          }}
          className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center gap-1"
        >
          View Details
          <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
} 