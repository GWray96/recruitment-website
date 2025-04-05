"use client"

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Building, ArrowRight, Upload, Linkedin, FileUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [file, setFile] = useState<File | null>(null);
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFile(null);
      setLinkedinUrl('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 md:pt-40 md:pb-40 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6 border border-white/20 backdrop-blur-sm">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              We&apos;re always interested in meeting new people. Whether you&apos;re looking for your next role
              or need to hire tech talent, get in touch today!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200/60">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Find Work</h3>
              <p className="text-slate-600 mb-6">
                Are you an IT expert thinking about your next move? Check out our job board or get in touch below.
              </p>
              <Link 
                href="/jobs"
                className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:from-purple-700 hover:to-blue-700"
              >
                View Jobs <ArrowRight className="ml-2 w-4 h-4 text-blue-600" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200/60">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Work with Us</h3>
              <p className="text-slate-600 mb-6">
                Are you hiring? Let us know where to find your next great talent and we&apos;ll quickly help to fill your specific needs.
              </p>
              <Link 
                href="/employer-hub"
                className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:from-purple-700 hover:to-blue-700"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4 text-blue-600" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-200/60">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Get in Touch</h3>
              <p className="text-slate-600 mb-6">
                Have a general inquiry? Our team is here to help and answer any questions you may have.
              </p>
              <a 
                href="#contact-form"
                className="inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:from-purple-700 hover:to-blue-700"
              >
                Contact Us <ArrowRight className="ml-2 w-4 h-4 text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/50" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-slate-900">Email</h3>
                      <a href="mailto:hello@nexustech.co.uk" className="text-slate-600 hover:text-blue-600">
                        hello@nexustech.co.uk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-slate-900">Phone</h3>
                      <a href="tel:01206984042" className="text-slate-600 hover:text-blue-600">
                        01206 984042
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-slate-900">Office Hours</h3>
                      <p className="text-slate-600">
                        Mon to Fri | 09:00 to 17:30<br />
                        Sat & Sun | Closed
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-lg flex items-center justify-center mr-4">
                      <Building className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-slate-900">Office Location</h3>
                      <p className="text-slate-600">
                        Innovation Centre<br />
                        Knowledge Gateway<br />
                        Boundary Road, Colchester<br />
                        Essex CO4 3ZQ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200/60">
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
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiry" className="block text-sm font-medium text-slate-700 mb-1">
                      How can we help? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      required
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    >
                      <option value="">Please select...</option>
                      <option value="general">General enquiry</option>
                      <option value="vacancy">Submit a vacancy</option>
                      <option value="looking">Looking for talent</option>
                      <option value="other">Something else</option>
                    </select>
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
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Tell us more..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CV Upload & LinkedIn Connection Section */}
      <section className="py-16 bg-white" id="cv-upload">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 shadow-lg border border-purple-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Submit Your CV or Connect LinkedIn
              </h2>
              <p className="text-gray-600">
                Upload your CV or connect your LinkedIn profile to receive personalized job opportunities and career advice.
              </p>
            </div>

            {submitSuccess ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
                <p className="text-green-700">
                  We&apos;ve received your information and will be in touch with personalized opportunities soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* CV Upload */}
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <FileUp className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Upload Your CV</h3>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your CV (PDF, DOC, DOCX)
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-purple-500 transition-colors">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-purple-600 hover:text-purple-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-purple-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                          {file && (
                            <p className="text-sm text-purple-600 font-medium">
                              Selected: {file.name}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Connection */}
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <Linkedin className="w-5 h-5 text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">Connect LinkedIn</h3>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="linkedin-url" className="block text-sm font-medium text-gray-700 mb-2">
                        LinkedIn Profile URL
                      </label>
                      <input
                        type="url"
                        id="linkedin-url"
                        name="linkedin-url"
                        className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="https://www.linkedin.com/in/your-profile"
                        value={linkedinUrl}
                        onChange={(e) => setLinkedinUrl(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect with LinkedIn
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting || (!file && !linkedinUrl)}
                    className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                      isSubmitting || (!file && !linkedinUrl)
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Submit Your Information'
                    )}
                  </button>
                  <p className="mt-2 text-xs text-gray-500">
                    By submitting, you agree to our <Link href="/privacy" className="text-purple-600 hover:text-purple-700">Privacy Policy</Link> and <Link href="/terms" className="text-purple-600 hover:text-purple-700">Terms of Service</Link>.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-slate-100 rounded-xl h-[400px] flex items-center justify-center border border-slate-200/60">
              <p className="text-slate-500">Interactive map will be embedded here</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 