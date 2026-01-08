'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Dumbbell, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/marketing' },
    { label: 'Features', href: '/marketing/features' },
    { label: 'Pricing', href: '/marketing/pricing' },
    { label: 'Demo', href: '/marketing/demo' },
    { label: 'Contact', href: '/marketing/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/marketing" className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Dumbbell className="text-white" size={24} />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">GymPro</span>
              <div className="text-xs text-blue-600 font-medium">AI-Powered</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium text-sm transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              href="/login" 
              className="px-5 py-2 text-gray-700 font-medium hover:text-blue-600"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-700 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Link 
                  href="/login" 
                  className="block py-2.5 text-center text-gray-700 font-medium border border-gray-300 rounded-lg"
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="block py-2.5 text-center bg-blue-600 text-white font-medium rounded-lg"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;