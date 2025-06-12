// /home/ubuntu/app/legaledge_pro/src/pages/landing-page/components/HeroSection.jsx
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { FadeInUp, FadeInRight, Pulse } from '../../../utils/animations';

const HeroSection = () => {
  const [showDemo, setShowDemo] = useState(false);

  const handleDemoClick = () => {
    setShowDemo(true);
  };

  const handleConsultationClick = () => {
    const consultationSection = document.querySelector('#consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 to-secondary/10 section-padding">
      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <FadeInUp delay={0.2}>
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight font-serif">
                  Get More Clients with{' '}
                  <span className="text-gradient text-highlight">Professional Legal Websites</span>
                </h1>
                
                <p className="text-xl text-text-secondary leading-relaxed max-w-2xl">
                  The only legal website platform that combines professional design, client acquisition tools, and industry compliance in one easy-to-use solution.
                </p>
              </div>
            </FadeInUp>

            {/* CTAs */}
            <FadeInUp delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleConsultationClick}
                  className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4 btn-hover-scale"
                >
                  <Icon name="Calendar" size={24} color="white" />
                  <span>Get Free Consultation</span>
                </button>
                
                <button 
                  onClick={handleDemoClick}
                  className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-250 flex items-center justify-center space-x-2"
                >
                  <Icon name="Play" size={20} color="currentColor" />
                  <span>View Live Demo</span>
                </button>
              </div>
            </FadeInUp>

            {/* Trust Indicators */}
            <FadeInUp delay={0.6}>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={20} color="#38A169" />
                  <span className="text-sm text-text-secondary">Bar Association Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={20} color="#38A169" />
                  <span className="text-sm text-text-secondary">500+ Law Firms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} color="#38A169" />
                  <span className="text-sm text-text-secondary">40% Avg Client Increase</span>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right Content - Hero Image */}
          <FadeInRight delay={0.3}>
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Professional Legal Website Dashboard"
                  className="w-full h-96 object-cover"
                />
                
                {/* Overlay Stats */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-6 text-white w-full">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">300%</div>
                        <div className="text-sm opacity-90">Client Increase</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">2.5s</div>
                        <div className="text-sm opacity-90">Load Time</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">98%</div>
                        <div className="text-sm opacity-90">Uptime</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <Pulse>
                <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  #1 Legal Platform
                </div>
              </Pulse>
              
              <Pulse>
                <div className="absolute -bottom-4 -left-4 bg-success text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} color="white" />
                  <span>Compliant & Secure</span>
                </div>
              </Pulse>
            </div>
          </FadeInRight>
        </div>
      </div>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 z-1000 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
            onClick={() => setShowDemo(false)}
          />
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden zoom-in">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-semibold text-primary">Live Website Demo</h3>
              <button
                onClick={() => setShowDemo(false)}
                className="p-2 hover:bg-surface rounded-full transition-colors duration-250"
              >
                <Icon name="X" size={20} color="currentColor" />
              </button>
            </div>
            <div className="p-6">
              <div className="bg-surface rounded-lg p-8 text-center">
                <Icon name="Monitor" size={64} color="#1B365D" className="mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-primary mb-2">Interactive Demo</h4>
                <p className="text-text-secondary mb-6">
                  Experience our platform with a personalized demo tailored to your practice area.
                </p>
                <button 
                  onClick={handleConsultationClick}
                  className="btn-primary"
                >
                  Schedule Demo Call
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce">
        <Icon name="ChevronDown" size={24} color="#1B365D" />
      </div>
    </section>
  );
};

export default HeroSection;