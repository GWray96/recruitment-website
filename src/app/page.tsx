import Hero from '../components/home/Hero';
import ValueProposition from '../components/home/ValueProposition';
import About from '../components/home/About';
import Benefits from '../components/home/Benefits';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import RecentOpportunities from '../components/home/RecentOpportunities';
import SocialProof from '../components/home/SocialProof';
import LatestArticles from '../components/home/LatestArticles';
import Contact from '../components/home/Contact';
import FAQ from '../components/home/FAQ';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <About />
      <Benefits />
      <TestimonialCarousel />
      <RecentOpportunities />
      <SocialProof />
      <LatestArticles />
      <Contact />
      <FAQ />
      <div className="text-center mt-8">
        <Link
          href="/faq"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-purple-600 bg-purple-50 hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200"
        >
          View All FAQs
        </Link>
      </div>
    </main>
  );
} 