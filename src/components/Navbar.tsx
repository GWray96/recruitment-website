"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, User, Briefcase, Search, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
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
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden
            ${isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
        >
          <div className="py-4 space-y-4 bg-white rounded-lg px-2 shadow-lg">
            <Link
              href="/jobs"
              className="flex items-center space-x-2 px-4 py-2 text-slate-800 hover:text-purple-600
                rounded-lg transition-colors duration-200"
            >
              <Search className="w-4 h-4" />
              <span>Job Board</span>
            </Link>

            <Link
              href="/candidate-hub"
              className="flex items-center space-x-2 px-4 py-2 text-slate-800 hover:text-purple-600
                rounded-lg transition-colors duration-200"
            >
              <User className="w-4 h-4" />
              <span>For Candidates</span>
            </Link>

            <Link
              href="/employer-hub"
              className="flex items-center space-x-2 px-4 py-2 text-slate-800 hover:text-purple-600
                rounded-lg transition-colors duration-200"
            >
              <Briefcase className="w-4 h-4" />
              <span>For Employers</span>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-4 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
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
      </div>
    </nav>
  )
}

export default Navbar