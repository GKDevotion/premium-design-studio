import React, { useState, useEffect } from 'react';
import { PageView, Project } from './types';
import { SEOHead } from './components/SEOHead';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { BrochureModal } from './components/BrochureModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ResidentialPage } from './pages/ResidentialPage';
import { CommercialPage } from './pages/CommercialPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProcessPage } from './pages/ProcessPage';
import { StylesPage } from './pages/StylesPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { BlogPage } from './pages/BlogPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { QuotePage } from './pages/QuotePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [consultationContext, setConsultationContext] = useState<string | undefined>(undefined);

  // Sync hash routing for shareability and clean URL state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageView;
      const validPages: PageView[] = [
        'home',
        'about',
        'services',
        'residential',
        'commercial',
        'portfolio',
        'process',
        'styles',
        'testimonials',
        'blog',
        'faq',
        'contact',
        'quote',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleConsultationClick = (projectContext?: string) => {
    setConsultationContext(projectContext);
    handleNavigate('contact');
  };

  const handleOpenQuote = () => {
    handleNavigate('quote');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* 0. Dynamic SEO, AEO & GEO Metadata Controller */}
      <SEOHead currentPage={currentPage} />

      {/* 1. Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* 2. Main Page View Render */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'residential' && (
          <ResidentialPage
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'commercial' && (
          <CommercialPage
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onNavigate={handleNavigate}
            onSelectProject={handleSelectProject}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'process' && (
          <ProcessPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'styles' && (
          <StylesPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'testimonials' && (
          <TestimonialsPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'faq' && (
          <FaqPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            prefilledContext={consultationContext}
          />
        )}

        {currentPage === 'quote' && (
          <QuotePage onNavigate={handleNavigate} />
        )}
      </main>

      {/* 3. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBrochure={() => setBrochureModalOpen(true)}
        onOpenQuote={handleOpenQuote}
      />

      {/* 4. Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsultationClick={handleConsultationClick}
      />

      {/* 5. Studio Lookbook Download Modal */}
      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />

      {/* 6. Floating WhatsApp CTA */}
      <WhatsAppButton onOpenConsultation={handleOpenQuote} />
    </div>
  );
}
