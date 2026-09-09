import { Reveal } from './Reveal';

const items = [
  'NDA review',
  'M&A contracts',
  'Employment agreements',
  'SaaS terms',
  'Master service agreements',
  'Vendor contracts',
  'Non-compete clauses',
  'IP assignment',
  'Data processing agreements',
  'Lease agreements',
];

const Track = ({ hidden = false }: { hidden?: boolean }) => (
  <div
    className="flex shrink-0 items-center gap-4 pr-4"
    aria-hidden={hidden || undefined}
  >
    {items.map((item, i) => (
      <span
        key={i}
        className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/60"
      >
        {item}
      </span>
    ))}
  </div>
);

const TrustStrip = () => (
  <section className="relative border-y border-white/10 bg-white/[0.02] py-10">
    <Reveal className="relative overflow-hidden">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.3em] text-white/35">
        Built for every kind of agreement
      </p>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="ticker-track flex w-max">
          <Track />
          <Track hidden />
        </div>
      </div>
    </Reveal>
  </section>
);

export default TrustStrip;