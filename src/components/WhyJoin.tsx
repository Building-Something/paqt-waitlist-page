import { Crown, Zap, MessageSquare, Gift, Star } from 'lucide-react';

const WhyJoin = () => {
  const benefits = [
    {
      icon: Crown,
      title: 'Priority Onboarding',
      description: 'Skip the line with dedicated setup assistance and personalized training sessions.',
      gradient: 'from-yellow-400 to-orange-500',
      bgGradient: 'from-yellow-50 to-orange-50'
    },
    {
      icon: Gift,
      title: 'Launch Discounts',
      description: 'Exclusive early-bird pricing with up to 50% off your first year subscription.',
      gradient: 'from-green-400 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: Zap,
      title: 'Premium Features First',
      description: 'Access advanced AI capabilities and integrations before they go public.',
      gradient: 'from-blue-400 to-indigo-500',
      bgGradient: 'from-blue-50 to-indigo-50'
    },
    {
      icon: MessageSquare,
      title: 'Direct Team Access',
      description: 'Shape the product with direct feedback channels to our development team.',
      gradient: 'from-purple-400 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-soft border border-blue-100/50">
            <Star className="w-4 h-4 mr-2 text-blue-600" />
            Exclusive Benefits
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            Why Join the{' '}
            <span className="gradient-text-blue">Waitlist?</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
            Get exclusive perks and be among the first to revolutionize your contracting workflow
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 sm:p-8 rounded-modern-lg shadow-soft hover:shadow-xl transition-all duration-500 border border-gray-100/50 hover:border-gray-200/50 text-center hover:-translate-y-2"
            >
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-modern-lg`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional stats section */}
        {/* <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text-blue mb-2">500+</div>
            <div className="text-sm sm:text-base text-gray-600">Legal Teams Waiting</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text-blue mb-2">2 Weeks</div>
            <div className="text-sm sm:text-base text-gray-600">Until Early Access</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text-blue mb-2">100%</div>
            <div className="text-sm sm:text-base text-gray-600">Secure & Private</div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyJoin;