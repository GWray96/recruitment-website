export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  subcategory?: string;
}

export const faqCategories = [
  { id: 'general', name: 'General Questions' },
  { id: 'candidates', name: 'For Candidates' },
  { id: 'employers', name: 'For Employers' },
  { id: 'process', name: 'Our Process' },
  { id: 'services', name: 'Services' },
  { id: 'virtual-coffee', name: 'Virtual Coffee Meetings' },
  { id: 'pricing', name: 'Pricing & Packages' },
  { id: 'technical', name: 'Technical Questions' }
];

export const faqData: FAQItem[] = [
  // General Questions
  {
    id: 'general-1',
    question: "What makes NexusTech Recruitment different from other agencies?",
    answer: "At NexusTech Recruitment, we combine cutting-edge technology with deep industry expertise. Our team of specialized tech recruiters, many with hands-on development experience, ensures precise matching of skills and culture. We've successfully placed over 250 tech professionals and help candidates achieve an average 25% salary increase. Unlike traditional agencies, we focus exclusively on tech roles and maintain a deep understanding of the industry's evolving needs.",
    category: 'general'
  },
  {
    id: 'general-2',
    question: "Where is NexusTech Recruitment based?",
    answer: "NexusTech Recruitment is headquartered in Cambridge, East Anglia, with a strong focus on serving the tech community across the region. We also work with clients and candidates nationwide, offering both remote and on-site recruitment solutions. Our local presence allows us to build strong relationships with the tech ecosystem in East Anglia while leveraging technology to serve clients beyond our immediate geography.",
    category: 'general'
  },
  {
    id: 'general-3',
    question: "How long has NexusTech been in business?",
    answer: "NexusTech Recruitment was founded in 2018 and has grown steadily since then. We've expanded our team, opened our Cambridge office in 2021, and have been recognized as the Best Tech Recruitment Agency in East Anglia in 2022. Our journey has been marked by continuous innovation, including the launch of our virtual coffee meetings and remote recruitment processes in 2020.",
    category: 'general'
  },
  {
    id: 'general-4',
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including FinTech, HealthTech, EdTech, E-commerce, and Enterprise Software. Our expertise in these sectors allows us to understand specific industry requirements and match candidates with relevant opportunities. We work with both cutting-edge startups and established enterprise organizations, providing tailored recruitment solutions for each client's unique needs.",
    category: 'general'
  },
  {
    id: 'general-5',
    question: "How do you handle data privacy and confidentiality?",
    answer: "We take data privacy seriously and comply with all relevant regulations including GDPR. All candidate and client information is stored securely, and we maintain strict confidentiality throughout the recruitment process. We never share your information with third parties without explicit consent, and we regularly review our data protection practices to ensure the highest standards of security.",
    category: 'general'
  },

  // For Candidates
  {
    id: 'candidates-1',
    question: "How can I register as a candidate with NexusTech?",
    answer: "You can register as a candidate by visiting our candidate hub page and filling out our online registration form. Alternatively, you can schedule a virtual coffee meeting with one of our consultants to discuss your career goals. We'll ask about your skills, experience, and preferences to better understand how we can help you find the right opportunities.",
    category: 'candidates'
  },
  {
    id: 'candidates-2',
    question: "What support does NexusTech provide during and after placement?",
    answer: "We provide end-to-end support including technical CV optimization, interview preparation, coding assessment guidance, and salary negotiation. Post-placement, we maintain regular check-ins during the onboarding period and offer ongoing career development support. Our commitment doesn't end once you accept an offer - we're here for your career growth and can help with future opportunities as your career evolves.",
    category: 'candidates'
  },
  {
    id: 'candidates-3',
    question: "Does NexusTech offer flexible working arrangements?",
    answer: "Yes, we understand the modern workplace's evolving nature. We offer opportunities across remote, hybrid, and office-based positions, always ensuring that working arrangements align with both candidate preferences and company culture. We work with clients who value flexibility and understand the benefits of different working models, helping you find roles that match your preferred work style.",
    category: 'candidates'
  },
  {
    id: 'candidates-4',
    question: "How do you match candidates with opportunities?",
    answer: "Our matching process combines AI-powered algorithms with human expertise. We analyze your skills, experience, preferences, and career goals, then match you with opportunities that align with these factors. We consider not just technical skills but also cultural fit, work style, and long-term career aspirations. This holistic approach ensures that we find opportunities where you'll thrive both professionally and personally.",
    category: 'candidates'
  },
  {
    id: 'candidates-5',
    question: "What if I'm not actively looking but interested in future opportunities?",
    answer: "We welcome passive candidates who aren't actively looking but are open to hearing about relevant opportunities. You can register with us and specify your preferences for contact frequency. We'll keep you informed about roles that match your criteria without overwhelming you with irrelevant opportunities. Many of our best placements have come from candidates who weren't actively searching but found the right opportunity through our network.",
    category: 'candidates'
  },
  {
    id: 'candidates-6',
    question: "Do you offer career advice for tech professionals?",
    answer: "Yes, we provide comprehensive career advice for tech professionals at all stages of their careers. Our consultants have extensive experience in the tech industry and can offer guidance on career progression, skill development, and market trends. We can help you identify your strengths, areas for development, and potential career paths that align with your interests and goals.",
    category: 'candidates'
  },

  // For Employers
  {
    id: 'employers-1',
    question: "How do you ensure quality matches for employers?",
    answer: "We use a combination of AI-powered matching algorithms and human expertise to ensure the best fit. Our process includes thorough technical assessments, cultural alignment checks, and detailed reference verification. We also provide comprehensive candidate profiles and facilitate structured interviews. Our specialized tech recruiters understand both the technical requirements and the soft skills needed for success in your organization.",
    category: 'employers'
  },
  {
    id: 'employers-2',
    question: "What industries and company sizes do you work with?",
    answer: "We work with companies of all sizes, from startups to large enterprises, across various industries including FinTech, HealthTech, EdTech, E-commerce, and Enterprise Software. Our flexible approach allows us to tailor our services to meet the specific needs of each client, regardless of size or industry. We have particular expertise in the East Anglia tech ecosystem but serve clients nationwide.",
    category: 'employers'
  },
  {
    id: 'employers-3',
    question: "How long does it typically take to fill a position?",
    answer: "The time to fill a position varies depending on the role, requirements, and market conditions. On average, our streamlined process takes 2-4 weeks from initial briefing to successful placement. We move fast, reducing time-to-hire while ensuring you secure the best talent before competitors do. We'll provide you with regular updates throughout the process and work efficiently to meet your hiring timelines.",
    category: 'employers'
  },
  {
    id: 'employers-4',
    question: "What happens if a placed candidate doesn't work out?",
    answer: "We stand behind our placements with a comprehensive guarantee. If a candidate doesn't work out within the guarantee period, we'll work with you to find a replacement at no additional cost. We also provide ongoing support during the onboarding period to help ensure a smooth transition and address any issues that may arise early in the placement.",
    category: 'employers'
  },
  {
    id: 'employers-5',
    question: "Do you offer retained or contingency recruitment?",
    answer: "We offer both retained and contingency recruitment options to suit different client needs. Retained recruitment is ideal for critical, senior positions where you want dedicated, exclusive attention. Contingency recruitment is suitable for most roles and only charges a fee upon successful placement. We'll discuss your specific requirements and recommend the approach that best aligns with your hiring needs and timeline.",
    category: 'employers'
  },
  {
    id: 'employers-6',
    question: "How do you handle diversity and inclusion in recruitment?",
    answer: "Diversity and inclusion are core values at NexusTech. We actively work to eliminate bias from our recruitment process and present diverse candidate shortlists to our clients. We use structured interviews and objective assessment criteria to ensure fair evaluation. We also partner with organizations that promote diversity in tech and attend events focused on underrepresented groups in the industry.",
    category: 'employers'
  },

  // Our Process
  {
    id: 'process-1',
    question: "How does NexusTech's recruitment process work?",
    answer: "Our streamlined process typically takes 2-4 weeks, utilizing advanced AI matching technology alongside personal consultation. We begin with a thorough understanding of your needs, conduct precise matching, facilitate interviews, and provide comprehensive support through to successful placement and beyond. For candidates, we start with a detailed consultation to understand your skills and career goals, then match you with relevant opportunities and support you through the application process.",
    category: 'process'
  },
  {
    id: 'process-2',
    question: "What is a virtual coffee meeting?",
    answer: "A virtual coffee meeting is an informal, no-obligation conversation with one of our recruitment consultants. It's an opportunity to discuss your career goals, learn about the tech job market, and explore how NexusTech can help you. For employers, it's a chance to discuss your hiring needs and learn about our services without any commitment. These meetings typically last 30 minutes and can be scheduled at a time that suits you.",
    category: 'process',
    subcategory: 'virtual-coffee'
  },
  {
    id: 'process-3',
    question: "How do you assess candidates' technical skills?",
    answer: "We use a combination of methods to assess technical skills, including technical interviews, coding assessments, and reference checks. For developers, we may use platforms like HackerRank or custom coding challenges. For other roles, we use role-specific assessments and scenario-based questions. We also consider soft skills, cultural fit, and career aspirations to ensure a holistic evaluation.",
    category: 'process'
  },
  {
    id: 'process-4',
    question: "What happens after a successful placement?",
    answer: "After a successful placement, we maintain regular contact with both the candidate and employer during the onboarding period to ensure a smooth transition. We provide support for any issues that may arise and check in periodically to ensure long-term success. For candidates, we offer ongoing career development support and can help with future opportunities as your career evolves.",
    category: 'process'
  },
  {
    id: 'process-5',
    question: "How do you handle salary negotiations?",
    answer: "We facilitate salary negotiations between candidates and employers, ensuring a fair outcome for both parties. We provide market insights and guidance based on our extensive experience in the tech recruitment space. Our goal is to reach an agreement that reflects the candidate's value while meeting the employer's budget constraints. We're transparent throughout the process and advocate for fair compensation.",
    category: 'process'
  },

  // Services
  {
    id: 'services-1',
    question: "What technical roles does NexusTech specialize in?",
    answer: "We specialize in placing professionals across the entire tech spectrum, including Software Engineering, Cloud Architecture, DevOps, AI/ML Engineering, Data Science, Cybersecurity, and Technical Leadership roles. We work with both cutting-edge startups and established enterprise organizations. Our expertise covers all major programming languages, frameworks, and technologies, allowing us to find the right talent for any technical role.",
    category: 'services'
  },
  {
    id: 'services-2',
    question: "Do you offer permanent, contract, or both types of placements?",
    answer: "We offer both permanent and contract placements to suit different client and candidate needs. For permanent roles, we focus on long-term career development and cultural fit. For contract roles, we emphasize technical expertise and immediate availability. We also offer fixed-term contracts and interim solutions for specific projects or temporary needs. Our flexible approach allows us to meet a wide range of hiring requirements.",
    category: 'services'
  },
  {
    id: 'services-3',
    question: "Do you offer executive search services?",
    answer: "Yes, we offer executive search services for senior technical roles such as CTOs, IT Directors, and Technical Directors. Our executive search process is more thorough and typically involves retained recruitment. We conduct extensive market mapping, confidential approaches, and detailed assessments to identify and attract the best candidates for these critical positions.",
    category: 'services'
  },
  {
    id: 'services-4',
    question: "Do you offer recruitment for remote positions?",
    answer: "Yes, we specialize in recruiting for remote, hybrid, and office-based positions. We have extensive experience in matching candidates with remote opportunities and understand the unique requirements of remote work. We assess candidates' remote work capabilities, including self-motivation, communication skills, and home office setup. We also work with clients to ensure they have the right infrastructure and management approaches for remote teams.",
    category: 'services'
  },
  {
    id: 'services-5',
    question: "Do you offer project-based recruitment solutions?",
    answer: "Yes, we offer project-based recruitment solutions for clients with specific project needs or temporary staffing requirements. This can include assembling entire teams for new projects, finding specialists for specific technical challenges, or providing interim solutions during critical phases. We work closely with clients to understand project timelines, requirements, and constraints to deliver the right talent at the right time.",
    category: 'services'
  },

  // Virtual Coffee Meetings
  {
    id: 'virtual-coffee-1',
    question: "What is the purpose of a virtual coffee meeting?",
    answer: "A virtual coffee meeting is an informal, no-obligation conversation with one of our recruitment consultants. It's an opportunity to discuss your career goals, learn about the tech job market, and explore how NexusTech can help you. For employers, it's a chance to discuss your hiring needs and learn about our services without any commitment. These meetings are designed to be relaxed and informative, with no pressure to make immediate decisions.",
    category: 'virtual-coffee'
  },
  {
    id: 'virtual-coffee-2',
    question: "How do I schedule a virtual coffee meeting?",
    answer: "You can schedule a virtual coffee meeting by visiting our virtual coffee page and selecting a convenient time slot. Alternatively, you can contact us directly via phone or email, and we'll arrange a suitable time. We offer flexible scheduling options, including early morning, evening, and weekend slots to accommodate different schedules. Once scheduled, you'll receive a confirmation email with the meeting details and a link to join the video call.",
    category: 'virtual-coffee'
  },
  {
    id: 'virtual-coffee-3',
    question: "What should I prepare for a virtual coffee meeting?",
    answer: "For candidates, it's helpful to have your CV ready and to think about your career goals, preferred roles, and any questions you have about the job market. For employers, it's useful to have information about your company, the roles you're looking to fill, and your hiring timeline. There's no formal preparation required - the meeting is designed to be conversational and informative. Just come ready to discuss your needs and how we can help.",
    category: 'virtual-coffee'
  },
  {
    id: 'virtual-coffee-4',
    question: "How long does a virtual coffee meeting last?",
    answer: "Virtual coffee meetings typically last 30 minutes, which is enough time to discuss your needs and determine how we can help. If we need more time to cover everything, we can schedule a follow-up meeting. We respect your time and aim to make these meetings efficient and valuable. We'll focus on understanding your needs and providing relevant information and advice.",
    category: 'virtual-coffee'
  },
  {
    id: 'virtual-coffee-5',
    question: "Is there any obligation after a virtual coffee meeting?",
    answer: "No, there is absolutely no obligation after a virtual coffee meeting. These meetings are designed to be informative and helpful, with no pressure to proceed with our services. We believe in building relationships based on trust and value, not obligation. If you decide to work with us, we'll outline the next steps. If not, you'll still have gained valuable insights about the tech job market and recruitment process.",
    category: 'virtual-coffee'
  },

  // Pricing & Packages
  {
    id: 'pricing-1',
    question: "What are your recruitment fees?",
    answer: "Our recruitment fees vary depending on the service, role level, and recruitment model (contingency or retained). We're transparent about our fees and will provide a clear breakdown before you commit to our services. For contingency recruitment, fees are typically a percentage of the candidate's first-year salary. For retained recruitment, fees are typically split into three payments: at the start of the search, when a shortlist is presented, and upon successful placement.",
    category: 'pricing'
  },
  {
    id: 'pricing-2',
    question: "Do you offer different service packages for different company sizes?",
    answer: "Yes, we offer tailored service packages for companies of different sizes, from startups to large enterprises. Our packages are designed to meet the specific needs and budgets of each client. For startups and small businesses, we offer more flexible, cost-effective solutions. For larger organizations, we provide comprehensive recruitment services with dedicated account management and reporting. We'll work with you to design a package that meets your specific requirements.",
    category: 'pricing'
  },
  {
    id: 'pricing-3',
    question: "Are there any hidden costs or additional fees?",
    answer: "No, we believe in complete transparency when it comes to our fees. We'll provide a clear breakdown of all costs upfront, with no hidden charges or surprise fees. Our standard fee covers the entire recruitment process, from initial briefing to successful placement and post-placement support. If there are any additional services you require, we'll discuss these separately and provide a clear quote before proceeding.",
    category: 'pricing'
  },
  {
    id: 'pricing-4',
    question: "Do you offer any guarantees on your placements?",
    answer: "Yes, we stand behind our placements with a comprehensive guarantee. If a candidate doesn't work out within the guarantee period (typically 3-6 months, depending on the role), we'll work with you to find a replacement at no additional cost. This demonstrates our confidence in our matching process and our commitment to ensuring long-term success for both candidates and employers.",
    category: 'pricing'
  },
  {
    id: 'pricing-5',
    question: "Do you offer any discounts for multiple placements?",
    answer: "Yes, we offer discounted rates for clients who commit to multiple placements or ongoing recruitment needs. These volume discounts can significantly reduce the cost per placement while ensuring consistent quality and service. We also offer retainer arrangements for clients with regular recruitment needs, providing cost certainty and dedicated service. Contact us to discuss your specific requirements and the available options.",
    category: 'pricing'
  },

  // Technical Questions
  {
    id: 'technical-1',
    question: "What technologies and frameworks do you specialize in?",
    answer: "We specialize in all major technologies and frameworks across the tech spectrum. This includes frontend technologies (React, Angular, Vue.js), backend languages (Python, Java, Node.js, .NET), cloud platforms (AWS, Azure, GCP), DevOps tools (Docker, Kubernetes, Terraform), data technologies (SQL, NoSQL, Hadoop, Spark), and emerging technologies (AI, ML, blockchain). Our recruiters have technical backgrounds and stay current with industry trends to ensure we can match candidates with the right technical skills.",
    category: 'technical'
  },
  {
    id: 'technical-2',
    question: "How do you assess candidates' technical skills?",
    answer: "We use a combination of methods to assess technical skills, including technical interviews, coding assessments, and reference checks. For developers, we may use platforms like HackerRank or custom coding challenges. For other roles, we use role-specific assessments and scenario-based questions. We also consider soft skills, cultural fit, and career aspirations to ensure a holistic evaluation. Our technical assessments are designed to be relevant to the specific role and technologies required.",
    category: 'technical'
  },
  {
    id: 'technical-3',
    question: "Do you work with candidates at all experience levels?",
    answer: "Yes, we work with candidates at all experience levels, from junior developers to senior technical leaders. We understand that different experience levels require different approaches and have tailored our services accordingly. For junior candidates, we focus on potential, learning ability, and cultural fit. For mid-level candidates, we balance technical skills with experience and career progression. For senior candidates, we emphasize leadership, strategic thinking, and industry expertise.",
    category: 'technical'
  },
  {
    id: 'technical-4',
    question: "How do you stay current with technical trends and requirements?",
    answer: "We stay current with technical trends and requirements through continuous learning, industry research, and close relationships with our clients and candidates. Our recruiters have technical backgrounds and regularly attend industry conferences, webinars, and training sessions. We also conduct regular market research and maintain close contact with tech leaders to understand emerging technologies and changing skill requirements. This knowledge allows us to provide accurate advice and make precise matches.",
    category: 'technical'
  },
  {
    id: 'technical-5',
    question: "Do you work with candidates who need visa sponsorship?",
    answer: "Yes, we work with candidates who need visa sponsorship, although the specific options depend on current immigration regulations and the candidate's qualifications. We have experience navigating the visa sponsorship process and can advise both candidates and employers on the requirements and timelines. We work with clients who are willing to sponsor visas and understand the additional considerations involved in international recruitment.",
    category: 'technical'
  }
]; 