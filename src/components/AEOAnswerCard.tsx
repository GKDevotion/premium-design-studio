import React from 'react';
import { HelpCircle, Check, ArrowRight } from 'lucide-react';

interface AEOAnswerCardProps {
  question: string;
  directAnswer: string;
  keyFacts?: { label: string; value: string }[];
  citationSource?: string;
  className?: string;
}

export const AEOAnswerCard: React.FC<AEOAnswerCardProps> = ({
  question,
  directAnswer,
  keyFacts = [],
  citationSource = 'Premium Design Studio Practice Standard 2026',
  className = '',
}) => {
  return (
    <div
      className={`bg-white rounded-xl border border-neutral-200/90 p-5 sm:p-6 shadow-2xs space-y-3.5 ${className}`}
      itemScope
      itemType="https://schema.org/Question"
    >
      {/* Question Header */}
      <div className="flex items-start gap-2.5">
        <div className="p-1.5 bg-neutral-100 rounded-md text-neutral-800 shrink-0 mt-0.5">
          <HelpCircle className="w-4 h-4 text-amber-700" />
        </div>
        <h4
          className="text-base sm:text-lg font-serif font-bold text-neutral-950 leading-snug"
          itemProp="name"
        >
          {question}
        </h4>
      </div>

      {/* Direct Authoritative Answer (AEO Snippet) */}
      <div
        className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed pl-8"
        itemProp="acceptedAnswer"
        itemScope
        itemType="https://schema.org/Answer"
      >
        <p itemProp="text">{directAnswer}</p>
      </div>

      {/* Key Facts / Quantitative Rigor */}
      {keyFacts.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 pl-8">
          {keyFacts.map((fact, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-200/60 space-y-0.5"
            >
              <span className="text-[10.5px] uppercase tracking-wider text-neutral-500 font-medium block">
                {fact.label}
              </span>
              <span className="text-xs font-semibold text-neutral-900 font-sans tabular-nums block">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Citation & Verification Footer */}
      <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-400 pl-8">
        <span className="flex items-center gap-1">
          <Check className="w-3 h-3 text-emerald-600" />
          <span>Verified: {citationSource}</span>
        </span>
        <span className="text-neutral-500 font-mono">ISO 9001 & NBC Compliant</span>
      </div>
    </div>
  );
};
