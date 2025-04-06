'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu as MenuIcon, X as XIcon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const learnRef = useRef<HTMLDivElement>(null);

  // Handle click outside of Learn dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (learnRef.current && !learnRef.current.contains(event.target as Node)) {
        setIsLearnOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when screen size changes
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 640) { // sm breakpoint
        setIsOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                className="h-8 w-auto"
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/jobs"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-900 hover:text-purple-600"
              >
                Jobs
              </Link>

              {/* Learn Dropdown */}
              <div ref={learnRef} className="relative inline-flex items-center">
                <button
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-900 hover:text-purple-600 focus:outline-none"
                  onClick={() => setIsLearnOpen(!isLearnOpen)}
                >
                  Learn
                  <ChevronDown 
                    className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isLearnOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                {/* Dropdown Menu */}
                {isLearnOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <Link
                        href="/blog"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600"
                        role="menuitem"
                        onClick={() => setIsLearnOpen(false)}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/resources"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600"
                        role="menuitem"
                        onClick={() => setIsLearnOpen(false)}
                      >
                        Resources
                      </Link>
                      <Link
                        href="/faq"
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600"
                        role="menuitem"
                        onClick={() => setIsLearnOpen(false)}
                      >
                        FAQ
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/employer-hub"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-900 hover:text-purple-600"
              >
                Employer Hub
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          {isOpen && (
            <div className="sm:hidden absolute top-16 inset-x-0 bg-white shadow-lg">
              <div className="pt-2 pb-3 space-y-1">
                <Link
                  href="/jobs"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-600"
                >
                  Jobs
                </Link>
                
                {/* Mobile Learn Section */}
                <div className="block pl-3 pr-4 py-2 text-base font-medium text-slate-700">
                  <button
                    onClick={() => setIsLearnOpen(!isLearnOpen)}
                    className="flex items-center w-full text-left"
                  >
                    Learn
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isLearnOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isLearnOpen && (
                    <div className="mt-2 space-y-1 pl-4">
                      <Link
                        href="/blog"
                        className="block py-2 text-sm text-slate-600 hover:text-purple-600"
                        onClick={() => {
                          setIsLearnOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/resources"
                        className="block py-2 text-sm text-slate-600 hover:text-purple-600"
                        onClick={() => {
                          setIsLearnOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        Resources
                      </Link>
                      <Link
                        href="/faq"
                        className="block py-2 text-sm text-slate-600 hover:text-purple-600"
                        onClick={() => {
                          setIsLearnOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        FAQ
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/employer-hub"
                  className="block pl-3 pr-4 py-2 text-base font-medium text-slate-700 hover:bg-purple-50 hover:text-purple-600"
                >
                  Employer Hub
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
} 