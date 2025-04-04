import React from 'react';

const About = () => {
  const specialisms = [
    { icon: '<>', title: 'Software Development & Testing' },
    { icon: '🏆', title: 'Projects, Change & Business Analysis' },
    { icon: '📊', title: 'Advanced Data and BI' },
    { icon: '🔧', title: 'Infrastructure & Support' },
    { icon: '👥', title: 'IT Leadership' },
    { icon: '📢', title: 'Digital Marketing' },
  ];

  return (
    <section id="why-nexustech" className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* Why NexusTech Section */}
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-indigo-600 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Why NexusTech?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Connecting great talent with forward-thinking businesses across East Anglia.
            </p>
          </div>

          {/* More Than Just a Name */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">More Than Just a Name</h3>
              <div className="space-y-4 text-slate-600">
                <p>
                  NexusTech Recruitment was born from a passion for connecting great talent with
                  forward-thinking businesses. Our name represents the intersection of technology and human potential.
                </p>
                <p>
                  The word &apos;Nexus&apos; means a connection or series of connections linking two or more things.
                  That&apos;s exactly what we do—we create meaningful connections between talented professionals
                  and innovative companies, forming a nexus of technological advancement and career growth.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Who We Are</h3>
              <div className="space-y-4 text-slate-600">
                <p>
                  NexusTech Recruitment is a specialist IT recruitment agency with deep-rooted networks
                  across East Anglia. We pride ourselves on delivering a personalized, proactive, and
                  expert-driven approach to hiring.
                </p>
                <p>
                  Whether you&apos;re a business looking for top-tier IT talent or a professional seeking your
                  next career move, we take the time to understand your needs and guide you through the
                  process—because no two businesses or candidates are the same.
                </p>
              </div>
            </div>
          </div>

          {/* Our Specialisms */}
          <div>
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 text-indigo-600 rounded-full text-sm font-medium mb-4">
              Expertise
            </span>
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Our Specialisms</h3>
            <p className="text-slate-600 mb-8 max-w-3xl">
              With our in-depth knowledge of the tech industry and a commitment to building lasting
              relationships, we&apos;re here to help you find the perfect match.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {specialisms.map((specialism, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-indigo-100/50 hover:shadow-lg hover:shadow-indigo-400/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg">
                    {specialism.icon}
                  </div>
                  <h4 className="font-semibold text-lg text-slate-900">{specialism.title}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="/virtual-coffee"
              className="group px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 inline-flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-110"
            >
              <span>Let&apos;s Have a Virtual Coffee</span>
              <svg 
                className="w-5 h-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Coffee cup outline */}
                <path 
                  d="M18 8h-1V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2H6a2 2 0 00-2 2v3a7 7 0 1014 0v-3a2 2 0 00-2-2z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                {/* Steam lines */}
                <path 
                  className="group-hover:animate-[steam_1s_ease-in-out_infinite]"
                  d="M12 4v2m-2 0v1m4-1v1" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                {/* Coffee liquid */}
                <path
                  className="origin-bottom transition-all duration-700 scale-y-0 group-hover:scale-y-100"
                  d="M7 13v2a5 5 0 0010 0v-2"
                  fill="currentColor"
                  fillOpacity="0.6"
                >
                  <animate
                    attributeName="d"
                    dur="1.5s"
                    repeatCount="indefinite"
                    values="M7 13v2a5 5 0 0010 0v-2;
                           M7 13v4a5 5 0 0010 0v-4;
                           M7 13v2a5 5 0 0010 0v-2"
                  />
                </path>
              </svg>
            </a>
          </div>

          {/* Social Proof Widget */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-6 relative">
              {/* Quotation mark in top right */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full transform translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
              </div>
              <div className="flex flex-col items-center">
                {/* Profile Image Placeholder */}
                <div className="w-12 h-12 rounded-full bg-gray-200 mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
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
                <p className="text-base text-gray-700 italic mb-4 text-center">
                  &quot;Simon moves extremely quickly—which I was super happy about. From applying to receiving a formal offer, it took just 7 days! His communication was superb, and he genuinely cares about both candidates and employers.&quot;
                </p>
                <div className="text-center">
                  <p className="text-gray-900 font-semibold">Michael Thompson</p>
                  <p className="text-gray-600 text-sm">Senior Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 