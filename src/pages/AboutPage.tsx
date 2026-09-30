import React from 'react';
import { PageView } from '../types';
import { STUDIO_INFO, TEAM_MEMBERS, HERO_IMAGE, MODERN_VILLA_IMAGE } from '../data/studioData';
import { Award, CheckCircle2, Shield, Sparkles, HeartHandshake, Eye, Compass, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  const beliefs = [
    {
      title: 'Creativity',
      description: 'We reject standard templates. Every space is an original architectural composition honoring its geographic setting and the client’s story.',
      icon: Sparkles,
    },
    {
      title: 'Functionality',
      description: 'A beautiful room that fails in everyday life is a failure of design. Ergonomics, circulation, and storage are engineered first.',
      icon: Compass,
    },
    {
      title: 'Quality & Craft',
      description: 'We source verified natural marbles, European hardware, and certified hardwood veneers, executed with millimeter tolerances.',
      icon: Shield,
    },
    {
      title: 'Sustainability',
      description: 'We prioritize natural cross-ventilation, low-VOC mineral plasters, circadian lighting, and locally quarried stones that reduce carbon footprint.',
      icon: Eye,
    },
    {
      title: 'Absolute Transparency',
      description: 'Itemized, line-by-line Bill of Quantities (BOQ) with fixed costs prior to project kickoff. No hidden markups or surprise contractor bills.',
      icon: HeartHandshake,
    },
    {
      title: 'Attention to Detail',
      description: 'From shadow-line ceiling reveals to custom brass electrical plates and acoustic fabric paneling, the smallest details create the largest impact.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="space-y-24 py-12">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
            About Premium Design Studio
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-neutral-950 leading-tight">
            We Design With Purpose
          </h1>
          <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed">
            We believe great interiors are not simply beautiful. They must be functional, deeply personal, and architecturally timeless.
          </p>
        </div>
      </section>

      {/* 2. Company Story & Growth */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950">
              From an Atelier in Surat to National Architectural Acclaim
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
              <p>
                Founded over a decade ago by principal architect Aarav Varma, <strong>{STUDIO_INFO.name}</strong> was born from a desire to bridge the gap between visionary architectural concepts and the realities of construction site execution in India.
              </p>
              <p>
                Too often, clients faced divided accountability—architects who produced drawings but abandoned the site, and contractors who cut corners on finishes. We established an integrated practice that unites concept design, 3D photorealistic simulation, procurement, and turnkey site engineering under one roof.
              </p>
              <p>
                Today, our studio operates with a team of 35+ architects, civil engineers, 3D visualizers, and master artisans, successfully delivering over 250+ bespoke luxury residences, penthouses, executive corporate headquarters, and destination restaurants across Surat, Ahmedabad, Mumbai, Bengaluru, and Pune.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 border-t border-neutral-200">
              <div>
                <div className="text-2xl font-serif font-bold text-neutral-950 tabular-nums">250+</div>
                <div className="text-xs text-neutral-500">Executed Projects</div>
              </div>
              <div className="w-px h-8 bg-neutral-200" />
              <div>
                <div className="text-2xl font-serif font-bold text-neutral-950 tabular-nums">15+</div>
                <div className="text-xs text-neutral-500">Industry Awards</div>
              </div>
              <div className="w-px h-8 bg-neutral-200" />
              <div>
                <div className="text-2xl font-serif font-bold text-neutral-950 tabular-nums">8</div>
                <div className="text-xs text-neutral-500">Metro Cities</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="aspect-4/3 rounded-2xl overflow-hidden bg-neutral-100 shadow-lg border border-neutral-200">
              <img
                src={MODERN_VILLA_IMAGE}
                alt="Architectural studio projects by Premium Design Studio"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Design Philosophy */}
      <section className="bg-neutral-950 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
            <Award className="w-4 h-4" />
            <span>Our Design Philosophy</span>
          </div>
          <blockquote className="text-2xl sm:text-4xl font-serif font-light leading-snug">
            "An interior is not a collection of catalog objects. It is the architectural stage upon which human memories unfold. We design for daylight, touch, stillness, and joy."
          </blockquote>
          <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl mx-auto">
            Aarav Varma · Founder & Principal Architect, Premium Design Studio
          </p>
        </div>
      </section>

      {/* 4. What We Believe (6 Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
            Core Values
          </div>
          <h2 className="text-3xl font-serif font-bold text-neutral-950">
            What We Believe
          </h2>
          <p className="text-sm text-neutral-600 font-light">
            Six foundational pillars that govern every architectural decision and contractor interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beliefs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-neutral-200/90 shadow-xs space-y-3 hover:border-neutral-400 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900">
                  <Icon className="w-5 h-5 text-neutral-800" />
                </div>
                <h3 className="text-base font-serif font-semibold text-neutral-950">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
            Architectural Leadership
          </div>
          <h2 className="text-3xl font-serif font-bold text-neutral-950">
            The Designers & Engineers Behind Your Space
          </h2>
          <p className="text-sm text-neutral-600 font-light">
            Experienced leaders bringing institutional pedigree, fine arts training, and civil engineering precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-xs flex flex-col justify-between"
            >
              <div className="aspect-4/3 overflow-hidden bg-neutral-100">
                <img
                  src={member.image}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span>{member.experience}</span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-neutral-950">
                    {member.name}
                  </h3>
                  <div className="text-xs font-medium text-amber-800">
                    {member.role}
                  </div>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed pt-1">
                    {member.bio}
                  </p>
                </div>
                <div className="pt-3 border-t border-neutral-100 text-[11px] text-neutral-500">
                  <span className="font-semibold text-neutral-700">Credentials: </span>
                  {member.certifications}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-neutral-100 rounded-2xl border border-neutral-200 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-neutral-950">
            Ready to bring your project to life?
          </h3>
          <p className="text-sm text-neutral-600 font-light max-w-lg mx-auto">
            Book an exploratory consultation with our principal design team to discuss your property.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3 bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Schedule Consultation
            </button>
            <button
              onClick={() => onNavigate('portfolio')}
              className="px-6 py-3 border border-neutral-300 text-neutral-900 text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-white transition-colors cursor-pointer"
            >
              Explore Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
