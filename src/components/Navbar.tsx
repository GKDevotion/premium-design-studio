import React, { useState, useEffect, useRef } from 'react';
import { PageView } from '../types';
import { StudioLogo } from './StudioLogo';
import { Menu, X, ChevronDown, ArrowRight, Home, Building2, Wrench, PhoneCall } from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView, filter?: string) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setServicesMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setServicesMenuOpen(false);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBFBFA]/95 backdrop-blur-md border-b border-neutral-200/90 shadow-xs py-3'
            : 'bg-[#FBFBFA] border-b border-neutral-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Bespoke Architectural Website Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="group transition-opacity hover:opacity-90 cursor-pointer text-left focus:outline-none"
            aria-label="Premium Design Studio Homepage"
          >
            <StudioLogo variant="dark" size="md" />
          </button>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-600">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-neutral-950 transition-colors pb-0.5 border-b-2 ${
                currentPage === 'home'
                  ? 'border-neutral-900 text-neutral-950'
                  : 'border-transparent'
              } cursor-pointer`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-neutral-950 transition-colors pb-0.5 border-b-2 ${
                currentPage === 'about'
                  ? 'border-neutral-900 text-neutral-950'
                  : 'border-transparent'
              } cursor-pointer`}
            >
              About
            </button>

            {/* Services with Mega-Menu */}
            <div className="relative" ref={megaMenuRef}>
              <button
                onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
                className={`flex items-center gap-1 hover:text-neutral-950 transition-colors pb-0.5 border-b-2 cursor-pointer ${
                  currentPage === 'services' || currentPage === 'residential' || currentPage === 'commercial'
                    ? 'border-neutral-900 text-neutral-950'
                    : 'border-transparent'
                }`}
                aria-expanded={servicesMenuOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Mega-Menu Dropdown */}
              {servicesMenuOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[620px] bg-white rounded-xl shadow-xl border border-neutral-200 p-6 grid grid-cols-3 gap-6 animate-fadeIn z-50">
                  {/* Column 1: Residential */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-900 mb-3 pb-2 border-b border-neutral-100">
                      <Home className="w-3.5 h-3.5 text-neutral-700" />
                      <span>Residential</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-600">
                      <li>
                        <button
                          onClick={() => handleNavClick('residential')}
                          className="hover:text-neutral-950 hover:translate-x-0.5 transition-all text-left block w-full cursor-pointer font-medium"
                        >
                          Luxury Home Interiors
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick('residential')}
                          className="hover:text-neutral-950 hover:translate-x-0.5 transition-all text-left block w-full cursor-pointer"
                        >
                          Apartment & Penthouses
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick('residential')}
                          className="hover:text-neutral-950 hover:translate-x-0.5 transition-all text-left block w-full cursor-pointer"
                        >
                          Villa Interiors
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick('residential')}
                          className="hover:text-neutral-950 hover:translate-x-0.5 transition-all text-left block w-full cursor-pointer"
                        >
                          Modular Kitchens & Baths
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Column 2: Commercial */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-900 mb-3 pb-2 border-b border-neutral-100">
                      <Building2 className="w-3.5 h-3.5 text-neutral-700" />
                      <span>Commercial</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-600">
                      <li>
                        <button
                          onClick={() => handleNavClick('commercial')}
                          className="hover:text-neutral-950 hover:translate-x-0.5 transition-all text-left block w-full cursor-pointer font-medium"
                        >
                          Corporate & Office Interiors
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick('commercial')}
                          className="hover:text-neutral-950 hover:translate-x-0.5 transition-all text-left block w-full cursor-pointer"
                        >
                          Retail Stores & Showrooms
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick('commercial')}
                          className="hover:text-neutral-950 hover:translate-x-0.5 transition-all text-left block w-full cursor-pointer"
                        >
                          Restaurants & Cafés
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick('commercial')}
                          className="hover:text-neutral-950 hover:translate-x-0.5 transition-all text-left block w-full cursor-pointer"
                        >
                          Hospitality & Hotels
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Column 3: Specialized */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-900 mb-3 pb-2 border-b border-neutral-100">
                      <Wrench className="w-3.5 h-3.5 text-neutral-700" />
                      <span>Specialized</span>
                    </div>
                    <ul className="space-y-2 text-xs text-neutral-600">
                      <li>
                        <button
                          onClick={() => handleNavClick('services')}
                          className="hover:text-neutral-950 hover:translate-x-0.5 transition-all text-left block w-full cursor-pointer font-medium"
                        >
                          Turnkey Interior Solutions
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick('services')}
                          className="hover:text-neutral-950 hover:translate-x-0.5 transition-all text-left block w-full cursor-pointer"
                        >
                          Architectural Renovation
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick('services')}
                          className="hover:text-neutral-950 hover:translate-x-0.5 transition-all text-left block w-full cursor-pointer"
                        >
                          3D Photorealistic CGI
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleNavClick('services')}
                          className="hover:text-neutral-950 hover:translate-x-0.5 transition-all text-left block w-full cursor-pointer"
                        >
                          Custom Furniture & Millwork
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Mega-menu footer CTA */}
                  <div className="col-span-3 pt-3 mt-2 border-t border-neutral-100 flex items-center justify-between text-xs">
                    <span className="text-neutral-500">Need a comprehensive service overview?</span>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="font-semibold text-neutral-900 hover:text-neutral-700 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('portfolio')}
              className={`hover:text-neutral-950 transition-colors pb-0.5 border-b-2 ${
                currentPage === 'portfolio'
                  ? 'border-neutral-900 text-neutral-950'
                  : 'border-transparent'
              } cursor-pointer`}
            >
              Portfolio
            </button>

            <button
              onClick={() => handleNavClick('process')}
              className={`hover:text-neutral-950 transition-colors pb-0.5 border-b-2 ${
                currentPage === 'process'
                  ? 'border-neutral-900 text-neutral-950'
                  : 'border-transparent'
              } cursor-pointer`}
            >
              Process
            </button>

            <button
              onClick={() => handleNavClick('styles')}
              className={`hover:text-neutral-950 transition-colors pb-0.5 border-b-2 ${
                currentPage === 'styles'
                  ? 'border-neutral-900 text-neutral-950'
                  : 'border-transparent'
              } cursor-pointer`}
            >
              Styles
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`hover:text-neutral-950 transition-colors pb-0.5 border-b-2 ${
                currentPage === 'blog'
                  ? 'border-neutral-900 text-neutral-950'
                  : 'border-transparent'
              } cursor-pointer`}
            >
              Ideas
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-neutral-950 transition-colors pb-0.5 border-b-2 ${
                currentPage === 'contact'
                  ? 'border-neutral-900 text-neutral-950'
                  : 'border-transparent'
              } cursor-pointer`}
            >
              Contact
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-neutral-950 hover:bg-neutral-800 rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-xs"
            >
              Get a Quote
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Navigation"
              className="lg:hidden p-2 text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-sm lg:hidden flex justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Top with Studio Logo */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-left cursor-pointer focus:outline-none"
                  aria-label="Premium Design Studio Homepage"
                >
                  <StudioLogo variant="dark" size="sm" />
                </button>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-neutral-500 hover:text-neutral-950 rounded-md cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-4 space-y-1 text-sm font-medium">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg transition-colors ${
                    currentPage === 'home' ? 'bg-neutral-100 text-neutral-950 font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  Home
                </button>

                <button
                  onClick={() => handleNavClick('about')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg transition-colors ${
                    currentPage === 'about' ? 'bg-neutral-100 text-neutral-950 font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  About Us
                </button>

                {/* Services Section Accordion */}
                <div className="py-1">
                  <button
                    onClick={() => handleNavClick('services')}
                    className={`w-full text-left py-2.5 px-3 rounded-lg transition-colors flex items-center justify-between ${
                      currentPage === 'services' ? 'bg-neutral-100 text-neutral-950 font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    <span>Our Services Overview</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400" />
                  </button>
                  <div className="pl-6 space-y-1 mt-1 text-xs text-neutral-500">
                    <button
                      onClick={() => handleNavClick('residential')}
                      className="block w-full text-left py-1.5 hover:text-neutral-900"
                    >
                      ↳ Residential Interiors
                    </button>
                    <button
                      onClick={() => handleNavClick('commercial')}
                      className="block w-full text-left py-1.5 hover:text-neutral-900"
                    >
                      ↳ Commercial & Offices
                    </button>
                    <button
                      onClick={() => handleNavClick('services')}
                      className="block w-full text-left py-1.5 hover:text-neutral-900"
                    >
                      ↳ Turnkey Fitouts & 3D
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleNavClick('portfolio')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg transition-colors ${
                    currentPage === 'portfolio' ? 'bg-neutral-100 text-neutral-950 font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  Projects & Portfolio
                </button>

                <button
                  onClick={() => handleNavClick('process')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg transition-colors ${
                    currentPage === 'process' ? 'bg-neutral-100 text-neutral-950 font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  Our 9-Step Process
                </button>

                <button
                  onClick={() => handleNavClick('styles')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg transition-colors ${
                    currentPage === 'styles' ? 'bg-neutral-100 text-neutral-950 font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  Design Styles Guide
                </button>

                <button
                  onClick={() => handleNavClick('testimonials')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg transition-colors ${
                    currentPage === 'testimonials' ? 'bg-neutral-100 text-neutral-950 font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  Client Testimonials
                </button>

                <button
                  onClick={() => handleNavClick('blog')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg transition-colors ${
                    currentPage === 'blog' ? 'bg-neutral-100 text-neutral-950 font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  Design Ideas & Blog
                </button>

                <button
                  onClick={() => handleNavClick('faq')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg transition-colors ${
                    currentPage === 'faq' ? 'bg-neutral-100 text-neutral-950 font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  Frequently Asked Questions
                </button>

                <button
                  onClick={() => handleNavClick('contact')}
                  className={`w-full text-left py-2.5 px-3 rounded-lg transition-colors ${
                    currentPage === 'contact' ? 'bg-neutral-100 text-neutral-950 font-semibold' : 'text-neutral-600 hover:bg-neutral-50'
                  }`}
                >
                  Contact Us
                </button>
              </div>
            </div>

            {/* Mobile Drawer Bottom */}
            <div className="pt-4 border-t border-neutral-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase rounded-lg text-center shadow-sm cursor-pointer"
              >
                Request a Quote / Consultation
              </button>

              <div className="flex items-center gap-2 text-xs text-neutral-600 justify-center">
                <PhoneCall className="w-3.5 h-3.5 text-neutral-800" />
                <a href="tel:+918200017181" className="hover:text-neutral-950">
                  +91 82000 17181
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
