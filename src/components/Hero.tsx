import { ArrowRight, Zap, FileSearch, FileCheck2, Loader } from 'lucide-react';
import { SplitText } from './SplitText';
import { Reveal } from './Reveal';
import logoIcon from '../../assets/logo-icon.webp';

const stats = [
  { value: '10×', label: 'faster drafting' },
  { value: '50+', label: 'contract templates' },
  { value: '95%', label: 'clause accuracy' },
  { value: '<60s', label: 'first draft' },
];

// Floating chips hinting at the product's workflow
const chips = [
  { icon: FileCheck2, text: 'NDA generated', delay: '0s', pos: 'left-[6%] top-[22%]', color: 'from-brand-500/30 to-brand-500/5' },
  { icon: FileSearch, text: 'Risks found · 4', delay: '1.2s', pos: 'right-[7%] top-[26%]', color: 'from-cyan-400/30 to-cyan-400/5' },
  { icon: Zap, text: 'Redraft applied', delay: '2.2s', pos: 'left-[9%] bottom-[24%]', color: 'from-violet-500/30 to-violet-500/5' },
  { icon: Loader, text: 'Sent for signature', delay: '0.7s', pos: 'right-[10%] bottom-[20%]', color: 'from-pink-500/30 to-pink-500/5' },
];

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-44">
      {/* Animated aurora + grid background */}
      <div className="aurora-bg absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_40%,#05060f_100%)]" />
      <div className="grid-lines absolute inset-0" />

      {/* Drifting glow orbs */}
      <div className="animate-float absolute left-1/2 top-20 h-[26rem] w-[26rem] -translate-x-[150%] rounded-full bg-brand-600/25 blur-[130px]" />
      <div className="animate-float absolute left-1/2 top-24 h-80 w-80 translate-x-[8%] rounded-full bg-violet-600/25 blur-[120px] [animation-delay:2.5s]" />
      <div className="animate-float absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[150px] [animation-delay:1.4s]" />

      {/* Floating product chips (desktop only) */}
      {chips.map((chip) => (
        <div
          key={chip.text}
          className={`absolute z-10 hidden animate-float lg:block ${chip.pos}`}
          style={{ animationDelay: chip.delay }}
        >
          <div className={`glow-border flex items-center gap-2.5 rounded-2xl border border-white/10 bg-gradient-to-br ${chip.color} px-4 py-3 backdrop-blur-xl`}>
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/10 text-white">
              <chip.icon className="h-4 w-4" />
            </span>
            <span className="whitespace-nowrap text-sm font-medium text-white/90">{chip.text}</span>
          </div>
        </div>
      ))}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="reveal is-visible inline-flex max-w-full items-center justify-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 shadow-soft backdrop-blur sm:gap-2 sm:px-5 sm:py-2 sm:text-sm">
            <img src={logoIcon} alt="" className="h-4 w-4 shrink-0 rounded-sm object-contain sm:h-5 sm:w-5" />
            <span>The Contracting Copilot for modern legal teams</span>
            <span className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 animate-pulse-soft sm:h-2 sm:w-2" />
          </div>

          <SplitText
            as="h1"
            className="mt-8 font-display text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
            text="Smarter contracts, built in minutes."
          />

          <p className="reveal is-visible mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55 sm:text-xl" style={{ transitionDelay: '300ms' }}>
            Paqt drafts, reviews, and finalizes agreements end-to-end. Drop the legalese,
            keep the precision, and close deals in{' '}
            <span className="accent-serif text-xl text-white/90">hours, not weeks.</span>
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button onClick={scrollToForm} className="btn-primary group w-full px-8 py-4 text-base sm:w-auto">
              Join the Waitlist
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a href="#product" className="btn-ghost group w-full px-8 py-4 text-base sm:w-auto">
              See what it does
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
          </div>

        </div>

        {/* Stats strip */}
        <div className="mx-auto mt-20 grid max-w-4xl grid-cols-2 overflow-hidden rounded-3xl border border-white/10 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              className={`border-white/10 bg-ink-900/60 px-6 py-7 text-center backdrop-blur ${i < 2 ? 'border-b sm:border-b-0' : ''} ${i < 3 ? 'border-r' : ''}`}
            >
              <div className="font-display text-3xl font-bold text-gradient-static sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-white/50">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
