"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="absolute w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span className="text-xl font-bold text-blue-600">NexusTech Recruitment</span>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
              <Link 
                href="/#why-nexustech"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium relative group/link ${
                  pathname === '/#why-nexustech' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500'
                }`}
              >
                <span className="relative z-10">Why NexusTech?</span>
                <div className="absolute inset-0 -m-2 rounded-md bg-gradient-to-r from-purple-700/0 via-purple-700/20 to-purple-700/0 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
              </Link>
              
              <Link 
                href="/jobs"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium relative group/link ${
                  pathname === '/jobs'
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500'
                }`}
              >
                <span className="relative z-10">Latest Opportunities</span>
                <div className="absolute inset-0 -m-2 rounded-md bg-gradient-to-r from-purple-700/0 via-purple-700/20 to-purple-700/0 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
              </Link>

              <Link 
                href="/candidate-hub"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium relative group/link ${
                  pathname === '/candidate-hub'
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500'
                }`}
              >
                <span className="relative z-10">Candidate Hub</span>
                <div className="absolute inset-0 -m-2 rounded-md bg-gradient-to-r from-purple-700/0 via-purple-700/20 to-purple-700/0 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
              </Link>

              <Link 
                href="/employer-hub"
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium relative group/link ${
                  pathname === '/employer-hub'
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500'
                }`}
              >
                <span className="relative z-10">Employer Hub</span>
                <div className="absolute inset-0 -m-2 rounded-md bg-gradient-to-r from-purple-700/0 via-purple-700/20 to-purple-700/0 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
              </Link>

              {/* Resources Dropdown */}
              <div className="relative group">
                <div className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 relative group/link cursor-pointer">
                  <span className="relative z-10">Resources</span>
                  <div className="absolute inset-0 -m-2 rounded-md bg-gradient-to-r from-purple-700/0 via-purple-700/20 to-purple-700/0 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                </div>

                {/* Speech Bubble Dropdown */}
                <div className="absolute z-10 mt-6 -left-16 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {/* Triangle pointer */}
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/95 transform rotate-45" />
                  
                  {/* Main bubble content */}
                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)]">
                    <div className="py-3" role="menu">
                      <Link 
                        href="/blog"
                        className="block px-4 py-2 text-sm text-gray-600 relative group/link"
                      >
                        <span className="relative z-10">Blog</span>
                        <div className="absolute inset-0 -mx-4 -my-2 rounded-md bg-gradient-to-r from-purple-700/0 via-purple-700/20 to-purple-700/0 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                      </Link>
                      <Link 
                        href="/prompts"
                        className="block px-4 py-2 text-sm text-gray-600 relative group/link"
                      >
                        <span className="relative z-10">Prompts</span>
                        <div className="absolute inset-0 -mx-4 -my-2 rounded-md bg-gradient-to-r from-purple-700/0 via-purple-700/20 to-purple-700/0 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                      </Link>
                      <Link 
                        href="/templates"
                        className="block px-4 py-2 text-sm text-gray-600 relative group/link"
                      >
                        <span className="relative z-10">Templates</span>
                        <div className="absolute inset-0 -mx-4 -my-2 rounded-md bg-gradient-to-r from-purple-700/0 via-purple-700/20 to-purple-700/0 blur-md opacity-0 group-hover/link:opacity-100 transition-all duration-300" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual Coffee Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/virtual-coffee"
                className="group px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2 shadow-md hover:shadow-lg"
              >
                <span>Virtual Coffee?</span>
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Coffee cup outline */}
                  <path 
                    d="M18 8h-1V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2H6a2 2 0 00-2 2v3a7 7 0 1014 0v-3a2 2 0 00-2-2z" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  {/* Steam lines */}
                  <path 
                    className="group-hover:animate-[steam_1s_ease-in-out_infinite]"
                    d="M12 4v2m-2 0v1m4-1v1" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  {/* Coffee liquid */}
                  <path 
                    className="origin-bottom transition-all duration-700 scale-y-0 group-hover:scale-y-100"
                    d="M7 13v2a5 5 0 0010 0v-2"
                    fill="currentColor"
                    fillOpacity="0.6"
                  >
                    <animate
                      attributeName="d"
                      dur="1.5s"
                      repeatCount="indefinite"
                      values="M7 13v2a5 5 0 0010 0v-2;
                             M7 13v4a5 5 0 0010 0v-4;
                             M7 13v2a5 5 0 0010 0v-2"
                    />
                  </path>
                </svg>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-2`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 mx-4">
            <div className="space-y-1">
              <Link
                href="/#why-nexustech"
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600"
              >
                Why NexusTech?
              </Link>
              <Link
                href="/jobs"
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-blue-600"
              >
                Latest Opportunities
              </Link>
              <Link
                href="/candidate-hub"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Candidate Hub
              </Link>
              <Link
                href="/employer-hub"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Employer Hub
              </Link>
              <Link
                href="/resources"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Resources
              </Link>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="space-y-1">
                <Link
                  href="/virtual-coffee"
                  className="block px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-md hover:from-purple-700 hover:to-blue-700"
                >
                  Virtual Coffee?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar