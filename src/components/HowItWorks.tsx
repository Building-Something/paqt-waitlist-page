import { PenLine, ScanSearch, MessageSquare, BadgeCheck } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SplitText } from './SplitText';

const steps = [
  {
    icon: PenLine,
    step: '01',
    title: 'Create',
    text: 'Start from a template or describe the deal in plain language. Paqt drafts the full agreement.',
    accent: 'from-brand-500 to-violet-600',
    textAccent: 'text-violet-300',
  },
  {
    icon: ScanSearch,
    step: '02',
    title: 'Review',
    text: 'Upload or paste any contract. Risks, missing clauses, and obligations surface instantly.',
    accent: 'from-cyan-500 to-sky-600',
    textAccent: 'text-cyan-300',
  },
  {
    icon: MessageSquare,
    step: '03',
    title: 'Refine',
    text: 'Chat with your Contracting Copilot about any clause. Request changes and get them applied in one click.',
    accent: 'from-violet-500 to-fuchsia-600',
    textAccent: 'text-fuchsia-300',
  },
  {
    icon: BadgeCheck,
    step: '04',
    title: 'Sign & store',
    text: 'Finalize with secure e-signature and keep everything organized in a searchable workspace.',
    accent: 'from-emerald-500 to-teal-600',
    textAccent: 'text-emerald-300',
  },
];

const HowItWorks = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="how-it-works" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_80%,rgba(34,211,238,0.07),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="section-pill">
              <BadgeCheck className="h-4 w-4 text-emerald-400" />
              Product Workflow
            </span>
          </Reveal>
          <SplitText
            as="h2"
            className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            text="From idea to signed deal."
          />
          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
              One continuous flow. No tab-juggling, no file chaos, no lost versions.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line (desktop) */}
          <div className="absolute left-[12%] right-[12%] top-14 hidden h-px bg-gradient-to-r from-brand-500/40 via-violet-500/40 to-emerald-500/40 lg:block" />

          {steps.map((s, i) => (
            <Reveal
              key={s.step}
              delay={i * 150}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative z-10">
                <div className="relative">
                  <div className={`flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br ${s.accent} shadow-glow transition-all duration-500 group-hover:scale-105 group-hover:rotate-3`}>
                    <s.icon className="h-10 w-10 text-white" />
                  </div>
                  <span className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-ink-900 font-display text-sm font-bold text-white shadow-soft">
                    {s.step}
                  </span>
                </div>
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/50">{s.text}</p>
            </Reveal>
          ))}
        </div>

        {/* CTA panel */}
        <Reveal delay={200} className="relative mt-20">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 px-8 py-14 text-center sm:px-12">
            <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl animate-pulse-soft" />
            <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-fuchsia-600/25 blur-3xl animate-pulse-soft [animation-delay:1.2s]" />
            <div className="absolute inset-0 grid-lines opacity-40" />

            <div className="relative mx-auto max-w-2xl">
              <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Ready to work <span className="accent-serif text-gradient-static">smarter?</span>
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-white/60">
                Join the waitlist and be among the first to try Paqt when early access opens.
              </p>
              <button onClick={scrollToForm} className="btn-primary group mt-8">
                Join the Waitlist Now
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HowItWorks;