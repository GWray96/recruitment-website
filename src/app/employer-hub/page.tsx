'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Building2, Users, Target, TrendingUp, ArrowRight, CheckCircle, Star, Award, Clock, Shield, Zap, BarChart, Globe, MessageSquare, BookOpen, ClipboardCheck, FileText, Video, BarChart2, Download, Calendar, Table, File, Phone } from 'lucide-react';
import CountUp from 'react-countup';
import FAQ from '@/components/shared/FAQ';

// Updated employer hub page with enhanced features and improved UI
export default function EmployerHub() {
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [currentIndustryIndex, setCurrentIndustryIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showROIResult, setShowROIResult] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);
  const [counters, setCounters] = useState({
    placements: 0,
    companies: 0,
    satisfaction: 0,
    timeToHire: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [roiInputs, setRoiInputs] = useState({
    jobCount: 5,
    avgSalary: 75000,
    timeToHire: 30,
    costPerHire: 5000
  });
  const [roiResults, setRoiResults] = useState({
    timeSaved: 0,
    costSaved: 0,
    annualSavings: 0
  });
  const [activeTab, setActiveTab] = useState(0);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [industrySuggestions, setIndustrySuggestions] = useState<string[]>([]);
  const [activeResourceTab, setActiveResourceTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const industries = useMemo(() => [
    "Technology",
    "Finance",
    "Healthcare",
    "Education",
    "Manufacturing",
    "Retail",
    "Real Estate",
    "Transportation",
    "Energy",
    "Media & Entertainment"
  ], []);

  const popularRoles = useMemo(() => [
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "DevOps Engineer",
    "UX/UI Designer",
    "Cloud Architect",
    "Security Engineer",
    "Machine Learning Engineer",
    "Full Stack Developer",
    "Mobile App Developer"
  ], []);

  // Handle search input changes
  useEffect(() => {
    if (searchQuery.length > 2) {
      const filtered = popularRoles.filter(role => 
        role.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(filtered);
      setShowSearchSuggestions(true);
    } else {
      setSearchSuggestions([]);
      setShowSearchSuggestions(false);
    }
  }, [searchQuery, popularRoles]);

  // Handle industry selection
  useEffect(() => {
    if (selectedIndustry.length > 2) {
      const filtered = industries.filter(industry => 
        industry.toLowerCase().includes(selectedIndustry.toLowerCase())
      );
      setIndustrySuggestions(filtered);
    } else {
      setIndustrySuggestions([]);
    }
  }, [selectedIndustry, industries]);

  // Calculate ROI
  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      const { jobCount, avgSalary, timeToHire, costPerHire } = roiInputs;
      
      // Calculate savings based on our recruitment service efficiency
      const timeSaved = Math.round(timeToHire * 0.6); // 60% time reduction
      const costSaved = Math.round(costPerHire * 0.5); // 50% cost reduction
      const annualSavings = (costSaved * jobCount) + ((timeSaved / 30) * (avgSalary / 12) * jobCount);
      
      setRoiResults({
        timeSaved,
        costSaved,
        annualSavings
      });
      
      setShowROIResult(true);
      setIsCalculating(false);
    }, 1500);
  };

  // Demo steps
  const demoSteps = [
    {
      title: "Initial Consultation",
      description: "We meet to understand your hiring needs and company culture",
      image: "/demo/consultation.png"
    },
    {
      title: "Talent Sourcing",
      description: "Our tech specialists identify and approach qualified candidates",
      image: "/demo/sourcing.png"
    },
    {
      title: "Candidate Screening",
      description: "We pre-screen candidates to ensure they match your requirements",
      image: "/demo/screening.png"
    },
    {
      title: "Interview & Placement",
      description: "We facilitate interviews and help with the final hiring decision",
      image: "/demo/placement.png"
    }
  ];

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
      setCurrentIndustryIndex((prev) => (prev + 1) % industries.length);
      setIsTyping(true);
    }, 2000);

    return () => clearTimeout(typingTimer);
  }, [currentIndustryIndex, industries.length, industries]);

  useEffect(() => {
    if (typeof window === 'undefined' || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, sectionRef]);

  useEffect(() => {
    if (typeof window === 'undefined' || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, industries.length]);

  // Optimize scroll performance
  useEffect(() => {
    // Debounce scroll events
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        // Perform scroll-based operations here
      }, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  // Optimize animation triggers
  const [visibleSections, setVisibleSections] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
            // Once a section is visible, we can unobserve it to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    // Observe all sections with IDs except stats (which has its own observer)
    document.querySelectorAll('section[id]:not(#stats)').forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const features = [
    {
      title: "Tech Industry Expertise",
      description: "Our recruiters specialize in tech roles with deep understanding of skills, trends, and market demands.",
      icon: <Target className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Exclusive Talent Network",
      description: "Access our extensive network of pre-vetted tech professionals not available on job boards.",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Streamlined Hiring",
      description: "We handle the entire recruitment process, saving you time and resources.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Market Insights",
      description: "Receive valuable insights on salary trends, skill demands, and hiring strategies.",
      icon: <BarChart className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Inc.",
      image: "/testimonials/sarah.jpg",
      quote: "Their tech recruitment team found us exceptional candidates that perfectly matched our requirements. The quality of hires has been outstanding."
    },
    {
      name: "Michael Chen",
      role: "Engineering Director",
      company: "Global Solutions Ltd",
      image: "/testimonials/michael.jpg",
      quote: "Working with their tech specialists has transformed our hiring process. We've filled critical roles in half the usual time."
    },
    {
      name: "Emily Rodriguez",
      role: "Product Lead",
      company: "InnovateTech",
      image: "/testimonials/emily.jpg",
      quote: "Their understanding of the tech industry and ability to find candidates who fit our culture has been invaluable to our growth."
    }
  ];

  const faqs = [
    {
      question: "What makes your tech recruitment service different?",
      answer: "Our recruiters are tech industry specialists with years of experience. We understand the specific skills, technologies, and cultural fit required for tech roles. Unlike general recruiters, we speak the language of tech and can accurately assess technical capabilities."
    },
    {
      question: "What types of tech roles do you specialize in?",
      answer: "We specialize in all tech roles including software engineers, data scientists, product managers, DevOps engineers, UX designers, and tech leadership positions. Our expertise covers the full spectrum of technology roles from junior to executive level."
    },
    {
      question: "How long does it typically take to find qualified candidates?",
      answer: "Most of our clients see qualified candidates within 1-2 weeks of starting a search. Our average time-to-hire is 15 days, significantly faster than industry standards. We maintain an active network of tech professionals ready for new opportunities."
    },
    {
      question: "What support do you provide during the hiring process?",
      answer: "We provide comprehensive support including candidate sourcing, screening, interview scheduling, reference checks, and offer negotiation. Our dedicated tech recruitment specialists guide you through the entire process and ensure a smooth experience."
    }
  ];

  const articles = [
    {
      title: "How to Attract Top Tech Talent in 2024",
      excerpt: "Discover the latest strategies for attracting and retaining the best tech professionals in today's competitive market.",
      image: "/articles/tech-talent.jpg",
      date: "May 15, 2024",
      category: "Recruitment Strategy",
      readTime: "5 min read"
    },
    {
      title: "Tech Salary Trends: What to Expect in 2024",
      excerpt: "Stay competitive with our comprehensive analysis of tech salary trends and compensation strategies for 2024.",
      image: "/articles/salary-trends.jpg",
      date: "May 10, 2024",
      category: "Market Insights",
      readTime: "4 min read"
    },
    {
      title: "Building a Strong Tech Employer Brand",
      excerpt: "Learn how to develop an employer brand that resonates with tech professionals and sets you apart from competitors.",
      image: "/articles/employer-brand.jpg",
      date: "May 5, 2024",
      category: "Employer Branding",
      readTime: "6 min read"
    }
  ];

  const resources = {
    guides: [
      {
        title: "Tech Hiring Guide 2024",
        description: "Comprehensive guide to hiring tech talent in 2024, including market trends, salary benchmarks, and best practices.",
        icon: <BookOpen className="w-6 h-6" />,
        downloadUrl: "/resources/tech-hiring-guide-2024.pdf"
      },
      {
        title: "Technical Assessment Framework",
        description: "Framework for evaluating technical skills and cultural fit when hiring tech professionals.",
        icon: <ClipboardCheck className="w-6 h-6" />,
        downloadUrl: "/resources/technical-assessment-framework.pdf"
      },
      {
        title: "Tech Interview Questions",
        description: "Curated list of effective interview questions for various tech roles and seniority levels.",
        icon: <MessageSquare className="w-6 h-6" />,
        downloadUrl: "/resources/tech-interview-questions.pdf"
      }
    ],
    templates: [
      {
        title: "Tech Job Description Template",
        description: "Professional template for creating compelling job descriptions that attract qualified tech candidates.",
        icon: <FileText className="w-6 h-6" />,
        downloadUrl: "/resources/tech-job-description-template.docx"
      },
      {
        title: "Candidate Evaluation Matrix",
        description: "Structured framework for evaluating and comparing tech candidates during the hiring process.",
        icon: <Table className="w-6 h-6" />,
        downloadUrl: "/resources/candidate-evaluation-matrix.xlsx"
      },
      {
        title: "Offer Letter Template",
        description: "Professional template for creating competitive offer letters for tech positions.",
        icon: <File className="w-6 h-6" />,
        downloadUrl: "/resources/tech-offer-letter-template.docx"
      }
    ],
    webinars: [
      {
        title: "Hiring Remote Tech Talent",
        description: "Learn best practices for identifying, interviewing, and onboarding remote tech professionals.",
        icon: <Video className="w-6 h-6" />,
        date: "June 12, 2024",
        duration: "60 minutes",
        registerUrl: "/webinars/hiring-remote-tech-talent"
      },
      {
        title: "Tech Recruitment Metrics",
        description: "Discover the key metrics to track and optimize your tech recruitment process.",
        icon: <BarChart2 className="w-6 h-6" />,
        date: "June 19, 2024",
        duration: "45 minutes",
        registerUrl: "/webinars/tech-recruitment-metrics"
      },
      {
        title: "Building Tech Teams",
        description: "Strategies for building and scaling high-performing tech teams in today's market.",
        icon: <Users className="w-6 h-6" />,
        date: "June 26, 2024",
        duration: "60 minutes",
        registerUrl: "/webinars/building-tech-teams"
      }
    ]
  };

  // Optimize animation performance
  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const employerFAQs = [
    {
      question: "What makes NexusTech different from other recruitment agencies?",
      answer: "We specialize exclusively in tech recruitment with deep industry knowledge, offer a personalized approach with dedicated account managers, and leverage advanced matching algorithms to ensure the perfect fit for your team."
    },
    {
      question: "How long does the recruitment process typically take?",
      answer: "While each role is unique, our average time-to-hire is 15 days from job posting to offer acceptance. We maintain a vast network of pre-screened candidates and use efficient processes to accelerate recruitment without compromising quality."
    },
    {
      question: "What types of roles do you recruit for?",
      answer: "We cover the full spectrum of tech roles including software development, QA, DevOps, data science, IT infrastructure, cybersecurity, and tech leadership positions. We work with companies of all sizes, from startups to enterprise organizations."
    },
    {
      question: "Do you offer any guarantees?",
      answer: "Yes, we offer a replacement guarantee period for all permanent placements. If a candidate leaves within the first 3 months, we'll find a replacement at no additional cost. We also provide ongoing support throughout the onboarding process."
    },
    {
      question: "What geographical areas do you cover?",
      answer: "While we're based in East Anglia and have particularly strong networks in Cambridge, Norwich, and Ipswich, we recruit nationwide and can support remote hiring across the UK."
    },
    {
      question: "How do you ensure candidates are a good cultural fit?",
      answer: "Beyond technical skills, we conduct thorough cultural assessments, use behavioral interviewing techniques, and work closely with you to understand your company culture. We only present candidates who align with both your technical requirements and cultural values."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 sm:pt-32">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900">
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-0 -right-4 w-48 md:w-72 h-48 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.7, 0.5, 0.7],
            }}
            transition={{ 
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-8 left-20 w-48 md:w-72 h-48 md:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center pt-4 md:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 mb-6 md:mb-8 cursor-pointer group"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="mr-2"
              >
                <Star className="w-4 md:w-5 h-4 md:h-5 text-yellow-300" />
              </motion.div>
              <span className="text-sm md:text-base text-white/90 group-hover:text-white transition-colors">Trusted by 1000+ tech companies worldwide</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg px-1 sm:px-0"
            >
              Transform Your Tech Hiring with Expert Recruitment Solutions
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto"
            >
              Access top tech talent, streamline your recruitment process, and build high-performing teams with our specialized tech recruitment service
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-95 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 relative overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100/0 via-purple-100/50 to-purple-100/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                <MessageSquare className="w-4 md:w-5 h-4 md:h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm md:text-base">Schedule a Consultation</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group px-4 sm:px-6 md:px-8 py-3 md:py-4 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 relative overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                <FileText className="w-4 md:w-5 h-4 md:h-5 transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm md:text-base">Download Service Guide</span>
              </motion.button>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 max-w-3xl mx-auto">
              {[
                { icon: <Clock className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />, text: "15 days average time-to-hire", highlight: "15 days" },
                { icon: <Users className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />, text: "98% client satisfaction rate", highlight: "98%" },
                { icon: <Target className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />, text: "Industry-specific expertise", highlight: "Expertise" },
                { icon: <Globe className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6" />, text: "Global talent network", highlight: "Global" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  whileHover={{ y: -5 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 mx-auto bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white mb-2 md:mb-3 group-hover:bg-white/20 transition-colors duration-300"
                  >
                    {feature.icon}
                  </motion.div>
                  <p className="text-xs sm:text-sm md:text-base text-white/80 group-hover:text-white transition-colors duration-300">
                    {feature.text.split(feature.highlight).map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                            {feature.highlight}
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
            {[
              { value: 15, suffix: "+", label: "Years Experience", color: "purple" },
              { value: 250, suffix: "+", label: "Successful Placements", color: "blue" },
              { value: 1000, suffix: "", label: "Client Companies", color: "green" },
              { value: 98, suffix: "%", label: "Client Satisfaction", color: "pink" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div
                  className={`bg-white rounded-xl shadow-lg p-4 md:p-6 text-center relative overflow-hidden
                    ${stat.color === 'purple' ? 'hover:bg-purple-50' : ''}
                    ${stat.color === 'blue' ? 'hover:bg-blue-50' : ''}
                    ${stat.color === 'green' ? 'hover:bg-green-50' : ''}
                    ${stat.color === 'pink' ? 'hover:bg-pink-50' : ''}
                  `}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div 
                    className={`text-2xl md:text-4xl font-bold mb-1 md:mb-2
                      ${stat.color === 'purple' ? 'text-purple-600' : ''}
                      ${stat.color === 'blue' ? 'text-blue-600' : ''}
                      ${stat.color === 'green' ? 'text-green-600' : ''}
                      ${stat.color === 'pink' ? 'text-pink-600' : ''}
                    `}
                  >
                    <span id={`stat-${index}`}>
                      {stat.value}
                    </span>
                    {stat.suffix}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi" className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 md:mb-4">Calculate Your Recruitment ROI</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              See how much you can save by using our specialized tech recruitment service
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Your Current Hiring Process</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Tech Roles to Fill</label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={roiInputs.jobCount}
                        onChange={(e) => setRoiInputs({...roiInputs, jobCount: parseInt(e.target.value)})}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-4 text-base md:text-lg font-semibold text-purple-600">{roiInputs.jobCount}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Average Tech Salary ($)</label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="30000"
                        max="150000"
                        step="5000"
                        value={roiInputs.avgSalary}
                        onChange={(e) => setRoiInputs({...roiInputs, avgSalary: parseInt(e.target.value)})}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-4 text-base md:text-lg font-semibold text-purple-600">${roiInputs.avgSalary.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Days to Hire</label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="15"
                        max="90"
                        value={roiInputs.timeToHire}
                        onChange={(e) => setRoiInputs({...roiInputs, timeToHire: parseInt(e.target.value)})}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-4 text-base md:text-lg font-semibold text-purple-600">{roiInputs.timeToHire}</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cost per Hire ($)</label>
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="1000"
                        max="10000"
                        step="500"
                        value={roiInputs.costPerHire}
                        onChange={(e) => setRoiInputs({...roiInputs, costPerHire: parseInt(e.target.value)})}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="ml-4 text-base md:text-lg font-semibold text-purple-600">${roiInputs.costPerHire.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={calculateROI}
                    disabled={isCalculating}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors font-medium flex items-center justify-center"
                  >
                    {isCalculating ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Calculating...
                      </>
                    ) : (
                      "Calculate Savings"
                    )}
                  </motion.button>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 md:p-8 flex flex-col justify-center">
                {showROIResult ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Your Potential Savings</h3>
                    
                    <div className="space-y-4 md:space-y-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">${roiResults.costSaved.toLocaleString()}</div>
                        <div className="text-sm md:text-base text-gray-600">Cost Savings per Hire</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{roiResults.timeSaved} Days</div>
                        <div className="text-sm md:text-base text-gray-600">Time Saved per Hire</div>
                      </div>
                      
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">${roiResults.annualSavings.toLocaleString()}</div>
                        <div className="text-sm md:text-base text-gray-600">Annual Savings</div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-medium"
                      >
                        Schedule a Consultation
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-center">
                    <div className="w-16 md:w-24 h-16 md:h-24 mx-auto mb-4 md:mb-6 text-purple-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Calculate Your ROI</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Adjust the sliders to match your current hiring process and see how much you can save with our specialized tech recruitment service.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Tech Recruitment Service
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how our specialized tech recruitment service can transform your hiring process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.1 
                  }
                }}
                className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div 
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center text-white mb-4 transform transition-transform duration-300 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                <div 
                  className={`mt-4 pt-4 border-t border-gray-100 transform transition-all duration-300 ease-in-out ${
                    activeFeature === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 -translate-y-4 pointer-events-none'
                  }`}
                >
                  <button
                    className="text-purple-600 font-medium flex items-center gap-1 transition-transform duration-300 hover:translate-x-1"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Tech Recruitment Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience our proven approach to finding the perfect tech talent for your organization
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Progress Bar */}
            <div className="relative mb-8">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
              <div 
                className="absolute top-1/2 left-0 h-1 bg-purple-600 -translate-y-1/2 transition-all duration-500 ease-out"
                style={{ width: `${((activeTab + 1) / demoSteps.length) * 100}%` }}
              ></div>
              <div className="relative z-10 flex justify-between">
                {demoSteps.map((step, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className="group flex flex-col items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index <= activeTab 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-white border-2 border-gray-200 text-gray-400 group-hover:border-purple-300'
                      }`}
                    >
                      {index < activeTab ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <span className="text-sm font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div 
                      className={`mt-2 text-sm font-medium transition-colors duration-300 ${
                        index <= activeTab ? 'text-purple-600' : 'text-gray-500 group-hover:text-purple-400'
                      }`}
                    >
                      {step.title}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="p-8"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2">
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {demoSteps[activeTab].title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {demoSteps[activeTab].description}
                      </motion.p>
                      
                      <div className="flex flex-wrap gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                            activeTab === demoSteps.length - 1
                              ? 'bg-green-600 text-white hover:bg-green-700'
                              : 'bg-purple-600 text-white hover:bg-purple-700'
                          }`}
                          onClick={() => {
                            if (activeTab < demoSteps.length - 1) {
                              setActiveTab(activeTab + 1);
                            }
                          }}
                        >
                          {activeTab === demoSteps.length - 1 ? (
                            <span className="flex items-center gap-2">
                              Complete Process <CheckCircle className="w-5 h-5" />
                            </span>
                          ) : (
                            <span className="flex items-center gap-2">
                              Next Step <ArrowRight className="w-5 h-5" />
                            </span>
                          )}
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-white text-purple-600 border-2 border-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
                        >
                          Schedule a Consultation
                        </motion.button>
                      </div>

                      {/* Step Features */}
                      <motion.div 
                        className="mt-8 grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {[
                          { icon: <Clock className="w-4 h-4" />, text: "24-48 hour response time" },
                          { icon: <Shield className="w-4 h-4" />, text: "Confidential process" },
                          { icon: <Award className="w-4 h-4" />, text: "Expert guidance" },
                          { icon: <Target className="w-4 h-4" />, text: "Tailored approach" }
                        ].map((feature, index) => (
                          <motion.div
                            key={index}
                            className="flex items-center gap-2 text-gray-600"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (index * 0.1) }}
                          >
                            <div className="text-purple-600">
                              {feature.icon}
                            </div>
                            <span className="text-sm">{feature.text}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                    
                    <div className="w-full md:w-1/2">
                      <motion.div 
                        className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 relative overflow-hidden group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 transform -skew-y-12"></div>
                        <div className="relative z-10">
                          <div className="w-16 h-16 bg-white rounded-xl shadow-lg flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-6">
                            {activeTab === 0 && <MessageSquare className="w-8 h-8 text-purple-600" />}
                            {activeTab === 1 && <Users className="w-8 h-8 text-blue-600" />}
                            {activeTab === 2 && <ClipboardCheck className="w-8 h-8 text-green-600" />}
                            {activeTab === 3 && <Award className="w-8 h-8 text-orange-600" />}
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h4>
                          <ul className="space-y-3">
                            {[
                              "Dedicated tech recruitment specialist",
                              "Comprehensive market insights",
                              "Streamlined communication",
                              "Quality candidate matching"
                            ].map((benefit, index) => (
                              <motion.li
                                key={index}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 + (index * 0.1) }}
                              >
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                                  <CheckCircle className="w-3 h-3 text-green-600" />
                                </div>
                                <span className="text-gray-700">{benefit}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Tech Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from tech companies that have transformed their hiring process with our specialized service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    duration: 0.3
                  }
                }}
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div 
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold text-white transition-transform duration-300 group-hover:scale-110 ${
                      index === 0 
                        ? 'bg-gradient-to-br from-purple-500 to-indigo-600' 
                        : index === 1 
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-600'
                        : 'bg-gradient-to-br from-green-500 to-emerald-600'
                    }`}
                  >
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-purple-600 transition-colors duration-300 group-hover:text-purple-700">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  
                  <div className="transform transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-1 text-yellow-400 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className="w-4 h-4 fill-current transform transition-transform duration-300 hover:scale-110" 
                          />
                        ))}
                      </div>
                      <motion.button
                        className="text-purple-600 text-sm font-medium inline-flex items-center gap-1 transition-colors duration-300 hover:text-purple-700"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        Read full testimonial 
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section id="articles" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles for Tech Employers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest insights and strategies for tech recruitment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ 
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut"
                  }
                }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-purple-100 to-blue-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5"></div>
                  <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {article.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-gray-600 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-gray-500">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-purple-600 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <button
                      className="text-purple-600 font-medium flex items-center gap-1 hover:translate-x-2 transition-transform duration-300"
                    >
                      Read article 
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        className="text-gray-400 hover:text-purple-600 hover:scale-110 transition-all duration-300"
                      >
                        <BookOpen className="w-4 h-4" />
                      </button>
                      <button
                        className="text-gray-400 hover:text-purple-600 hover:scale-110 transition-all duration-300"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg hover:from-purple-700 hover:to-blue-700 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources for Tech Employers</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access our collection of guides, templates, and webinars to enhance your tech recruitment process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Guides Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform-gpu transition-all duration-300 hover:shadow-xl"
            >
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <BookOpen className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Tech Recruitment Guides</h3>
                <p className="text-white/80">Comprehensive resources to help you navigate tech recruitment</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {resources.guides.map((guide, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-3 group cursor-pointer"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                        <Download className="w-3 h-3" />
                      </div>
                      <div>
                        <span className="text-gray-700 group-hover:text-purple-600 transition-colors">{guide.title}</span>
                        <div className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                          {guide.description}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-2 text-sm text-purple-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
                        >
                          Download guide
                          <ArrowRight className="w-3 h-3" />
                        </motion.button>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-purple-100 text-purple-600 rounded-lg font-medium flex items-center justify-center gap-2 group hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  View All Guides 
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
            
            {/* Templates Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform-gpu transition-all duration-300 hover:shadow-xl"
            >
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white mb-4"
                  whileHover={{ rotate: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <FileText className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Recruitment Templates</h3>
                <p className="text-white/80">Ready-to-use templates to streamline your hiring process</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {resources.templates.map((template, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-3 group cursor-pointer"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                        <Download className="w-3 h-3" />
                      </div>
                      <div>
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">{template.title}</span>
                        <div className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                          {template.description}
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-2 text-sm text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
                        >
                          Download template
                          <ArrowRight className="w-3 h-3" />
                        </motion.button>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-blue-100 text-blue-600 rounded-lg font-medium flex items-center justify-center gap-2 group hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  View All Templates 
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
            
            {/* Webinars Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform-gpu transition-all duration-300 hover:shadow-xl"
            >
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center text-white mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Video className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Upcoming Webinars</h3>
                <p className="text-white/80">Live sessions with industry experts on tech recruitment</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {resources.webinars.map((webinar, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-start gap-3 group cursor-pointer"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5 transition-colors group-hover:bg-green-600 group-hover:text-white">
                        <Calendar className="w-3 h-3" />
                      </div>
                      <div>
                        <span className="text-gray-700 group-hover:text-green-600 transition-colors">{webinar.title}</span>
                        <div className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                          <span>{webinar.date}</span>
                          <span>•</span>
                          <span>{webinar.duration}</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-2 text-sm text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1"
                        >
                          Register now
                          <ArrowRight className="w-3 h-3" />
                        </motion.button>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-green-100 text-green-600 rounded-lg font-medium flex items-center justify-center gap-2 group hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  View All Webinars 
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Perfect Tech Talent?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of tech companies that have streamlined their hiring with our specialized recruitment service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule a Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View Our Tech Roles
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ 
        title="Frequently Asked Questions"
        description="Find answers to common questions about our employer services and recruitment process."
        faqs={employerFAQs}
      />
    </main>
  );
} 