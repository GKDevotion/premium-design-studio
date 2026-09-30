import React from 'react';
import { PageView } from '../types';
import { STUDIO_INFO } from '../data/studioData';
import { StudioLogo } from './StudioLogo';
import { Download, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenBrochure: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBrochure,
  onOpenQuote,
}) => {
  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-16 pb-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800/80">
          {/* Column 1: Brand & Atelier Bio (spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="text-left cursor-pointer focus:outline-none block"
              aria-label="Premium Design Studio Home"
            >
              <StudioLogo variant="light" size="lg" />
            </button>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Bespoke interior architecture and turnkey execution. We synthesize architectural rigor with tactile craftsmanship to conceive spaces that celebrate light, proportion, and human experience.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-neutral-400">
              <p className="font-medium text-neutral-300">Surat Atelier & Headquarters</p>
              <p>{STUDIO_INFO.address}</p>
              <p>
                Inquiries:{' '}
                <a href={`mailto:${STUDIO_INFO.email}`} className="text-neutral-200 hover:underline">
                  {STUDIO_INFO.email}
                </a>
              </p>
              <p>
                Concierge:{' '}
                <a href={`tel:${STUDIO_INFO.phone}`} className="text-neutral-200 hover:underline">
                  {STUDIO_INFO.phone}
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white rounded-lg text-xs font-medium border border-neutral-800 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Lookbook 2026 (PDF)</span>
              </button>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-100">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Our Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Architectural Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our 9-Step Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('testimonials')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Client Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Atelier Contact & Hours
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="hover:text-amber-400 transition-colors cursor-pointer font-medium"
                >
                  Project Cost Estimator
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-100">
              Services
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => handleNav('residential')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Residential Interior Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('commercial')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Corporate Office Fitouts
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('commercial')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Retail Stores & Boutiques
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('commercial')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hospitality & Restaurants
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Single-Point Turnkey Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Photorealistic 3D Rendering
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Cities */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-100">
              Resources & Cities
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('styles')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Design Styles Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Design Ideas & Journal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>

            <div className="pt-3 border-t border-neutral-900">
              <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold block mb-1.5">
                Active Project Hubs
              </span>
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                Surat · Ahmedabad · Mumbai · Bengaluru · Pune · Vadodara · Delhi NCR · Jaipur
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, Social */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="text-center md:text-left">
            © 2026 Premium Design Studio. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms & Conditions</span>
            <span>·</span>
            <span className="hover:text-neutral-400 cursor-pointer">Sitemap</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-neutral-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <span>·</span>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Pinterest
            </a>
            <span>·</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>·</span>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
