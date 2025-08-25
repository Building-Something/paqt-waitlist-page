import React from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold gradient-text-blue">Paqt</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            <a href="#product" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium relative group">
              Product
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium relative group">
              FAQ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#login" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium relative group">
              Log in
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button 
              onClick={() => {
                document.getElementById('waitlist-form')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-sm relative overflow-hidden group"
            >
              <span className="relative z-10">Get Early Access</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 sm:top-18 lg:top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              <a href="#product" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2">
                Product
              </a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2">
                Pricing
              </a>
              <a href="#faq" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2">
                FAQ
              </a>
              <a href="#login" className="block text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2">
                Log in
              </a>
              <button 
                onClick={() => {
                  document.getElementById('waitlist-form')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                  setIsMenuOpen(false); // Close mobile menu after clicking
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-sm mt-4"
              >
                Get Early Access
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;