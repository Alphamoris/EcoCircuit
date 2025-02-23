"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-green text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-full p-1">
                <Image
                  src="/logo.png"
                  alt="EcoCircuit Logo"
                  fill
                  className="object-contain p-1"
                  priority
                />
              </div>
              <span className="text-white font-montserrat font-bold text-xl">
                EcoCircuit
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="/dashboard" className="text-white hover:text-accent-orange transition-colors">
              Dashboard
            </Link>
            <Link href="/collection" className="text-white hover:text-accent-orange transition-colors">
              Schedule Collection
            </Link>
            <Link href="/calculator" className="text-white hover:text-accent-orange transition-colors">
              Points Calculator
            </Link>
            <Link href="/marketplace" className="text-white hover:text-accent-orange transition-colors">
              Marketplace
            </Link>
            <div className="flex items-center gap-2 text-white bg-white/10 px-4 py-2 rounded-full">
              <UserCircleIcon className="h-6 w-6" />
              <span>Bhanu</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-accent-orange"
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
      {isOpen && (
        <div className="sm:hidden bg-primary-green/95 backdrop-blur-sm">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-white hover:bg-white/10"
            >
              Dashboard
            </Link>
            <Link
              href="/collection"
              className="block px-3 py-2 text-white hover:bg-white/10"
            >
              Schedule Collection
            </Link>
            <Link
              href="/calculator"
              className="block px-3 py-2 text-white hover:bg-white/10"
            >
              Points Calculator
            </Link>
            <Link
              href="/marketplace"
              className="block px-3 py-2 text-white hover:bg-white/10"
            >
              Marketplace
            </Link>
            <div className="flex items-center gap-2 px-3 py-2 text-white">
              <UserCircleIcon className="h-6 w-6" />
              <span>John Doe</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 