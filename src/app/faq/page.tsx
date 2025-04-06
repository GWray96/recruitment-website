import FAQ from '@/components/shared/FAQ';
import { HelpCircle, MessageSquare, CheckCircle, Star, Users } from 'lucide-react';

const faqData = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about our job board, application process, and recruitment services.",
  faqs: [
    {
      question: "How do I create an account?",
      answer: "Creating an account is simple. Click the 'Sign Up' button in the top right corner of the page, enter your email address and create a password. You can also sign up using your Google or LinkedIn account for faster access."
    },
    {
      question: "How do I apply for a job?",
      answer: "To apply for a job:\n1. Click on the job listing you're interested in\n2. Review the job details and requirements\n3. Click the 'Apply Now' button\n4. Fill in your application details or upload your CV\n5. Submit your application\n\nYou can track all your applications in your dashboard once you're logged in."
    },
    {
      question: "Can I save jobs to apply later?",
      answer: "Yes! When you're browsing jobs, click the bookmark icon on any job listing to save it to your favorites. You can access all your saved jobs from your dashboard. This feature requires you to be logged in."
    },
    {
      question: "How do I search for specific jobs?",
      answer: "You can search for jobs using:\n- Keywords in the search bar\n- Location filters\n- Job type filters (Full-time, Part-time, Contract)\n- Salary range\n- Industry categories\n\nUse multiple filters together to find the most relevant opportunities for you."
    },
    {
      question: "How will I know if an employer responds to my application?",
      answer: "You'll receive email notifications when:\n- Your application is received\n- The employer views your application\n- You're invited for an interview\n- There's an update on your application status\n\nYou can also check your application status anytime in your dashboard."
    },
    {
      question: "Can I edit my application after submitting?",
      answer: "Once an application is submitted, you cannot edit it. However, you can:\n- Contact the employer directly if you need to provide additional information\n- Submit a new application if the job is still open\n- Update your profile for future applications"
    },
    {
      question: "What should I include in my profile?",
      answer: "To create a strong profile, include:\n- Professional summary\n- Work experience\n- Education and certifications\n- Skills and expertise\n- Portfolio or work samples (if applicable)\n- Professional photo (optional)\n- References\n\nKeep your profile updated to improve your chances of being noticed by employers."
    },
    {
      question: "How do I set up job alerts?",
      answer: "To set up job alerts:\n1. Go to the Job Alerts section in your dashboard\n2. Click 'Create New Alert'\n3. Enter your job preferences (keywords, location, etc.)\n4. Choose notification frequency (daily, weekly)\n5. Save your alert\n\nYou'll receive notifications when new jobs matching your criteria are posted."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take data security seriously. We:\n- Use encryption to protect your personal data\n- Never share your information without your consent\n- Follow GDPR and data protection regulations\n- Allow you to control your privacy settings\n- Regularly update our security measures"
    },
    {
      question: "What if I need technical support?",
      answer: "For technical support:\n1. Check our help center for common issues\n2. Contact our support team through the 'Contact Support' button\n3. Email us at support@jobboard.com\n4. Use live chat during business hours\n\nWe aim to respond to all support requests within 24 hours."
    }
  ]
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-16" />
        <div className="container mx-auto px-4 relative text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-400/10 text-white mb-4 border border-blue-400/20">
            Help Center
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Get quick answers to common questions about using our platform, finding jobs, and managing your applications.
          </p>
          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 text-white/90">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2" />
              <span>250+ Placements</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Component */}
      <div className="relative z-10 pb-16">
        <FAQ 
          title={faqData.title}
          description={faqData.description}
          faqs={faqData.faqs}
        />
      </div>
    </main>
  );
} 