import React from 'react';
import { Mail, Bell, Unlock, ArrowRight, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Mail,
      step: '01',
      title: 'Sign Up with Email',
      description: 'Quick 30-second signup with just your email and optional company details.',
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      icon: Bell,
      step: '02',
      title: 'Get Notified First',
      description: 'Receive exclusive updates and be first to know when early access opens.',
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: Unlock,
      step: '03',
      title: 'Unlock Early Access',
      description: 'Start using Paqt\'s AI tools weeks before public launch with premium features.',
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-sm font-semibold mb-6 shadow-soft border border-green-100/50">
            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            How It{' '}
            <span className="gradient-text-blue">Works</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            Three simple steps to secure your early access to AI-powered contract intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Enhanced connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 sm:top-14 left-1/2 w-full h-1 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transform translate-x-8 sm:translate-x-10 rounded-full"></div>
              )}
              
              {/* Enhanced step circle */}
              <div className={`relative w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl`}>
                <step.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 shadow-lg">
                  <span className="text-gray-700 text-sm sm:text-base font-bold">{step.step}</span>
                </div>
              </div>

              {/* Step content with enhanced styling */}
              <div className="group-hover:-translate-y-1 transition-transform duration-300">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-4 sm:px-0">
                  {step.description}
                </p>
              </div>

              {/* Arrow indicator for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-6">
                  <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-modern-lg p-8 sm:p-10 border border-blue-100/50 shadow-soft">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of legal professionals who are already on the waitlist
            </p>
            <button 
              onClick={() => {
                document.getElementById('waitlist-form')?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 group"
            >
              Join the Waitlist Now
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;