import { useCallback, useEffect, useRef, useState } from 'react';
import MuxPlayer from '@mux/mux-player-react';
import { ScanSearch, PenTool, ShieldQuestion, FileDown } from 'lucide-react';
import { Reveal } from './Reveal';
import reviewVideo from '../../assets/Contract Review Demo-web.mp4';
import composeVideo from '../../assets/Contract Composition-web.mp4';
import clarifyVideo from '../../assets/agentic-doubt-web.mp4';
import exportVideo from '../../assets/export-risks-web.mp4';

type MuxPlayerHandle = React.ComponentRef<typeof MuxPlayer>;

const slides = [
  {
    id: 'analysis',
    label: 'Contract Analysis',
    eyebrow: 'Review',
    heading: 'Analyze any contract in seconds',
    text: 'Upload any contract and Paqt flags risks, obligations, and red flags instantly, then ask your Contracting Copilot anything about it.',
    video: reviewVideo,
    icon: ScanSearch,
    chip: 'border-violet-400/30 bg-violet-500/10 text-violet-300',
    bar: 'from-violet-500 to-fuchsia-500',
    glow: 'shadow-[0_0_60px_-12px_rgba(139,92,246,0.45)]',
  },
  {
    id: 'composition',
    label: 'Contract Composition',
    eyebrow: 'Compose',
    heading: 'Draft a contract in minutes',
    text: 'Describe what you need, pick from 50+ templates, and get a complete agreement drafted, reviewed, and ready to e-sign.',
    video: composeVideo,
    icon: PenTool,
    chip: 'border-cyan-400/30 bg-cyan-500/10 text-cyan-300',
    bar: 'from-cyan-500 to-sky-500',
    glow: 'shadow-[0_0_60px_-12px_rgba(34,211,238,0.45)]',
  },
  {
    id: 'clarify',
    label: 'Agentic Doubt Analysis',
    eyebrow: 'Clarify',
    heading: 'Clears clause confusion, finds safer alternatives',
    text: 'Upload a contract and Paqt surfaces confusing clauses, explains them clearly, and suggests better risk-free alternatives.',
    video: clarifyVideo,
    icon: ShieldQuestion,
    chip: 'border-amber-400/30 bg-amber-500/10 text-amber-300',
    bar: 'from-amber-400 to-orange-500',
    glow: 'shadow-[0_0_60px_-12px_rgba(251,191,36,0.45)]',
  },
  {
    id: 'export',
    label: 'Risk Export',
    eyebrow: 'Export',
    heading: 'Export risks with potential remedies',
    text: 'Get analyzed contract risks with severity levels and recommended remedies, ready to export and share with your team.',
    video: exportVideo,
    icon: FileDown,
    chip: 'border-emerald-400/30 bg-emerald-500/10 text-emerald-300',
    bar: 'from-emerald-500 to-teal-500',
    glow: 'shadow-[0_0_60px_-12px_rgba(52,211,153,0.45)]',
  },
];

const VideoShowcase = () => {
  const [active, setActive] = useState(0);
  const [ratios, setRatios] = useState<Record<number, number>>({});
  const playerRefs = useRef<(MuxPlayerHandle | null)[]>([]);

  const activeRef = useRef(active);
  activeRef.current = active;

  const syncPlayers = useCallback(() => {
    playerRefs.current.forEach((player, i) => {
      if (!player) return;
      try {
        if (i === activeRef.current) {
          if (player.paused) player.play();
        } else if (!player.paused) {
          player.pause();
        }
      } catch {
        /* ignore */
      }
    });
  }, []);

  useEffect(() => {
    syncPlayers();
  }, [active, syncPlayers]);

  const onPlayerMount = (el: MuxPlayerHandle | null, index: number) => {
    playerRefs.current[index] = el;
    if (!el) return;
    const applyNaturalAspect = () => {
      const { videoWidth, videoHeight } = el;
      if (videoWidth && videoHeight) {
        const ratio = videoWidth / videoHeight;
        setRatios((prev) => (prev[index] === ratio ? prev : { ...prev, [index]: ratio }));
      }
    };
    if (el.videoWidth && el.videoHeight) {
      applyNaturalAspect();
    } else {
      el.addEventListener('loadedmetadata', applyNaturalAspect, { once: true });
    }
    if (el.readyState >= 1) {
      syncPlayers();
    } else {
      el.addEventListener('loadedmetadata', syncPlayers, { once: true });
    }
  };

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
          className="relative mx-auto flex w-full max-w-xl rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur"
        >
          <div
            aria-hidden
            className={`absolute inset-y-1 w-[calc(25%-0.125rem)] rounded-full bg-gradient-to-r ${slides[active].bar} transition-transform duration-500 ease-out`}
            style={{ transform: `translateX(${active * 100}%)` }}
          />
          {slides.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={`relative z-10 flex flex-1 items-center justify-center gap-1.5 rounded-full py-3 text-sm font-semibold transition-colors duration-300 ${
                active === i ? 'text-white' : 'text-white/50 hover:text-white/80'
              }`}
            >
              <s.icon className="h-4 w-4 shrink-0" />
              <span className="truncate">{s.eyebrow}</span>
            </button>
          ))}
        </div>
      </Reveal>

      {/* Sliding cards */}
      <div className="relative mt-10">
        <div className="overflow-hidden rounded-[2rem]">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((s, i) => (
              <div key={s.id} className="w-full shrink-0 px-1 sm:px-2">
                <div className={`card glow-border overflow-hidden ${active === i ? s.glow : ''}`}>
                  <div className="relative w-full overflow-hidden bg-ink-950" style={{ aspectRatio: ratios[i] ? `${ratios[i]}` : '16 / 9' }}>
                    <MuxPlayer
                      ref={(el) => onPlayerMount(el, i)}
                      src={s.video}
                      autoPlay={active === i ? 'muted' : false}
                      muted
                      loop
                      playsInline
                      nohotkeys
                      disableTracking
                      disableCookies
                      style={{
                        width: '100%',
                        height: '100%',
                        '--media-accent-color': '#a78bfa',
                        '--controls': 'none',
                        '--media-object-fit': 'contain',
                      }}
                      className="h-full w-full"
                    />
                  </div>

                  {/* Below-text for analysis / generation */}
                  <div className={`relative border-t border-white/10 bg-ink-800/70 p-6 backdrop-blur sm:p-7`}>
                    <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${s.bar}`} />
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${s.chip}`}>
                        <s.icon className="h-3.5 w-3.5" />
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