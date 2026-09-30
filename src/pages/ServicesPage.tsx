import React, { useState } from 'react';
import { PageView } from '../types';
import { SERVICES, HERO_IMAGE, MODERN_VILLA_IMAGE, CORPORATE_OFFICE_IMAGE, LUXURY_KITCHEN_IMAGE } from '../data/studioData';
import { AnimateIn } from '../components/AnimateIn';
import { LazyImage } from '../components/LazyImage';
import { AEOAnswerCard } from '../components/AEOAnswerCard';
import { CheckCircle2, ArrowRight, ShieldCheck, Layers, Sparkles, Building, Home, Wrench, MapPin } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'residential' | 'commercial' | 'turnkey'>('all');

  const filteredServices =
    activeTab === 'all'
      ? SERVICES
      : activeTab === 'residential'
      ? SERVICES.filter((s) => s.category === 'residential')
      : activeTab === 'commercial'
      ? SERVICES.filter((s) => s.category === 'commercial' || s.id === 'srv-4' || s.id === 'srv-6')
      : SERVICES.filter((s) => s.category === 'specialized' || s.id === 'srv-4');

  const turnkeyWorkflow = [
    { step: '01', title: 'Design & Concept', desc: 'Spatial layouts, moodboards, 3D renders & finish schedules' },
    { step: '02', title: 'Planning & BOQ', desc: 'Detailed cost breakdown, line-item specs & vendor timelines' },
    { step: '03', title: 'Procurement', desc: 'Direct-quarry stones, European hardware & factory joinery' },
    { step: '04', title: 'Civil & Execution', desc: 'Demolition, plumbing, electrical rewiring & ceiling frameworks' },
    { step: '05', title: 'Installation', desc: 'Custom millwork, marble laying, sanitaryware & smart lighting' },
    { step: '06', title: 'Quality Handover', desc: '120-point audit, deep cleaning, styling & move-in certification' },
  ];

  return (
    <div className="space-y-24 py-12">
      {/* 1. Services Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
              Our Architectural Services
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-neutral-950 leading-tight">
              Integrated Design & Turnkey Solutions
            </h1>
            <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed">
              From initial spatial concept and photorealistic 3D simulation to single-point construction management and physical key handover across Surat, Ahmedabad, Mumbai, and Bengaluru.
            </p>
          </div>
        </AnimateIn>

        {/* Tab Controls */}
        <AnimateIn delayMs={100}>
          <div className="mt-8 flex items-center gap-2 p-1.5 bg-neutral-200/60 rounded-xl max-w-fit overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              All Services ({SERVICES.length})
            </button>
            <button
              onClick={() => setActiveTab('residential')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'residential'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Residential Interiors
            </button>
            <button
              onClick={() => setActiveTab('commercial')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'commercial'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Commercial & Offices
            </button>
            <button
              onClick={() => setActiveTab('turnkey')}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'turnkey'
                  ? 'bg-white text-neutral-950 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Turnkey & Specialized
            </button>
          </div>
        </AnimateIn>
      </section>

      {/* 2. Turnkey Flagship Feature Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="bg-neutral-950 text-white rounded-2xl p-8 sm:p-12 space-y-8">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Our Flagship Offering</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                  Turnkey Interior Solutions
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                  From initial concept drawings to final handover, we manage the complete interior project under a single contract. Eliminates contractor disputes, protects your budget, and delivers on committed dates.
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3.5 bg-white text-neutral-950 hover:bg-neutral-100 text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer text-center"
                >
                  Request Turnkey Proposal
                </button>
                <button
                  onClick={() => onNavigate('process')}
                  className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider uppercase rounded-lg border border-neutral-700 transition-colors cursor-pointer text-center"
                >
                  Inspect 9-Step Process
                </button>
              </div>
            </div>

            {/* Workflow Sequence */}
            <div className="pt-6 border-t border-neutral-800 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {turnkeyWorkflow.map((step, idx) => (
                <div key={idx} className="space-y-1.5 p-3 rounded-lg bg-neutral-900/60 border border-neutral-800">
                  <div className="text-xs font-mono font-bold text-amber-400">{step.step}</div>
                  <div className="text-xs font-semibold text-white">{step.title}</div>
                  <p className="text-[11px] text-neutral-400 font-light leading-tight">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* 3. Detailed Services Cards Grid with LazyImage & Staggered Reveal */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service, idx) => (
            <AnimateIn key={service.id} delayMs={idx * 70}>
              <div
                className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs overflow-hidden flex flex-col justify-between group hover:border-neutral-400 transition-all duration-300 h-full"
              >
                <div className="aspect-16/9 overflow-hidden bg-neutral-100">
                  <LazyImage
                    src={service.image}
                    alt={`${service.title} architectural service by Premium Design Studio`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                </div>

                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <span className="font-mono font-bold text-neutral-900 text-sm">
                        {service.number}.
                      </span>
                      <span className="uppercase tracking-wider text-[11px] text-neutral-500 font-medium">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-neutral-950">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-amber-800">
                      {service.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features & Deliverables list */}
                  <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                        Key Highlights
                      </div>
                      <ul className="space-y-1 text-xs text-neutral-600">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-neutral-400">·</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500">
                        Project Deliverables
                      </div>
                      <ul className="space-y-1 text-xs text-neutral-600">
                        {service.deliverables.map((deliv, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{deliv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <button
                      onClick={onOpenQuote}
                      className="text-xs font-semibold text-neutral-950 hover:text-amber-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 4. AEO Intelligence & GEO Footnote */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <AnimateIn>
          <AEOAnswerCard
            question="What is the process to initiate turnkey interior services with Premium Design Studio?"
            directAnswer="Initiating a turnkey project starts with an initial lifestyle or brand consultation followed by a laser-scan dimensional survey of your property. We then formulate 2D spatial master plans, 8K photorealistic 3D simulations, and a fixed-price Bill of Quantities (BOQ). Once approved, our full-time site engineers execute civil alterations, joinery, and finishes through white-glove handover."
            keyFacts={[
              { label: 'Step 1', value: 'Discovery & Survey' },
              { label: 'Step 2', value: '3D Simulation & BOQ' },
              { label: 'Step 3', value: 'Single-Contract Execution' },
              { label: 'Step 4', value: '120-Point Handover' },
            ]}
          />
        </AnimateIn>
      </section>

      {/* 5. Cross Links to Residential & Commercial */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-6">
          <AnimateIn delayMs={50}>
            <div
              onClick={() => onNavigate('residential')}
              className="p-8 bg-neutral-100 rounded-2xl border border-neutral-200 hover:border-neutral-400 transition-all cursor-pointer group space-y-3 h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-neutral-900 shadow-xs">
                <Home className="w-5 h-5 text-neutral-900" />
              </div>
              <h3 className="text-xl font-serif font-bold text-neutral-950 group-hover:text-amber-800 transition-colors">
                Dedicated Residential Interiors →
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Explore specialized interior architecture for luxury villas, penthouses, high-end apartments, gourmet kitchens, and tranquil master suites.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delayMs={100}>
            <div
              onClick={() => onNavigate('commercial')}
              className="p-8 bg-neutral-100 rounded-2xl border border-neutral-200 hover:border-neutral-400 transition-all cursor-pointer group space-y-3 h-full"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-neutral-900 shadow-xs">
                <Building className="w-5 h-5 text-neutral-900" />
              </div>
              <h3 className="text-xl font-serif font-bold text-neutral-950 group-hover:text-amber-800 transition-colors">
                Dedicated Commercial & Offices →
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                Workplace fitouts engineered to elevate corporate brand distinction, employee retention, acoustic performance, and client hospitality.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
};
