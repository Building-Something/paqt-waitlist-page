import { Clock, AlertTriangle, FileQuestion, RefreshCcw } from 'lucide-react';
import { Reveal } from './Reveal';

const pains = [
  {
    icon: Clock,
    title: 'Weeks per contract',
    text: 'Drafting a simple NDA surprisingly turns into a week of back-and-forth with counsel.',
  },
  {
    icon: AlertTriangle,
    title: 'Missed risks',
    text: 'Buried indemnity clauses and one-sided termination terms slip past even careful eyes.',
  },
  {
    icon: FileQuestion,
    title: 'Template chaos',
    text: 'Five versions of the "final" contract, tracked in email threads and a shared drive.',
  },
  {
    icon: RefreshCcw,
    title: 'Endless redrafting',
    text: 'Every counterparty tweak means hours of manual formatting before it can be signed.',
  },
];

const Problem = () => (
  <section className="relative py-24 lg:py-32">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <Reveal>
          <span className="section-pill">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            The Problem
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="section-title mt-5">
            Legal work you are <span className="accent-serif text-gradient-static">drowning</span> in.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/55">
            Every deal needs a contract. Most teams still build them from scratch, one email,
            one template, one version-control nightmare at a time.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {pains.map((pain, i) => (
          <Reveal
            key={pain.title}
            delay={i * 120}
            className="group card glow-border p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-red-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-red-500/10">
              <pain.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-white">{pain.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/50">{pain.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;