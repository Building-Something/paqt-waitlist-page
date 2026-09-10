import { FileText, PenLine, Send, Upload, ScanSearch, MessageSquareText, Sparkles, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from './Reveal';
import { SplitText } from './SplitText';

const workflows = [
  {
    id: 'generate',
    tag: 'Contract Composition',
    icon: FileText,
    gradient: 'from-brand-500 to-violet-600',
    glow: 'rgba(42,92,231,0.45)',
    headline: 'Draft any contract from a blank page to sign-ready.',
    description:
      'Pick from 50+ expertly built templates or describe what you need in plain language. Paqt assembles the clauses, fills the parties, and delivers a polished draft in under a minute.',
    steps: [
      { icon: FileText, label: 'Pick a template', detail: 'NDA, MSA, SaaS, employment. 50+ and growing.' },
      { icon: PenLine, label: 'Describe your needs', detail: 'Parties, terms, obligations. Add them in plain English.' },
      { icon: Send, label: 'Send to sign', detail: 'Finalize and dispatch for secure e-signature in one click.' },
    ],
    bullets: ['Clause-level accuracy', 'Auto-fills parties & dates', 'Export to Word / PDF'],
  },
  {
    id: 'review',
    tag: 'Contract Analysis',
    icon: ScanSearch,
    gradient: 'from-cyan-500 to-violet-600',
    glow: 'rgba(34,211,238,0.4)',
    headline: 'Understand any contract in seconds, not days.',
    description:
      'Upload a PDF, paste a link, or drop an agreement straight from your inbox. Paqt scans the full document, flags the clauses that matter, and explains them in plain language.',
    steps: [
      { icon: Upload, label: 'Upload an agreement', detail: 'Drag, drop, or paste a URL. We read the whole thing.' },
      { icon: ScanSearch, label: 'Spot risks instantly', detail: 'Missing clauses, red flags, and obligations at a glance.' },
      { icon: MessageSquareText, label: 'Ask your Contracting Copilot', detail: 'Chat for clause-level answers and request revisions.' },
    ],
    bullets: ['Plain-English summaries', 'Risk scoring per clause', 'One-click revision requests'],
  },
];

const trustBadges = [
  { icon: Zap, label: '10× faster' },
  { icon: ShieldCheck, label: 'Legally precise' },
  { icon: Sparkles, label: 'Fully automated' },
];

const Features = () => {
  const [active, setActive] = useState(workflows[0].id);
  const activeWorkflow = workflows.find((w) => w.id === active)!;

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="product" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(139,92,246,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="section-pill">
              <Sparkles className="h-4 w-4 text-violet-400" />
              The Product
            </span>
          </Reveal>
          <SplitText
            as="h2"
            className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            text="Everything your contracts need in one flow."
          />
          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
              Paqt carries a contract from first draft to final signature, with a Contracting Copilot
              that understands both the <span className="accent-serif text-white/85">law</span> and your business.
            </p>
          </Reveal>
        </div>

        {/* Workflow switcher */}
        <Reveal delay={200} className="mx-auto mt-10 flex w-full flex-col gap-1.5 rounded-3xl border border-white/10 bg-white/5 p-1.5 backdrop-blur sm:w-fit sm:flex-row sm:items-center sm:justify-center sm:gap-2 sm:rounded-full">
          {workflows.map((w) => (
            <button
              key={w.id}
              onClick={() => setActive(w.id)}
              className={`flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 sm:w-auto sm:py-2.5 ${
                active === w.id
                  ? 'bg-gradient-to-r from-brand-600 to-violet-600 text-white shadow-glow'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <w.icon className="h-4 w-4 shrink-0" />
              {w.tag}
            </button>
          ))}
        </Reveal>

        {/* Active workflow panel */}
        <div className="relative mt-12">
          <div
            className="absolute -inset-8 rounded-[3rem] opacity-60 blur-3xl transition-all duration-700"
            style={{ background: `radial-gradient(60% 60% at 50% 40%, ${activeWorkflow.glow}, transparent 70%)` }}
          />
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-6">
            {/* Left: narrative */}
            <div
              key={activeWorkflow.id}
              className="card animate-fade-up p-8 sm:p-12"
              style={{ borderColor: 'rgba(255,255,255,0.12)' }}
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${activeWorkflow.gradient} shadow-glow`}>
                <activeWorkflow.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                {activeWorkflow.headline}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/55">
                {activeWorkflow.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {activeWorkflow.bullets.map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: steps */}
            <div className="flex flex-col gap-4">
              {activeWorkflow.steps.map((step, i) => (
                <div
                  key={step.label}
                  className="card animate-fade-up group p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
                  style={{ animationDelay: `${i * 140}ms`, borderColor: 'rgba(255,255,255,0.1)' }}
                >
                  <div className="flex items-start gap-5">
                    <div className="relative">
                      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${activeWorkflow.gradient} shadow-glow transition-transform duration-500 group-hover:scale-105`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-ink-900 text-xs font-bold text-white">
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-bold text-white">{step.label}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-white/50">{step.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {trustBadges.map((badge) => (
            <span key={badge.label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/60">
              <badge.icon className="h-4 w-4 text-violet-400" />
              {badge.label}
            </span>
          ))}
          <button onClick={scrollToForm} className="group inline-flex items-center gap-2 px-2 py-2 text-sm font-semibold text-violet-300 transition-colors hover:text-white">
            Join the waitlist
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;