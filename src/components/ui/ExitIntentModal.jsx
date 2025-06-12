import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const ExitIntentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [deepestSection, setDeepestSection] = useState('hero');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionOffers = {
    'hero': {
      title: 'Wait! Don\'t Let Competitors Win More Clients',
      subtitle: 'Get our free "Legal Website Audit" and see exactly how many clients your current site is costing you.',
      offer: 'Free Website Audit Report',
      cta: 'Get My Free Audit'
    },
    'solutions': {
      title: 'Before You Go - See What You\'re Missing',
      subtitle: 'Download our case study showing how attorneys increased client acquisition by 300% in 90 days.',
      offer: 'Free Success Case Study',
      cta: 'Download Case Study'
    },
    'benefits': {
      title: 'Ready to Start Getting More Clients?',
      subtitle: 'Schedule a free 15-minute consultation and get a custom client acquisition strategy for your practice.',
      offer: 'Free Strategy Session',
      cta: 'Book Free Consultation'
    },
    'testimonials': {
      title: 'Join These Successful Attorneys',
      subtitle: 'Get started with our proven system and receive 50% off your first month.',
      offer: '50% Off First Month',
      cta: 'Claim Discount'
    },
    'pricing': {
      title: 'Still Considering Your Options?',
      subtitle: 'Schedule an extended 30-minute consultation to discuss your specific needs and get a custom quote.',
      offer: 'Extended Free Consultation',
      cta: 'Schedule Extended Call'
    }
  };

  useEffect(() => {
    let mouseLeaveTimer;

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown) {
        mouseLeaveTimer = setTimeout(() => {
          setIsVisible(true);
          setHasShown(true);
        }, 100);
      }
    };

    const handleMouseEnter = () => {
      if (mouseLeaveTimer) {
        clearTimeout(mouseLeaveTimer);
      }
    };

    const handleScroll = () => {
      const sections = ['hero', 'solutions', 'benefits', 'testimonials', 'pricing'];
      const currentSection = sections.find(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setDeepestSection(currentSection);
      }

      // Mobile exit intent - rapid scroll to top
      if (window.scrollY < 100 && window.innerWidth < 768 && !hasShown) {
        const scrollSpeed = Math.abs(window.scrollY - (window.lastScrollY || 0));
        if (scrollSpeed > 50) {
          setIsVisible(true);
          setHasShown(true);
        }
      }
      window.lastScrollY = window.scrollY;
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('scroll', handleScroll);
      if (mouseLeaveTimer) {
        clearTimeout(mouseLeaveTimer);
      }
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsVisible(false);
    
    // Show success message or redirect
    alert('Thank you! We\'ll send your free resource shortly.');
  };

  const currentOffer = sectionOffers[deepestSection] || sectionOffers.hero;

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 animation-fade-in">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-surface rounded-full transition-colors duration-250"
        >
          <Icon name="X" size={20} color="currentColor" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Icon */}
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Gift" size={32} color="#C9A961" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-center text-primary mb-4 font-serif">
            {currentOffer.title}
          </h3>

          {/* Subtitle */}
          <p className="text-text-secondary text-center mb-6 leading-relaxed">
            {currentOffer.subtitle}
          </p>

          {/* Offer Badge */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center mb-6">
            <div className="text-accent font-semibold text-lg">
              {currentOffer.offer}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="form-input w-full"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" size={20} color="white" className="animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>{currentOffer.cta}</span>
                  <Icon name="ArrowRight" size={16} color="white" />
                </>
              )}
            </button>
          </form>

          {/* Trust Elements */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={16} color="currentColor" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={16} color="currentColor" />
                <span>Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentModal;