// /home/ubuntu/app/legaledge_pro/src/components/ui/StickyCTA.jsx
import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import { motion, AnimatePresence } from 'framer-motion';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  const sectionMessages = {
    'solutions': 'See Our Solutions in Action',
    'benefits': 'Start Getting More Clients',
    'testimonials': 'Join Successful Attorneys',
    'pricing': 'Choose Your Growth Plan',
    'faq': 'Get Your Questions Answered',
    'default': 'Get Free Consultation'
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      const heroSection = document.querySelector('#hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsVisible(window.scrollY > heroBottom);
      }

      // Detect current section for contextual messaging
      const sections = ['solutions', 'benefits', 'testimonials', 'pricing', 'faq'];
      const currentSection = sections.find(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      setCurrentSection(currentSection || 'default');
    };

    checkMobile();
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleCTAClick = () => {
    const consultationSection = document.querySelector('#consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getMessage = () => {
    return sectionMessages[currentSection] || sectionMessages.default;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        isMobile ? (
          <motion.div 
            className="mobile-sticky-cta fixed bottom-0 left-0 right-0 bg-primary p-4 shadow-lg z-50"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button 
              onClick={handleCTAClick}
              className="w-full flex items-center justify-center space-x-2 text-white font-semibold"
            >
              <Icon name="Calendar" size={20} color="white" />
              <span>{getMessage()}</span>
            </button>
          </motion.div>
        ) : (
          <motion.button 
            onClick={handleCTAClick}
            className="sticky-cta fixed bottom-8 right-8 bg-primary text-white py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 z-50 hover:scale-105 transform transition-all duration-250"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <Icon name="Calendar" size={20} color="white" />
            <span className="hidden lg:inline">{getMessage()}</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Icon name="ArrowRight" size={16} color="white" />
            </motion.div>
          </motion.button>
        )
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;