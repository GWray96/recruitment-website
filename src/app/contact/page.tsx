import React from 'react';
import { Mail, Phone, MapPin, Clock, Building, Send, ArrowRight, Users, Briefcase, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-blue-50 to-pink-50">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Whether you&apos;re looking to hire tech talent or seeking your next career opportunity, 
              our team is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100/50">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Job Seekers</h3>
              <p className="text-slate-600 mb-4">
                Looking for your next tech role? Our specialist consultants can help you find the perfect opportunity.
              </p>
              <a href="mailto:candidates@nexustech.co.uk" className="text-purple-600 font-medium inline-flex items-center gap-1">
                candidates@nexustech.co.uk
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100/50">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">For Employers</h3>
              <p className="text-slate-600 mb-4">
                Need to hire tech talent? Our recruitment specialists can help you find the right candidates.
              </p>
              <a href="mailto:clients@nexustech.co.uk" className="text-purple-600 font-medium inline-flex items-center gap-1">
                clients@nexustech.co.uk
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100/50">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">General Inquiries</h3>
              <p className="text-slate-600 mb-4">
                Have a question about our services? Our team is ready to assist you.
              </p>
              <a href="mailto:hello@nexustech.co.uk" className="text-purple-600 font-medium inline-flex items-center gap-1">
                hello@nexustech.co.uk
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100/50 h-full">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-slate-800">Email</h3>
                        <a href="mailto:hello@nexustech.co.uk" className="text-slate-600">
                          hello@nexustech.co.uk
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-slate-800">Phone</h3>
                        <a href="tel:01223123456" className="text-slate-600">
                          01223 123 456
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-lg flex items-center justify-center mr-4">
                        <Clock className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-slate-800">Office Hours</h3>
                        <p className="text-slate-600">Monday - Friday: 9:00 AM - 5:30 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-lg flex items-center justify-center mr-4">
                        <Building className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-slate-800">Our Offices</h3>
                        <div className="space-y-2">
                          <p className="text-slate-600">
                            <span className="font-medium">Cambridge:</span><br />
                            St John&apos;s Innovation Centre<br />
                            Cowley Road, Cambridge, CB4 0WS
                          </p>
                          <p className="text-slate-600">
                            <span className="font-medium">Norwich:</span><br />
                            The Union Building<br />
                            51-59 Rose Lane, Norwich, NR1 1BY
                          </p>
                          <p className="text-slate-600">
                            <span className="font-medium">Ipswich:</span><br />
                            Epsilon House<br />
                            West Road, Ipswich, IP3 9FJ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-purple-100/50">
                  <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Send us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg"
                          placeholder="07123 456789"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="w-full px-4 py-2 border border-slate-200 rounded-lg"
                          placeholder="Acme Inc."
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="serviceType" className="block text-sm font-medium text-slate-700 mb-1">
                        I am interested in <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="serviceType"
                        name="serviceType"
                        required
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="hiring">Hiring Tech Talent</option>
                        <option value="jobseeker">Looking for a Tech Job</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg"
                        placeholder="Please provide details about your inquiry..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-md"
                      >
                        Send Message
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-5"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
              Our Locations
            </span>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Visit Our Offices</h2>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
              We have offices strategically located across East Anglia to better serve our clients and candidates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100/50">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cambridge</h3>
              <p className="text-slate-600 mb-4">
                St John&apos;s Innovation Centre<br />
                Cowley Road<br />
                Cambridge, CB4 0WS
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-slate-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>01223 123 456</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>cambridge@nexustech.co.uk</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Mon-Fri: 9:00-17:30</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100/50">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Norwich</h3>
              <p className="text-slate-600 mb-4">
                The Union Building<br />
                51-59 Rose Lane<br />
                Norwich, NR1 1BY
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-slate-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>01603 123 456</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>norwich@nexustech.co.uk</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Mon-Fri: 9:00-17:30</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100/50">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ipswich</h3>
              <p className="text-slate-600 mb-4">
                Epsilon House<br />
                West Road<br />
                Ipswich, IP3 9FJ
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-slate-600">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>01473 123 456</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>ipswich@nexustech.co.uk</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Mon-Fri: 9:00-17:30</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Placeholder - In a real implementation, you would embed a Google Map or similar */}
          <div className="mt-12 bg-slate-100 rounded-xl h-96 flex items-center justify-center">
            <p className="text-slate-500">Map showing office locations would be embedded here</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-gradient-to-r from-purple-600/10 to-blue-600/10 text-blue-600 rounded-full text-sm font-medium mb-3">
              FAQ
            </span>
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
              Find answers to common questions about our recruitment services and processes.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100/50">
                <h3 className="text-lg font-semibold mb-2 text-slate-900">How quickly can you find candidates for my role?</h3>
                <p className="text-slate-600">
                  We typically present the first batch of qualified candidates within 5-7 working days. The exact timeline depends on the role&apos;s complexity and requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100/50">
                <h3 className="text-lg font-semibold mb-2 text-slate-900">What industries do you specialize in?</h3>
                <p className="text-slate-600">
                  We specialize in technology recruitment across various sectors including software development, data science, IT infrastructure, digital marketing, and IT leadership.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100/50">
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Do you offer permanent and contract recruitment?</h3>
                <p className="text-slate-600">
                  Yes, we offer both permanent and contract recruitment solutions tailored to your specific needs and timeline.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100/50">
                <h3 className="text-lg font-semibold mb-2 text-slate-900">What is your recruitment process?</h3>
                <p className="text-slate-600">
                  Our process includes initial consultation, talent search, candidate screening, interview support, and placement follow-up. We ensure a thorough understanding of your requirements and company culture.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-purple-100/50">
                <h3 className="text-lg font-semibold mb-2 text-slate-900">How do you ensure candidate quality?</h3>
                <p className="text-slate-600">
                  We conduct thorough technical assessments, reference checks, and cultural fit evaluations to ensure candidates meet both the technical requirements and align with your company culture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 