import React from 'react';
import { PageView } from '../types';
import { TESTIMONIALS } from '../data/studioData';
import { Star, ShieldCheck, ArrowRight, Quote } from 'lucide-react';

interface TestimonialsPageProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  return (
    <div className="space-y-20 py-12">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
            Client Trust & Experience
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-neutral-950 leading-tight">
            Client Testimonials & Feedback
          </h1>
          <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed">
            Authentic reflections from families, enterprise executives, and culinary restaurateurs who partnered with Premium Design Studio.
          </p>
        </div>
      </section>

      {/* 2. Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-neutral-200/90 p-8 shadow-xs hover:border-neutral-400 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">
                    Completed {item.year}
                  </span>
                </div>

                <blockquote className="text-base sm:text-lg text-neutral-800 font-serif italic font-normal leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-neutral-950">
                    {item.clientName}
                  </h4>
                  <p className="text-xs text-amber-800 font-medium">
                    {item.projectType}
                  </p>
                </div>
                <div className="text-right text-xs text-neutral-500">
                  <div>{item.location}</div>
                  <div className="tabular-nums font-mono">{item.projectArea}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-neutral-950 text-white rounded-2xl text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold">
            Experience the difference of disciplined turnkey design
          </h2>
          <p className="text-sm text-neutral-300 font-light max-w-md mx-auto">
            Book a discovery session with our principal design directors to discuss your project.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-white text-neutral-950 hover:bg-neutral-100 text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
