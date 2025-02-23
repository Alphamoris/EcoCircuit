"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo-transparent.png"
                  alt="EcoCircuit Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-montserrat font-bold text-xl">
                EcoCircuit
              </h3>
            </div>
            <p className="text-white/80 text-sm">
              Revolutionizing e-waste management through AI-powered recycling solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="text-white/80 hover:text-white text-sm">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/collection" className="text-white/80 hover:text-white text-sm">
                  Schedule Collection
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-white/80 hover:text-white text-sm">
                  Points Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contributors</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white text-sm">
                  Bhanu Prakash

                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-white text-sm">
                  Harshith
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-white/80 hover:text-white text-sm">
                  Dharshan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Email: alphamoris45@gmail.com</li>
              <li>Phone: +91 7010815310</li>
              <li>Address: Paniamalar Engineering College, Chennai</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} EcoCircuit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 