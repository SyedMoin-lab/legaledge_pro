import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SolutionSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const transformations = [
    {
      practiceArea: "Personal Injury",
      firmName: "Rodriguez & Associates",
      location: "Miami, FL",
      before: {
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
        loadTime: "8.2s",
        mobileScore: "32/100",
        leads: "2/month"
      },
      after: {
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        loadTime: "1.8s",
        mobileScore: "98/100",
        leads: "18/month"
      },
      results: {
        clientIncrease: "300%",
        timeToResults: "45 days",
        revenue: "$180,000"
      }
    },
    {
      practiceArea: "Family Law",
      firmName: "Thompson Legal Group",
      location: "Austin, TX",
      before: {
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
        loadTime: "6.5s",
        mobileScore: "28/100",
        leads: "5/month"
      },
      after: {
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        loadTime: "2.1s",
        mobileScore: "96/100",
        leads: "22/month"
      },
      results: {
        clientIncrease: "240%",
        timeToResults: "30 days",
        revenue: "$150,000"
      }
    },
    {
      practiceArea: "Criminal Defense",
      firmName: "Miller Defense Attorneys",
      location: "Phoenix, AZ",
      before: {
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60",
        loadTime: "9.1s",
        mobileScore: "25/100",
        leads: "3/month"
      },
      after: {
        image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        loadTime: "1.9s",
        mobileScore: "97/100",
        leads: "15/month"
      },
      results: {
        clientIncrease: "400%",
        timeToResults: "60 days",
        revenue: "$200,000"
      }
    }
  ];

  const features = [
    {
      icon: "Palette",
      title: "Professional Design",
      description: "Custom designs tailored to your practice area that build trust and credibility"
    },
    {
      icon: "Users",
      title: "Lead Generation",
      description: "Built-in contact forms, chat widgets, and appointment scheduling to capture more leads"
    },
    {
      icon: "Smartphone",
      title: "Mobile Optimized",
      description: "Perfect display on all devices with fast loading times and intuitive navigation"
    },
    {
      icon: "Shield",
      title: "Compliance Ready",
      description: "Built-in features for attorney-client privilege, GDPR, and bar association requirements"
    },
    {
      icon: "Search",
      title: "SEO Optimized",
      description: "Advanced SEO features to help potential clients find you in local search results"
    },
    {
      icon: "BarChart",
      title: "Analytics Dashboard",
      description: "Track website performance, lead sources, and conversion rates in real-time"
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % transformations.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + transformations.length) % transformations.length);
  };

  const currentTransformation = transformations[activeSlide];

  return (
    <section id="solutions" className="py-20 section-padding bg-surface">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
            Complete Website Transformation
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how we've helped law firms like yours transform their online presence and dramatically increase client acquisition.
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16">
          <div className="p-6 border-b border-border">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-primary">{currentTransformation.firmName}</h3>
                <p className="text-text-secondary">{currentTransformation.practiceArea} • {currentTransformation.location}</p>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center hover:bg-border transition-colors duration-250"
                >
                  <Icon name="ChevronLeft" size={20} color="currentColor" />
                </button>
                <span className="text-sm text-text-secondary px-3">
                  {activeSlide + 1} of {transformations.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 bg-surface rounded-full flex items-center justify-center hover:bg-border transition-colors duration-250"
                >
                  <Icon name="ChevronRight" size={20} color="currentColor" />
                </button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            {/* Before */}
            <div className="p-6 border-r border-border">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="X" size={20} color="#E53E3E" />
                <h4 className="font-semibold text-error">Before</h4>
              </div>
              
              <div className="bg-surface rounded-lg overflow-hidden mb-4">
                <Image 
                  src={currentTransformation.before.image}
                  alt="Before Website"
                  className="w-full h-48 object-cover opacity-75"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Load Time:</span>
                  <span className="text-sm font-medium text-error">{currentTransformation.before.loadTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Mobile Score:</span>
                  <span className="text-sm font-medium text-error">{currentTransformation.before.mobileScore}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Monthly Leads:</span>
                  <span className="text-sm font-medium text-error">{currentTransformation.before.leads}</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="CheckCircle" size={20} color="#38A169" />
                <h4 className="font-semibold text-success">After</h4>
              </div>
              
              <div className="bg-surface rounded-lg overflow-hidden mb-4">
                <Image 
                  src={currentTransformation.after.image}
                  alt="After Website"
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Load Time:</span>
                  <span className="text-sm font-medium text-success">{currentTransformation.after.loadTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Mobile Score:</span>
                  <span className="text-sm font-medium text-success">{currentTransformation.after.mobileScore}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">Monthly Leads:</span>
                  <span className="text-sm font-medium text-success">{currentTransformation.after.leads}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="p-6 bg-accent/5 border-t border-border">
            <h4 className="font-semibold text-primary mb-4 text-center">Results Achieved</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-accent">{currentTransformation.results.clientIncrease}</div>
                <div className="text-sm text-text-secondary">Client Increase</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">{currentTransformation.results.timeToResults}</div>
                <div className="text-sm text-text-secondary">Time to Results</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">{currentTransformation.results.revenue}</div>
                <div className="text-sm text-text-secondary">Additional Revenue</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-card hover:shadow-lg transition-shadow duration-250">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature.icon} size={24} color="#1B365D" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const consultationSection = document.querySelector('#consultation');
              if (consultationSection) {
                consultationSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;