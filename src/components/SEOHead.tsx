import React, { useEffect } from 'react';
import { PageView } from '../types';

interface SEOHeadProps {
  currentPage: PageView;
}

interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
}

const PAGE_META_MAP: Record<PageView, PageMeta> = {
  home: {
    title: 'Premium Design Studio — Luxury Interior Architecture & Turnkey Solutions',
    description: 'Bespoke interior architecture and turnkey execution for luxury villas, penthouses, and corporate headquarters in Surat, Ahmedabad, Mumbai, and Bengaluru.',
    keywords: 'luxury interior design Surat, interior designers Ahmedabad, turnkey interiors Mumbai, villa design Gujarat, architectural studio',
    canonicalPath: '/',
  },
  about: {
    title: 'About Us — Architectural Narrative & Leadership | Premium Design Studio',
    description: 'Discover the design philosophy, 10+ years practice, and architectural leadership behind Premium Design Studio. 250+ executed projects across 8 cities.',
    keywords: 'interior architecture firm, Aarav Varma architect, CEPT alumni interior designer, luxury home architects Surat',
    canonicalPath: '/#about',
  },
  services: {
    title: 'Turnkey Interior Architecture Services | Premium Design Studio',
    description: 'Complete concept-to-execution interior design, space planning, 8K 3D photorealistic visualization, bespoke millwork, and single-point turnkey execution.',
    keywords: 'turnkey interior design, interior design services, space planning architects, 3D visualization Surat, bespoke furniture',
    canonicalPath: '/#services',
  },
  residential: {
    title: 'Residential Interior Design — Luxury Villas & Penthouses | Premium Design Studio',
    description: 'Tailored residential interiors for villas, luxury apartments, and penthouses. Specialized design for living salons, master suites, chef kitchens, and spa bathrooms.',
    keywords: 'residential interior designers Surat, villa interior design Gujarat, penthouse interiors Mumbai, luxury home designers',
    canonicalPath: '/#residential',
  },
  commercial: {
    title: 'Commercial & Corporate Office Interiors | Premium Design Studio',
    description: 'High-performance commercial interior fitouts for corporate executive suites, retail flagship stores, and hospitality destinations. STC-48 acoustic certification.',
    keywords: 'commercial interior designers, corporate office fitout Ahmedabad, retail store design Surat, restaurant interior architecture',
    canonicalPath: '/#commercial',
  },
  portfolio: {
    title: 'Architectural Portfolio & Case Studies | Premium Design Studio',
    description: 'Explore completed residential, commercial, hospitality, and gut-renovation projects with before & after transformations and material schedules.',
    keywords: 'interior design portfolio, villa case studies, interior design before after, Surat luxury homes gallery',
    canonicalPath: '/#portfolio',
  },
  process: {
    title: 'Our 9-Step Architectural Process & Timeline | Premium Design Studio',
    description: 'Explore our transparent 9-step execution framework from initial discovery and laser scanning to 3D visualization, BOQ commitment, and white-glove handover.',
    keywords: 'interior design process, turnkey execution workflow, bill of quantities interior design, architectural timeline',
    canonicalPath: '/#process',
  },
  styles: {
    title: 'Curated Interior Design Styles & Materials | Premium Design Studio',
    description: 'Comprehensive architectural guide to Modern Luxury, Japandi, Scandinavian, Modern Indian, and Biophilic styles with curated material and color palettes.',
    keywords: 'interior design styles, Japandi interior design India, Modern Indian home style, luxury interior materials',
    canonicalPath: '/#styles',
  },
  testimonials: {
    title: 'Client Testimonials & Verified Reviews | Premium Design Studio',
    description: 'Read verified testimonials from luxury homeowners, corporate executives, and restaurateurs who completed turnkey projects with Premium Design Studio.',
    keywords: 'interior designer reviews Surat, luxury interior testimonials, client feedback turnkey execution',
    canonicalPath: '/#testimonials',
  },
  blog: {
    title: 'Design Ideas, Budget Guides & Architectural Journal | Premium Design Studio',
    description: 'Expert articles on open-concept living rooms, realistic 2026 interior budgeting, countertop materials, and acoustic corporate office trends.',
    keywords: 'interior design budget guide 2026, living room design ideas, best kitchen countertop materials, office trends',
    canonicalPath: '/#blog',
  },
  faq: {
    title: 'Interior Design FAQs & Pricing Guidelines | Premium Design Studio',
    description: 'Clear answers on interior design costs per sq.ft., project timelines, 3D renders, turnkey inclusions, and multi-city project execution.',
    keywords: 'how much does interior design cost, turnkey interior cost per sq ft, interior design timeline India, interior FAQ',
    canonicalPath: '/#faq',
  },
  contact: {
    title: 'Contact Our Atelier & Material Gallery | Premium Design Studio',
    description: 'Visit our flagship atelier at Signature One, VIP Road, Vesu, Surat or schedule a site survey across Surat, Ahmedabad, Mumbai, and Bengaluru.',
    keywords: 'interior designers near me, interior designers in Surat VIP Road, contact interior architect, schedule site visit',
    canonicalPath: '/#contact',
  },
  quote: {
    title: 'Interactive Interior Cost Estimator & Quote | Premium Design Studio',
    description: 'Calculate an instant preliminary budget range and timeline for your apartment, villa, or commercial workspace in 5 simple steps.',
    keywords: 'interior design cost calculator, interior quote Surat, estimate interior budget India, turnkey cost estimator',
    canonicalPath: '/#quote',
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({ currentPage }) => {
  useEffect(() => {
    const meta = PAGE_META_MAP[currentPage] || PAGE_META_MAP.home;

    // 1. Update Document Title
    document.title = meta.title;

    // 2. Helper to set or create meta tag
    const setMetaTag = (nameOrProperty: string, key: 'name' | 'property', content: string) => {
      let el = document.querySelector(`meta[${key}="${nameOrProperty}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(key, nameOrProperty);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    // 3. Update Standard Meta Tags
    setMetaTag('description', 'name', meta.description);
    setMetaTag('keywords', 'name', meta.keywords);

    // 4. Update OpenGraph Tags
    setMetaTag('og:title', 'property', meta.title);
    setMetaTag('og:description', 'property', meta.description);
    setMetaTag('og:url', 'property', `${window.location.origin}${meta.canonicalPath}`);

    // 5. Update Twitter Cards
    setMetaTag('twitter:title', 'name', meta.title);
    setMetaTag('twitter:description', 'name', meta.description);

    // 6. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', `${window.location.origin}${meta.canonicalPath}`);

    // 7. Inject BreadcrumbList JSON-LD for Search Engines & AEO
    const breadcrumbSchemaId = 'aeo-breadcrumb-schema';
    let scriptTag = document.getElementById(breadcrumbSchemaId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = breadcrumbSchemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const breadcrumbs = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: window.location.origin,
      },
    ];

    if (currentPage !== 'home') {
      breadcrumbs.push({
        '@type': 'ListItem',
        position: 2,
        name: meta.title.split('—')[0].trim(),
        item: `${window.location.origin}${meta.canonicalPath}`,
      });
    }

    scriptTag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs,
    });
  }, [currentPage]);

  return null;
};
