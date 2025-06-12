// /home/ubuntu/app/legaledge_pro/src/pages/landing-page/index.jsx (second update)
import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import StickyCTA from '../../components/ui/StickyCTA';
import ExitIntentModal from '../../components/ui/ExitIntentModal';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import UrgencySection from './components/UrgencySection';
import ConsultationSection from './components/ConsultationSection';
import LegalResourcesSection from './components/LegalResourcesSection';
import Footer from './components/Footer';
import { PageTransition, LoadingSpinner } from '../../utils/animations';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Add reveal animation to sections on scroll
    const revealSections = () => {
      const sections = document.querySelectorAll('.reveal');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
          section.classList.add('active');
        }
      });
    };

    // Initial load animations
    const timer = setTimeout(() => {
      setShowLoader(false);
      setIsLoaded(true);
    }, 1500);

    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial check on load

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', revealSections);
    };
  }, []);

  return (
    <PageTransition>
      {/* Page Loader */}
      <div className={`page-loader ${!showLoader ? 'loaded' : ''}`}>
        <div className="flex flex-col items-center">
          <LoadingSpinner size={60} color="#1B365D" />
          <div className="mt-4 text-primary font-bold text-xl">LegalEdge Pro</div>
          <div className="text-text-secondary">Loading your legal solutions...</div>
        </div>
      </div>

      <div className={`min-h-screen bg-background ${isLoaded ? 'animation-fade-in' : ''}`}>
        <Header />
        <main>
          <HeroSection />
          <TrustBar />
          <ProblemSection />
          <SolutionSection />
          <BenefitsSection />
          <TestimonialsSection />
          <PricingSection />
          <LegalResourcesSection />
          <FAQSection />
          <UrgencySection />
          <ConsultationSection />
        </main>
        <Footer />
        <StickyCTA />
        <ExitIntentModal />
      </div>
    </PageTransition>
  );
};

export default LandingPage;
