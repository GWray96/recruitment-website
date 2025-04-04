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
    </main>
  );
} 