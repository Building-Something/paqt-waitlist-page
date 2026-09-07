import { ArrowRight, FileText, Send, Upload, ScanSearch, MessageSquareText, PenLine, CheckCircle } from 'lucide-react';

const branches = [
  {
    title: 'Contract Generation',
    accent: 'text-brand-600',
    iconBg: 'bg-brand-600',
    tickBg: 'bg-brand-100 text-brand-700',
    gradient: 'from-brand-500 to-brand-700',
    steps: [
      {
        icon: FileText,
        title: 'Pick a template',
        description: 'Choose from NDAs, MSAs, employment, SaaS, and 50+ more.',
      },
      {
        icon: PenLine,
        title: 'Describe your needs',
        description: 'Add the parties, terms, and clauses you want included.',
      },
      {
        icon: Send,
        title: 'Send to sign',
        description: 'Finalize and dispatch for secure e-signature in one click.',
      },
    ],
  },
  {
    title: 'Contract Review',
    accent: 'text-emerald-600',
    iconBg: 'bg-emerald-600',
    tickBg: 'bg-emerald-100 text-emerald-700',
    gradient: 'from-emerald-500 to-teal-700',
    steps: [
      {
        icon: Upload,
        title: 'Upload an agreement',
        description: 'Drag and drop, or paste a link to an existing contract.',
      },
      {
        icon: ScanSearch,
        title: 'Spot risks instantly',
        description: 'See missing clauses, obligations, and red flags at a glance.',
      },
      {
        icon: MessageSquareText,
        title: 'Ask your copilot',
        description: 'Chat for clause-level answers and request revisions on the spot.',
      },
    ],
  },
];

const HowItWorks = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="how-it-works" className="relative bg-slate-50/70 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-pill">
            <CheckCircle className="h-4 w-4" />
            Product Workflow
          </div>
          <h2 className="section-title mt-4">
            Everything your contracts need, in <span className="gradient-text">one flow.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Whether you're building or reviewing a contract, Paqt carries it through from start to finish.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          {branches.map((branch) => (
            <div key={branch.title} className="relative rounded-3xl border border-slate-200/70 bg-white p-8 shadow-card sm:p-10">
              <div className="flex items-center gap-3">
                <span className={`flex h-3 w-3 rounded-full ${branch.iconBg}`} />
                <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">{branch.title}</h3>
              </div>

              <div className="mt-8 space-y-2">
                {branch.steps.map((step, idx) => (
                  <div key={idx} className="group relative flex gap-5 rounded-2xl p-4 transition-colors duration-300 hover:bg-slate-50 sm:p-5">
                    {/* Connector line */}
                    {idx < branch.steps.length - 1 && (
                      <div className={`absolute left-[2.35rem] top-20 h-[calc(100%-3rem)] w-px bg-gradient-to-b ${branch.gradient} opacity-20`} />
                    )}

                    <div className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${branch.gradient} shadow-soft transition-transform duration-300 group-hover:scale-105`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="pt-0.5">
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${branch.tickBg} text-xs font-bold`}>
                          {idx + 1}
                        </span>
                        <h4 className="font-semibold text-slate-900">{step.title}</h4>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-slate-500 sm:text-base">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA panel */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-slate-900 px-8 py-12 text-center shadow-card sm:px-12 sm:py-16">
          <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-brand-600/30 blur-3xl" />
          <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Ready to work smarter?
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Join the waitlist and be among the first to try Paqt when early access opens.
            </p>
            <button onClick={scrollToForm} className="btn-primary group mt-8 bg-white text-slate-900 shadow-none hover:bg-slate-100 hover:text-slate-900">
              Join the Waitlist Now
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;