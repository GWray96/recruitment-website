import Hero from '@/components/home/Hero';
import JobList from '@/components/jobs/JobList';
import ValueProposition from '@/components/home/ValueProposition';
import About from '@/components/home/About';
import { mockJobs } from '@/data/mockData';

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Value Proposition Section */}
      <ValueProposition />
      
      {/* About Section */}
      <About />
      
      {/* Featured Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Jobs
            </h2>
            <p className="text-xl text-gray-600">
              Discover opportunities from top companies
            </p>
          </div>
          
          <JobList jobs={mockJobs} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose RecruitPro
            </h2>
            <p className="text-xl text-gray-600">
              We make your job search easier and more effective
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Job Matching</h3>
              <p className="text-gray-600">
                Our AI-powered algorithm matches you with the most relevant jobs
                based on your skills and preferences.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Apply</h3>
              <p className="text-gray-600">
                Apply to multiple jobs with a single click using your saved profile
                and resume.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
              <p className="text-gray-600">
                Get instant notifications when employers view your profile or when
                new matching jobs are posted.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
