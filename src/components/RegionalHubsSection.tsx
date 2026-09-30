import React, { useState } from 'react';
import { MapPin, Phone, Building, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageView } from '../types';

interface RegionalHubsSectionProps {
  onOpenQuote: () => void;
  onNavigate: (page: PageView) => void;
}

interface CityHub {
  id: string;
  name: string;
  state: string;
  status: string;
  address: string;
  specialization: string;
  projectsExecuted: string;
  localTeam: string;
  avgSqFtHandled: string;
}

export const REGIONAL_HUBS: CityHub[] = [
  {
    id: 'surat',
    name: 'Surat',
    state: 'Gujarat',
    status: 'Flagship Atelier & HQ',
    address: 'Atelier 402, Signature One, VIP Road, Vesu, Surat 395007',
    specialization: 'Luxury Villas, Sprawling Bungalows, Diamond Merchant Estates & Turnkey Fitouts',
    projectsExecuted: '110+ Completed Residences & Offices',
    localTeam: 'Principal Architects, 14 Site Engineers, Master Woodwork Yard',
    avgSqFtHandled: '3,500 – 12,000 sq.ft.',
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    state: 'Gujarat',
    status: 'Corporate & Regional Studio',
    address: 'Nexus One, Near Iskcon Cross Road, SG Highway, Ahmedabad 380054',
    specialization: 'Corporate Executive Headquarters, Logistics Offices & Modern Minimalist Villas',
    projectsExecuted: '55+ Completed Projects',
    localTeam: 'Commercial Project Leads, MEP Consultants, Acoustic Engineers',
    avgSqFtHandled: '5,000 – 25,000 sq.ft.',
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    state: 'Maharashtra',
    status: 'Metropolitan Commission Studio',
    address: 'Horizon Bay, Dr. Annie Besant Road, Worli, Mumbai 400018',
    specialization: 'Seafront Penthouses, Gut Renovations, Luxury High-Rise Living & Boutique Dining',
    projectsExecuted: '38+ Completed Residences & Lounges',
    localTeam: 'Senior Renovation Architects, Structural Surveyors, Luxury Sourcing Leads',
    avgSqFtHandled: '2,200 – 6,500 sq.ft.',
  },
  {
    id: 'bengaluru',
    name: 'Bengaluru',
    state: 'Karnataka',
    status: 'Hospitality & Tech Workspaces',
    address: 'The Pavilion, 100 Feet Road, Indiranagar, Bengaluru 560038',
    specialization: 'Fine Dining Venues, Cocktail Lounges, Agile Tech Campuses & Biophilic Homes',
    projectsExecuted: '24+ Executed Hospitality & Corporate Spaces',
    localTeam: 'Hospitality Concept Directors, Lighting Designers, Acoustic Specialists',
    avgSqFtHandled: '4,000 – 18,000 sq.ft.',
  },
  {
    id: 'pune',
    name: 'Pune',
    state: 'Maharashtra',
    status: 'Boutique & Retail Projects',
    address: 'Atelier Central, North Main Road, Koregaon Park, Pune 411001',
    specialization: 'High-Concept Flagship Retail Showrooms, Penthouse Sanctuaries & Wellness Clinics',
    projectsExecuted: '18+ Commercial & Residential Projects',
    localTeam: 'Retail Fixture Engineers, Lighting Consultants, Project Supervisors',
    avgSqFtHandled: '2,500 – 8,000 sq.ft.',
  },
  {
    id: 'vadodara',
    name: 'Vadodara',
    state: 'Gujarat',
    status: 'Heritage & Generational Villas',
    address: 'Heritage Square, Alkapuri, Vadodara 390007',
    specialization: 'Generational Bungalows, Modern Indian Architecture & Teakwood Joinery',
    projectsExecuted: '16+ Executed Residences',
    localTeam: 'Heritage Architectural Specialists, Artisanal Wood Masons',
    avgSqFtHandled: '4,000 – 9,500 sq.ft.',
  },
];

export const RegionalHubsSection: React.FC<RegionalHubsSectionProps> = ({
  onOpenQuote,
  onNavigate,
}) => {
  const [selectedHub, setSelectedHub] = useState<CityHub>(REGIONAL_HUBS[0]);

  return (
    <div className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-10 shadow-xs space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-neutral-100 pb-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold tracking-wider uppercase text-amber-800">
            GEO Presence & Active Locations
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-neutral-950">
            Regional Project Studios & Operational Hubs
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 font-light max-w-xl">
            We provide full-time on-site project directors and verified regional procurement networks across 8 key metropolitan regions in India.
          </p>
        </div>

        {/* Selected Hub Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 bg-neutral-100 px-3 py-1.5 rounded-lg border border-neutral-200/80">
          <MapPin className="w-4 h-4 text-amber-600" />
          <span>Active Hub: {selectedHub.name}, {selectedHub.state}</span>
        </div>
      </div>

      {/* City Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {REGIONAL_HUBS.map((hub) => (
          <button
            key={hub.id}
            onClick={() => setSelectedHub(hub)}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              selectedHub.id === hub.id
                ? 'bg-neutral-950 text-white shadow-xs'
                : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
            }`}
          >
            {hub.name}
          </button>
        ))}
      </div>

      {/* Selected City Details Card */}
      <div className="bg-[#FAF9F6] rounded-xl p-6 border border-neutral-200/80 grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-4">
          <div className="space-y-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
              {selectedHub.status}
            </div>
            <h4 className="text-xl font-serif font-bold text-neutral-950">
              Interior Architecture in {selectedHub.name}, {selectedHub.state}
            </h4>
            <p className="text-xs text-neutral-600 font-light flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
              <span>{selectedHub.address}</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-2 text-xs">
            <div className="space-y-1 bg-white p-3.5 rounded-lg border border-neutral-200/60 shadow-2xs">
              <span className="text-neutral-500 block font-medium">Regional Specialization</span>
              <span className="font-semibold text-neutral-900">{selectedHub.specialization}</span>
            </div>
            <div className="space-y-1 bg-white p-3.5 rounded-lg border border-neutral-200/60 shadow-2xs">
              <span className="text-neutral-500 block font-medium">Verified Track Record</span>
              <span className="font-semibold text-neutral-900 tabular-nums">{selectedHub.projectsExecuted}</span>
            </div>
            <div className="space-y-1 bg-white p-3.5 rounded-lg border border-neutral-200/60 shadow-2xs">
              <span className="text-neutral-500 block font-medium">On-Site Infrastructure</span>
              <span className="font-semibold text-neutral-900">{selectedHub.localTeam}</span>
            </div>
            <div className="space-y-1 bg-white p-3.5 rounded-lg border border-neutral-200/60 shadow-2xs">
              <span className="text-neutral-500 block font-medium">Typical Scale Handled</span>
              <span className="font-semibold text-neutral-900 tabular-nums">{selectedHub.avgSqFtHandled}</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col justify-center space-y-3 p-4 bg-white rounded-xl border border-neutral-200/80 text-center">
          <div className="text-xs text-neutral-600 font-light">
            Planning a project in <strong className="text-neutral-900">{selectedHub.name}</strong>?
          </div>
          <p className="text-[11px] text-neutral-500">
            Our local project directors will schedule a physical site visit within 48 hours.
          </p>
          <button
            onClick={onOpenQuote}
            className="w-full py-2.5 bg-neutral-950 hover:bg-neutral-850 text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
          >
            Inquire For {selectedHub.name}
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="w-full py-2 text-neutral-700 hover:text-neutral-950 text-xs font-medium cursor-pointer"
          >
            Contact {selectedHub.name} Office →
          </button>
        </div>
      </div>
    </div>
  );
};
