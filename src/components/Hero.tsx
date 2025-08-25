import React from 'react';
import { Play, ArrowRight, Sparkles, Zap, Shield, Clock, Target, Brain } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 overflow-hidden">
      {/* Enhanced grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* New: All-side fading grid background - MORE PROMINENT */}
      <div className="absolute inset-0">
        {/* Main grid pattern - More subtle colors */}
        <div 
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(156, 163, 175, 0.15) 1.5px, transparent 1.5px),
              linear-gradient(to bottom, rgba(156, 163, 175, 0.15) 1.5px, transparent 1.5px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)'
          }}
        />
        
        {/* Secondary grid pattern for depth - Subtle gray */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(209, 213, 219, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(209, 213, 219, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 85%)'
          }}
        />
        
        {/* Tertiary grid pattern for extra subtlety */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(229, 231, 235, 0.1) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(229, 231, 235, 0.1) 2px, transparent 2px)
            `,
            backgroundSize: '150px 150px',
            maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)'
          }}
        />
        
        {/* Enhanced corner fade overlays for better definition */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/25"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/25"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/25"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/25"></div>
        
        {/* Additional subtle grid overlay for extra texture - Very light */}
        <div 
          className="absolute inset-0 opacity-12"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(156, 163, 175, 0.08) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(156, 163, 175, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 45%, transparent 80%)'
          }}
        />
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-200/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-200/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-32">
        <div className="text-center">
          {/* Enhanced label tag */}
          <div className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm sm:text-base font-semibold mb-8 sm:mb-10 shadow-soft border border-blue-100/50">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
            🔐 AI-Powered Contract Intelligence
          </div>

          {/* Enhanced main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 px-2 sm:px-0">
            Be the First to Experience{' '}
            <span className="gradient-text-blue">Smarter Contracts</span>
          </h1>

          {/* Supporting text */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl lg:max-w-4xl mx-auto mb-10 sm:mb-12 lg:mb-16 leading-relaxed px-4 sm:px-0">
            Join Paqt's waitlist and get early access to our AI legal assistant that creates, 
            analyzes, and optimizes contracts in minutes, not hours.
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0 mb-12 sm:mb-16">
            <button className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-lg sm:text-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center w-full sm:w-auto justify-center animate-pulse-glow">
              Join the Waitlist
              <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold text-lg sm:text-xl hover:border-gray-300 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300 flex items-center w-full sm:w-auto justify-center hover:bg-white">
              <Play className="mr-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
          </div>

          {/* Enhanced trust indicators - COMMENTED OUT */}
          {/* <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-gray-200/50">
            <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">Trusted by legal teams at</p>
            <div className="flex justify-center items-center space-x-8 sm:space-x-12 lg:space-x-16 opacity-60">
              <div className="h-8 sm:h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-20 sm:w-24 lg:w-28 shadow-soft"></div>
              <div className="h-8 sm:h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-16 sm:w-20 lg:w-24 shadow-soft"></div>
              <div className="h-8 sm:h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-22 sm:w-26 lg:w-32 shadow-soft"></div>
              <div className="h-8 sm:h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-18 sm:w-22 lg:w-26 shadow-soft"></div>
            </div>
          </div> */}

          {/* Enhanced feature highlights */}
          <div className="mt-16 sm:mt-20">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 rounded-full text-sm font-medium mb-8 shadow-soft border border-gray-200/50">
              <Target className="w-4 h-4 mr-2 text-gray-500" />
              Why Choose Paqt?
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="group bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-modern-lg border border-gray-200/50 shadow-soft hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
                  10x Faster
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  Complete contracts in minutes, not hours
                </p>
              </div>

              <div className="group bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-modern-lg border border-gray-200/50 shadow-soft hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
                  99.9% Accurate
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  AI-powered precision you can trust
                </p>
              </div>

              <div className="group bg-white/60 backdrop-blur-sm p-6 sm:p-8 rounded-modern-lg border border-gray-200/50 shadow-soft hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 text-center">
                  AI-Powered
                </h3>
                <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                  Cutting-edge machine learning technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;