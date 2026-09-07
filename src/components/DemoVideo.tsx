import { useRef, useState } from 'react';
import { Play, Volume2, VolumeX, Clapperboard } from 'lucide-react';

// Drop your demo video into the `public/` folder and update this path, e.g. `/demo.mp4`.
const DEMO_VIDEO_SRC = '/demo.mp4';

const DemoVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [aspectRatio, setAspectRatio] = useState('16 / 9');

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video || !video.videoWidth || !video.videoHeight) return;
    setAspectRatio(`${video.videoWidth} / ${video.videoHeight}`);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="aurora-bg absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="section-pill">
            <Clapperboard className="h-4 w-4" />
            Live Demo
          </div>
          <h2 className="section-title mt-4">
            See Paqt in <span className="gradient-text">action.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            A quick walkthrough of drafting, reviewing, and signing — all from one place.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-5xl">
          {/* Glow behind the player */}
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-brand-200/50 via-cyan-200/40 to-brand-200/50 blur-2xl" />

          {/* Player */}
          <div
            className="group relative max-h-[75vh] overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-900 shadow-card"
            style={{ aspectRatio }}
          >
            <video
              ref={videoRef}
              src={DEMO_VIDEO_SRC}
              className="h-full w-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedMetadata={handleLoadedMetadata}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Soft bottom gradient for readability */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/50 to-transparent" />

            {/* Center play/pause overlay */}
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="absolute inset-0 flex items-center justify-center"
            >
              {!isPlaying && (
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-xl backdrop-blur transition-transform duration-300 hover:scale-110">
                  <Play className="ml-1 h-7 w-7" />
                </span>
              )}
            </button>

            {/* Controls bar */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur transition-all duration-300 hover:bg-slate-900/80"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Starts playing automatically · Use the controls to mute or pause
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;