import React, { useState } from 'react';
import { Project } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { FullscreenLightbox } from './FullscreenLightbox';
import { X, ArrowRight, Layers, MapPin, Maximize2, Calendar, Compass, Sparkles } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onConsultationClick: (projectContext?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onConsultationClick,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!project) return null;

  const openLightbox = (index: number) => {
    setActiveImageIdx(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-neutral-900/70 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <div
          role="dialog"
          aria-modal="true"
          className="relative w-full max-w-5xl bg-[#FCFCFB] text-neutral-900 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-neutral-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-30 bg-[#FCFCFB]/95 backdrop-blur-md px-6 py-4 border-b border-neutral-200/80 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs tracking-wider uppercase text-neutral-500 font-medium">
                <span>{project.category}</span>
                <span>·</span>
                <span>{project.subCategory}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-semibold text-neutral-950 mt-0.5">
                {project.name}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close Project Details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-10">
            {/* Hero Cover Image & Quick Specs */}
            <div className="relative rounded-xl overflow-hidden aspect-16/9 bg-neutral-100 shadow-sm border border-neutral-200/80 group">
              <img
                src={project.coverImage}
                alt={project.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <button
                onClick={() => openLightbox(0)}
                className="absolute bottom-4 right-4 z-10 px-3 py-1.5 bg-neutral-900/80 hover:bg-neutral-900 text-white text-xs font-medium rounded-lg backdrop-blur-sm flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>View Fullscreen</span>
              </button>
            </div>

            {/* Project Fact Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-neutral-100/70 rounded-xl border border-neutral-200/60">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Location</span>
                </div>
                <p className="text-sm font-semibold text-neutral-900">{project.location}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                  <Compass className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Floor Area</span>
                </div>
                <p className="text-sm font-semibold text-neutral-900 tabular-nums">{project.area}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Completion</span>
                </div>
                <p className="text-sm font-semibold text-neutral-900 tabular-nums">{project.year}</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium">
                  <Layers className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Scope of Work</span>
                </div>
                <p className="text-sm font-semibold text-neutral-900 leading-snug">{project.scope}</p>
              </div>
            </div>

            {/* Story & Concept Section */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-3">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                  01. Project Overview
                </h3>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
                  {project.overview}
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                  02. Design Concept & Philosophy
                </h3>
                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed font-light">
                  {project.concept}
                </p>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="grid sm:grid-cols-2 gap-6 p-6 rounded-xl bg-neutral-50 border border-neutral-200">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800">
                  <span className="w-2 h-2 rounded-full bg-amber-600" />
                  The Architectural Challenge
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed font-light">
                  {project.challenge}
                </p>
              </div>
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-600" />
                  Our Spatial Solution
                </div>
                <p className="text-sm text-neutral-700 leading-relaxed font-light">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Before & After Interactive Slider (if available) */}
            {project.beforeImage && project.afterImage && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                      03. Spatial Transformation
                    </h3>
                    <p className="text-lg font-serif font-medium text-neutral-900">
                      Interactive Before & After Comparison
                    </p>
                  </div>
                  <span className="text-xs text-neutral-500 hidden sm:inline-block">
                    Swipe or drag left/right
                  </span>
                </div>
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  beforeLabel="Pre-Renovation Demolition"
                  afterLabel="Completed Turnkey Interior"
                />
              </div>
            )}

            {/* Materials & Finishes Grid */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                04. Curated Materials & Finishes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.materials.map((mat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-xs hover:border-neutral-400 transition-colors"
                  >
                    <div className="text-[11px] font-medium tracking-wide uppercase text-neutral-400">
                      {mat.type}
                    </div>
                    <div className="text-sm font-semibold text-neutral-900 mt-1 font-serif">
                      {mat.name}
                    </div>
                    <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed font-light">
                      {mat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Resolution Project Gallery */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                  05. Project Gallery
                </h3>
                <span className="text-xs text-neutral-500">Click any image to expand</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {project.gallery.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="group relative rounded-xl overflow-hidden bg-neutral-100 aspect-4/3 cursor-pointer border border-neutral-200"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity p-4 flex flex-col justify-end text-white">
                      <div className="text-xs font-serif font-medium">{item.title}</div>
                      <p className="text-[11px] text-neutral-300 line-clamp-1">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results & Client Testimonial */}
            <div className="p-6 rounded-xl bg-[#F6F4EF] border border-neutral-200/80 space-y-4">
              <div>
                <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                  06. Project Impact & Results
                </div>
                <p className="text-sm sm:text-base text-neutral-800 font-light mt-1.5 leading-relaxed">
                  {project.results}
                </p>
              </div>

              {project.clientQuote && (
                <div className="pt-4 border-t border-neutral-300/60 mt-4">
                  <div className="flex items-center gap-1 text-amber-600 mb-2">
                    {'★★★★★'}
                  </div>
                  <blockquote className="text-sm sm:text-base italic text-neutral-800 font-serif leading-relaxed">
                    "{project.clientQuote.text}"
                  </blockquote>
                  <div className="text-xs font-semibold text-neutral-900 mt-2">
                    {project.clientQuote.author}
                    <span className="text-neutral-500 font-normal ml-1">· {project.clientQuote.role}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Call to Action */}
            <div className="p-6 rounded-xl bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base sm:text-lg font-serif font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  Envisioning a similar interior for your space?
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Connect with our principal architects for a tailored concept consultation.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onConsultationClick(project.name);
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-white text-neutral-950 hover:bg-neutral-100 text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox for Gallery */}
      <FullscreenLightbox
        isOpen={lightboxOpen}
        images={project.gallery}
        currentIndex={activeImageIdx}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setActiveImageIdx((prev) => (prev + 1) % project.gallery.length)}
        onPrev={() => setActiveImageIdx((prev) => (prev - 1 + project.gallery.length) % project.gallery.length)}
      />
    </>
  );
};
