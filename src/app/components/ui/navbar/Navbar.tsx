import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with proper spacing */}
          <a href="/" className="flex-shrink-0 mr-8">
            <h1 className="text-2xl font-serif tracking-wide">Belvoir.</h1>
          </a>

          {/* Navigation Links with proper spacing */}
          <div className="flex-1 flex items-center justify-center">
            <div className="flex space-x-8">
              <a href="#" className="px-3 py-2 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#" className="px-3 py-2 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-200">
                Services
              </a>
              <a href="#" className="px-3 py-2 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-200">
                About
              </a>
              <a href="#" className="px-3 py-2 text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Icons with proper spacing */}
          <div className="flex items-center space-x-6 ml-8">
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
    </nav>
  );
};

export default Navbar;