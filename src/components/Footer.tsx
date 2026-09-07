import { Twitter, Linkedin, Github, Heart } from 'lucide-react';
import LogoT from '../../assets/Logo-Variant-Transparent.png';

const productLinks = ['Features', 'Pricing', 'API', 'Integrations'];
const companyLinks = ['About', 'Blog', 'Careers', 'Contact'];
const legalLinks = ['Terms of Service', 'Privacy Policy', 'Security', 'Cookies'];
const socials = [
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Github, label: 'GitHub' },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 lg:grid-cols-4 lg:gap-8">
          {/* Company */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="h-10 w-10">
                <img src={LogoT} alt="Paqt Logo" className="h-full w-full object-contain" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-slate-900">
                paqt<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-500">
              Your partner for creating, reviewing, and improving contracts — covering every
              detail while saving you time and effort.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900">Product</h3>
            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 transition-colors duration-200 hover:text-slate-900">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-slate-900">Company</h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 transition-colors duration-200 hover:text-slate-900">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 py-8 sm:flex-row">
          <p className="flex items-center gap-1.5 text-sm text-slate-400">
            © {new Date().getFullYear()} Paqt. All rights reserved.
            <span className="hidden sm:inline">·</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="h-3.5 w-3.5 text-red-500" /> for legal teams
            </span>
          </p>
          <nav className="flex flex-wrap justify-center gap-5 text-sm">
            {legalLinks.map((link) => (
              <a key={link} href="#" className="text-slate-500 transition-colors duration-200 hover:text-slate-900">
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