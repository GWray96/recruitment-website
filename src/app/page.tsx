import Hero from '../components/home/Hero';
import ValueProposition from '../components/home/ValueProposition';
import About from '../components/home/About';
import Benefits from '../components/home/Benefits';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import JobList from '../components/JobList';

export default function Home() {
  return (
    <main>
      <Hero />
      <ValueProposition />
      <About />
      <Benefits />
      <TestimonialCarousel />
      {/* Featured Jobs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Jobs</h2>
          <JobList />
        </div>
      </section>
    </main>
  );
} 