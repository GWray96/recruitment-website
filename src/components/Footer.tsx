'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigation = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Resources', href: '/resources' },
    ],
    candidates: [
      { name: 'Browse Jobs', href: '/jobs' },
      { name: 'Candidate Hub', href: '/candidate-hub' },
      { name: 'Career Advice', href: '/blog' },
      { name: 'Submit CV', href: '/contact#cv-upload' },
    ],
    employers: [
      { name: 'Employer Hub', href: '/employer-hub' },
      { name: 'Discuss a Vacancy', href: '/employer-hub' },
      { name: 'Hiring Solutions', href: '/employer-hub' },
      { name: 'Employer Resources', href: '/resources' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', Icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', Icon: Twitter, href: 'https://twitter.com' },
    { name: 'LinkedIn', Icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Instagram', Icon: Instagram, href: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold text-white">NexusTech</h3>
              <p className="text-purple-400">Recruitment</p>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Connecting exceptional talent with innovative companies. 
              We specialize in tech recruitment across all sectors, 
              helping build successful teams and careers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <span>contact@nexustech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+44 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>123 Tech Hub Street, London, EC2A 4NE</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-purple-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">For Candidates</h4>
            <ul className="space-y-3">
              {navigation.candidates.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-purple-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">For Employers</h4>
            <ul className="space-y-3">
              {navigation.employers.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-purple-400 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">
              © {currentYear} NexusTech Recruitment. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  aria-label={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:text-purple-400 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 