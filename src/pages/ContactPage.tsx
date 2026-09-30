import React, { useState } from 'react';
import { PageView } from '../types';
import { STUDIO_INFO } from '../data/studioData';
import { AnimateIn } from '../components/AnimateIn';
import { MapPin, Phone, Mail, Clock, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageView) => void;
  prefilledContext?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, prefilledContext }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Surat',
    projectType: 'Villa Interiors',
    propertyStage: 'Bare Shell / Under Construction',
    approxArea: '3,500 sq.ft.',
    budget: '₹50 Lakhs - ₹1 Crore',
    startDate: 'Within 30 Days',
    message: prefilledContext ? `Inquiring regarding ${prefilledContext}.` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="space-y-16 py-12">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="max-w-3xl space-y-4">
            <div className="text-xs font-semibold tracking-wider uppercase text-neutral-500">
              Get in Touch · GEO Atelier Coordinates
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-neutral-950 leading-tight">
              Connect With Our Atelier
            </h1>
            <p className="text-base sm:text-xl text-neutral-600 font-light leading-relaxed">
              Visit our flagship design gallery at VIP Road, Vesu in Surat, schedule a site evaluation in Ahmedabad, Mumbai, or Bengaluru, or submit your project details below to begin the consultation process.
            </p>
          </div>
        </AnimateIn>
      </section>

      {/* 2. Main Content Grid: Info & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Info Column with GEO Microdata */}
          <div className="lg:col-span-5 space-y-8">
            <AnimateIn delayMs={50}>
              <div
                className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-xs space-y-6"
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                <h2 className="text-2xl font-serif font-bold text-neutral-950" itemProp="name">
                  Atelier Coordinates
                </h2>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-neutral-100 rounded-lg text-neutral-900 shrink-0">
                      <MapPin className="w-5 h-5 text-neutral-800" />
                    </div>
                    <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                      <h3 className="font-semibold text-neutral-900 text-xs uppercase tracking-wider">
                        Headquarters & Material Gallery
                      </h3>
                      <p className="text-neutral-600 font-light mt-1 leading-relaxed">
                        <span itemProp="streetAddress">Atelier 402, Signature One, VIP Road, Vesu</span>,{' '}
                        <span itemProp="addressLocality">Surat</span>,{' '}
                        <span itemProp="addressRegion">Gujarat</span>{' '}
                        <span itemProp="postalCode">395007</span>,{' '}
                        <span itemProp="addressCountry">India</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-neutral-100 rounded-lg text-neutral-900 shrink-0">
                      <Phone className="w-5 h-5 text-neutral-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 text-xs uppercase tracking-wider">
                        Direct Concierge
                      </h3>
                      <p className="text-neutral-600 font-light mt-1">
                        <a
                          href={`tel:${STUDIO_INFO.phone}`}
                          className="hover:text-neutral-950 font-sans tabular-nums"
                          itemProp="telephone"
                        >
                          {STUDIO_INFO.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-neutral-100 rounded-lg text-neutral-900 shrink-0">
                      <Mail className="w-5 h-5 text-neutral-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 text-xs uppercase tracking-wider">
                        Electronic Inquiries
                      </h3>
                      <p className="text-neutral-600 font-light mt-1">
                        <a
                          href={`mailto:${STUDIO_INFO.email}`}
                          className="hover:text-neutral-950"
                          itemProp="email"
                        >
                          {STUDIO_INFO.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 bg-neutral-100 rounded-lg text-neutral-900 shrink-0">
                      <Clock className="w-5 h-5 text-neutral-800" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 text-xs uppercase tracking-wider">
                        Studio Hours
                      </h3>
                      <p className="text-neutral-600 font-light mt-1 leading-relaxed">
                        {STUDIO_INFO.hours}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-100">
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                    Operating Project Hubs (GEO)
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-xs text-neutral-700">
                    <span className="bg-neutral-100 px-2.5 py-1 rounded">Surat (HQ)</span>
                    <span className="bg-neutral-100 px-2.5 py-1 rounded">Ahmedabad</span>
                    <span className="bg-neutral-100 px-2.5 py-1 rounded">Mumbai</span>
                    <span className="bg-neutral-100 px-2.5 py-1 rounded">Bengaluru</span>
                    <span className="bg-neutral-100 px-2.5 py-1 rounded">Pune</span>
                    <span className="bg-neutral-100 px-2.5 py-1 rounded">Vadodara</span>
                    <span className="bg-neutral-100 px-2.5 py-1 rounded">Jaipur</span>
                    <span className="bg-neutral-100 px-2.5 py-1 rounded">Delhi NCR</span>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Trust card */}
            <AnimateIn delayMs={120}>
              <div className="p-6 bg-[#F6F4EF] rounded-2xl border border-neutral-200 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-800">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidentiality Assured</span>
                </div>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">
                  All architectural drawings, floor plans, and budgets shared with our team are protected under strict studio non-disclosure policies.
                </p>
              </div>
            </AnimateIn>
          </div>

          {/* Right Form Column with AnimateIn */}
          <div className="lg:col-span-7">
            <AnimateIn delayMs={100}>
              <div className="bg-white rounded-2xl border border-neutral-200 p-8 sm:p-10 shadow-xs">
                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-neutral-950">
                      Consultation Request Received
                    </h3>
                    <p className="text-sm text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.name}. Our principal design architect will review your project parameters for {formData.city} and connect with you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 bg-neutral-950 text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-neutral-950">
                        Request a Spatial Consultation
                      </h3>
                      <p className="text-xs text-neutral-500 font-light">
                        Please furnish your property details so our architects can prepare a meaningful discussion.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikramaditya Patel"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
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
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="you@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                          Project City *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Surat, Mumbai, Ahmedabad"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                          Project Type *
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 bg-white"
                        >
                          <option value="Villa Interiors">Villa Interiors</option>
                          <option value="Luxury Home">Luxury Home</option>
                          <option value="Apartment / Penthouse">Apartment / Penthouse</option>
                          <option value="Corporate Office">Corporate Office</option>
                          <option value="Retail Store / Showroom">Retail Store / Showroom</option>
                          <option value="Restaurant / Hospitality">Restaurant / Hospitality</option>
                          <option value="Full Architectural Renovation">Full Architectural Renovation</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                          Approximate Floor Area
                        </label>
                        <select
                          value={formData.approxArea}
                          onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 bg-white"
                        >
                          <option value="Below 1,500 sq.ft.">Below 1,500 sq.ft.</option>
                          <option value="1,500 – 3,000 sq.ft.">1,500 – 3,000 sq.ft.</option>
                          <option value="3,000 – 5,000 sq.ft.">3,000 – 5,000 sq.ft.</option>
                          <option value="5,000 – 10,000 sq.ft.">5,000 – 10,000 sq.ft.</option>
                          <option value="10,000+ sq.ft.">10,000+ sq.ft.</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                          Estimated Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 bg-white"
                        >
                          <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs</option>
                          <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                          <option value="₹1 Crore – ₹2.5 Crores">₹1 Crore – ₹2.5 Crores</option>
                          <option value="₹2.5 Crores+">₹2.5 Crores+</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                          Preferred Start Date
                        </label>
                        <select
                          value={formData.startDate}
                          onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 bg-white"
                        >
                          <option value="Immediately (Within 2 Weeks)">Immediately (Within 2 Weeks)</option>
                          <option value="Within 30 Days">Within 30 Days</option>
                          <option value="1 to 3 Months">1 to 3 Months</option>
                          <option value="Planning for Next Year">Planning for Next Year</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-700">
                        Message & Specific Requirements
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Share details about the property, your preferred aesthetic (e.g. Japandi, Modern Luxury), or specific priorities..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Project Details...</span>
                      ) : (
                        <>
                          <span>Request a Consultation</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
};
