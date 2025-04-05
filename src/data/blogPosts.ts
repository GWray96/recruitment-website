export interface Author {
  name: string;
  role: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: Author;
  date: string;
  readTime: string;
  category: 'candidate' | 'employer';
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The 2024 Guide to Tech Recruitment: Trends and Strategies',
    slug: 'tech-recruitment-guide-2024',
    excerpt: 'Discover the latest trends and strategies shaping the future of technical recruitment in 2024.',
    content: `
      <h2>The Evolution of Tech Recruitment</h2>
      <p>As we move further into 2024, the landscape of technical recruitment continues to evolve at a rapid pace. Companies are adapting to new challenges and opportunities in the quest to attract and retain top tech talent.</p>
      
      <h3>Key Trends in 2024</h3>
      <ul>
        <li>AI-Powered Recruitment Tools</li>
        <li>Remote-First Hiring Strategies</li>
        <li>Skills-Based Assessment</li>
        <li>Emphasis on Diversity and Inclusion</li>
      </ul>
      
      <h3>The Rise of Remote Hiring</h3>
      <p>With remote work becoming increasingly normalized, companies are expanding their talent pools globally. This shift has led to new considerations in recruitment processes and team building.</p>
      
      <h3>Skills Assessment Evolution</h3>
      <p>Traditional interviews are being supplemented with practical assessments, pair programming sessions, and project-based evaluations to better gauge candidates' capabilities.</p>
    `,
    author: { name: 'Sarah Johnson', role: 'Head of Recruitment' },
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'employer',
    tags: ['recruitment', 'technology', 'trends'],
  },
  {
    id: '2',
    title: 'Top 10 Skills Every Software Developer Needs in 2024',
    slug: 'top-developer-skills-2024',
    excerpt: 'Stay ahead of the curve with these essential skills for modern software development.',
    content: `
      <h2>Essential Skills for Modern Developers</h2>
      <p>The technology landscape is constantly evolving, and developers need to keep their skills sharp to remain competitive in the job market.</p>
      
      <h3>Technical Skills</h3>
      <ul>
        <li>Cloud Computing (AWS, Azure, GCP)</li>
        <li>Container Technologies (Docker, Kubernetes)</li>
        <li>Modern JavaScript Frameworks</li>
        <li>API Development</li>
      </ul>
      
      <h3>Soft Skills</h3>
      <p>Technical expertise alone isn't enough. Modern developers need strong communication, collaboration, and problem-solving abilities.</p>
      
      <h3>Emerging Technologies</h3>
      <p>Stay ahead by familiarizing yourself with AI/ML, blockchain, and edge computing technologies.</p>
    `,
    author: { name: 'Mike Chen', role: 'Tech Lead' },
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'candidate',
    tags: ['skills', 'development', 'career'],
  },
  {
    id: '3',
    title: 'Building an Inclusive Tech Team: A Guide for Employers',
    slug: 'building-inclusive-tech-team',
    excerpt: 'Learn how to create and maintain a diverse and inclusive technical team in your organization.',
    content: `
      <h2>Creating an Inclusive Tech Environment</h2>
      <p>Building a diverse and inclusive tech team isn't just about hiring - it's about creating an environment where everyone can thrive.</p>
      
      <h3>Key Strategies</h3>
      <ul>
        <li>Inclusive Recruitment Practices</li>
        <li>Bias-Free Interview Processes</li>
        <li>Mentorship Programs</li>
        <li>Employee Resource Groups</li>
      </ul>
      
      <h3>Measuring Success</h3>
      <p>Track key metrics and gather feedback to ensure your diversity and inclusion initiatives are effective.</p>
      
      <h3>Long-term Benefits</h3>
      <p>Diverse teams bring different perspectives, leading to better problem-solving and innovation.</p>
    `,
    author: { name: 'Lisa Wong', role: 'DEI Specialist' },
    date: 'March 8, 2024',
    readTime: '7 min read',
    category: 'employer',
    tags: ['diversity', 'inclusion', 'team-building'],
  },
  {
    id: '4',
    title: 'Remote Work Best Practices for Software Engineers',
    slug: 'remote-work-best-practices',
    excerpt: 'Maximize your productivity and work-life balance with these remote work strategies.',
    content: `
      <h2>Thriving in a Remote Environment</h2>
      <p>Remote work offers flexibility but requires discipline and effective communication to maintain productivity.</p>
      
      <h3>Setting Up Your Workspace</h3>
      <ul>
        <li>Ergonomic Setup</li>
        <li>Reliable Internet Connection</li>
        <li>Proper Equipment</li>
        <li>Distraction-Free Environment</li>
      </ul>
      
      <h3>Communication Best Practices</h3>
      <p>Learn to communicate effectively with your team across different time zones and cultures.</p>
      
      <h3>Work-Life Balance</h3>
      <p>Establish boundaries and routines to maintain a healthy separation between work and personal life.</p>
    `,
    author: { name: 'Alex Rivera', role: 'Senior Developer' },
    date: 'March 5, 2024',
    readTime: '5 min read',
    category: 'candidate',
    tags: ['remote-work', 'productivity', 'work-life-balance'],
  },
  {
    id: '5',
    title: 'Mastering Technical Interviews: A Developer\'s Guide',
    slug: 'mastering-technical-interviews',
    excerpt: 'Prepare effectively for technical interviews with these proven strategies and tips.',
    content: `
      <h2>Ace Your Technical Interviews</h2>
      <p>Technical interviews can be challenging, but with the right preparation, you can approach them with confidence.</p>
      
      <h3>Key Areas to Focus On</h3>
      <ul>
        <li>Data Structures and Algorithms</li>
        <li>System Design Principles</li>
        <li>Problem-Solving Strategies</li>
        <li>Code Quality and Best Practices</li>
      </ul>
      
      <h3>Practice Strategies</h3>
      <p>Regular practice with coding challenges and mock interviews can significantly improve your performance.</p>
      
      <h3>Common Pitfalls to Avoid</h3>
      <p>Learn about common mistakes candidates make and how to avoid them in your interviews.</p>
    `,
    author: { name: 'David Kim', role: 'Technical Recruiter' },
    date: 'March 12, 2024',
    readTime: '6 min read',
    category: 'candidate',
    tags: ['interviews', 'career-growth', 'preparation'],
  },
  {
    id: '6',
    title: 'Creating an Effective Technical Assessment Process',
    slug: 'technical-assessment-process',
    excerpt: 'Design a fair and effective technical assessment process that identifies top talent.',
    content: `
      <h2>Building a Better Assessment Process</h2>
      <p>A well-designed technical assessment process helps identify the best candidates while providing a positive experience.</p>
      
      <h3>Key Components</h3>
      <ul>
        <li>Initial Screening Methods</li>
        <li>Technical Challenge Design</li>
        <li>Live Coding Sessions</li>
        <li>Evaluation Criteria</li>
      </ul>
      
      <h3>Fair Evaluation</h3>
      <p>Establish clear criteria and reduce bias in your assessment process.</p>
      
      <h3>Candidate Experience</h3>
      <p>Create a positive experience that reflects well on your company.</p>
    `,
    author: { name: 'Rachel Martinez', role: 'Engineering Manager' },
    date: 'March 9, 2024',
    readTime: '7 min read',
    category: 'employer',
    tags: ['recruitment', 'assessment', 'hiring'],
  },
  {
    id: '7',
    title: 'Negotiating Your Tech Salary: Tips and Strategies',
    slug: 'tech-salary-negotiation',
    excerpt: 'Learn how to effectively negotiate your salary and benefits in the tech industry.',
    content: `
      <h2>Maximizing Your Compensation</h2>
      <p>Salary negotiation is a crucial skill that can significantly impact your career earnings.</p>
      
      <h3>Research and Preparation</h3>
      <ul>
        <li>Market Rate Research</li>
        <li>Company Research</li>
        <li>Value Proposition</li>
        <li>Negotiation Tactics</li>
      </ul>
      
      <h3>Beyond the Base Salary</h3>
      <p>Consider the total compensation package, including benefits, equity, and bonuses.</p>
      
      <h3>Common Scenarios</h3>
      <p>Navigate different negotiation scenarios with confidence and professionalism.</p>
    `,
    author: { name: 'James Wilson', role: 'Career Coach' },
    date: 'March 7, 2024',
    readTime: '6 min read',
    category: 'candidate',
    tags: ['salary', 'negotiation', 'career'],
  },
  {
    id: '8',
    title: 'Scaling Your Tech Team: Best Practices',
    slug: 'scaling-tech-team',
    excerpt: 'Learn effective strategies for growing your technical team while maintaining culture and productivity.',
    content: `
      <h2>Growing Your Team Successfully</h2>
      <p>Scaling a technical team requires careful planning and execution to maintain quality and culture.</p>
      
      <h3>Key Considerations</h3>
      <ul>
        <li>Hiring Pipeline Development</li>
        <li>Onboarding Processes</li>
        <li>Team Structure</li>
        <li>Knowledge Management</li>
      </ul>
      
      <h3>Common Challenges</h3>
      <p>Anticipate and address common scaling challenges before they become problems.</p>
      
      <h3>Measuring Success</h3>
      <p>Track key metrics to ensure your scaling efforts are effective.</p>
    `,
    author: { name: 'Emily Chen', role: 'CTO' },
    date: 'March 6, 2024',
    readTime: '8 min read',
    category: 'employer',
    tags: ['scaling', 'team-management', 'growth'],
  }
]; 