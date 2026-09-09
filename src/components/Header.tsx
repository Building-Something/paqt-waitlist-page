import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import LogoT from '../../assets/Logo-Variant-Transparent-White.png';

const navLinks = [
  { label: 'Product', href: '#product' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Why join', href: '#why-join' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-ink-900/70 backdrop-blur-2xl shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[4.5rem]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2.5"
          >
            <div className="relative h-9 w-9 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
              <img src={LogoT} alt="Paqt Logo" className="h-full w-full object-contain drop-shadow-[0_0_12px_rgba(139,92,246,0.6)]" />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-white">
              paqt<span className="text-gradient-static">.</span>
            </span>
          </button>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-white/60 transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={scrollToForm} className="btn-primary group">
              Get Early Access
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <button
            className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-b border-white/10 bg-ink-900/95 backdrop-blur-2xl lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <button onClick={scrollToForm} className="btn-primary mt-3 w-full">
              Get Early Access
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
