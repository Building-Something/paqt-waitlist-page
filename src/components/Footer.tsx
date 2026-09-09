import { Twitter, Linkedin, Github, Heart } from 'lucide-react';
import LogoT from '../../assets/Logo-Variant-Transparent-White.png';

const productLinks = ['Contract Generation', 'Contract Review', 'Templates', 'Integrations', 'API'];
const companyLinks = ['About', 'Blog', 'Careers', 'Contact'];
const legalLinks = ['Terms of Service', 'Privacy Policy', 'Security', 'Cookies'];
const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Github, label: 'GitHub' },
];

const Footer = () => {
  const scrollToForm = () => {
    document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <div className="absolute -top-32 left-1/2 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10">
                <img src={LogoT} alt="Paqt Logo" className="h-full w-full object-contain drop-shadow-[0_0_14px_rgba(139,92,246,0.6)]" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                paqt<span className="text-gradient-static">.</span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/45">
              The AI copilot for creating, reviewing, and improving contracts — covering
              every detail while saving your team hours every week.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-300"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
              <button onClick={scrollToForm} className="btn-primary ml-1 px-5 py-2.5 text-xs">
                Join waitlist
              </button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/70">Product</h3>
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/45 transition-colors duration-200 hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white/70">Company</h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/45 transition-colors duration-200 hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-white/35">
            © {new Date().getFullYear()} Paqt. All rights reserved.
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-3.5 w-3.5 text-red-400" /> for legal teams
            </span>
          </p>
          <nav className="flex flex-wrap justify-center gap-5 text-sm">
            {legalLinks.map((link) => (
              <a key={link} href="#" className="text-white/45 transition-colors duration-200 hover:text-white">
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;