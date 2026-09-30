import React, { useState } from 'react';
import { PageView } from '../types';
import { CheckCircle2, ArrowRight, ArrowLeft, Calculator, ShieldCheck, Sparkles } from 'lucide-react';

interface QuotePageProps {
  onNavigate: (page: PageView) => void;
}

export const QuotePage: React.FC<QuotePageProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [propertyType, setPropertyType] = useState<string>('Villa');
  const [projectSize, setProjectSize] = useState<string>('2,000–5,000 sq.ft.');
  const [serviceRequired, setServiceRequired] = useState<string>('Turnkey');
  const [budgetTier, setBudgetTier] = useState<string>('Ultra Luxury Signature (₹2,800 - ₹4,200/sq.ft)');
  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Surat',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const propertyOptions = [
    { id: 'Home', label: 'Bespoke Home', sub: 'Independent bungalow or duplex' },
    { id: 'Apartment', label: 'Apartment / Flat', sub: '2BHK, 3BHK, 4BHK or Penthouse' },
    { id: 'Villa', label: 'Sprawling Villa', sub: 'Gated community or private estate' },
    { id: 'Office', label: 'Corporate Office', sub: 'Workplace, boardroom or executive suite' },
    { id: 'Retail', label: 'Retail & Showroom', sub: 'Boutique, luxury showroom, flagship' },
    { id: 'Restaurant', label: 'Restaurant & Café', sub: 'Dining, bistro or lounge bar' },
    { id: 'Hotel', label: 'Hospitality & Hotel', sub: 'Resort, boutique hotel or suites' },
    { id: 'Other', label: 'Other Spaces', sub: 'Clinic, studio or creative hub' },
  ];

  const sizeOptions = [
    { id: 'Below 1,000 sq.ft.', label: 'Below 1,000 sq.ft.', desc: 'Studio or compact space' },
    { id: '1,000–2,000 sq.ft.', label: '1,000 – 2,000 sq.ft.', desc: 'Standard 2–3 BHK apartment' },
    { id: '2,000–5,000 sq.ft.', label: '2,000 – 5,000 sq.ft.', desc: 'Large 4BHK, duplex or villa' },
    { id: '5,000+ sq.ft.', label: '5,000+ sq.ft.', desc: 'Grand estate or corporate floor' },
  ];

  const serviceOptions = [
    { id: 'Design Only', label: 'Design & Spatial Planning Only', desc: 'Concept, 2D drawings & specifications for your contractors' },
    { id: '3D Design', label: '3D Photorealistic CGI & Design', desc: 'Detailed 8K renders and day/night simulations before execution' },
    { id: 'Design + Execution', label: 'Design + Project Site Supervision', desc: 'Architectural drawings plus weekly milestone site management' },
    { id: 'Turnkey', label: 'Complete Single-Point Turnkey', desc: 'Our flagship: design, procurement, civil, carpentry, marble, handover' },
    { id: 'Renovation', label: 'Architectural Gut Renovation', desc: 'Demolition, structural redesign & complete modernization of old space' },
  ];

  const budgetOptions = [
    {
      id: 'Contemporary Refined (₹1,800 - ₹2,800/sq.ft)',
      label: 'Contemporary Refined',
      range: '₹1,800 – ₹2,800 per sq.ft.',
      desc: 'Quality natural veneers, engineered quartz, premium hardware, layered lighting & acoustic details.',
    },
    {
      id: 'Ultra Luxury Signature (₹2,800 - ₹4,200/sq.ft)',
      label: 'Ultra Luxury Signature',
      range: '₹2,800 – ₹4,200 per sq.ft.',
      desc: 'Imported Italian marble slabs, custom fluted oak joinery, Blum/Hafele fittings, smart automation & bespoke Italian bouclé.',
    },
    {
      id: 'Bespoke Haute Architectural (₹4,200+/sq.ft)',
      label: 'Bespoke Haute Architectural',
      range: '₹4,200+ per sq.ft.',
      desc: 'Bookmatched rare quarry marbles, museum-grade 98+ CRI fixtures, solid teakwood, motorized vitrines & curated fine art.',
    },
  ];

  // Dynamic estimate calculator helper
  const getEstimatedTimeline = () => {
    if (projectSize === 'Below 1,000 sq.ft.') return '8 – 12 Weeks';
    if (projectSize === '1,000–2,000 sq.ft.') return '12 – 16 Weeks';
    if (projectSize === '2,000–5,000 sq.ft.') return '16 – 22 Weeks';
    return '22 – 30 Weeks';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1100);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      {/* 1. Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-800">
          <Calculator className="w-3.5 h-3.5" />
          <span>Interactive Cost Estimator</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-950">
          Get a Project Quote & Consultation
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 font-light max-w-xl mx-auto">
          Five simple steps to receive an indicative budget breakdown and schedule a private discovery session.
        </p>

        {/* Step Progress Tracker */}
        <div className="flex items-center justify-center gap-2 pt-6">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold font-mono transition-colors ${
                  currentStep === step
                    ? 'bg-neutral-950 text-white'
                    : currentStep > step
                    ? 'bg-neutral-300 text-neutral-800'
                    : 'bg-neutral-100 text-neutral-400'
                }`}
              >
                {step}
              </div>
              {step < 5 && (
                <div
                  className={`w-6 sm:w-10 h-0.5 ${
                    currentStep > step ? 'bg-neutral-400' : 'bg-neutral-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Main Funnel Container */}
      <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-xs">
        {submitted ? (
          <div className="text-center py-10 space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-neutral-950">
                Consultation Proposal Requested
              </h3>
              <p className="text-sm text-neutral-600 font-light max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{contactData.name}</strong>. We have generated an initial project brief for your {propertyType} ({projectSize}) in {contactData.city}.
              </p>
            </div>

            {/* Estimated Parameters Summary Card */}
            <div className="p-5 bg-neutral-50 rounded-xl border border-neutral-200 text-left max-w-md mx-auto space-y-2 text-xs">
              <div className="font-semibold text-neutral-900 border-b border-neutral-200 pb-2">
                Project Summary
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Property Typology:</span>
                <span className="font-medium text-neutral-900">{propertyType}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Project Floor Area:</span>
                <span className="font-medium text-neutral-900">{projectSize}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Scope Selected:</span>
                <span className="font-medium text-neutral-900">{serviceRequired}</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Anticipated Timeline:</span>
                <span className="font-medium text-neutral-900">{getEstimatedTimeline()}</span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => onNavigate('home')}
                className="px-6 py-2.5 bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Return to Homepage
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Step 1: Property Type */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    Step 1 of 5
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-950 mt-1">
                    What are you designing?
                  </h3>
                  <p className="text-xs text-neutral-500 font-light">
                    Select the primary typology of your space.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {propertyOptions.map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setPropertyType(opt.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        propertyType === opt.id
                          ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs'
                          : 'border-neutral-200 bg-white hover:border-neutral-400 text-neutral-900'
                      }`}
                    >
                      <div className="font-serif font-semibold text-base">{opt.label}</div>
                      <div
                        className={`text-xs mt-1 font-light ${
                          propertyType === opt.id ? 'text-neutral-300' : 'text-neutral-500'
                        }`}
                      >
                        {opt.sub}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-6 py-3 bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Project Size</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Project Size */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    Step 2 of 5
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-950 mt-1">
                    What is the approximate project size?
                  </h3>
                  <p className="text-xs text-neutral-500 font-light">
                    Carpet area or built-up area of the interior space.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sizeOptions.map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setProjectSize(opt.id)}
                      className={`p-5 rounded-xl border cursor-pointer transition-all ${
                        projectSize === opt.id
                          ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs'
                          : 'border-neutral-200 bg-white hover:border-neutral-400 text-neutral-900'
                      }`}
                    >
                      <div className="font-serif font-semibold text-lg">{opt.label}</div>
                      <div
                        className={`text-xs mt-1 font-light ${
                          projectSize === opt.id ? 'text-neutral-300' : 'text-neutral-500'
                        }`}
                      >
                        {opt.desc}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-4 py-2.5 text-neutral-600 hover:text-neutral-950 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="px-6 py-3 bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Service Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Service Required */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    Step 3 of 5
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-950 mt-1">
                    What service level is required?
                  </h3>
                  <p className="text-xs text-neutral-500 font-light">
                    Choose from architectural drawings only to full white-glove turnkey delivery.
                  </p>
                </div>

                <div className="space-y-3">
                  {serviceOptions.map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setServiceRequired(opt.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all flex items-start justify-between ${
                        serviceRequired === opt.id
                          ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs'
                          : 'border-neutral-200 bg-white hover:border-neutral-400 text-neutral-900'
                      }`}
                    >
                      <div>
                        <div className="font-serif font-semibold text-base">{opt.label}</div>
                        <div
                          className={`text-xs mt-1 font-light ${
                            serviceRequired === opt.id ? 'text-neutral-300' : 'text-neutral-500'
                          }`}
                        >
                          {opt.desc}
                        </div>
                      </div>
                      {serviceRequired === opt.id && (
                        <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 ml-4 mt-0.5" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="px-4 py-2.5 text-neutral-600 hover:text-neutral-950 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="px-6 py-3 bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Budget Tier</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Budget / Material Tier */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    Step 4 of 5
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-950 mt-1">
                    Select Your Material & Finish Standard
                  </h3>
                  <p className="text-xs text-neutral-500 font-light">
                    Realistic market benchmarks for full turnkey fitouts including marble, millwork, and MEP.
                  </p>
                </div>

                <div className="space-y-4">
                  {budgetOptions.map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setBudgetTier(opt.id)}
                      className={`p-5 rounded-xl border cursor-pointer transition-all ${
                        budgetTier === opt.id
                          ? 'border-neutral-950 bg-neutral-950 text-white shadow-xs'
                          : 'border-neutral-200 bg-white hover:border-neutral-400 text-neutral-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="font-serif font-bold text-lg">{opt.label}</div>
                        <div
                          className={`text-xs font-mono font-semibold ${
                            budgetTier === opt.id ? 'text-amber-400' : 'text-neutral-700'
                          }`}
                        >
                          {opt.range}
                        </div>
                      </div>
                      <p
                        className={`text-xs mt-2 font-light leading-relaxed ${
                          budgetTier === opt.id ? 'text-neutral-300' : 'text-neutral-600'
                        }`}
                      >
                        {opt.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex justify-between">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="px-4 py-2.5 text-neutral-600 hover:text-neutral-950 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    onClick={() => setCurrentStep(5)}
                    className="px-6 py-3 bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Proceed to Contact & Calculation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 5: Contact Details & Ballpark Overview */}
            {currentStep === 5 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                    Step 5 of 5
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-neutral-950 mt-1">
                    Your Contact & Project Handover Schedule
                  </h3>
                  <p className="text-xs text-neutral-500 font-light">
                    Our principal architect will verify the preliminary estimate and connect with you.
                  </p>
                </div>

                {/* Live Estimator Highlights */}
                <div className="p-4 bg-neutral-100 rounded-xl border border-neutral-200 grid sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-neutral-500 block">Space & Type:</span>
                    <span className="font-semibold text-neutral-900">{propertyType} · {projectSize}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Service Level:</span>
                    <span className="font-semibold text-neutral-900">{serviceRequired}</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">Estimated Timeline:</span>
                    <span className="font-semibold text-neutral-900">{getEstimatedTimeline()}</span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Shah"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98250 XXXXX"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                      City of Property *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Surat, Mumbai, Ahmedabad"
                      value={contactData.city}
                      onChange={(e) => setContactData({ ...contactData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                    Additional Notes or Specific Site Requests
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Key handover expected in 2 months, prefer modern Indian brass accents..."
                    value={contactData.notes}
                    onChange={(e) => setContactData({ ...contactData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your information remains strictly confidential. Zero spam.</span>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(4)}
                    className="px-4 py-2.5 text-neutral-600 hover:text-neutral-950 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Generating Estimate...</span>
                    ) : (
                      <>
                        <span>Request My Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
