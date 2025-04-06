"use client"

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, User, Briefcase, Search, Phone, HelpCircle, ChevronDown, BookOpen, FileText, Lightbulb } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLearnOpen, setIsLearnOpen] = useState(false)
  const learnMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (learnMenuRef.current && !learnMenuRef.current.contains(event.target as Node)) {
        setIsLearnOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const learnMenuItems = [
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Resources', href: '/resources', icon: FileText },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
  ]

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
            <div className="relative" ref={learnMenuRef}>
              <button
                onClick={() => setIsLearnOpen(!isLearnOpen)}
                className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors duration-200
                  ${isScrolled ? 'text-slate-700 hover:text-purple-600' : 'text-slate-800 hover:text-purple-600'}
                  ${isLearnOpen ? 'text-purple-600' : ''}`}
              >
                <Lightbulb className="w-4 h-4" />
                <span>Learn</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isLearnOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {isLearnOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-purple-100/50 overflow-hidden"
                  >
                    <div className="py-2">
                      {learnMenuItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center space-x-3 px-4 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-200"
                          onClick={() => setIsLearnOpen(false)}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
            className="md:hidden p-2 rounded-lg transition-colors duration-200
              hover:bg-purple-50"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-slate-800" />
            ) : (
              <Menu className="w-6 h-6 text-slate-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4 bg-white rounded-lg px-2 shadow-lg">
                <Link
                  href="/jobs"
                  className="flex items-center space-x-2 px-4 py-2 text-slate-800 hover:text-purple-600
                    rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Search className="w-4 h-4" />
                  <span>Job Board</span>
                </Link>

                <Link
                  href="/candidate-hub"
                  className="flex items-center space-x-2 px-4 py-2 text-slate-800 hover:text-purple-600
                    rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="w-4 h-4" />
                  <span>For Candidates</span>
                </Link>

                <Link
                  href="/employer-hub"
                  className="flex items-center space-x-2 px-4 py-2 text-slate-800 hover:text-purple-600
                    rounded-lg transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>For Employers</span>
                </Link>

                {/* Mobile Learn Section */}
                <div className="px-4 py-2">
                  <button
                    onClick={() => setIsLearnOpen(!isLearnOpen)}
                    className="flex items-center justify-between w-full text-slate-800 hover:text-purple-600
                      rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      <Lightbulb className="w-4 h-4" />
                      <span>Learn</span>
                    </div>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isLearnOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {isLearnOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 space-y-1"
                      >
                        {learnMenuItems.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center space-x-2 px-4 py-2 text-slate-700 hover:text-purple-600
                              rounded-lg transition-colors duration-200"
                            onClick={() => {
                              setIsLearnOpen(false)
                              setIsOpen(false)
                            }}
                          >
                            <item.icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center justify-center gap-2 shadow-md"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar