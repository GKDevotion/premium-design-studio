import React, { useState } from 'react';
import { PageView, Project } from '../types';
import {
  HERO_IMAGE,
  STUDIO_INFO,
  PROJECTS,
  SERVICES,
  PROCESS_STEPS,
  DESIGN_STYLES,
  WHY_CHOOSE_US,
  TESTIMONIALS,
  BLOG_POSTS,
  BEFORE_RENOVATION_IMAGE,
  MODERN_VILLA_IMAGE,
} from '../data/studioData';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { AnimateIn } from '../components/AnimateIn';
import { LazyImage } from '../components/LazyImage';
import { RegionalHubsSection } from '../components/RegionalHubsSection';
import { AEOAnswerCard } from '../components/AEOAnswerCard';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Clock,
  Compass,
  CheckCircle2,
  MapPin,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onSelectProject: (project: Project) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProject,
  onOpenQuote,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Renovation'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-neutral-950">
        {/* Full-screen Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0">
          <LazyImage
            src={HERO_IMAGE}
            alt="Luxury interior architecture designed by Premium Design Studio in Surat and Mumbai"
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.05]"
            wrapperClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white space-y-6">
          <AnimateIn from="top" durationMs={700}>
            {/* Unboxed architectural trust eyebrow */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs tracking-[0.22em] uppercase font-medium text-neutral-300">
              <span>Residential</span>
              <span className="text-amber-400">·</span>
              <span>Commercial</span>
              <span className="text-amber-400">·</span>
              <span>Hospitality</span>
              <span className="text-amber-400">·</span>
              <span>Turnkey Interiors</span>
            </div>
          </AnimateIn>

          <AnimateIn delayMs={150} durationMs={800}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1] max-w-4xl mx-auto text-balance">
              Transforming Spaces Into Experiences
            </h1>
          </AnimateIn>

          <AnimateIn delayMs={300} durationMs={800}>
            <p className="text-base sm:text-xl text-neutral-200 font-light max-w-2xl mx-auto leading-relaxed">
              Bespoke interior design solutions crafted around your lifestyle, brand and vision. From architectural space planning to white-glove turnkey delivery across Surat, Ahmedabad, Mumbai and Bengaluru.
            </p>
          </AnimateIn>

          {/* Action Buttons */}
          <AnimateIn delayMs={450} durationMs={800}>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('portfolio')}
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-neutral-950 hover:bg-neutral-100 text-xs font-semibold tracking-wider uppercase rounded-lg transition-all duration-200 shadow-lg cursor-pointer whitespace-nowrap"
              >
                Explore Our Projects
              </button>
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-7 py-3.5 bg-neutral-900/80 hover:bg-neutral-900 text-white text-xs font-semibold tracking-wider uppercase rounded-lg border border-white/30 backdrop-blur-sm transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>
          </AnimateIn>

          {/* Trust Footnote */}
          <AnimateIn delayMs={600} durationMs={800}>
            <div className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-neutral-300 font-light border-t border-white/10 max-w-3xl mx-auto">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Single-Point Turnkey Accountability</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Strict Milestone Handover Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-400" />
                <span>Full BOQ Financial Transparency</span>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* 2. Introduction & Verified Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                01. The Studio Narrative
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-950 leading-tight">
                Designing Spaces That Feel Like You
              </h2>
              <div className="space-y-4 text-neutral-700 text-sm sm:text-base font-light leading-relaxed">
                <p>
                  Founded on the belief that meaningful architecture shapes how we live, think, and gather, <strong>{STUDIO_INFO.name}</strong> is a multi-disciplinary interior architecture practice headquartered in Gujarat with active commissions across 8 Indian metropolitan hubs.
                </p>
                <p>
                  We reject generic formulaic luxury. Whether designing a 12,000 sq.ft. corporate headquarters in Ahmedabad, a serene 4,500 sq.ft. villa in Surat, or a coastal penthouse in Mumbai, we immerse ourselves in the distinct rhythm of the occupant to create spaces that are functional, personal, and enduring.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-950 hover:text-neutral-600 transition-colors cursor-pointer group"
                >
                  <span>Read Full Studio Story & Philosophy</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: Verified Stats Bento Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="p-6 bg-white rounded-xl border border-neutral-200/90 shadow-xs space-y-2">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950 tabular-nums">
                  {STUDIO_INFO.experienceYears}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Years Experience
                </div>
                <p className="text-xs text-neutral-600 font-light">
                  Continuous practice in interior architecture and turnkey engineering.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-neutral-200/90 shadow-xs space-y-2">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950 tabular-nums">
                  {STUDIO_INFO.completedProjects}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Executed Projects
                </div>
                <p className="text-xs text-neutral-600 font-light">
                  Villas, penthouses, corporate headquarters, and luxury dining spaces.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-neutral-200/90 shadow-xs space-y-2">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950 tabular-nums">
                  {STUDIO_INFO.designAwards}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Design Awards
                </div>
                <p className="text-xs text-neutral-600 font-light">
                  National and regional recognition for spatial design and acoustics.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-neutral-200/90 shadow-xs space-y-2">
                <div className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950 tabular-nums">
                  {STUDIO_INFO.citiesServed}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Cities Served
                </div>
                <p className="text-xs text-neutral-600 font-light">
                  Active dedicated teams in Surat, Ahmedabad, Mumbai, Bengaluru & more.
                </p>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* 3. Featured Projects Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimateIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                02. Selected Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950">
                Featured Architectural Commissions
              </h2>
              <p className="text-sm text-neutral-600 max-w-xl font-light">
                Explore our recent residential residences, corporate workspaces, and luxury hospitality venues.
              </p>
            </div>

            {/* Interactive Filter Controls */}
            <div className="flex items-center gap-1 p-1 bg-neutral-200/70 rounded-lg overflow-x-auto self-start md:self-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-white text-neutral-950 shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Project Cards Grid with On-Screen Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 6).map((project, idx) => (
            <AnimateIn key={project.id} delayMs={idx * 80}>
              <div
                className="group bg-white rounded-xl overflow-hidden border border-neutral-200/90 shadow-xs hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Media Container with LazyImage */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative aspect-4/3 overflow-hidden bg-neutral-100 cursor-pointer"
                >
                  <LazyImage
                    src={project.coverImage}
                    alt={`${project.name} - ${project.category} interior design in ${project.location}`}
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

                {/* Card Meta & Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-light">
                      <span>{project.location}</span>
                      <span>·</span>
                      <span className="tabular-nums">{project.area}</span>
                      <span>·</span>
                      <span className="tabular-nums">{project.year}</span>
                    </div>
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-lg font-serif font-semibold text-neutral-950 group-hover:text-amber-700 transition-colors cursor-pointer"
                    >
                      {project.name}
                    </h3>
                    <p className="text-xs text-neutral-600 line-clamp-2 font-light leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs text-neutral-500 font-light line-clamp-1 max-w-[65%]">
                      {project.subCategory}
                    </span>
                    <button
                      onClick={() => onSelectProject(project)}
                      className="text-xs font-semibold tracking-wide text-neutral-950 group-hover:text-amber-700 flex items-center gap-1 cursor-pointer whitespace-nowrap"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        <div className="pt-4 text-center">
          <button
            onClick={() => onNavigate('portfolio')}
            className="px-6 py-3 border border-neutral-900 text-neutral-950 hover:bg-neutral-950 hover:text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
          >
            View Complete Portfolio Archive
          </button>
        </div>
      </section>

      {/* 4. Core Services (Section 4) */}
      <section className="bg-neutral-100/70 py-20 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <AnimateIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                  03. Comprehensive Capabilities
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950">
                  End-to-End Interior Architecture Services
                </h2>
                <p className="text-sm text-neutral-600 max-w-xl font-light">
                  Tailored solutions engineered to take projects smoothly from raw conceptualization to physical perfection.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="text-xs font-semibold tracking-wider uppercase text-neutral-900 hover:text-neutral-600 flex items-center gap-1 self-start md:self-auto cursor-pointer"
              >
                <span>Explore All Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </AnimateIn>

          {/* 8 Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((srv, idx) => (
              <AnimateIn key={srv.id} delayMs={idx * 60}>
                <div
                  className="bg-white p-6 rounded-xl border border-neutral-200/80 shadow-xs hover:border-neutral-400 hover:shadow-sm transition-all duration-200 flex flex-col justify-between space-y-4 group h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-neutral-400 text-xs font-mono">
                      <span className="font-semibold text-neutral-900">{srv.number}.</span>
                      <span className="uppercase text-[10px] tracking-wider text-neutral-500">
                        {srv.category}
                      </span>
                    </div>
                    <h3 className="text-base font-serif font-semibold text-neutral-950 group-hover:text-amber-800 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100">
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-xs font-medium text-neutral-900 group-hover:text-amber-800 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Read Details</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Interactive Before & After Renovation Feature */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-xs">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-5">
                <div className="text-xs font-semibold tracking-wider uppercase text-amber-700">
                  04. Spatial Metamorphosis
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-neutral-950 leading-snug">
                  The Power of Turnkey Renovation
                </h2>
                <p className="text-sm text-neutral-700 font-light leading-relaxed">
                  Watch raw, outdated floor plans transition into light-filled architectural residences. Our turnkey process handles structural alterations, MEP replacements, acoustic timber baffling, and bespoke imported finishes under a single guarantee.
                </p>
                <div className="space-y-2 pt-1 text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Demolition and structural load-redirection engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Bookmatched marble and seamless microtopping surfaces</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Integrated trimless lighting & smart home scene automation</span>
                  </div>
                </div>
                <div className="pt-3">
                  <button
                    onClick={onOpenQuote}
                    className="px-5 py-2.5 bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    Estimate Your Renovation
                  </button>
                </div>
              </div>

              {/* Slider container */}
              <div className="lg:col-span-7">
                <BeforeAfterSlider
                  beforeImage={BEFORE_RENOVATION_IMAGE}
                  afterImage={MODERN_VILLA_IMAGE}
                  beforeLabel="Before: Stripped Demolition"
                  afterLabel="After: Finished Modern Residence"
                  title="Residence Renovation — Surat Villa Project"
                />
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* 6. GEO Regional Presence & City Hubs (Surat, Ahmedabad, Mumbai, Bengaluru, etc.) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <RegionalHubsSection onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
        </AnimateIn>
      </section>

      {/* 7. Our 9-Step Process Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <AnimateIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                05. Structured Execution
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950">
                Our 9-Step Architectural Process
              </h2>
              <p className="text-sm text-neutral-600 max-w-xl font-light">
                Clear milestones, zero guesswork. Here is exactly what happens when you partner with our studio.
              </p>
            </div>
            <button
              onClick={() => onNavigate('process')}
              className="text-xs font-semibold tracking-wider uppercase text-neutral-900 hover:text-neutral-600 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
            >
              <span>View Full Timeline & Deliverables</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </AnimateIn>

        {/* Process Horizontal/Grid steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROCESS_STEPS.slice(0, 6).map((step, idx) => (
            <AnimateIn key={step.step} delayMs={idx * 60}>
              <div
                className="p-6 bg-white rounded-xl border border-neutral-200/90 shadow-xs space-y-3 relative group hover:border-neutral-400 transition-colors h-full flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono text-base font-bold text-neutral-900">
                      {step.step}
                    </span>
                    <span className="text-neutral-400 font-light">{step.duration}</span>
                  </div>
                  <h3 className="text-base font-serif font-semibold text-neutral-950">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-2 text-[11px] text-neutral-500 border-t border-neutral-100">
                  <span className="font-medium text-neutral-700">Deliverable: </span>
                  {step.keyAction}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 8. Curated Design Styles */}
      <section className="bg-[#F6F4EF] py-20 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <AnimateIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                  06. Aesthetic Dialects
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950">
                  Curated Design Styles
                </h2>
                <p className="text-sm text-neutral-600 max-w-xl font-light">
                  Discover the spatial vocabulary that resonates with your vision, from Modern Luxury to Japandi and Modern Indian.
                </p>
              </div>
              <button
                onClick={() => onNavigate('styles')}
                className="text-xs font-semibold tracking-wider uppercase text-neutral-900 hover:text-neutral-600 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
              >
                <span>Explore All Styles & Palettes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DESIGN_STYLES.slice(0, 3).map((st, idx) => (
              <AnimateIn key={st.id} delayMs={idx * 80}>
                <div
                  className="bg-white rounded-xl overflow-hidden border border-neutral-200/90 shadow-xs flex flex-col justify-between h-full"
                >
                  <div className="aspect-16/10 overflow-hidden bg-neutral-100">
                    <LazyImage
                      src={st.sampleImage}
                      alt={`${st.name} design style sample`}
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-serif font-semibold text-neutral-950">
                        {st.name}
                      </h3>
                      <p className="text-xs text-neutral-600 font-light leading-relaxed">
                        {st.description}
                      </p>
                    </div>

                    {/* Swatch palette */}
                    <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                      <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                        Color Harmony
                      </span>
                      <div className="flex items-center gap-2">
                        {st.colorPalette.map((cp, cidx) => (
                          <div
                            key={cidx}
                            className="w-6 h-6 rounded-full border border-neutral-300 shadow-2xs"
                            style={{ backgroundColor: cp.hex }}
                            title={`${cp.name} (${cp.hex})`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 9. AEO (Answer Engine Optimization) Direct Answer Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimateIn>
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-amber-800">
              07. AEO Knowledge Center
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950">
              Direct Answers to Essential Project Questions
            </h2>
            <p className="text-sm text-neutral-600 max-w-xl font-light">
              Clear, transparent facts regarding pricing metrics, timeline milestones, and single-contract turnkey accountability.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimateIn delayMs={50}>
            <AEOAnswerCard
              question="What is the average cost of luxury turnkey interior design in India?"
              directAnswer="Luxury turnkey interior architecture in India typically ranges from ₹1,800 to ₹4,500+ per square foot. This includes complete architectural planning, 3D simulations, civil demolition, plumbing/electrical re-engineering, Italian marble or hardwood flooring, bespoke German hardware millwork, high-CRI lighting, and white-glove site handover."
              keyFacts={[
                { label: 'Refined Contemporary', value: '₹1,800 – ₹2,800/sq.ft' },
                { label: 'Ultra Luxury Signature', value: '₹2,800 – ₹4,200/sq.ft' },
                { label: 'Bespoke Haute Villa', value: '₹4,200+/sq.ft' },
                { label: 'Cost Guarantee', value: 'Fixed Price BOQ' },
              ]}
            />
          </AnimateIn>

          <AnimateIn delayMs={120}>
            <AEOAnswerCard
              question="How long does an interior architecture project take from design to move-in?"
              directAnswer="Standard 3BHK to 4BHK residences (2,000–3,500 sq.ft.) take between 14 to 18 weeks. Sprawling luxury villas and private estates (4,500–10,000+ sq.ft.) range from 20 to 28 weeks. Commercial offices of 5,000–15,000 sq.ft. are completed in 8 to 14 weeks using accelerated multi-shift execution schedules."
              keyFacts={[
                { label: 'Concept to 3D', value: '3 – 5 Weeks' },
                { label: 'Material Sourcing', value: '1 – 2 Weeks' },
                { label: 'On-Site Execution', value: '10 – 16 Weeks' },
                { label: 'On-Time Delivery', value: '94% Track Record' },
              ]}
            />
          </AnimateIn>

          <AnimateIn delayMs={180}>
            <AEOAnswerCard
              question="What is the difference between Design-Only and Turnkey Interior Execution?"
              directAnswer="In Design-Only agreements, the studio provides drawings and 3D renders, leaving contractor hiring and site management to the client. In Turnkey Interior Solutions, Premium Design Studio assumes 100% single-point legal and financial accountability for materials, civil works, carpentry, MEP, quality checks, and a 12-month post-handover warranty."
              keyFacts={[
                { label: 'Accountability', value: 'Single Contractor' },
                { label: 'Quality Audit', value: '120-Point Check' },
                { label: 'Contractor Disputes', value: 'Zero for Client' },
                { label: 'Post-Handover', value: '12-Month Warranty' },
              ]}
            />
          </AnimateIn>

          <AnimateIn delayMs={240}>
            <AEOAnswerCard
              question="Can Premium Design Studio manage projects outside Surat and Gujarat?"
              directAnswer="Yes. Premium Design Studio actively designs and executes turnkey commissions across 8 Indian hubs: Surat, Ahmedabad, Mumbai, Bengaluru, Pune, Vadodara, Jaipur, and Delhi NCR. Each remote site is assigned a dedicated full-time site engineer and visited weekly by principal architects."
              keyFacts={[
                { label: 'Active Metro Hubs', value: '8 Cities' },
                { label: 'Site Supervision', value: 'Full-Time On Site' },
                { label: 'Progress Reports', value: 'Weekly Digital Logs' },
                { label: 'Permits & Approvals', value: 'Locally Coordinated' },
              ]}
            />
          </AnimateIn>
        </div>
      </section>

      {/* 10. Why Discerning Clients Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
              08. Studio Distinctions
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950">
              Why Discerning Clients Choose Us
            </h2>
            <p className="text-sm text-neutral-600 font-light">
              We hold ourselves to rigorous architectural standards, transparent pricing, and meticulous site supervision.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <AnimateIn key={idx} delayMs={idx * 60}>
              <div
                className="p-6 bg-white rounded-xl border border-neutral-200/90 shadow-xs space-y-3 hover:border-neutral-400 transition-colors h-full"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  {item.metric}
                </div>
                <h3 className="text-base font-serif font-semibold text-neutral-950">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 11. Verified Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimateIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                09. Client Voices
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950">
                Client Testimonials & Feedback
              </h2>
              <p className="text-sm text-neutral-600 max-w-xl font-light">
                Verified reviews from homeowners, business leaders, and restaurateurs who entrusted their spaces to our care.
              </p>
            </div>
            <button
              onClick={() => onNavigate('testimonials')}
              className="text-xs font-semibold tracking-wider uppercase text-neutral-900 hover:text-neutral-600 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
            >
              <span>View All Client Stories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((test, idx) => (
            <AnimateIn key={test.id} delayMs={idx * 80}>
              <div
                className="p-6 bg-white rounded-xl border border-neutral-200/90 shadow-xs flex flex-col justify-between space-y-4 h-full"
              >
                <div className="space-y-3">
                  <div className="text-amber-500 text-sm tracking-widest">
                    {'★'.repeat(test.rating)}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 font-light italic leading-relaxed font-serif">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-neutral-900">{test.clientName}</div>
                    <div className="text-[11px] text-neutral-500 font-light">{test.projectType}</div>
                  </div>
                  <div className="text-right text-[11px] text-neutral-400">
                    <div>{test.location}</div>
                    <div className="tabular-nums">{test.projectArea}</div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 12. Design Inspiration & Blog Preview */}
      <section className="bg-neutral-100/60 py-20 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <AnimateIn>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-2">
                <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                  10. Design Insights
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950">
                  Design Ideas, Budget Guides & Trends
                </h2>
                <p className="text-sm text-neutral-600 max-w-xl font-light">
                  Architectural advice, material breakdown guides, and budget planning resources.
                </p>
              </div>
              <button
                onClick={() => onNavigate('blog')}
                className="text-xs font-semibold tracking-wider uppercase text-neutral-900 hover:text-neutral-600 flex items-center gap-1 self-start sm:self-auto cursor-pointer"
              >
                <span>Read All Articles</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post, idx) => (
              <AnimateIn key={post.id} delayMs={idx * 80}>
                <div
                  onClick={() => onNavigate('blog')}
                  className="group bg-white rounded-xl overflow-hidden border border-neutral-200/90 shadow-xs cursor-pointer flex flex-col justify-between h-full"
                >
                  <div className="aspect-16/10 overflow-hidden bg-neutral-100">
                    <LazyImage
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-neutral-400">
                        <span>{post.category}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-base font-serif font-semibold text-neutral-950 group-hover:text-amber-800 transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-neutral-600 font-light line-clamp-2">
                        {post.summary}
                      </p>
                    </div>
                    <div className="pt-2 text-xs font-semibold text-neutral-950 group-hover:text-amber-800 flex items-center gap-1">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Final Call To Action (Let's Design Your Space) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <AnimateIn>
          <div className="bg-neutral-950 text-white rounded-2xl p-8 sm:p-14 text-center space-y-6 relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <div className="flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Begin Your Spatial Journey</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight">
                Let's Design Your Space
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Whether you are planning a luxury villa in Surat, a seafront penthouse in Mumbai, a corporate headquarters in Ahmedabad, or a boutique dining space in Bengaluru, our architectural team is ready to realize your vision.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto px-8 py-3.5 bg-white text-neutral-950 hover:bg-neutral-100 text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
                >
                  Get an Instant Project Quote
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-8 py-3.5 bg-neutral-900 hover:bg-neutral-850 text-white text-xs font-semibold tracking-wider uppercase rounded-lg border border-neutral-700 transition-colors cursor-pointer"
                >
                  Schedule Site Visit
                </button>
              </div>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
};
