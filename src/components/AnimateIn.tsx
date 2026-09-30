import React, { useEffect, useRef, useState } from 'react';

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
  threshold?: number;
  from?: 'bottom' | 'top' | 'left' | 'right' | 'fade';
}

export const AnimateIn: React.FC<AnimateInProps> = ({
  children,
  className = '',
  delayMs = 0,
  durationMs = 600,
  threshold = 0.15,
  from = 'bottom',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentElement);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px', // Trigger just before completely visible for smooth flow
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'none';
    switch (from) {
      case 'bottom':
        return 'translate3d(0, 24px, 0)';
      case 'top':
        return 'translate3d(0, -24px, 0)';
      case 'left':
        return 'translate3d(-24px, 0, 0)';
      case 'right':
        return 'translate3d(24px, 0, 0)';
      case 'fade':
      default:
        return 'none';
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delayMs}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
};
