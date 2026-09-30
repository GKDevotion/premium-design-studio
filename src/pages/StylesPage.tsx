import React, { useState } from 'react';
import { PageView } from '../types';
import { DESIGN_STYLES, MODERN_VILLA_IMAGE, LUXURY_KITCHEN_IMAGE, HERO_IMAGE, HOSPITALITY_LOUNGE_IMAGE } from '../data/studioData';
import { ArrowRight, Palette, Layers, Sparkles } from 'lucide-react';

interface StylesPageProps {
  onNavigate: (page: PageView) => void;
  onOpenQuote: () => void;
}

export const StylesPage: React.FC<StylesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [selectedStyleId, setSelectedStyleId] = useState<string>(DESIGN_STYLES[0].id);

  const selectedStyle = DESIGN_STYLES.find((s) => s.id === selectedStyleId) || DESIGN_STYLES[0];

  return (
    <div className="space-y-20 py-12">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
            Aesthetic Lexicon & Inspiration
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-neutral-950 leading-tight">
            Curated Interior Design Styles
          </h1>
          <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed">
            Every architectural style carries distinct psychological rhythms, tactile textures, and daylight responses. Explore the design dialects our studio masterfully tailors.
          </p>
        </div>
      </section>

      {/* 2. Interactive Style Selector & Deep Dive */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Style Buttons Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-neutral-200">
          {DESIGN_STYLES.map((st) => (
            <button
              key={st.id}
              onClick={() => setSelectedStyleId(st.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedStyleId === st.id
                  ? 'bg-neutral-950 text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {st.name}
            </button>
          ))}
        </div>

        {/* Selected Style Spotlight Box */}
        <div className="mt-8 bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs grid lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-amber-800">
                Design Philosophy & Palette
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-neutral-950">
                {selectedStyle.name}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 font-light leading-relaxed pt-1">
                {selectedStyle.description}
              </p>
            </div>

            {/* Key Characteristics */}
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Defining Characteristics
              </div>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                {selectedStyle.characteristics.map((char, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Swatches */}
            <div className="space-y-2 pt-2 border-t border-neutral-100">
              <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Curated Color Swatches
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {selectedStyle.colorPalette.map((col, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-neutral-50 px-2.5 py-1.5 rounded-lg border border-neutral-200">
                    <div
                      className="w-5 h-5 rounded-full border border-neutral-300 shadow-2xs"
                      style={{ backgroundColor: col.hex }}
                    />
                    <span className="text-xs text-neutral-700 font-medium">{col.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Materials & Best for */}
            <div className="space-y-2 pt-2 border-t border-neutral-100 text-xs">
              <div>
                <span className="font-semibold text-neutral-900">Recommended Materials: </span>
                <span className="text-neutral-600">{selectedStyle.materials.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold text-neutral-900">Ideal For: </span>
                <span className="text-neutral-600">{selectedStyle.bestFor}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Inquire With This Style
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-4/3 rounded-xl overflow-hidden bg-neutral-100 shadow-md border border-neutral-200">
              <img
                src={selectedStyle.sampleImage}
                alt={selectedStyle.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. All Styles Grid Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h3 className="text-2xl font-serif font-bold text-neutral-950">
          All Studio Aesthetic Typologies
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESIGN_STYLES.map((st) => (
            <div
              key={st.id}
              onClick={() => setSelectedStyleId(st.id)}
              className="p-6 bg-white rounded-xl border border-neutral-200/90 shadow-xs hover:border-neutral-400 transition-all cursor-pointer space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h4 className="text-lg font-serif font-bold text-neutral-950">
                  {st.name}
                </h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed line-clamp-3">
                  {st.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <div className="flex items-center gap-1.5">
                  {st.colorPalette.map((cp, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 rounded-full border border-neutral-300"
                      style={{ backgroundColor: cp.hex }}
                    />
                  ))}
                </div>
                <div className="text-[11px] text-neutral-500 font-light line-clamp-1">
                  {st.materials.join(' · ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
