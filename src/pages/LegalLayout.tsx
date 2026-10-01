import type { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

type LegalLayoutProps = {
  title: string;
  updated: string;
  children: ReactNode;
};

const LegalLayout = ({ title, updated, children }: LegalLayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950 font-sans text-slate-200">
      <div className="noise pointer-events-none fixed inset-0 z-[2] opacity-[0.22]" />
      <CustomCursor />
      <div className="relative z-10">
        <Header />
        <main className="mx-auto max-w-3xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wider text-white/40">Last updated: {updated}</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h1>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="mt-12">
    <h2 className="font-display text-2xl font-bold text-white">{title}</h2>
    <div className="mt-4 space-y-4 text-[15px] leading-relaxed">{children}</div>
  </section>
);

export const Sub = ({ title, children }: { title: string; children?: ReactNode }) => (
  <div className="mt-6">
    <h3 className="font-display text-lg font-semibold text-white/85">{title}</h3>
    {children ? <div className="mt-2 space-y-3">{children}</div> : null}
  </div>
);

export const P = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <p className={`text-white/60 ${className}`}>{children}</p>
);

export const List = ({ items }: { items: ReactNode[] }) => (
  <ul className="list-disc space-y-2 pl-5 text-white/60">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

export const Anchor = ({ to, children }: { to: string; children: ReactNode }) => (
  <a href={to} className="text-violet-300 underline decoration-violet-400/40 underline-offset-2 hover:text-violet-200">
    {children}
  </a>
);

export default LegalLayout;