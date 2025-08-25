import React from 'react';
import { Quote, Star, Award, Users, TrendingUp } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      quote: "The beta version of Paqt has already transformed how we handle contract reviews. What used to take hours now takes minutes, with better accuracy than manual review.",
      author: "Sarah Chen",
      role: "Legal Operations Manager",
      company: "TechCorp",
      rating: 5
    },
    {
      quote: "Paqt's AI capabilities are game-changing. We've reduced contract review time by 80% while improving accuracy. It's exactly what our legal team needed.",
      author: "Michael Rodriguez",
      role: "General Counsel",
      company: "InnovateLabs",
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-full text-sm font-semibold mb-6 shadow-soft border border-purple-100/50">
            <Award className="w-4 h-4 mr-2 text-purple-600" />
            Customer Success
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            Loved by{' '}
            <span className="gradient-text-blue">Legal Teams</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            See how leading companies are transforming their legal workflows with Paqt
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mb-16 sm:mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-modern-lg border border-gray-200/50 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              {/* Quote icon */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 leading-relaxed mb-6 sm:mb-8">
                "{testimonial.quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mr-4 flex-shrink-0 shadow-lg"></div>
                <div>
                  <p className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm sm:text-base">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold gradient-text-blue mb-2">500+</div>
            <div className="text-sm sm:text-base text-gray-600">Legal Teams</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold gradient-text-blue mb-2">80%</div>
            <div className="text-sm sm:text-base text-gray-600">Time Saved</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl sm:text-4xl font-bold gradient-text-blue mb-2">4.9/5</div>
            <div className="text-sm sm:text-base text-gray-600">User Rating</div>
          </div>
        </div>

        {/* Trust logos - COMMENTED OUT */}
        {/* <div className="text-center">
          <p className="text-base sm:text-lg text-gray-500 mb-8 sm:mb-10">
            Trusted by legal teams across industries
          </p>
          <div className="flex justify-center items-center space-x-8 sm:space-x-12 lg:space-x-16 opacity-60">
            <div className="h-8 sm:h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-20 sm:w-24 lg:w-28 shadow-soft"></div>
            <div className="h-8 sm:h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-16 sm:w-20 lg:w-24 shadow-soft"></div>
            <div className="h-8 sm:h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-22 sm:w-26 lg:w-32 shadow-soft"></div>
            <div className="h-8 sm:h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-18 sm:w-22 lg:w-26 shadow-soft"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonial;