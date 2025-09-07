import React from 'react';
import { Mail, Bell, Unlock, ArrowRight, CheckCircle, FileText, PenTool, Upload, Search, MessageCircle, Send } from 'lucide-react';

const HowItWorks = () => {
  const generationSteps = [
    {
      icon: FileText,
      title: 'Select Contract Type',
      description: 'Choose from NDAs, MSAs, Employment, SaaS, and more.'
    },
    {
      icon: PenTool,
      title: 'Describe Your Needs',
      description: 'Tell Paqt the parties, terms, and key clauses to include.'
    },
    {
      icon: Send,
      title: 'Send for e-Signature',
      description: 'Finalize and send securely for signatures in one click.'
    }
  ];

  const reviewSteps = [
    {
      icon: Upload,
      title: 'Upload Contract',
      description: 'Drag and drop or paste a link to your existing agreement.'
    },
    {
      icon: Search,
      title: 'AI Analysis & Red Flags',
      description: 'Instantly see obligations, risks, missing clauses, and summaries.'
    },
    {
      icon: MessageCircle,
      title: 'Chat With Legal Assistant',
      description: 'Ask questions, get clause-level insights, and request revisions.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 rounded-full text-sm font-semibold mb-6 shadow-soft border border-green-100/50">
            <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
            Product Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            How It Works in <span className="gradient-text-blue">Paqt</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            Two powerful flows: Contract Generation and Contract Review — all in one place
          </p>
        </div>

        {/* Tree container */}
        <div className="relative">
          {/* Center trunk & node */}
          <div className="relative flex flex-col items-center">
            {/* Center top node */}
            <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-soft flex items-center justify-center p-3 sm:p-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <img 
                  src="./public/Logo-Variant-Transparent.png" 
                  alt="Paqt Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Branch lines */}
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Vertical line from Paqt */}
              <div className="absolute left-1/2 top-0 h-8 w-0.5 bg-gradient-to-b from-gray-200 to-gray-300 -translate-x-1/2"></div>
              {/* Horizontal branch line */}
              <div className="absolute top-8 left-1/2 w-full max-w-4xl -translate-x-1/2">
                <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Branch columns */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Contract Generation branch */}
            <div className="relative">
              {/* Branch title */}
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-3 shadow-glow"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Contract Generation</h3>
              </div>
              {/* Vertical connector */}
              <div className="absolute left-1.5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-gray-200"></div>

              <div className="space-y-6">
                {generationSteps.map((step, idx) => (
                  <div key={idx} className="relative pl-8">
                    {/* Node */}
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-blue-600 shadow-glow"></div>
                    {/* Card */}
                    <div className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-modern-lg shadow-soft hover:shadow-lg transition-all duration-300 p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{step.title}</div>
                          <div className="text-sm sm:text-base text-gray-600">{step.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contract Review branch */}
            <div className="relative">
              {/* Branch title */}
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-emerald-600 mr-3 shadow-glow"></div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Contract Review</h3>
              </div>
              {/* Vertical connector */}
              <div className="absolute left-1.5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 to-gray-200"></div>

              <div className="space-y-6">
                {reviewSteps.map((step, idx) => (
                  <div key={idx} className="relative pl-8">
                    {/* Node */}
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-emerald-600 shadow-glow"></div>
                    {/* Card */}
                    <div className="group bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-modern-lg shadow-soft hover:shadow-lg transition-all duration-300 p-6">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{step.title}</div>
                          <div className="text-sm sm:text-base text-gray-600">{step.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA under tree */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-modern-lg p-8 sm:p-10 border border-blue-100/50 shadow-soft">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Try Paqt?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Generate contracts, review agreements, and chat with your AI legal assistant — all in minutes.
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