import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface FullscreenLightboxProps {
  isOpen: boolean;
  images: { title: string; image: string; caption?: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const FullscreenLightbox: React.FC<FullscreenLightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex] || images[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Header */}
      <div
        className="flex items-center justify-between text-white z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <h4 className="text-base font-medium tracking-wide font-serif">{current.title}</h4>
          <p className="text-xs text-neutral-400">
            {currentIndex + 1} of {images.length} · Fullscreen Gallery View
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {images.length > 1 && (
          <button
            onClick={onPrev}
            aria-label="Previous Image"
            className="absolute left-2 sm:left-4 z-10 p-3 bg-neutral-900/80 hover:bg-neutral-800 text-white rounded-full transition-colors backdrop-blur-sm cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        <img
          src={current.image}
          alt={current.title}
          referrerPolicy="no-referrer"
          className="max-h-[82vh] max-w-full object-contain rounded shadow-2xl transition-all duration-300"
        />

        {images.length > 1 && (
          <button
            onClick={onNext}
            aria-label="Next Image"
            className="absolute right-2 sm:right-4 z-10 p-3 bg-neutral-900/80 hover:bg-neutral-800 text-white rounded-full transition-colors backdrop-blur-sm cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Caption & Thumbnails */}
      <div
        className="text-center text-neutral-300 text-xs sm:text-sm max-w-2xl mx-auto z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {current.caption && <p className="mb-2 italic font-light">{current.caption}</p>}
        <div className="flex items-center justify-center gap-1.5 overflow-x-auto py-1">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (idx > currentIndex) {
                  for (let i = currentIndex; i < idx; i++) onNext();
                } else if (idx < currentIndex) {
                  for (let i = idx; i < currentIndex; i++) onPrev();
                }
              }}
              className={`h-1.5 transition-all rounded-full ${
                idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-neutral-600 hover:bg-neutral-400'
              }`}
              aria-label={`Jump to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
