"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon, UserCircleIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesRef.current && !(resourcesRef.current as HTMLDivElement).contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 overflow-visible ${
        scrolled ? 'bg-primary-green shadow-md py-2' : 'bg-primary-green py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10">
              <Image
                src="/logo.png"
                alt="EcoCircuit Logo"
                fill
                className="object-contain rounded-full bg-white p-1"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-white">EcoCircuit</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
            
            <Link href="/dashboard" className="navbar-link ms-16  text-white hover:text-white hover:bg-white/10 rounded-md transition-colors font-medium py-2">
              Dashboard
            </Link>
            <Link href="/collection" className="navbar-link text-white hover:text-white hover:bg-white/10 rounded-md transition-colors font-medium py-2">
              Collection
            </Link>
            <Link href="/calculator" className="navbar-link text-white hover:text-white hover:bg-white/10 rounded-md transition-colors font-medium py-2">
              Calculator
            </Link>
            <Link href="/marketplace" className="navbar-link text-white hover:text-white hover:bg-white/10 rounded-md transition-colors font-medium py-2">
              Marketplace
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button 
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="navbar-link text-white hover:text-white hover:bg-white/10 rounded-md transition-colors flex items-center font-medium py-2"
              >
                Resources
                <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-primary-green/10"
                  >
                    <Link href="/guide" className="block px-4 py-2 text-sm text-primary-green hover:bg-primary-green/10 hover:text-primary-green">
                      Recycling Guide
                    </Link>
                    <Link href="/facts" className="block px-4 py-2 text-sm text-primary-green hover:bg-primary-green/10 hover:text-primary-green">
                      E-Waste Facts
                    </Link>
                    <Link href="/blog" className="block px-4 py-2 text-sm text-primary-green hover:bg-primary-green/10 hover:text-primary-green">
                      Blog
                    </Link>
                    <Link href="/faq" className="block px-4 py-2 text-sm text-primary-green hover:bg-primary-green/10 hover:text-primary-green">
                      FAQ
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* CTA and Mobile Menu Button */}
          <div className="flex items-center me-4">
            <Link 
              href="/dashboard" 
              className="hidden sm:flex items-center text-sm bg-white text-primary-green px-3 py-1.5 sm:px-4 sm:py-2 rounded-full hover:bg-white/90 transition-colors font-medium shadow-sm"
            >
              <UserCircleIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
              <span>Alpha</span>
            </Link>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-white/80 focus:outline-none ml-2 p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-green/95 border-t border-white/10 mt-2 shadow-lg"
          >
            <div className="px-3 py-2 space-y-1">
              
              <Link 
                href="/dashboard" 
                className="block px-3 py-2 text-sm font-medium text-white hover:text-white hover:bg-white/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                href="/collection" 
                className="block px-3 py-2 text-sm font-medium text-white hover:text-white hover:bg-white/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Collection
              </Link>
              <Link 
                href="/calculator" 
                className="block px-3 py-2 text-sm font-medium text-white hover:text-white hover:bg-white/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Calculator
              </Link>
              <Link 
                href="/marketplace" 
                className="block px-3 py-2 text-sm font-medium text-white hover:text-white hover:bg-white/10 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Marketplace
              </Link>
              
              <div className="border-t border-white/20 pt-2 mt-2">
                <p className="px-3 py-1 text-xs font-semibold text-white/80">RESOURCES</p>
                <Link 
                  href="/guide" 
                  className="block px-3 py-2 text-sm font-medium text-white hover:text-white hover:bg-white/10 rounded-md pl-5"
                  onClick={() => setIsOpen(false)}
                >
                  Recycling Guide
                </Link>
                <Link 
                  href="/facts" 
                  className="block px-3 py-2 text-sm font-medium text-white hover:text-white hover:bg-white/10 rounded-md pl-5"
                  onClick={() => setIsOpen(false)}
                >
                  E-Waste Facts
                </Link>
                <Link 
                  href="/blog" 
                  className="block px-3 py-2 text-sm font-medium text-white hover:text-white hover:bg-white/10 rounded-md pl-5"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  href="/faq" 
                  className="block px-3 py-2 text-sm font-medium text-white hover:text-white hover:bg-white/10 rounded-md pl-5"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ
                </Link>
              </div>
              
              <div className="pt-3 pb-2">
                <Link
                  href="/dashboard"
                  className="flex items-center justify-center w-full bg-white text-primary-green px-4 py-2 rounded-full hover:bg-white/90 transition-colors shadow-sm text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <UserCircleIcon className="h-4 w-4 mr-1" />
                  My Account
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}