import React from 'react';
import { PageView, Project } from '../types';
import { PROJECTS, MODERN_VILLA_IMAGE, LUXURY_KITCHEN_IMAGE, HERO_IMAGE } from '../data/studioData';
import { AnimateIn } from '../components/AnimateIn';
import { LazyImage } from '../components/LazyImage';
import { AEOAnswerCard } from '../components/AEOAnswerCard';
import { ArrowRight, CheckCircle2, Sparkles, Home, Heart, Compass, MapPin } from 'lucide-react';

interface ResidentialPageProps {
  onNavigate: (page: PageView) => void;
  onSelectProject: (project: Project) => void;
  onOpenQuote: () => void;
}

export const ResidentialPage: React.FC<ResidentialPageProps> = ({
  onNavigate,
  onSelectProject,
  onOpenQuote,
}) => {
  const residentialProjects = PROJECTS.filter(
    (p) => p.category === 'Residential' || p.category === 'Renovation'
  );

  const homeTypologies = [
    {
      title: 'Luxury Home Interiors',
      description: 'Expansive private residences featuring grand architectural volumes, double-height foyers, bookmatched natural stone, and private family lounges.',
      image: MODERN_VILLA_IMAGE,
    },
    {
      title: 'Villa & Bungalow Architecture',
      description: 'Sprawling multi-level homes integrated with landscaped courtyards, swimming pools, outdoor dining verandas, and bespoke structural woodwork.',
      image: HERO_IMAGE,
    },
    {
      title: 'Apartment & Penthouse Sanctuaries',
      description: 'Sophisticated urban high-rise living with custom space-saving joinery, motorized sheer daylight filtering, and panoramic terrace lounges.',
      image: LUXURY_KITCHEN_IMAGE,
    },
  ];

  const roomCategories = [
    { name: 'Grand Living Salons', desc: 'Sculptural low-profile Italian seating, travertine accent walls & integrated smart lighting' },
    { name: 'Master Bedroom Retreats', desc: 'Acoustic padded bed walls, walk-in dressing suites with sensory illumination & calm neutrals' },
    { name: 'Gourmet Chef Kitchens', desc: 'Monolithic sintered stone islands, concealed German pantry pullouts & integrated appliances' },
    { name: 'Spa-Inspired Bathrooms', desc: 'Bookmatched marble slabs, concealed rainwater showers, freestanding tubs & backlit mirrors' },
    { name: 'Youth & Children Rooms', desc: 'Adaptable ergonomic study areas, safe rounded woodwork & inspiring creative storage' },
    { name: 'Private Pooja & Meditation', desc: 'Carved sacred stone motifs, indirect ambient warmth & serene brass filigree screens' },
  ];

  return (
    <div className="space-y-24 py-12">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800">
              <Home className="w-3.5 h-3.5" />
              <span>Dedicated Residential Practice · Surat, Mumbai & Ahmedabad</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-neutral-950 leading-tight">
              Designing Private Homes That Inspire & Comfort
            </h1>
            <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed">
              From modern luxury villas in Gujarat to serene minimalist penthouses in Mumbai, we craft heirloom residential spaces celebrating natural light, artisanal joinery, and daily intimacy.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
              >
                Start Designing Your Dream Home
              </button>
              <button
                onClick={() => onNavigate('styles')}
                className="px-6 py-3.5 border border-neutral-300 hover:border-neutral-900 text-neutral-900 text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
              >
                Explore Residential Styles
              </button>
            </div>
          </div>
        </AnimateIn>
      </section>

      {/* 2. Typologies Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <AnimateIn>
          <div className="space-y-2">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
              Residential Typologies
            </div>
            <h2 className="text-3xl font-serif font-bold text-neutral-950">
              Tailored To Your Property Scale
            </h2>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeTypologies.map((typ, idx) => (
            <AnimateIn key={idx} delayMs={idx * 80}>
              <div
                className="bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-xs flex flex-col justify-between group hover:border-neutral-400 transition-colors h-full"
              >
                <div className="aspect-16/10 overflow-hidden bg-neutral-100">
                  <LazyImage
                    src={typ.image}
                    alt={`${typ.title} interior design`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-3 flex-1">
                  <h3 className="text-xl font-serif font-bold text-neutral-950 group-hover:text-amber-800 transition-colors">
                    {typ.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                    {typ.description}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 3. Rooms & Spatial Programs */}
      <section className="bg-neutral-100/70 py-20 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                Room-by-Room Curation
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-950">
                Meticulously Detailed Living Environments
              </h2>
              <p className="text-sm text-neutral-600 font-light">
                Every room has unique lighting requirements, material durability concerns, and acoustic considerations.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roomCategories.map((rm, idx) => (
              <AnimateIn key={idx} delayMs={idx * 60}>
                <div
                  className="p-6 bg-white rounded-xl border border-neutral-200 shadow-xs space-y-2 h-full"
                >
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    0{idx + 1}. Space
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-neutral-950">
                    {rm.name}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed">
                    {rm.desc}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Selected Residential Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <AnimateIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
                Residential Case Studies
              </div>
              <h2 className="text-3xl font-serif font-bold text-neutral-950">
                Completed Home Commissions
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {residentialProjects.map((p, idx) => (
            <AnimateIn key={p.id} delayMs={idx * 80}>
              <div
                onClick={() => onSelectProject(p)}
                className="group bg-white rounded-xl overflow-hidden border border-neutral-200 shadow-xs cursor-pointer hover:border-neutral-400 transition-colors flex flex-col justify-between h-full"
              >
                <div className="aspect-4/3 overflow-hidden bg-neutral-100">
                  <LazyImage
                    src={p.coverImage}
                    alt={`${p.name} - Residential interior design in ${p.location}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <div className="text-xs text-neutral-500 font-light">
                    {p.location} · {p.area} · {p.year}
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-neutral-950 group-hover:text-amber-800 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 font-light">
                    {p.overview}
                  </p>
                  <div className="pt-2 text-xs font-semibold text-neutral-950 group-hover:text-amber-800 flex items-center gap-1">
                    <span>View Project Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* 5. AEO Residential Answer Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <AEOAnswerCard
            question="What is the average timeline to complete an interior design for a 4BHK apartment or villa?"
            directAnswer="For a 2,500 to 5,000 sq.ft. residential apartment or villa, the design phase (concept, space planning, 3D visualization, and material selection) takes 4 to 6 weeks. The turnkey execution phase (demolition, civil alterations, electrical/plumbing conduits, custom carpentry, marble installation, and painting) takes 12 to 18 weeks, followed by a 1-week 120-point quality audit and white-glove handover."
            keyFacts={[
              { label: 'Design Phase', value: '4 – 6 Weeks' },
              { label: 'Turnkey Execution', value: '12 – 18 Weeks' },
              { label: 'Total Duration', value: '16 – 24 Weeks' },
              { label: 'Warranty', value: '12-Month Guarantee' },
            ]}
          />
        </AnimateIn>
      </section>

      {/* 6. Homeowner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="p-8 sm:p-14 bg-neutral-950 text-white rounded-2xl text-center space-y-6">
            <div className="max-w-xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">
                Start Designing Your Dream Home
              </h2>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                Tell us about your upcoming apartment, duplex, or villa project in Surat, Mumbai, Ahmedabad or elsewhere. We will schedule a private consultation and walk through concept possibilities.
              </p>
            </div>
            <div className="pt-2 flex justify-center">
              <button
                onClick={onOpenQuote}
                className="px-8 py-3.5 bg-white text-neutral-950 hover:bg-neutral-100 text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
              >
                Book Homeowner Consultation
              </button>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
};
