import React, { useState } from 'react';
import { ArrowRight, Check, Mail, Building, Sparkles, Shield } from 'lucide-react';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Google Apps Script web app URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxpf59UHxhJm5wIp8IwYT0Qzr-xNZujYUiOnOOyiCMgWKWj26_JLndHKILRgR7M1yTS/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Validate email
      if (!email || !email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      // Create URL with query parameters for GET request
      const params = new URLSearchParams({
        email: email.toLowerCase().trim(),
        company: company.trim() || ''
      });

      const fullUrl = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;
      console.log('🚀 Sending request to:', fullUrl);
      console.log('📧 Email:', email);
      console.log('🏢 Company:', company);

      // Send to Google Apps Script using GET request
      const response = await fetch(fullUrl, {
        method: 'GET'
      });

      console.log('📡 Response status:', response.status);
      console.log('📡 Response ok:', response.ok);

      const responseText = await response.text();
      console.log('📡 Response text:', responseText);

      // Handle duplicate email response (from Apps Script)
      if (responseText && /already\s*exists|already\s*registered|duplicate/i.test(responseText)) {
        setError('This email is already on the waitlist.');
        return;
      }

      // Only succeed when backend explicitly returns 'success'
      if (response.ok && /success/i.test(responseText)) {
        setIsSubmitted(true);
        setEmail('');
        setCompany('');
        console.log('✅ Waitlist signup successful:', { email, company });
      } else {
        // Surface backend error if present
        const message = responseText?.trim() || `Failed to join waitlist. Status: ${response.status}`;
        throw new Error(message);
      }
      
    } catch (err: any) {
      console.error('❌ Error details:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50/30">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg">
            <Check className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            You're In! 🎉
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 px-4 sm:px-0">
            Thanks for joining the Paqt waitlist. We'll notify you as soon as early access opens.
          </p>
          <p className="text-base sm:text-lg text-gray-500 px-4 sm:px-0">
            We'll notify you as soon as early access becomes available.
          </p>
          
          {/* Additional benefits */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-sm sm:text-base font-medium">Waitlist Joined</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-sm sm:text-base font-medium">Priority Access</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm sm:text-base font-medium">Secure & Private</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist-form" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full text-sm font-semibold mb-6 shadow-soft border border-blue-100/50">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
            Early Access
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            Ready to Transform Your{' '}
            <span className="gradient-text-blue">Legal Workflow?</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 px-4 sm:px-0">
            Join thousands of legal professionals waiting for early access
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-modern-lg border border-gray-200/50 shadow-soft hover:shadow-xl transition-all duration-500">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div>
              <label htmlFor="email" className="block text-base sm:text-lg font-semibold text-gray-700 mb-3 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@company.com"
                className="w-full px-6 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-base sm:text-lg bg-white/50 backdrop-blur-sm hover:bg-white"
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-base sm:text-lg font-semibold text-gray-700 mb-3 flex items-center">
                <Building className="w-5 h-5 mr-2 text-green-600" />
                Company or Role (Optional)
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Corp or Legal Counsel"
                className="w-full px-6 py-4 sm:py-5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-base sm:text-lg bg-white/50 backdrop-blur-sm hover:bg-white"
                disabled={isLoading}
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-5 sm:py-6 rounded-full font-semibold text-lg sm:text-xl hover:from-blue-700 hover:to-blue-800 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                  Joining Waitlist...
                </>
              ) : (
                <>
                  Request Early Access
                  <ArrowRight className="ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <p className="text-sm sm:text-base text-gray-500 text-center">
              <Shield className="inline-block w-4 h-4 mr-1" />
              No spam. Just smarter contracts, sooner. Unsubscribe anytime.
            </p>
          </form>

          {/* Trust indicators */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200/50">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600">Secure & Private</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600">Waitlist Joined</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-600">Priority Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;