import React from 'react';
import { Code, Trophy, Database, Wrench, Users, Megaphone } from 'lucide-react';

const About = () => {
  const specialisms = [
    { icon: <Code className="w-6 h-6 text-white" />, title: 'Software Development & Testing' },
    { icon: <Trophy className="w-6 h-6 text-white" />, title: 'Projects, Change & Business Analysis' },
    { icon: <Database className="w-6 h-6 text-white" />, title: 'Advanced Data and BI' },
    { icon: <Wrench className="w-6 h-6 text-white" />, title: 'Infrastructure & Support' },
    { icon: <Users className="w-6 h-6 text-white" />, title: 'IT Leadership' },
    { icon: <Megaphone className="w-6 h-6 text-white" />, title: 'Digital Marketing' },
  ];

  return (
    <section id="why-nexustech" className="py-16 px-4 md:px-8 bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Why NexusTech Section */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
              Our Story
            </span>
            <h2 className="text-4xl font-bold mb-4">Why NexusTech?</h2>
            <p className="text-lg text-slate-600">
              We&apos;re more than just a recruitment agency - we&apos;re your strategic partner in building successful tech teams.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-slate-700 text-left">
            <p>
              NexusTech Recruitment was born from a passion for connecting great talent with
              innovative companies. Our founder&apos;s experience in both technology and recruitment
              highlighted a gap in the market for a more personalized, tech-focused approach.
            </p>

            <p>
              After weeks of brainstorming, NexusTech was inspired by childhood ambition and a
              vision to revolutionize tech recruitment. The name represents our commitment to
              being at the intersection of technology and human connection - a nexus where
              talent meets opportunity.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-slate-900">Our Expertise</h3>

            <p>
              NexusTech Recruitment is a specialist IT recruitment agency with deep-rooted networks
              across East Anglia. We understand the unique challenges of building tech teams in
              this region and have developed strong relationships with both local businesses
              and tech professionals.
            </p>
          </div>
        </div>

        {/* Our Specialisms */}
        <div className="mt-16">
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-4">
              Expertise
            </span>
            <h3 className="text-3xl font-bold mb-4 text-slate-900">Our Specialisms</h3>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
              With our in-depth knowledge of the tech industry and a commitment to building lasting
              relationships, we&apos;re here to help you find the perfect match.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {specialisms.map((specialism, index) => (
              <div
                key={index}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-purple-100/50 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center text-2xl bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                  {specialism.icon}
                </div>
                <h4 className="font-semibold text-lg text-slate-900">{specialism.title}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/virtual-coffee"
            className="group px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-200 inline-flex items-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-110"
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
      </div>
    </section>
  );
};

export default About;