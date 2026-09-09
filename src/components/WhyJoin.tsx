import { Crown } from 'lucide-react';
import { Reveal } from './Reveal';
import { SplitText } from './SplitText';
import VideoShowcase from './VideoShowcase';

// ---------------------------------------------------------------------------
// COMMENTED OUT: "Early birds get the perks." content (per request)
// ---------------------------------------------------------------------------
// const benefits = [
//   {
//     icon: Crown,
//     title: 'Priority onboarding',
//     text: 'Skip the line with dedicated setup and a walkthrough from the team that built it.',
//     gradient: 'from-amber-400 to-orange-500',
//     glow: 'shadow-[0_0_40px_-8px_rgba(251,191,36,0.5)]',
//   },
//   {
//     icon: Gift,
//     title: 'Founding discount',
//     text: 'Up to 50% off your first year — a thank-you for believing in us early.',
//     gradient: 'from-green-400 to-emerald-500',
//     glow: 'shadow-[0_0_40px_-8px_rgba(52,211,153,0.5)]',
//   },
//   {
//     icon: Zap,
//     title: 'New features first',
//     text: 'Test advanced AI capabilities and integrations before they reach the public.',
//     gradient: 'from-brand-400 to-indigo-500',
//     glow: 'shadow-[0_0_40px_-8px_rgba(99,102,241,0.5)]',
//   },
//   {
//     icon: MessageSquare,
//     title: 'Direct line to founders',
//     text: 'Shape the roadmap — your feedback goes straight to the development team.',
//     gradient: 'from-fuchsia-400 to-pink-500',
//     glow: 'shadow-[0_0_40px_-8px_rgba(232,121,249,0.5)]',
//   },
// ];
//
// const counters = [
//   { icon: Users, value: '1,200+', label: 'on the waitlist' },
//   { icon: Wifi, value: '2 wks', label: 'until early access' },
//   { icon: Crown, value: 'Top 10%', label: 'get founding perks' },
// ];

const WhyJoin = () => (
  <section id="why-join" className="relative overflow-hidden py-24 lg:py-32">
    <div className="aurora-bg absolute inset-0" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="section-pill">
            <Crown className="h-4 w-4 text-amber-400" />
            Why Join
          </span>
        </Reveal>

        {/*
        COMMENTED OUT per request — the "early birds" block + benefits + counters:

        <SplitText
          as="h2"
          className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          text="Early birds get the perks."
        />
        <Reveal delay={150}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
            The first people in get the most value — and help shape the product.
          </p>
        </Reveal>
        */}

        <Reveal>
          <SplitText
            as="h2"
            className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
            text="See Paqt in action."
          />
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/55">
            Watch how Paqt analyzes every clause and drafts complete contracts — all with your AI copilot by your side.
          </p>
        </Reveal>
      </div>

      <VideoShowcase />

      {/*
      COMMENTED OUT per request:
      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((b, i) => (
          <Reveal
            key={b.title}
            delay={i * 120}
            className="group card glow-border p-7 text-center transition-all duration-500 hover:-translate-y-1.5"
          >
            <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${b.gradient} ${b.glow} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3`}>
              <b.icon className="h-8 w-8 text-white" />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold text-white">{b.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/50">{b.text}</p>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
        {counters.map((c, i) => (
          <Reveal
            key={c.label}
            delay={200 + i * 120}
            className="flex items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-6 backdrop-blur"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-400">
              <c.icon className="h-6 w-6" />
            </span>
            <div>
              <div className="font-display text-2xl font-bold text-white">{c.value}</div>
              <div className="text-sm text-white/50">{c.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
      */}
    </div>
  </section>
);

export default WhyJoin;