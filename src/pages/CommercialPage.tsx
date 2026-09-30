import React from 'react';
import { PageView, Project } from '../types';
import { PROJECTS, CORPORATE_OFFICE_IMAGE, HOSPITALITY_LOUNGE_IMAGE } from '../data/studioData';
import { AnimateIn } from '../components/AnimateIn';
import { LazyImage } from '../components/LazyImage';
import { AEOAnswerCard } from '../components/AEOAnswerCard';
import { Building2, ArrowRight, ShieldCheck, Users, TrendingUp, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

interface CommercialPageProps {
  onNavigate: (page: PageView) => void;
  onSelectProject: (project: Project) => void;
  onOpenQuote: () => void;
}

export const CommercialPage: React.FC<CommercialPageProps> = ({
  onNavigate,
  onSelectProject,
  onOpenQuote,
}) => {
  const commercialProjects = PROJECTS.filter(
    (p) => p.category === 'Commercial' || p.category === 'Hospitality' || p.category === 'Retail'
  );

  const businessBenefits = [
    {
      title: 'Brand Representation',
      desc: 'Your space is the three-dimensional manifestation of your brand. We craft environments that project credibility, luxury, and prestige to prospective clients and partners.',
      icon: Sparkles,
    },
    {
      title: 'Employee Productivity & Well-Being',
      desc: 'Ergonomic task lighting, STC-48 acoustic isolation, and circadian LED lighting promote sustained mental focus while drastically reducing workday fatigue.',
      icon: Users,
    },
    {
      title: 'Customer Experience & Dwell Time',
      desc: 'For retail and hospitality venues, strategic circulation, tactile materiality, and flattering illumination double average customer dwell time and drive spending.',
      icon: TrendingUp,
    },
    {
      title: 'Space Optimization & Floor Yield',
      desc: 'We engineer high-efficiency layouts that maximize usable workstation density and revenue-generating square footage without inducing spatial claustrophobia.',
      icon: Building2,
    },
    {
      title: 'Acoustic & Tech Integration',
      desc: 'Hidden power channels, motorized videoconferencing screens, and European slatted timber acoustic baffling designed directly into architectural surfaces.',
      icon: ShieldCheck,
    },
    {
      title: 'Strict Commercial Timelines',
      desc: 'We understand that commercial lease rent begins immediately. Our multi-shift execution ensures fitout handover strictly on or ahead of contract schedules.',
      icon: Clock,
    },
  ];

  const commercialSectors = [
    { title: 'Corporate Headquarters & Executive Suites', desc: 'Boardrooms, leadership offices, agile team zones & executive dining' },
    { title: 'Flagship Retail Stores & Showrooms', desc: 'Tactile product displays, 98+ CRI museum lighting & secure vitrines' },
    { title: 'Restaurants, Cafés & Lounges', desc: 'Atmospheric banquette dining, custom bar counters & commercial kitchens' },
    { title: 'Boutique Hotels & Hospitality Venues', desc: 'Guest lobbies, concierge lounges, luxury guest suites & wellness amenities' },
    { title: 'Medical Wellness & Premium Clinics', desc: 'Calming reception galleries, hygienic acoustic patient rooms & lighting' },
    { title: 'Tech Innovation Campuses', desc: 'Collaborative war rooms, focus pods, amphitheater town halls & lounges' },
  ];

  return (
    <div className="space-y-24 py-12">
      {/* 1. Commercial Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800">
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial & Corporate Practice · Ahmedabad, Surat & Bengaluru</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-neutral-950 leading-tight">
              Commercial Interiors Engineered For High Business Performance
            </h1>
            <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed">
              Corporate headquarters, flagship retail stores, and hospitality destinations where architectural elegance meets rigorous commercial operational productivity.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
              >
                Request Commercial Fitout Proposal
              </button>
              <button
                onClick={() => onNavigate('portfolio')}
                className="px-6 py-3.5 border border-neutral-300 hover:border-neutral-900 text-neutral-900 text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
              >
                View Commercial Case Studies
              </button>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* 2. Business Benefits Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <AnimateIn>
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
              Strategic ROI & Workplace Performance
            </div>
            <h2 className="text-3xl font-serif font-bold text-neutral-950">
              Why Architecture Matters To Your Bottom Line
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessBenefits.map((ben, idx) => {
            const Icon = ben.icon;
            return (
              <AnimateIn key={idx} delayMs={idx * 60}>
                <div
                  className="p-6 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-3 h-full"
                >
                  <div className="w-9 h-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-900">
                    <Icon className="w-5 h-5 text-neutral-800" />
                  </div>
                  <h3 className="text-base font-serif font-semibold text-neutral-950">
                    {ben.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {ben.desc}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </section>

      {/* 3. Commercial Typologies */}
      <section className="bg-neutral-100/70 py-20 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                Sectors Served
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-950">
                Commercial Sectors & Specialized Environments
              </h2>
              <p className="text-sm text-neutral-600 font-light">
                Compliant with commercial MEP, NBC building codes, and fire life safety requirements.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialSectors.map((sec, idx) => (
              <AnimateIn key={idx} delayMs={idx * 60}>
                <div
                  className="p-6 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-2 h-full"
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    Sector 0{idx + 1}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-neutral-950">
                    {sec.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Commercial Portfolio with LazyImage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimateIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                Commercial Case Studies
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-950">
                Featured Workplaces & Venues
              </h2>
            </div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="text-xs font-semibold tracking-wider uppercase text-neutral-900 hover:text-neutral-600 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {commercialProjects.map((p, idx) => (
            <AnimateIn key={p.id} delayMs={idx * 90}>
              <div
                onClick={() => onSelectProject(p)}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-xs cursor-pointer hover:border-neutral-400 transition-colors flex flex-col justify-between h-full"
              >
                <div className="aspect-16/10 overflow-hidden bg-neutral-100">
                  <LazyImage
                    src={p.coverImage}
                    alt={`${p.name} - Commercial fitout in ${p.location}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-neutral-500 font-light">
                    <span>{p.location}</span>
                    <span>·</span>
                    <span className="tabular-nums">{p.area}</span>
                    <span>·</span>
                    <span className="tabular-nums">{p.year}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-neutral-950 group-hover:text-amber-800 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {p.overview}
                  </p>
                  <div className="pt-2 text-xs font-semibold text-neutral-950 group-hover:text-amber-800 flex items-center gap-1">
                    <span>Review Case Study & Metrics</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 5. AEO Commercial Answer Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <AEOAnswerCard
            question="How does commercial interior architecture handle acoustic STC ratings in open-plan offices?"
            directAnswer="We install suspended slatted European oak baffles with certified recycled acoustic PET felt backing, alongside STC-48 demountable double-glazed acoustic glass partitions for conference rooms and executive suites. This dampens conversational frequency spillover by up to 85% while preserving visual transparency."
            keyFacts={[
              { label: 'Acoustic Rating', value: 'STC-48 Certified' },
              { label: 'Reverberation', value: 'Reduced by 85%' },
              { label: 'Baffling Material', value: 'Oak & Recycled PET' },
              { label: 'Glazing', value: 'Acoustic Double Glazed' },
            ]}
          />
        </AnimateIn>
      </section>

      {/* 6. Commercial Fitout CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="p-8 sm:p-12 bg-neutral-950 text-white rounded-2xl text-center space-y-6">
            <div className="max-w-xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">
                Plan Your Commercial Workspace Fitout
              </h2>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                We provide fast-track floor plan analysis, employee headcount density studies, and preliminary budget estimates for your corporate space.
              </p>
            </div>
            <div className="pt-2 flex justify-center">
              <button
                onClick={onOpenQuote}
                className="px-8 py-3.5 bg-white text-neutral-950 hover:bg-neutral-100 text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
              >
                Request Commercial Cost Proposal
              </button>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
};
