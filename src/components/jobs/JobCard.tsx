import Link from 'next/link';
import { MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';
import { Job } from '@/types';

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  const formatSalary = (min: number, max: number, currency: string) => {
    return `${currency}${min.toLocaleString()} - ${currency}${max.toLocaleString()}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            <Link href={`/jobs/${job.id}`} className="hover:text-primary">
              {job.title}
            </Link>
          </h3>
          <p className="text-gray-600">{job.company}</p>
        </div>
        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
          {job.type}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Briefcase className="h-4 w-4 mr-2" />
          <span>{job.type}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign className="h-4 w-4 mr-2" />
          <span>{formatSalary(job.salary.min, job.salary.max, job.salary.currency)}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span>Posted {formatDate(job.postedAt)}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.requirements.slice(0, 3).map((req, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {req}
          </span>
        ))}
        {job.requirements.length > 3 && (
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
            +{job.requirements.length - 3} more
          </span>
        )}
      </div>

      <div className="flex justify-between items-center">
        <Link
          href={`/jobs/${job.id}`}
          className="text-primary font-semibold hover:text-primary/80"
        >
          View Details
        </Link>
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard; 