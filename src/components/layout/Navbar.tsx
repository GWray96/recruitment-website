'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleResources = () => setIsResourcesOpen(!isResourcesOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">RecruitPro</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/jobs" className="text-gray-700 hover:text-primary">
              Jobs
            </Link>
            <Link href="/candidates" className="text-gray-700 hover:text-primary">
              Candidates
            </Link>
            <Link href="/employers" className="text-gray-700 hover:text-primary">
              Employers
            </Link>
            <div className="relative">
              <button
                onClick={toggleResources}
                className="flex items-center text-gray-700 hover:text-primary"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isResourcesOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link
                    href="/resources/blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/resources/career-advice"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Career Advice
                  </Link>
                  <Link
                    href="/resources/guides"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Guides
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/login"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/jobs"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Jobs
            </Link>
            <Link
              href="/candidates"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Candidates
            </Link>
            <Link
              href="/employers"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Employers
            </Link>
            <div className="relative">
              <button
                onClick={toggleResources}
                className="flex items-center w-full px-3 py-2 text-gray-700 hover:text-primary"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isResourcesOpen && (
                <div className="pl-4">
                  <Link
                    href="/resources/blog"
                    className="block px-3 py-2 text-gray-700 hover:text-primary"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/resources/career-advice"
                    className="block px-3 py-2 text-gray-700 hover:text-primary"
                  >
                    Career Advice
                  </Link>
                  <Link
                    href="/resources/guides"
                    className="block px-3 py-2 text-gray-700 hover:text-primary"
                  >
                    Guides
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/login"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 