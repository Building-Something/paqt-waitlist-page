import React from 'react';
import { Mail, Twitter, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-100/50 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <img 
                  src="/assets/Logo-Variant-Transparent.png" 
                  alt="Paqt Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold gradient-text-blue">Paqt</span>
            </div>
            <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-md">
              AI-powered contract intelligence that transforms how legal teams create, analyze, and optimize contracts.
            </p>
            <div className="flex space-x-4">
              <a href="#twitter" className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group">
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#linkedin" className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group">
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#github" className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center text-white hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 group">
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Pricing</a></li>
              <li><a href="#api" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">API</a></li>
              <li><a href="#integrations" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">About</a></li>
              <li><a href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Blog</a></li>
              <li><a href="#careers" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Careers</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 sm:pt-12 border-t border-gray-200/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>© 2025 Paqt. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center">
                Built with <Heart className="w-4 h-4 mx-1 text-red-500" /> for legal professionals
              </span>
            </div>

            {/* Legal Links */}
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm">
              <a href="#terms" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#privacy" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#security" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Security
              </a>
              <a href="#cookies" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Cookies
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;