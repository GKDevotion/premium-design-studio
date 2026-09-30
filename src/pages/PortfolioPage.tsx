import React, { useState } from 'react';
import { PageView, Project } from '../types';
import { PROJECTS } from '../data/studioData';
import { AnimateIn } from '../components/AnimateIn';
import { LazyImage } from '../components/LazyImage';
import { ArrowRight, SlidersHorizontal, Sparkles } from 'lucide-react';

interface PortfolioPageProps {
  onNavigate: (page: PageView) => void;
  onSelectProject: (project: Project) => void;
  onOpenQuote: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onNavigate,
  onSelectProject,
  onOpenQuote,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = [
    'All',
    'Residential',
    'Commercial',
    'Hospitality',
    'Retail',
    'Renovation',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-16 py-12">
      {/* Portfolio Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
              Selected Works Archive · Surat, Ahmedabad, Mumbai & Bengaluru
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-neutral-950 leading-tight">
              Architectural Portfolio & Case Studies
            </h1>
            <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed">
              A curated index of residences, corporate workspaces, and hospitality environments realized across India.
            </p>
          </div>
        </AnimateIn>

        {/* Filter Bar */}
        <AnimateIn delayMs={100}>
          <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-neutral-200">
            <div className="flex items-center gap-1.5 p-1 bg-neutral-200/70 rounded-xl overflow-x-auto">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    activeFilter === tab
                      ? 'bg-white text-neutral-950 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="text-xs text-neutral-500 font-light">
              Showing <span className="font-semibold text-neutral-900">{filteredProjects.length}</span> curated commissions
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* Projects Grid with Staggered Viewport Animation & LazyImage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <AnimateIn key={project.id} delayMs={idx * 70}>
              <div
                onClick={() => onSelectProject(project)}
                className="group bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xs cursor-pointer hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Media Container */}
                <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
                  <LazyImage
                    src={project.coverImage}
                    alt={`${project.name} - ${project.category} in ${project.location}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase bg-neutral-900/80 text-white backdrop-blur-sm rounded">
                    {project.category}
                  </div>
                  {project.beforeImage && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase bg-amber-500/90 text-white backdrop-blur-sm rounded">
                      Before & After
                    </div>
                  )}
                </div>

                {/* Project Card Specs */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-serif font-bold text-neutral-950 group-hover:text-amber-800 transition-colors">
                      {project.name}
                    </h3>
                    <div className="text-xs text-neutral-500 font-light">
                      {project.location}
                    </div>
                    <div className="text-xs font-medium text-neutral-700 pt-1">
                      {project.category} <span className="text-neutral-300 mx-1">|</span> {project.area}
                    </div>
                    <p className="text-xs text-neutral-600 font-light line-clamp-2 pt-1 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-neutral-950 group-hover:text-amber-800">
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="p-8 sm:p-12 bg-neutral-950 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold">
                Looking for a custom concept for your site?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl">
                Our architects will conduct an initial feasibility analysis and discuss material curation options for your space in Surat, Mumbai, Ahmedabad, or Bengaluru.
              </p>
            </div>
            <button
              onClick={onOpenQuote}
              className="px-6 py-3.5 bg-white text-neutral-950 hover:bg-neutral-100 text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Start Project Consultation
            </button>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
};
