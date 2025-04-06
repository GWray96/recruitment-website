"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, User, Briefcase, Search, Phone, ChevronDown, Book } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLearnOpen, setIsLearnOpen] = useState(false)
  const learnRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle click outside of Learn dropdown (desktop only)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (learnRef.current && !learnRef.current.contains(event.target as Node)) {
        setIsLearnOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-white/90 backdrop-blur-sm border-b border-white/20 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            NexusTech
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/jobs"
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors duration-200
                ${isScrolled ? 'text-slate-700 hover:text-purple-600' : 'text-slate-800 hover:text-purple-600'}`}
            >
              <Search className="w-4 h-4" />
              <span>Job Board</span>
            </Link>

            <Link
              href="/candidate-hub"
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors duration-200
                ${isScrolled ? 'text-slate-700 hover:text-purple-600' : 'text-slate-800 hover:text-purple-600'}`}
            >
              <User className="w-4 h-4" />
              <span>For Candidates</span>
            </Link>

            <Link
              href="/employer-hub"
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors duration-200
                ${isScrolled ? 'text-slate-700 hover:text-purple-600' : 'text-slate-800 hover:text-purple-600'}`}
            >
              <Briefcase className="w-4 h-4" />
              <span>For Employers</span>
            </Link>

            {/* Learn Dropdown */}
            <div className="relative" ref={learnRef}>
              <button
                onClick={() => setIsLearnOpen(!isLearnOpen)}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors duration-200
                  ${isScrolled ? 'text-slate-700 hover:text-purple-600' : 'text-slate-800 hover:text-purple-600'}`}
              >
                <Book className="w-4 h-4" />
                <span>Learn</span>
                <ChevronDown 
                  className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isLearnOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isLearnOpen && (
                <div className="absolute top-full right-0 mt-1 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden">
                  <div className="py-1">
                    <Link
                      href="/blog"
                      className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                      role="menuitem"
                      onClick={() => setIsLearnOpen(false)}
                    >
                      Blog
                    </Link>
                    <Link
                      href="/resources"
                      className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                      role="menuitem"
                      onClick={() => setIsLearnOpen(false)}
                    >
                      Resources
                    </Link>
                    <Link
                      href="/faq"
                      className="flex items-center px-4 py-2 text-sm text-slate-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                      role="menuitem"
                      onClick={() => setIsLearnOpen(false)}
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Phone className="w-4 h-4" />
              </motion.div>
              Book a Call
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-lg transition-colors duration-200
              hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-800" />
            ) : (
              <Menu className="w-6 h-6 text-slate-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[64px] bg-white/95 backdrop-blur-sm z-50"
            ref={mobileMenuRef}
          >
            <div className="container mx-auto px-4">
              <div className="py-4 space-y-4 bg-white rounded-lg px-4 shadow-lg">
                <Link
                  href="/jobs"
                  className="block w-full text-left px-4 py-3 text-slate-800 hover:text-purple-600 hover:bg-purple-50
                    rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <Search className="w-4 h-4" />
                    <span>Job Board</span>
                  </div>
                </Link>

                <Link
                  href="/candidate-hub"
                  className="block w-full text-left px-4 py-3 text-slate-800 hover:text-purple-600 hover:bg-purple-50
                    rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>For Candidates</span>
                  </div>
                </Link>

                <Link
                  href="/employer-hub"
                  className="block w-full text-left px-4 py-3 text-slate-800 hover:text-purple-600 hover:bg-purple-50
                    rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4" />
                    <span>For Employers</span>
                  </div>
                </Link>

                {/* Mobile Learn Section */}
                <div className="px-4">
                  <button
                    onClick={() => setIsLearnOpen(!isLearnOpen)}
                    className="flex items-center w-full text-left px-4 py-3 text-slate-800 hover:text-purple-600 hover:bg-purple-50
                      rounded-lg transition-colors duration-200"
                  >
                    <Book className="w-4 h-4 mr-2" />
                    <span>Learn</span>
                    <ChevronDown 
                      className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isLearnOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isLearnOpen && (
                    <div className="mt-2 pl-4">
                      <Link
                        href="/blog"
                        className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:text-purple-600 hover:bg-purple-50
                          rounded-lg transition-colors duration-200"
                        onClick={() => {
                          setIsLearnOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        Blog
                      </Link>
                      <Link
                        href="/resources"
                        className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:text-purple-600 hover:bg-purple-50
                          rounded-lg transition-colors duration-200"
                        onClick={() => {
                          setIsLearnOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        Resources
                      </Link>
                      <Link
                        href="/faq"
                        className="block w-full text-left px-4 py-3 text-sm text-slate-600 hover:text-purple-600 hover:bg-purple-50
                          rounded-lg transition-colors duration-200"
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

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium 
                    hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, 0, -10, 0],
                      scale: [1, 1.1, 1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Phone className="w-4 h-4" />
                  </motion.div>
                  Book a Call
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar