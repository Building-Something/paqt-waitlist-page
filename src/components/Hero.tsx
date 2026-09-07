import { ArrowRight, Sparkles, Zap, ShieldCheck, Workflow } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '10x Faster',
    description: 'Draft complete contracts in minutes, not hours.',
  },
  {
    icon: ShieldCheck,
    title: 'Legally Precise',
    description: 'Clause-level accuracy built for legal teams.',
  },
  {
    icon: Workflow,
    title: 'Fully Automated',
    description: 'From first draft to e-signature, done for you.',
  },
];

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="aurora-bg absolute inset-0" />
      <div className="dark-grid-bg absolute inset-0" />

      {/* Floating orbs */}
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-[140%] rounded-full bg-brand-300/20 blur-3xl animate-float" />
      <div className="absolute left-1/2 top-40 h-80 w-80 -translate-x-[10%] rounded-full bg-cyan-200/20 blur-3xl animate-float [animation-delay:2s]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-soft backdrop-blur">
            <Sparkles className="h-4 w-4 text-brand-500" />
            Copilot for modern legal teams
          </div>

          <h1
            className="animate-fade-up mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
            style={{ animationDelay: '100ms' }}
          >
            Smarter contracts, built in{' '}
            <span className="gradient-text">minutes.</span>
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl"
            style={{ animationDelay: '200ms' }}
          >
            Paqt is the AI contract copilot that drafts, reviews, and manages agreements
            end-to-end — so you can close deals in hours, not weeks.
          </p>

          <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: '300ms' }}>
            <button onClick={scrollToForm} className="btn-primary group w-full px-8 py-4 text-base sm:w-auto">
              Join the Waitlist
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a href="#how-it-works" className="btn-secondary w-full px-8 py-4 text-base sm:w-auto">
              See how it works
            </a>
          </div>

          <p className="animate-fade-up mt-6 text-sm text-slate-500" style={{ animationDelay: '400ms' }}>
            Free for early access members · No credit card required
          </p>
        </div>

        {/* Feature cards */}
        <div className="animate-fade-up mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3" style={{ animationDelay: '500ms' }}>
          {features.map((f) => (
            <div key={f.title} className="card group text-center p-7 hover:-translate-y-1 hover:shadow-glow">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;