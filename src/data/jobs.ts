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
  }
]; 