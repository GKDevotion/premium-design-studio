export type PageView =
  | 'home'
  | 'about'
  | 'services'
  | 'residential'
  | 'commercial'
  | 'portfolio'
  | 'process'
  | 'styles'
  | 'testimonials'
  | 'blog'
  | 'faq'
  | 'contact'
  | 'quote';

export interface Project {
  id: string;
  name: string;
  slug: string;
  category: 'Residential' | 'Commercial' | 'Office' | 'Retail' | 'Hospitality' | 'Renovation';
  subCategory: string;
  location: string;
  area: string;
  year: string;
  scope: string;
  coverImage: string;
  beforeImage?: string;
  afterImage?: string;
  overview: string;
  concept: string;
  challenge: string;
  solution: string;
  materials: { name: string; type: string; description: string }[];
  gallery: { title: string; image: string; caption: string }[];
  results: string;
  clientQuote?: { text: string; author: string; role: string };
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'residential' | 'commercial' | 'specialized';
  description: string;
  features: string[];
  deliverables: string[];
  image: string;
}

export interface DesignStyle {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  colorPalette: { name: string; hex: string }[];
  materials: string[];
  bestFor: string;
  sampleImage: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  specialization: string;
  bio: string;
  certifications: string;
  image: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  projectType: string;
  location: string;
  rating: number;
  quote: string;
  projectArea: string;
  year: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Interior Design Ideas' | 'Home Design' | 'Office Design' | 'Budget Guide' | 'Inspiration';
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'General' | 'Cost & Budget' | 'Execution' | 'Design Process';
}
