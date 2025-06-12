import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigationItems = [
    { id: 'solutions', label: 'Solutions', href: '#solutions' },
    { id: 'benefits', label: 'Benefits', href: '#benefits' },
    { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
    { id: 'pricing', label: 'Pricing', href: '#pricing' },
    { id: 'faq', label: 'FAQ', href: '#faq' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = navigationItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const currentSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-100 backdrop-blur-nav border-b border-border">
        {/* Progress Indicator */}
        <div className="absolute top-0 left-0 h-1 bg-accent transition-all duration-300 ease-out" 
             style={{ width: `${scrollProgress}%` }} />
        
        <div className="container-max section-padding">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Scale" size={24} color="white" />
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl font-bold text-primary font-serif">LegalPro</h1>
                <span className="text-xs text-text-secondary font-medium">Client Growth Platform</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <button 
                onClick={() => handleNavClick('#consultation')}
                className="btn-primary"
              >
                Get Free Consultation
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors duration-250"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={24} color="currentColor" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-nav">
            <div className="container-max section-padding py-4">
              <nav className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className={`nav-link text-left py-2 ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
                <button 
                  onClick={() => handleNavClick('#consultation')}
                  className="btn-primary mt-4 w-full"
                >
                  Get Free Consultation
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
};

export default Header;