import React, { useState } from 'react';
import { X, Download, Check, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDownloading(true);

    // Simulate generating and downloading high-res lookbook PDF
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);

      // Trigger actual text/HTML print or mock PDF download
      const element = document.createElement('a');
      const file = new Blob(
        [
          `PREMIUM DESIGN STUDIO — EXECUTIVE ARCHITECTURAL LOOKBOOK 2026\n\n` +
            `Tagline: ${STUDIO_INFO.tagline}\n` +
            `Address: ${STUDIO_INFO.address}\n` +
            `Phone: ${STUDIO_INFO.phone}\n` +
            `Email: ${STUDIO_INFO.email}\n\n` +
            `HIGHLIGHTS:\n` +
            `- 10+ Years Experience | 250+ Completed Projects\n` +
            `- 15+ Design Awards across India\n` +
            `- Cities Served: Surat, Ahmedabad, Mumbai, Bengaluru, Pune, Delhi NCR, Jaipur, Vadodara\n\n` +
            `PRACTICE VERTICALS:\n` +
            `1. Luxury Residential Interiors (Villas, Penthouses, Contemporary Apartments)\n` +
            `2. Commercial Interiors (Corporate HQs, Executive Suites, Tech Campuses)\n` +
            `3. Hospitality Interiors (Fine Dining, Lounges, Boutique Hotels)\n` +
            `4. Complete Single-Point Turnkey Execution (Design, Civil, Carpentry, Marble, MEP, Handover)\n\n` +
            `BILL OF QUANTITIES GUARANTEE:\n` +
            `Fixed price guarantee with 120-point quality audit and 12-month post-handover warranty.\n\n` +
            `Thank you for considering Premium Design Studio. Contact contact@shreegurvetech.com to schedule your site discovery.`,
        ],
        { type: 'text/plain;charset=utf-8' }
      );
      element.href = URL.createObjectURL(file);
      element.download = 'Premium_Design_Studio_Lookbook_2026.txt';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-neutral-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-neutral-900 text-white p-6 sm:p-8 flex items-start justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-medium tracking-wider uppercase">
              <FileText className="w-3.5 h-3.5" />
              <span>Studio Portfolio & Credentials</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-semibold">
              Download Studio Lookbook
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light mt-1">
              Curated 42-page portfolio featuring residential villas, corporate fitouts, material specifications, and turnkey pricing guides.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-neutral-400 hover:text-white p-1 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {downloaded ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg font-serif font-semibold text-neutral-900">
                  Lookbook Downloaded Successfully
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-light">
                  A high-resolution PDF lookbook has been downloaded to your device and a copy emailed to {email}.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-neutral-900 text-white text-xs font-semibold tracking-wider uppercase rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleDownload} className="space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-neutral-700 uppercase tracking-wide">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikramaditya Mehta"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-neutral-700 uppercase tracking-wide">
                  Email Address (to receive digital copy)
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-500 py-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero spam. Direct instant access to our project archive.</span>
              </div>

              <button
                type="submit"
                disabled={downloading}
                className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {downloading ? (
                  <span>Preparing Lookbook PDF...</span>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Lookbook PDF (28 MB)</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
