"use client"

import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Link } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Left section with logo and menu button */}
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 mr-2 text-gray-900 hover:text-gray-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-serif tracking-wide">Belvoir.</h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-8">
              <Link className="px-3 py-2 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <Link className="px-3 py-2 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-200">
                Services
              </Link>
              <Link className="px-3 py-2 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-200">
                About
              </Link>
              <Link className="px-3 py-2 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Icons - always visible */}
          <div className="flex items-center space-x-6">
            <button className="p-2 text-gray-900 hover:text-gray-600 transition-colors duration-200">
              <Search size={18} />
            </button>
            <button className="p-2 text-gray-900 hover:text-gray-600 transition-colors duration-200">
              <ShoppingCart size={18} />
            </button>
            <button className="p-2 text-gray-900 hover:text-gray-600 transition-colors duration-200">
              <User size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - only for navigation links */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-4 space-y-2 bg-white/40 backdrop-blur-md">
          <Link className="block px-3 py-2 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-200">
            Home
          </Link>
          <Link className="block px-3 py-2 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-200">
            Services
          </Link>
          <Link className="block px-3 py-2 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-200">
            About
          </Link>
          <Link className="block px-3 py-2 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;