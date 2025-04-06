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

export const jobs: Job[] = [
  {
    id: "1",
    title: 'Senior Frontend Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    salary: '$120k - $150k',
    type: 'Full Time',
    postedDate: '2024-03-15',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    isNew: true,
    description: 'We are looking for a Senior Frontend Developer to join our team and help build the next generation of our web applications. You will work closely with our design and backend teams to create beautiful, responsive, and performant user interfaces.',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with Next.js',
      'Understanding of web performance optimization',
      'Experience with state management libraries',
      'Knowledge of modern CSS frameworks'
    ],
    benefits: [
      'Competitive salary',
      'Health, dental, and vision insurance',
      '401(k) matching',
      'Flexible work hours',
      'Remote work options',
      'Professional development budget'
    ],
    responsibilities: [
      'Develop and maintain frontend applications',
      'Collaborate with design team to implement UI/UX',
      'Optimize application performance',
      'Write clean, maintainable code',
      'Participate in code reviews',
      'Mentor junior developers'
    ],
    workHours: '9:00 AM - 5:00 PM (flexible)',
    workEnvironment: 'Modern office in San Francisco with remote work options',
    teamSize: '8-10 developers',
    reportingStructure: 'Reports to Frontend Team Lead',
    growthOpportunities: [
      'Lead frontend developer role',
      'Specialization in performance optimization',
      'UI/UX design skills development',
      'Backend development opportunities'
    ],
    companyCulture: 'Fast-paced, innovative, collaborative environment with a focus on work-life balance',
    applicationProcess: [
      'Submit resume and portfolio',
      'Initial screening call',
      'Technical assessment',
      'Team interview',
      'Final interview with CTO',
      'Offer and negotiation'
    ]
  },
  {
    id: "2",
    title: 'Full Stack Developer',
    company: 'InnovateTech',
    location: 'Remote',
    salary: '$100k - $130k',
    type: 'Full Time',
    postedDate: '2024-03-14',
    skills: ['Node.js', 'React', 'MongoDB', 'AWS'],
    isUrgent: true,
    description: 'Join our growing team as a Full Stack Developer and help build scalable applications that solve real-world problems. You will work on both frontend and backend development, creating end-to-end solutions for our clients.',
    requirements: [
      '3+ years of full stack development',
      'Experience with Node.js and React',
      'Database design and optimization',
      'API development experience',
      'Knowledge of cloud services (AWS)',
      'Understanding of CI/CD pipelines'
    ],
    benefits: [
      'Competitive salary',
      'Comprehensive health benefits',
      'Unlimited PTO',
      'Home office setup allowance',
      'Learning and development budget',
      'Stock options'
    ],
    responsibilities: [
      'Develop and maintain full stack applications',
      'Design and implement APIs',
      'Create database schemas and optimize queries',
      'Deploy applications to cloud infrastructure',
      'Write unit and integration tests',
      'Collaborate with cross-functional teams'
    ],
    workHours: 'Flexible hours with core hours 10:00 AM - 4:00 PM EST',
    workEnvironment: '100% remote with occasional team meetups',
    teamSize: '5-7 developers',
    reportingStructure: 'Reports to Technical Lead',
    growthOpportunities: [
      'Senior full stack developer role',
      'DevOps specialization',
      'Team lead opportunities',
      'Architecture design responsibilities'
    ],
    companyCulture: 'Remote-first, results-oriented, with a focus on innovation and collaboration',
    applicationProcess: [
      'Submit resume and GitHub profile',
      'Initial screening call',
      'Take-home coding challenge',
      'Technical interview',
      'Team culture fit interview',
      'Offer and negotiation'
    ]
  },
  {
    id: "3",
    title: 'DevOps Engineer',
    company: 'Cloud Systems Inc',
    location: 'New York, NY',
    salary: '$130k - $160k',
    type: 'Full Time',
    postedDate: '2024-03-13',
    skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
    isNew: true,
    description: 'We are seeking a DevOps Engineer to help build and maintain our infrastructure. You will be responsible for implementing CI/CD pipelines, managing cloud resources, and ensuring our systems are scalable, secure, and reliable.',
    requirements: [
      'AWS certification',
      'Experience with Kubernetes',
      'CI/CD pipeline implementation',
      'Infrastructure as Code (Terraform)',
      'Monitoring and logging tools',
      'Scripting languages (Python, Bash)'
    ],
    benefits: [
      'Competitive salary',
      'Health, dental, and vision insurance',
      '401(k) matching',
      'Commuter benefits',
      'Conference attendance',
      'Certification reimbursement'
    ],
    responsibilities: [
      'Design and implement CI/CD pipelines',
      'Manage cloud infrastructure',
      'Implement monitoring and alerting',
      'Automate deployment processes',
      'Ensure security best practices',
      'Optimize system performance'
    ],
    workHours: '9:00 AM - 5:00 PM (flexible)',
    workEnvironment: 'Modern office in Manhattan with hybrid work options',
    teamSize: '4-5 DevOps engineers',
    reportingStructure: 'Reports to DevOps Manager',
    growthOpportunities: [
      'Senior DevOps engineer role',
      'Cloud architecture specialization',
      'Security engineering path',
      'Team lead opportunities'
    ],
    companyCulture: 'Fast-paced, innovative environment with a focus on automation and efficiency',
    applicationProcess: [
      'Submit resume',
      'Initial screening call',
      'Technical assessment',
      'Infrastructure design challenge',
      'Team interview',
      'Offer and negotiation'
    ]
  },
  {
    id: "4",
    title: 'Backend Developer',
    company: 'DataFlow Technologies',
    location: 'London, UK',
    salary: '£80k - £100k',
    type: 'Full Time',
    postedDate: '2024-03-12',
    skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    description: 'Join DataFlow Technologies as a Backend Developer to help build robust and scalable server-side applications. You will work with our team to design and implement efficient database solutions and APIs.',
    requirements: [
      '3+ years experience with Python',
      'Strong knowledge of Django framework',
      'Experience with PostgreSQL and database optimization',
      'Docker containerization experience',
      'Understanding of RESTful APIs',
      'Knowledge of backend security practices'
    ],
    benefits: [
      'Competitive salary package',
      'Private healthcare',
      '25 days annual leave',
      'Flexible working hours',
      'Professional development budget',
      'Regular team social events'
    ],
    responsibilities: [
      'Design and implement backend services',
      'Optimize database performance',
      'Create and maintain APIs',
      'Write clean, testable code',
      'Collaborate with frontend developers',
      'Participate in code reviews'
    ],
    workHours: '9:30 AM - 5:30 PM (flexible)',
    workEnvironment: 'Modern office in central London with hybrid working options',
    teamSize: '6-8 backend developers',
    reportingStructure: 'Reports to Backend Team Lead',
    growthOpportunities: [
      'Senior Backend Developer role',
      'Database architecture specialization',
      'Team leadership opportunities',
      'Cloud infrastructure expertise'
    ],
    companyCulture: 'Collaborative environment focused on continuous learning and innovation',
    applicationProcess: [
      'Online application submission',
      'Technical screening call',
      'Coding assessment',
      'System design interview',
      'Team fit interview',
      'Final offer discussion'
    ]
  },
  {
    id: "5",
    title: 'Mobile Developer',
    company: 'AppWorks',
    location: 'Berlin, Germany',
    salary: '€70k - €90k',
    type: 'Full Time',
    postedDate: '2024-03-11',
    skills: ['React Native', 'iOS', 'Android', 'TypeScript'],
    description: 'AppWorks is seeking a talented Mobile Developer to join our innovative team. You will be responsible for developing cross-platform mobile applications using React Native and maintaining native iOS and Android codebases.',
    requirements: [
      '3+ years mobile development experience',
      'Strong React Native expertise',
      'Experience with iOS and Android development',
      'TypeScript proficiency',
      'Understanding of mobile UI/UX principles',
      'Knowledge of mobile app deployment processes'
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      '30 days vacation',
      'Public transport pass',
      'Home office equipment allowance',
      'Regular team events'
    ],
    responsibilities: [
      'Develop cross-platform mobile applications',
      'Maintain and optimize existing apps',
      'Implement new features and functionality',
      'Ensure app performance and reliability',
      'Collaborate with design and backend teams',
      'Participate in agile development process'
    ],
    workHours: '10:00 AM - 6:00 PM (flexible)',
    workEnvironment: 'Modern office in Berlin-Mitte with remote options',
    teamSize: '4-6 mobile developers',
    reportingStructure: 'Reports to Mobile Development Lead',
    growthOpportunities: [
      'Senior Mobile Developer position',
      'Mobile architecture role',
      'Team leadership track',
      'Full-stack development opportunities'
    ],
    companyCulture: 'Dynamic startup environment with focus on innovation and work-life balance',
    applicationProcess: [
      'CV and portfolio submission',
      'Initial phone screening',
      'Technical assessment',
      'On-site interviews',
      'Team meeting',
      'Offer negotiation'
    ]
  },
  {
    id: "6",
    title: 'UI/UX Designer',
    company: 'Creative Digital',
    location: 'Remote',
    salary: '$90k - $120k',
    type: 'Full Time',
    postedDate: '2024-03-10',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    description: 'Creative Digital is looking for a UI/UX Designer to create beautiful and functional user interfaces. You will work closely with our product and development teams to design intuitive digital experiences.',
    requirements: [
      '4+ years UI/UX design experience',
      'Expert knowledge of Figma and Adobe XD',
      'Strong portfolio of digital products',
      'Experience with user research methods',
      'Prototyping skills',
      'Understanding of web and mobile design principles'
    ],
    benefits: [
      'Competitive remote salary',
      'Health and wellness benefits',
      'Unlimited PTO',
      'Home office setup budget',
      'Design conference allowance',
      'Professional development fund'
    ],
    responsibilities: [
      'Create user-centered designs',
      'Conduct user research and testing',
      'Develop wireframes and prototypes',
      'Create and maintain design systems',
      'Collaborate with development team',
      'Present designs to stakeholders'
    ],
    workHours: 'Flexible schedule with core collaboration hours',
    workEnvironment: 'Fully remote with quarterly team meetups',
    teamSize: '3-4 designers',
    reportingStructure: 'Reports to Creative Director',
    growthOpportunities: [
      'Senior Designer role',
      'UX Research specialization',
      'Design leadership position',
      'Product strategy involvement'
    ],
    companyCulture: 'Remote-first culture emphasizing creativity, collaboration, and work-life balance',
    applicationProcess: [
      'Portfolio review',
      'Initial design discussion',
      'Design challenge',
      'Team presentation',
      'Cultural fit interview',
      'Final offer'
    ]
  },
  {
    id: "16",
    title: "DevOps Engineer",
    company: "Cloud Systems Ltd",
    location: "Manchester, UK",
    type: "Full-time",
    salary: "£65,000 - £85,000",
    postedDate: "2024-04-01",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Python", "Terraform"],
    description: "Join our DevOps team to build and maintain our cloud infrastructure using AWS, Docker, and Kubernetes.",
    requirements: [
      "5+ years experience with AWS or similar cloud platforms",
      "Strong knowledge of Docker and Kubernetes",
      "Experience with CI/CD pipelines",
      "Proficiency in Python or Go",
      "Infrastructure as Code experience (Terraform)"
    ],
    benefits: [
      "Remote work options",
      "Cloud certification support",
      "Professional development budget",
      "Health and dental insurance",
      "Company equity"
    ],
    responsibilities: [
      "Design and implement cloud infrastructure",
      "Maintain CI/CD pipelines",
      "Automate deployment processes",
      "Monitor system performance",
      "Implement security best practices"
    ],
    workHours: "9:00 AM - 5:00 PM (flexible)",
    workEnvironment: "Modern office in Manchester with remote work options",
    teamSize: "5-7 engineers",
    reportingStructure: "Reports to DevOps Lead",
    growthOpportunities: [
      "Senior DevOps Engineer role",
      "Cloud Architecture specialization",
      "Team Lead opportunities",
      "Security Engineering path"
    ],
    companyCulture: "Innovative, collaborative environment with focus on automation and efficiency",
    applicationProcess: [
      "Submit resume",
      "Initial screening call",
      "Technical assessment",
      "Team interview",
      "Final offer"
    ]
  },
  {
    id: "17",
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Edinburgh, UK",
    type: "Full-time",
    salary: "£55,000 - £75,000",
    postedDate: "2024-04-01",
    skills: ["Python", "R", "SQL", "Machine Learning", "Statistics", "Data Visualization"],
    description: "Work on cutting-edge machine learning projects to drive business insights and innovation.",
    requirements: [
      "MSc or PhD in Data Science, Mathematics, or related field",
      "Experience with Python, R, and SQL",
      "Knowledge of machine learning frameworks",
      "Strong statistical background",
      "Experience with big data technologies"
    ],
    benefits: [
      "Flexible working hours",
      "Conference attendance budget",
      "Health insurance",
      "Gym membership",
      "Annual bonus scheme"
    ],
    responsibilities: [
      "Develop and implement machine learning models",
      "Analyze complex data sets to identify patterns",
      "Work with stakeholders to define business questions",
      "Present findings to technical and non-technical audiences",
      "Collaborate with engineering teams to implement solutions"
    ],
    workHours: "9:00 AM - 5:00 PM (flexible)",
    workEnvironment: "Modern office in Edinburgh with hybrid work options",
    teamSize: "6-8 data scientists and analysts",
    reportingStructure: "Reports to Head of Data Science",
    growthOpportunities: [
      "Senior Data Scientist role",
      "Machine Learning Engineering specialization",
      "Research opportunities",
      "Leadership position"
    ],
    companyCulture: "Data-driven environment with focus on innovation and continuous learning",
    applicationProcess: [
      "Resume submission",
      "Technical screening",
      "Machine learning challenge",
      "Team interview",
      "Final offer"
    ]
  },
  {
    id: "18",
    title: "Mobile App Developer",
    company: "AppWorks",
    location: "Bristol, UK",
    type: "Full-time",
    salary: "£45,000 - £65,000",
    postedDate: "2024-04-02",
    skills: ["React Native", "iOS", "Android", "TypeScript", "REST APIs", "Git"],
    description: "Create innovative mobile applications for iOS and Android platforms using React Native.",
    requirements: [
      "3+ years mobile development experience",
      "Proficiency in React Native",
      "Experience with native iOS or Android development",
      "Knowledge of mobile UI/UX principles",
      "Understanding of RESTful APIs"
    ],
    benefits: [
      "Flexible working hours",
      "Latest development hardware",
      "Private healthcare",
      "25 days holiday",
      "Training budget"
    ],
    responsibilities: [
      "Develop cross-platform mobile applications",
      "Implement responsive UI components",
      "Integrate with backend services",
      "Optimize app performance",
      "Collaborate with design and product teams"
    ],
    workHours: "9:00 AM - 5:30 PM (flexible)",
    workEnvironment: "Modern office in Bristol with hybrid work options",
    teamSize: "4-6 mobile developers",
    reportingStructure: "Reports to Mobile Development Lead",
    growthOpportunities: [
      "Senior Mobile Developer role",
      "Lead Mobile Developer path",
      "Full-stack development opportunities",
      "Technical architect track"
    ],
    companyCulture: "Innovative, collaborative environment with focus on quality and user experience",
    applicationProcess: [
      "CV and portfolio submission",
      "Technical screening call",
      "Coding assessment",
      "Team interview",
      "Final offer"
    ]
  },
  {
    id: "19",
    title: "Security Engineer",
    company: "SecureNet",
    location: "Remote",
    type: "Full-time",
    salary: "£70,000 - £90,000",
    postedDate: "2024-04-02",
    skills: ["Security Tools", "Cloud Security", "Incident Response", "Python", "Penetration Testing"],
    description: "Help protect our infrastructure and applications through security best practices and implementation.",
    requirements: [
      "CISSP or similar certification",
      "Experience with security tools and frameworks",
      "Knowledge of cloud security",
      "Incident response experience",
      "Programming skills in Python or similar"
    ],
    benefits: [
      "Full remote work",
      "Security certification support",
      "Health and life insurance",
      "Wellness program",
      "Stock options"
    ],
    responsibilities: [
      "Implement security best practices",
      "Conduct security assessments",
      "Monitor for security threats",
      "Develop security policies",
      "Respond to security incidents"
    ],
    workHours: "Flexible with on-call rotation",
    workEnvironment: "100% remote with quarterly in-person security workshops",
    teamSize: "5-7 security professionals",
    reportingStructure: "Reports to Head of Security",
    growthOpportunities: [
      "Senior Security Engineer",
      "Security Architect",
      "Cloud Security Specialist",
      "Security Team Lead"
    ],
    companyCulture: "Security-first mindset with collaborative approach to problem-solving",
    applicationProcess: [
      "Resume submission",
      "Security knowledge assessment",
      "Technical interview",
      "Security scenario discussions",
      "Final offer"
    ]
  },
  {
    id: "20",
    title: "UI/UX Designer",
    company: "Creative Digital",
    location: "Glasgow, UK",
    type: "Full-time",
    salary: "£40,000 - £60,000",
    postedDate: "2024-04-03",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Wireframing", "Prototyping", "Design Systems"],
    description: "Create beautiful and intuitive user interfaces for web and mobile applications.",
    requirements: [
      "Portfolio demonstrating UI/UX work",
      "Proficiency in Figma and Adobe Creative Suite",
      "Understanding of user-centered design",
      "Experience with design systems",
      "Knowledge of HTML/CSS"
    ],
    benefits: [
      "Creative workspace",
      "Design conference attendance",
      "Health insurance",
      "Flexible hours",
      "Remote work options"
    ],
    responsibilities: [
      "Create user-centered designs",
      "Develop wireframes and prototypes",
      "Conduct user research",
      "Maintain design systems",
      "Collaborate with development teams"
    ],
    workHours: "9:30 AM - 5:30 PM (flexible)",
    workEnvironment: "Design studio in Glasgow with remote options",
    teamSize: "4-5 designers",
    reportingStructure: "Reports to Creative Director",
    growthOpportunities: [
      "Senior Designer",
      "UX Research Lead",
      "Design Team Lead",
      "Product Designer"
    ],
    companyCulture: "Creative, collaborative environment with focus on user-centered design",
    applicationProcess: [
      "Portfolio review",
      "Design challenge",
      "Team interview",
      "Client project simulation",
      "Final offer"
    ]
  },
  {
    id: "21",
    title: "Blockchain Developer",
    company: "Chain Innovation",
    location: "London, UK",
    type: "Full-time",
    salary: "£75,000 - £95,000",
    postedDate: "2024-04-03",
    skills: ["Ethereum", "Solidity", "Smart Contracts", "Web3.js", "DeFi", "Cryptography"],
    description: "Develop and maintain blockchain solutions for financial services applications.",
    requirements: [
      "Experience with Ethereum and smart contracts",
      "Solidity programming expertise",
      "Understanding of cryptography",
      "Knowledge of DeFi protocols",
      "Web3 development experience"
    ],
    benefits: [
      "Cryptocurrency payments option",
      "Flexible working hours",
      "Private healthcare",
      "Gym membership",
      "Professional development"
    ],
    responsibilities: [
      "Develop smart contracts",
      "Build decentralized applications",
      "Integrate with blockchain networks",
      "Optimize gas costs",
      "Implement security best practices"
    ],
    workHours: "Flexible schedule",
    workEnvironment: "Modern office in London with remote options",
    teamSize: "5-8 blockchain developers",
    reportingStructure: "Reports to Blockchain Lead",
    growthOpportunities: [
      "Senior Blockchain Developer",
      "Blockchain Architect",
      "Smart Contract Specialist",
      "DeFi Protocol Developer"
    ],
    companyCulture: "Innovative environment at the cutting edge of blockchain technology",
    applicationProcess: [
      "Resume and GitHub review",
      "Technical interview",
      "Smart contract challenge",
      "Team culture fit",
      "Final offer"
    ]
  },
  {
    id: "22",
    title: "Technical Architect",
    company: "Solutions Hub",
    location: "Leeds, UK",
    type: "Full-time",
    salary: "£85,000 - £110,000",
    postedDate: "2024-04-04",
    skills: ["System Design", "Microservices", "Cloud Architecture", "API Design", "Data Modeling", "Team Leadership"],
    description: "Lead the technical direction of our enterprise solutions and guide development teams.",
    requirements: [
      "10+ years software development experience",
      "Experience with microservices architecture",
      "Cloud platform expertise",
      "Team leadership experience",
      "Strong system design skills"
    ],
    benefits: [
      "Remote work options",
      "Leadership training",
      "Private healthcare",
      "Annual bonus",
      "Share options"
    ],
    responsibilities: [
      "Define technical architecture",
      "Guide development teams",
      "Make technology decisions",
      "Review code and designs",
      "Mentor senior developers"
    ],
    workHours: "9:00 AM - 5:00 PM (flexible)",
    workEnvironment: "Office in Leeds with hybrid work model",
    teamSize: "Oversees 15-20 developers across teams",
    reportingStructure: "Reports to CTO",
    growthOpportunities: [
      "Enterprise Architect",
      "CTO path",
      "Solution Leadership",
      "Technical Director"
    ],
    companyCulture: "Collaborative, mentorship-focused environment with emphasis on technical excellence",
    applicationProcess: [
      "Resume review",
      "Technical discussion",
      "System design challenge",
      "Leadership panel",
      "Final executive interview"
    ]
  },
  {
    id: "23",
    title: "QA Automation Engineer",
    company: "Quality First",
    location: "Birmingham, UK",
    type: "Full-time",
    salary: "£45,000 - £65,000",
    postedDate: "2024-04-04",
    skills: ["Selenium", "Cypress", "JavaScript/TypeScript", "CI/CD", "API Testing", "Test Frameworks"],
    description: "Build and maintain automated testing frameworks for web and mobile applications.",
    requirements: [
      "Experience with Selenium and Cypress",
      "JavaScript/TypeScript proficiency",
      "CI/CD pipeline experience",
      "API testing knowledge",
      "Agile methodology understanding"
    ],
    benefits: [
      "Flexible working hours",
      "Training budget",
      "Health insurance",
      "25 days holiday",
      "Remote work options"
    ],
    responsibilities: [
      "Develop automated test scripts",
      "Maintain testing frameworks",
      "Integrate tests with CI/CD",
      "Report and track bugs",
      "Improve test coverage"
    ],
    workHours: "9:00 AM - 5:00 PM (flexible)",
    workEnvironment: "Modern office in Birmingham with remote options",
    teamSize: "6-8 QA engineers",
    reportingStructure: "Reports to QA Manager",
    growthOpportunities: [
      "Senior QA Engineer",
      "Test Automation Lead",
      "QA Architect",
      "DevOps Engineer"
    ],
    companyCulture: "Quality-focused environment with emphasis on automation and efficiency",
    applicationProcess: [
      "Resume submission",
      "Technical assessment",
      "Testing scenario interview",
      "Team fit discussion",
      "Final offer"
    ]
  },
  {
    id: "24",
    title: "Product Manager",
    company: "Tech Innovations",
    location: "Cambridge, UK",
    type: "Full-time",
    salary: "£60,000 - £80,000",
    postedDate: "2024-04-05",
    skills: ["Product Development", "Agile", "Market Research", "Stakeholder Management", "Analytics", "Roadmapping"],
    description: "Lead product development from conception to launch, working with cross-functional teams.",
    requirements: [
      "5+ years product management experience",
      "Technical background",
      "Agile certification",
      "Strong analytical skills",
      "Excellent communication abilities"
    ],
    benefits: [
      "Flexible working",
      "Product conference attendance",
      "Private healthcare",
      "Annual bonus",
      "Professional development"
    ],
    responsibilities: [
      "Define product vision and strategy",
      "Manage product roadmap",
      "Gather and prioritize requirements",
      "Work with development teams",
      "Analyze market and user feedback"
    ],
    workHours: "9:00 AM - 5:30 PM (flexible)",
    workEnvironment: "Innovation hub in Cambridge with hybrid options",
    teamSize: "Works with 3-4 cross-functional teams",
    reportingStructure: "Reports to Head of Product",
    growthOpportunities: [
      "Senior Product Manager",
      "Product Director",
      "Head of Product",
      "Product Strategy"
    ],
    companyCulture: "User-focused, data-driven culture with emphasis on innovation",
    applicationProcess: [
      "Resume submission",
      "Initial screening",
      "Product case study",
      "Stakeholder panel interview",
      "Final offer"
    ]
  },
  {
    id: "25",
    title: "Cloud Solutions Architect",
    company: "CloudTech",
    location: "Remote",
    type: "Full-time",
    salary: "£80,000 - £100,000",
    postedDate: "2024-04-05",
    skills: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Microservices", "Security"],
    description: "Design and implement cloud-native solutions using AWS, Azure, and GCP.",
    requirements: [
      "Cloud platform certifications",
      "Experience with multi-cloud architectures",
      "Strong infrastructure as code skills",
      "Security best practices knowledge",
      "Solution architecture experience"
    ],
    benefits: [
      "Remote work",
      "Cloud certification support",
      "Health insurance",
      "Stock options",
      "Learning budget"
    ],
    responsibilities: [
      "Design cloud architectures",
      "Implement infrastructure as code",
      "Optimize cloud costs",
      "Ensure security compliance",
      "Guide development teams"
    ],
    workHours: "Flexible schedule",
    workEnvironment: "100% remote with optional co-working spaces",
    teamSize: "8-10 cloud engineers",
    reportingStructure: "Reports to CTO",
    growthOpportunities: [
      "Principal Cloud Architect",
      "Cloud Practice Lead",
      "Technical Director",
      "Solution Architecture"
    ],
    companyCulture: "Remote-first, innovation-focused with emphasis on technical excellence",
    applicationProcess: [
      "Resume and certification review",
      "Technical discussion",
      "Architecture design challenge",
      "Team interview",
      "Final offer"
    ]
  },
  {
    id: "26",
    title: "Machine Learning Engineer",
    company: "AI Solutions",
    location: "Oxford, UK",
    type: "Full-time",
    salary: "£70,000 - £90,000",
    postedDate: "2024-04-06",
    skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "Data Processing", "Deep Learning"],
    description: "Develop and deploy machine learning models for real-world applications.",
    requirements: [
      "Strong ML framework experience",
      "Python programming expertise",
      "Deep learning knowledge",
      "MLOps experience",
      "Data pipeline development"
    ],
    benefits: [
      "Flexible hours",
      "Conference budget",
      "Private healthcare",
      "Gym membership",
      "Remote work options"
    ],
    responsibilities: [
      "Build machine learning models",
      "Deploy models to production",
      "Optimize model performance",
      "Develop data pipelines",
      "Research new ML techniques"
    ],
    workHours: "9:30 AM - 5:30 PM (flexible)",
    workEnvironment: "Research lab in Oxford with hybrid options",
    teamSize: "6-8 ML engineers and data scientists",
    reportingStructure: "Reports to Head of AI",
    growthOpportunities: [
      "Senior ML Engineer",
      "ML Research Lead",
      "AI Architect",
      "ML Operations Lead"
    ],
    companyCulture: "Research-oriented environment with focus on innovation and practical applications",
    applicationProcess: [
      "Resume submission",
      "Technical assessment",
      "ML modeling challenge",
      "Team interview",
      "Final offer"
    ]
  },
  {
    id: "27",
    title: "Frontend Developer",
    company: "Web Experts",
    location: "Newcastle, UK",
    type: "Full-time",
    salary: "£40,000 - £60,000",
    postedDate: "2024-04-06",
    skills: ["React", "Vue.js", "TypeScript", "CSS/SASS", "Jest", "Responsive Design"],
    description: "Create responsive and accessible web applications using modern frontend technologies.",
    requirements: [
      "React/Vue.js experience",
      "TypeScript proficiency",
      "CSS/SASS expertise",
      "Testing framework knowledge",
      "Performance optimization skills"
    ],
    benefits: [
      "Flexible working",
      "Learning budget",
      "Health insurance",
      "25 days holiday",
      "Remote options"
    ],
    responsibilities: [
      "Develop responsive UIs",
      "Implement design systems",
      "Write unit and integration tests",
      "Optimize frontend performance",
      "Collaborate with UX designers"
    ],
    workHours: "9:00 AM - 5:00 PM (flexible)",
    workEnvironment: "Modern office in Newcastle with hybrid options",
    teamSize: "6-8 frontend developers",
    reportingStructure: "Reports to Frontend Lead",
    growthOpportunities: [
      "Senior Frontend Developer",
      "Frontend Architect",
      "UI Team Lead",
      "Full-stack Developer"
    ],
    companyCulture: "Collaborative, user-focused environment with emphasis on quality code",
    applicationProcess: [
      "Resume and portfolio review",
      "Technical assessment",
      "Pair programming session",
      "Team interview",
      "Final offer"
    ]
  },
  {
    id: "28",
    title: "Database Administrator",
    company: "Data Systems",
    location: "Cardiff, UK",
    type: "Full-time",
    salary: "£55,000 - £75,000",
    postedDate: "2024-04-07",
    skills: ["PostgreSQL", "MySQL", "Performance Tuning", "Database Security", "Backup/Recovery", "Monitoring"],
    description: "Manage and optimize database systems for high-performance applications.",
    requirements: [
      "PostgreSQL/MySQL expertise",
      "Performance tuning experience",
      "Backup and recovery knowledge",
      "Security best practices",
      "Monitoring tools experience"
    ],
    benefits: [
      "Flexible hours",
      "Certification support",
      "Private healthcare",
      "Pension scheme",
      "Remote work"
    ],
    responsibilities: [
      "Manage database infrastructure",
      "Optimize query performance",
      "Implement backup strategies",
      "Ensure data security",
      "Monitor database health"
    ],
    workHours: "9:00 AM - 5:00 PM with on-call rotation",
    workEnvironment: "Office in Cardiff with hybrid options",
    teamSize: "3-5 database professionals",
    reportingStructure: "Reports to Data Infrastructure Manager",
    growthOpportunities: [
      "Senior DBA",
      "Database Architect",
      "Data Platform Lead",
      "Cloud Database Specialist"
    ],
    companyCulture: "Detail-oriented environment with focus on reliability and performance",
    applicationProcess: [
      "Resume submission",
      "Technical assessment",
      "Database scenario discussion",
      "Team interview",
      "Final offer"
    ]
  },
  {
    id: "29",
    title: "Systems Engineer",
    company: "Infrastructure Pro",
    location: "Belfast, UK",
    type: "Full-time",
    salary: "£50,000 - £70,000",
    postedDate: "2024-04-07",
    skills: ["Linux", "Network Security", "Automation", "Monitoring", "Cloud Platforms", "Scripting"],
    description: "Design and maintain critical infrastructure systems for enterprise applications.",
    requirements: [
      "Linux system administration",
      "Network security knowledge",
      "Automation scripting",
      "Monitoring system experience",
      "Cloud platform expertise"
    ],
    benefits: [
      "Flexible working",
      "Training budget",
      "Health insurance",
      "26 days holiday",
      "Remote options"
    ],
    responsibilities: [
      "Maintain server infrastructure",
      "Implement security measures",
      "Automate routine tasks",
      "Monitor system performance",
      "Troubleshoot infrastructure issues"
    ],
    workHours: "9:00 AM - 5:00 PM with on-call rotation",
    workEnvironment: "Modern office in Belfast with hybrid options",
    teamSize: "5-7 systems engineers",
    reportingStructure: "Reports to Infrastructure Manager",
    growthOpportunities: [
      "Senior Systems Engineer",
      "Infrastructure Architect",
      "DevOps Engineer",
      "Site Reliability Engineer"
    ],
    companyCulture: "Reliable, systematic environment with focus on stability and automation",
    applicationProcess: [
      "Resume submission",
      "Technical assessment",
      "Systems scenario interview",
      "Team fit discussion",
      "Final offer"
    ]
  },
  {
    id: "30",
    title: "AR/VR Developer",
    company: "Virtual Worlds",
    location: "Brighton, UK",
    type: "Full-time",
    salary: "£60,000 - £80,000",
    postedDate: "2024-04-08",
    skills: ["Unity", "Unreal Engine", "C#", "3D Modeling", "AR/VR SDKs", "Mobile Development"],
    description: "Create immersive AR/VR experiences using Unity and related technologies.",
    requirements: [
      "Unity/Unreal Engine experience",
      "3D modeling knowledge",
      "C# programming skills",
      "AR/VR SDK experience",
      "Mobile development background"
    ],
    benefits: [
      "Latest VR equipment",
      "Flexible hours",
      "Private healthcare",
      "Gaming room access",
      "Remote work options"
    ],
    responsibilities: [
      "Develop AR/VR applications",
      "Create immersive experiences",
      "Optimize 3D assets",
      "Implement interactive features",
      "Test across multiple devices"
    ],
    workHours: "9:30 AM - 5:30 PM (flexible)",
    workEnvironment: "Creative studio in Brighton with VR lab",
    teamSize: "4-6 AR/VR developers",
    reportingStructure: "Reports to Creative Technology Director",
    growthOpportunities: [
      "Senior AR/VR Developer",
      "XR Technical Lead",
      "Immersive Experience Director",
      "3D Technology Specialist"
    ],
    companyCulture: "Creative, innovative environment pushing boundaries of immersive technology",
    applicationProcess: [
      "Portfolio review",
      "Technical assessment",
      "Demo showcase",
      "Team interview",
      "Final offer"
    ]
  }
]; 