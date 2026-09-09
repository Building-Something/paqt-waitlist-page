import { useEffect, useRef, useState } from 'react';
import MuxPlayer from '@mux/mux-player-react';
import { ScanSearch, PenTool, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';
import reviewVideo from '../../assets/Contract Review Demo.mp4';
import composeVideo from '../../assets/Contract Composition.mp4';

type MuxPlayerHandle = React.ComponentRef<typeof MuxPlayer>;

const slides = [
  {
    id: 'analysis',
    label: 'Contract Analysis',
    eyebrow: 'Review',
    heading: 'Analyze any contract in seconds',
    text: 'Upload any contract and Paqt flags risks, obligations, and red flags instantly — then ask your AI copilot anything about it.',
    video: reviewVideo,
    chip: 'border-violet-400/30 bg-violet-500/10 text-violet-300',
    bar: 'from-violet-500 to-fuchsia-500',
    glow: 'shadow-[0_0_60px_-12px_rgba(139,92,246,0.45)]',
  },
  {
    id: 'generation',
    label: 'Contract Generation',
    eyebrow: 'Generate',
    heading: 'Draft a contract in minutes',
    text: 'Describe what you need, pick from 50+ templates, and get a complete agreement drafted, reviewed, and ready to e-sign.',
    video: composeVideo,
    chip: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-300',
    bar: 'from-cyan-500 to-sky-500',
    glow: 'shadow-[0_0_60px_-12px_rgba(34,211,238,0.45)]',
  },
];

const VideoShowcase = () => {
  const [active, setActive] = useState(0);
  const playerRefs = useRef<(MuxPlayerHandle | null)[]>([]);

  useEffect(() => {
    playerRefs.current.forEach((player, i) => {
      if (!player) return;
      if (i === active) {
        player.play().catch(() => {});
      } else {
        player.pause();
      }
    });
  }, [active]);

  const focusKey = (e: React.KeyboardEvent) => {
    const codes = ['ArrowLeft', 'ArrowRight'];
    if (!codes.includes(e.key)) return;
    e.preventDefault();
    setActive((prev) => (e.key === 'ArrowRight' ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length));
  };

  return (
    <div className="relative mx-auto mt-20 max-w-5xl">
      {/* Sliding control */}
      <Reveal>
        <div
          role="tablist"
          aria-label="Product demos"
          onKeyDown={focusKey}
          className="relative mx-auto flex w-full max-w-md rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur"
        >
          <div
            aria-hidden
            className={`absolute inset-y-1 w-[calc(50%-0.25rem)] rounded-full bg-gradient-to-r ${slides[active].bar} transition-transform duration-500 ease-out`}
            style={{ transform: `translateX(${active * 100}%)` }}
          />
          {slides.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`relative z-10 flex flex-1 items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold transition-colors duration-300 ${
                active === i ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              {i === 0 ? <ScanSearch className="h-4 w-4" /> : <PenTool className="h-4 w-4" />}
              {s.eyebrow}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Sliding cards */}
      <div className="relative mt-10">
        <button
          onClick={() => setActive((active - 1 + slides.length) % slides.length)}
          aria-label="Previous demo"
          className="absolute -left-4 top-[38%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-800/90 text-white/70 shadow-soft backdrop-blur transition-all duration-300 hover:scale-105 hover:border-white/25 hover:text-white sm:flex lg:-left-6"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => setActive((active + 1) % slides.length)}
          aria-label="Next demo"
          className="absolute -right-4 top-[38%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink-800/90 text-white/70 shadow-soft backdrop-blur transition-all duration-300 hover:scale-105 hover:border-white/25 hover:text-white sm:flex lg:-right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="overflow-hidden rounded-[2rem]">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={s.id} className="w-full shrink-0 px-1 sm:px-2">
                <div className={`card glow-border overflow-hidden ${active === i ? s.glow : ''}`}>
                  <div className="relative aspect-video overflow-hidden bg-ink-950">
                    <MuxPlayer
                      ref={(el) => {
                        playerRefs.current[i] = el;
                      }}
                      src={s.video}
                      autoPlay={active === i ? 'muted' : false}
                      muted
                      loop
                      playsInline
                      disableTracking
                      disableCookies
                      style={{ width: '100%', height: '100%', '--media-accent-color': '#a78bfa' }}
                      className="h-full w-full"
                    />
                  </div>

                  {/* Below-text for analysis / generation */}
                  <div className={`relative border-t border-white/10 bg-ink-800/70 p-6 backdrop-blur sm:p-7`}>
                    <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${s.bar}`} />
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${s.chip}`}>
                        {i === 0 ? <ScanSearch className="h-3.5 w-3.5" /> : <PenTool className="h-3.5 w-3.5" />}
                        {s.label}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {s.heading}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">{s.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicator dots */}
      <Reveal delay={150}>
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              aria-label={`Show ${s.label}`}
              className={`h-2 rounded-full transition-all duration-500 ${
                active === i ? `w-8 bg-gradient-to-r ${s.bar}` : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default VideoShowcase;