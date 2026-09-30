import React from 'react';
import { PageView } from '../types';
import { PROCESS_STEPS } from '../data/studioData';
import { CheckCircle2, ArrowRight, Clock, ShieldCheck, Compass } from 'lucide-react';

interface ProcessPageProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="space-y-20 py-12">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
            Methodology & Accountability
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-neutral-950 leading-tight">
            Our 9-Step Architectural Process
          </h1>
          <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed">
            We eliminate uncertainty through structured milestone phases, transparent technical schedules, and daily on-site supervision.
          </p>
        </div>
      </section>

      {/* 2. Process Timeline Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l border-neutral-300 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-10 space-y-12">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.step} className="relative group">
              {/* Timeline marker */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-neutral-900 text-neutral-950 flex items-center justify-center font-mono text-xs font-bold shadow-xs">
                {step.step}
              </div>

              {/* Card Container */}
              <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs hover:border-neutral-400 transition-colors space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                  <div>
                    <span className="text-xs font-semibold tracking-wider uppercase text-amber-800">
                      Step {step.step} · {step.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-950 mt-0.5">
                      {step.title}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Estimated Duration: {step.duration}</span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-neutral-700 font-light leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-neutral-600 bg-neutral-50 p-3 rounded-lg border border-neutral-200/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-900">Official Deliverable: </span>
                    <span>{step.keyAction}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The BOQ & Warranty Guarantee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 text-white rounded-2xl p-8 sm:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Financial Security</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold">
              Guaranteed Budget & 12-Month Post-Handover Warranty
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Before signing, you receive an itemized Bill of Quantities (BOQ). We commit to the agreed sum with zero sudden cost expansions. Furthermore, every turnkey execution includes a comprehensive 12-month defect warranty with emergency maintenance visits.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center md:items-end">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-white text-neutral-950 hover:bg-neutral-100 text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer text-center"
            >
              Start Step 1: Initial Consultation
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider uppercase rounded-lg border border-neutral-700 transition-colors cursor-pointer text-center"
            >
              Schedule Studio Site Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
