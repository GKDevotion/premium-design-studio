import React, { useState } from 'react';
import { PageView } from '../types';
import { FAQS } from '../data/studioData';
import { AnimateIn } from '../components/AnimateIn';
import { ChevronDown, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Cost & Budget', 'Execution', 'Design Process', 'General'];

  const filteredFaqs =
    selectedCat === 'All'
      ? FAQS
      : FAQS.filter((f) => f.category === selectedCat);

  return (
    <div className="space-y-16 py-12">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
              Clarity & AEO Guidance Center
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-neutral-950 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed">
              Transparent, factual answers regarding pricing structures, turnkey timelines, 3D visualization, material sourcing, and contractor oversight in Surat, Ahmedabad, and across India.
            </p>
          </div>
        </AnimateIn>

        {/* Category Filter */}
        <AnimateIn delayMs={100}>
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCat === cat
                    ? 'bg-neutral-950 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimateIn>
      </section>

      {/* 2. Accordion with Schema.org AEO Microdata & On-Screen Animation */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <AnimateIn key={idx} delayMs={idx * 40}>
              <div
                className="bg-white rounded-xl border border-neutral-200 shadow-xs overflow-hidden transition-all duration-200"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/50"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-800">
                      {faq.category}
                    </span>
                    <h3
                      className="text-base sm:text-lg font-serif font-semibold text-neutral-950"
                      itemProp="name"
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`p-1 rounded-full text-neutral-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-neutral-900 bg-neutral-100' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className="px-6 pb-6 pt-1 text-sm text-neutral-700 font-light leading-relaxed border-t border-neutral-100 animate-fadeIn"
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text">{faq.answer}</p>
                  </div>
                )}
              </div>
            </AnimateIn>
          );
        })}
      </section>

      {/* 3. Ask Custom Question Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="p-8 bg-neutral-100 rounded-2xl border border-neutral-200 text-center space-y-3">
            <h4 className="text-lg font-serif font-bold text-neutral-950">
              Have a project-specific architectural query?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-md mx-auto">
              Our principal architects in Surat and Ahmedabad are available for a private consultation to answer any structural or budgetary questions.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="px-6 py-2.5 bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Ask Our Design Team
              </button>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
};
