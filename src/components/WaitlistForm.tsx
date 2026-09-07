import { useState } from 'react';
import { ArrowRight, Mail, Building, Sparkles, ShieldCheck, CheckCircle2, MailCheck, Star, Lock } from 'lucide-react';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxpf59UHxhJm5wIp8IwYT0Qzr-xNZujYUiOnOOyiCMgWKWj26_JLndHKILRgR7M1yTS/exec';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (!email || !email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      const params = new URLSearchParams({
        email: email.toLowerCase().trim(),
        company: company.trim() || '',
      });

      const fullUrl = `${GOOGLE_SCRIPT_URL}?${params.toString()}`;

      const response = await fetch(fullUrl, { method: 'GET' });
      const responseText = await response.text();

      if (responseText && /already\s*exists|already\s*registered|duplicate/i.test(responseText)) {
        setError('This email is already on the waitlist.');
        return;
      }

      if (response.ok && /success/i.test(responseText)) {
        setIsSubmitted(true);
        setEmail('');
        setCompany('');
      } else {
        const message = responseText?.trim() || `Failed to join waitlist. Status: ${response.status}`;
        throw new Error(message);
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    'w-full rounded-2xl border-2 border-slate-200 bg-white/70 px-5 py-4 text-base text-slate-900 placeholder-slate-400 shadow-soft transition-all duration-300 hover:border-slate-300 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-100';

  if (isSubmitted) {
    return (
      <section id="waitlist-form" className="relative bg-gradient-to-b from-white to-brand-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="animate-fade-up mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 shadow-glow">
            <CheckCircle2 className="h-10 w-10 text-white" />
          </div>
          <h2 className="animate-fade-up mt-8 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl" style={{ animationDelay: '100ms' }}>
            You're on the list! 🎉
          </h2>
          <p className="animate-fade-up mt-4 text-lg leading-relaxed text-slate-600" style={{ animationDelay: '200ms' }}>
            Thanks for joining the Paqt waitlist. We'll be in touch the moment early access opens.
          </p>

          <div className="animate-fade-up mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3" style={{ animationDelay: '300ms' }}>
            {[
              { icon: MailCheck, label: 'Waitlist joined', color: 'text-brand-600 bg-brand-50' },
              { icon: Star, label: 'Priority access', color: 'text-amber-600 bg-amber-50' },
              { icon: Lock, label: 'Secure & private', color: 'text-emerald-600 bg-emerald-50' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-2.5 rounded-2xl border border-slate-200/70 bg-white px-4 py-4 shadow-soft">
                <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist-form" className="relative overflow-hidden py-20 lg:py-28">
      <div className="aurora-bg absolute inset-0" />
      <div className="relative mx-auto max-w-xl px-4 sm:px-6">
        <div className="text-center">
          <div className="section-pill">
            <Sparkles className="h-4 w-4" />
            Early Access
          </div>
          <h2 className="section-title mt-4">
            Be first in line for <span className="gradient-text">smart contracts.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Join legal professionals eagerly waiting for early access to Paqt.
          </p>
        </div>

        <div className="relative mt-10 rounded-3xl border border-slate-200/70 bg-white p-6 shadow-card sm:p-8">
          {error && (
            <div className="mb-6 flex items-start gap-2.5 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Mail className="h-4 w-4 text-brand-600" />
                Email Address <span className="text-brand-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@company.com"
                className={inputClass}
                disabled={isLoading}
              />
            </div>

            <div>
              <label htmlFor="company" className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Building className="h-4 w-4 text-emerald-600" />
                Company or Role <span className="font-normal text-slate-400">(optional)</span>
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Acme Corp or Legal Counsel"
                className={inputClass}
                disabled={isLoading}
              />
            </div>

            <button type="submit" disabled={isLoading} className="btn-primary group w-full py-4 text-base">
              {isLoading ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Joining waitlist...
                </>
              ) : (
                <>
                  Request Early Access
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-center text-sm text-slate-400">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              No spam. Just smarter contracts, sooner. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;