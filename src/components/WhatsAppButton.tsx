import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

interface WhatsAppButtonProps {
  onOpenConsultation?: () => void;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onOpenConsultation }) => {
  const handleClick = () => {
    const text = encodeURIComponent(
      'Hello Premium Design Studio team, I am interested in discussing an interior design project for my space.'
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Floating WhatsApp CTA */}
      <button
        onClick={handleClick}
        aria-label="Chat with our Principal Designer on WhatsApp"
        className="group flex items-center gap-2.5 px-3.5 py-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline-block pr-1">
          Chat With Designer
        </span>
      </button>
    </div>
  );
};
