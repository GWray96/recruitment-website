import React from 'react';

const ValueProposition = () => {
  return (
    <section className="w-full py-16 relative min-h-[800px] overflow-hidden bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50">
      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6 z-10">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
            Who We Help
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Is this you?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Candidates Column */}
          <div 
            className="relative group overflow-hidden rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-400/30 bg-white"
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          >
            {/* Content */}
            <div className="relative p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center text-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg">
                👤
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">For Candidates</h2>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Struggling to Find the Right Job?</h3>
              <p className="text-slate-600 mb-6">
                Navigating the job market can be overwhelming. If you&apos;re not landing interviews or finding roles that truly fit your skills, your career growth could be at a standstill.
              </p>
              
              <h4 className="text-xl font-semibold mb-4 text-slate-800">Do any of these sound familiar?</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 flex-shrink-0">❌</span>
                  <span className="text-slate-700">Submitting applications but rarely hearing back?</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 flex-shrink-0">❌</span>
                  <span className="text-slate-700">Feeling lost in your job search with no clear direction?</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 flex-shrink-0">❌</span>
                  <span className="text-slate-700">Unsure if you&apos;re getting the best opportunities available?</span>
                </li>
              </ul>
              
              <p className="text-slate-600 mb-8">
                At <span className="font-bold text-purple-600">RaptorTech Recruitment</span>, we connect top tech talent with companies that value their skills. Let us take the stress out of your job search and guide you toward the right opportunity.
              </p>

              <div className="flex justify-center">
                <a 
                  href="/candidates" 
                  className="group relative inline-flex w-3/4 justify-center items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300"
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                  }}
                >
                  <span className="block transition-opacity duration-300 group-hover:opacity-0">Help Me Find An Opportunity</span>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">Let&apos;s Get Started →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Employers Column */}
          <div 
            className="relative group overflow-hidden rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-400/30 bg-white"
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          >
            {/* Content */}
            <div className="relative p-8">
              <div className="w-12 h-12 mb-6 flex items-center justify-center text-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg">
                🏢
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-900">For Employers</h2>
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Struggling to Find Top Tech Talent?</h3>
              <p className="text-slate-600 mb-6">
                Hiring the right professionals is critical to your business&apos;s success. If your hiring process isn&apos;t delivering skilled candidates who fit your culture, your team&apos;s potential—and your business—may be at risk.
              </p>
              
              <h4 className="text-xl font-semibold mb-4 text-slate-800">Do any of these sound familiar?</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 flex-shrink-0">❌</span>
                  <span className="text-slate-700">Wasting time sifting through unqualified applicants?</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 flex-shrink-0">❌</span>
                  <span className="text-slate-700">Losing top candidates to competitors due to slow hiring processes?</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 flex-shrink-0">❌</span>
                  <span className="text-slate-700">Unsure if you&apos;re attracting the best talent for your needs?</span>
                </li>
              </ul>
              
              <p className="text-slate-600 mb-8">
                At <span className="font-bold text-purple-600">RaptorTech Recruitment</span>, we streamline your hiring process and connect you with highly skilled professionals who fit your business perfectly.
              </p>

              <div className="flex justify-center">
                <a 
                  href="/employers" 
                  className="group relative inline-flex w-3/4 justify-center items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:shadow-lg border border-blue-200 transition duration-300"
                  style={{
                    willChange: 'transform',
                    transform: 'translateZ(0)'
                  }}
                >
                  <span className="block transition-opacity duration-300 group-hover:opacity-0">Help Me Find My Next Talent</span>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">Let&apos;s Get Started →</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Widget */}
        <div className="max-w-3xl mx-auto mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-6 relative">
            {/* Quotation mark in top right */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
            </div>
            <div className="flex flex-col items-center w-full">
              {/* Profile Image Placeholder */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 mb-3 flex items-center justify-center mx-auto">
                <span className="text-xl">👤</span>
              </div>
              
              <div className="flex justify-center mb-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.363 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-base text-slate-700 italic mb-4 text-center">
                &quot;Simon&apos;s friendly and low-pressure approach was a refreshing change. His honesty, ease of communication, and genuine support made the job search seamless—and led me to a great new opportunity.&quot;
              </p>

              <div className="text-center">
                <p className="text-slate-900 font-semibold">Sarah Chen</p>
                <p className="text-slate-600 text-sm">Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition; 