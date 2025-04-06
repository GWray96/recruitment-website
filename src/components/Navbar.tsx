"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, User, Briefcase, Search, Phone, ChevronDown, Book } from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [learnMenuOpen, setLearnMenuOpen] = useState(false)

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            NexusTech
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/jobs" isScrolled={isScrolled}>
              <Search className="w-4 h-4 mr-2" />
              Job Board
            </NavLink>
            
            <NavLink href="/candidate-hub" isScrolled={isScrolled}>
              <User className="w-4 h-4 mr-2" />
              Candidate Hub
            </NavLink>
            
            <NavLink href="/employer-hub" isScrolled={isScrolled}>
              <Briefcase className="w-4 h-4 mr-2" />
              Employer Hub
            </NavLink>
            
            {/* Learn dropdown */}
            <div className="relative">
              <button 
                onClick={() => setLearnMenuOpen(!learnMenuOpen)}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 
                  ${isScrolled ? 'text-slate-700 hover:text-purple-600' : 'text-slate-800 hover:text-purple-600'}`}
              >
                <Book className="w-4 h-4 mr-2" />
                Learn
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${learnMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {learnMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-20 border border-gray-100">
                  <Link href="/blog" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    Blog
                  </Link>
                  <Link href="/resources" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    Resources
                  </Link>
                  <Link href="/faq" className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    FAQs
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              href="/contact" 
              className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg 
                shadow-md hover:shadow-lg transition-all duration-200 flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Book a Call
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-gray-100 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[80vh] border-t border-gray-200 shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-1">
            <MobileNavLink href="/jobs" onClick={() => setMobileMenuOpen(false)}>
              <Search className="w-5 h-5 mr-3" />
              Job Board
            </MobileNavLink>
            
            <MobileNavLink href="/candidate-hub" onClick={() => setMobileMenuOpen(false)}>
              <User className="w-5 h-5 mr-3" />
              Candidate Hub
            </MobileNavLink>
            
            <MobileNavLink href="/employer-hub" onClick={() => setMobileMenuOpen(false)}>
              <Briefcase className="w-5 h-5 mr-3" />
              Employer Hub
            </MobileNavLink>
            
            {/* Mobile Learn Submenu */}
            <div className="py-1">
              <button 
                onClick={() => setLearnMenuOpen(!learnMenuOpen)}
                className="w-full flex items-center px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Book className="w-5 h-5 mr-3" />
                Learn
                <ChevronDown className={`ml-auto w-5 h-5 transition-transform ${learnMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {learnMenuOpen && (
                <div className="pl-12 mt-1 border-l-2 border-purple-100 ml-4">
                  <MobileNavLink href="/blog" onClick={() => setMobileMenuOpen(false)}>
                    Blog
                  </MobileNavLink>
                  <MobileNavLink href="/resources" onClick={() => setMobileMenuOpen(false)}>
                    Resources
                  </MobileNavLink>
                  <MobileNavLink href="/faq" onClick={() => setMobileMenuOpen(false)}>
                    FAQs
                  </MobileNavLink>
                </div>
              )}
            </div>
            
            <div className="pt-2 pb-3">
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 
                  text-white rounded-lg font-medium text-center"
              >
                <div className="flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Book a Call
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

// Desktop Navigation Link Component
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

const NavLink = ({ href, children, isScrolled }: NavLinkProps) => (
  <Link 
    href={href}
    className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-200 
      ${isScrolled ? 'text-slate-700 hover:text-purple-600' : 'text-slate-800 hover:text-purple-600'}`}
  >
    {children}
  </Link>
)

// Mobile Navigation Link Component
interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

const MobileNavLink = ({ href, onClick, children }: MobileNavLinkProps) => (
  <Link 
    href={href}
    onClick={onClick}
    className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
  >
    {children}
  </Link>
)

export default Navbar