import ReviewWidget from "../ReviewWidget"

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50">
      {/* Hero content - Centered */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pill-shaped banner */}
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-full shadow-md hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300">
              • IT Recruitment Specialists in East Anglia
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 mb-6">
            Connecting <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Elite Talent</span> with Top Tech Companies
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 mb-8">
            With deep industry expertise and a personalized approach, we help companies build world-class technical teams while connecting skilled professionals with life-changing career opportunities.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/candidates" className="group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-purple-400/30 transition-all duration-300 w-full sm:w-auto text-center">
              <span className="block transition-opacity duration-300 group-hover:opacity-0">I&apos;m Looking For A New Opportunity</span>
              <span className="block absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">Register Today!</span>
            </a>
            <a href="/employers" className="group relative px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-400/30 border border-blue-200 transition-all duration-300 w-full sm:w-auto text-center">
              <span className="block transition-opacity duration-300 group-hover:opacity-0">I&apos;m Looking For Top Tier Talent</span>
              <span className="block absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">Get In Touch Today!</span>
            </a>
          </div>

          {/* Social Proof Widget */}
          <div className="mt-12 flex justify-center">
            <ReviewWidget />
          </div>

          {/* Trusted By Section */}
          <div className="mt-12">
            <p className="text-sm text-slate-500 mb-6 uppercase tracking-wider">Trusted By</p>
            <div className="flex flex-wrap justify-center items-center gap-12 max-w-4xl mx-auto">
              {/* Tech Corp Logo */}
              <svg className="h-10 w-auto text-slate-300" viewBox="0 0 120 40" fill="currentColor">
                <rect x="10" y="10" width="30" height="20" rx="2"/>
                <text x="45" y="25" fontSize="14">TECH</text>
              </svg>

              {/* Innovate Inc Logo */}
              <svg className="h-10 w-auto text-slate-300" viewBox="0 0 120 40" fill="currentColor">
                <circle cx="25" cy="20" r="12"/>
                <text x="45" y="25" fontSize="14">INNOVATE</text>
              </svg>

              {/* Digital Solutions Logo */}
              <svg className="h-10 w-auto text-slate-300" viewBox="0 0 120 40" fill="currentColor">
                <polygon points="20,10 30,30 10,30"/>
                <text x="35" y="25" fontSize="14">DIGITAL</text>
              </svg>

              {/* Future Systems Logo */}
              <svg className="h-10 w-auto text-slate-300" viewBox="0 0 120 40" fill="currentColor">
                <path d="M10,20 Q25,5 40,20"/>
                <text x="45" y="25" fontSize="14">FUTURE</text>
              </svg>

              {/* Data Co Logo */}
              <svg className="h-10 w-auto text-slate-300" viewBox="0 0 120 40" fill="currentColor">
                <rect x="10" y="10" width="20" height="20" transform="rotate(45 20 20)"/>
                <text x="35" y="25" fontSize="14">DATA</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Mouse Animation - Fixed Position */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full p-1">
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mx-auto animate-scroll"></div>
        </div>
      </div>
    </div>
  );
}