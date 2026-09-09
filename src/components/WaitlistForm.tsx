import { useState } from 'react';
import { ArrowRight, Mail, Building, Sparkles, ShieldCheck, CheckCircle2, MailCheck, Star, Lock, Zap, User } from 'lucide-react';
import { Reveal } from './Reveal';
import { SplitText } from './SplitText';
import { track } from '../lib/analytics';

const perks = [
  { icon: MailCheck, label: 'Waitlist joined', color: 'text-brand-300 bg-brand-500/15 border-brand-500/25' },
  { icon: Star, label: 'Priority access', color: 'text-amber-300 bg-amber-500/15 border-amber-500/25' },
  { icon: Lock, label: '100% private', color: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/25' },
];

const WaitlistForm = () => {
  const [name, setName] = useState('');
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
      if (!name.trim()) {
        throw new Error('Please enter your name');
      }
      if (!email || !email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.toLowerCase().trim(),
          company: company.trim() || '',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setIsSubmitted(true);
        setName('');
        setEmail('');
        setCompany('');
        track('waitlist_signup', { has_company: Boolean(company.trim()) });
      } else if (response.status === 409) {
        setError(data.message || "You're already registered on the waitlist!");
        track('waitlist_duplicate');
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
        track('waitlist_error');
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(message || 'Something went wrong. Please try again.');
      track('waitlist_error');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist-form" className="relative overflow-hidden py-24 lg:py-32">
        <div className="aurora-bg absolute inset-0" />
        <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="relative mx-auto flex h-24 w-24 animate-fade-up items-center justify-center">
            <div className="absolute inset-0 animate-pulse-ring rounded-full border border-violet-400/60" />
            <div className="absolute inset-0 animate-pulse-ring rounded-full border border-cyan-400/40 [animation-delay:0.6s]" />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 via-violet-600 to-fuchsia-600 shadow-glow">
              <CheckCircle2 className="h-12 w-12 text-white" />
            </div>
          </div>

          <h2 className="animate-fade-up mt-10 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl" style={{ animationDelay: '100ms' }}>
            You're on the list!
          </h2>
          <p className="animate-fade-up mx-auto mt-4 max-w-lg text-lg leading-relaxed text-white/55" style={{ animationDelay: '200ms' }}>
            Welcome aboard. We'll email you the moment early access opens —
            and you'll be first in line for founding perks.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {perks.map((item) => (
              <div
                key={item.label}
                className={`animate-fade-up flex items-center justify-center gap-2.5 rounded-2xl border px-4 py-4 backdrop-blur ${item.color}`}
                style={{ animationDelay: '300ms' }}
              >
                <item.icon className="h-5 w-5" />
                <span className="text-sm font-semibold text-white/90">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist-form" className="relative overflow-hidden py-24 lg:py-32">
      <div className="aurora-bg absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_110%,rgba(139,92,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-xl px-4 sm:px-6">
        <div className="text-center">
          <Reveal>
            <span className="section-pill">
              <Sparkles className="h-4 w-4 text-violet-400" />
              Early Access
            </span>
          </Reveal>
          <SplitText
            as="h2"
            className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            text="Be first in line."
          />
          <Reveal delay={150}>
            <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-white/55">
              Join thousands waiting for smarter contracts. Zero spam — just early access.
            </p>
          </Reveal>
        </div>

        <Reveal delay={250}>
          <div className="relative mt-12">
            {/* Glow behind card */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-brand-600 via-violet-600 to-cyan-500 opacity-60 blur-lg" />

            <div className="relative rounded-[2rem] border border-white/10 bg-ink-800/90 p-6 backdrop-blur-xl sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-600/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-brand-600/20 blur-3xl" />

              {error && (
                <div className="relative mb-6 flex items-start gap-2.5 rounded-xl border border-red-500/25 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300" role="alert">
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="relative space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/80">
                    <User className="h-4 w-4 text-violet-300" />
                    Full Name <span className="text-brand-300">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Appleseed"
                    className="input-glass"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/80">
                    <Mail className="h-4 w-4 text-brand-300" />
                    Email Address <span className="text-brand-300">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@company.com"
                    className="input-glass"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="mb-2 flex items-center gap-2 text-sm font-semibold text-white/80">
                    <Building className="h-4 w-4 text-cyan-300" />
                    Company or Role <span className="font-normal text-white/40">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Corp or Legal Counsel"
                    className="input-glass"
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

                <p className="flex items-center justify-center gap-1.5 text-center text-sm text-white/40">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  No spam. Just smarter contracts, sooner. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </Reveal>

        <Reveal delay={350}>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/40">
            <Zap className="h-4 w-4 text-amber-300" />
            Founding members get up to 50% off year one
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WaitlistForm;