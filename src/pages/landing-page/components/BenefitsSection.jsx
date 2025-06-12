// /home/ubuntu/app/legaledge_pro/src/pages/landing-page/components/BenefitsSection.jsx
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { ScrollReveal, StaggeredList } from '../../../utils/animations';

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const benefits = [
    {
      icon: "TrendingUp",
      title: "Generate More Clients",
      subtitle: "Advanced lead generation tools",
      description: `Our platform includes everything you need to convert website visitors into paying clients. From optimized contact forms to automated follow-up sequences, we help you capture and nurture every lead.

Built-in appointment scheduling, live chat widgets, and lead tracking dashboards ensure no potential client falls through the cracks. Our clients see an average 40% increase in new client acquisition within 90 days.`,
      features: [
        "Optimized contact forms with smart fields",
        "Automated appointment scheduling",
        "Live chat with mobile notifications",
        "Lead tracking and analytics dashboard",
        "Email automation sequences",
        "Client intake form integration"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: [
        { label: "Average Lead Increase", value: "40%" },
        { label: "Conversion Rate", value: "12%" },
        { label: "Response Time", value: "<2min" }
      ]
    },
    {
      icon: "Award",
      title: "Build Professional Credibility",
      subtitle: "Establish trust and authority",
      description: `Your website is often the first impression potential clients have of your firm. Our professionally designed templates are specifically crafted for legal professionals to build trust and demonstrate expertise.

Every design element is optimized for credibility - from attorney bio layouts to case result presentations. We help you showcase your experience, credentials, and success stories in a way that converts visitors into clients.`,
      features: [
        "Professional legal-specific designs",
        "Attorney credential highlighting",
        "Case study and result showcases",
        "Client testimonial integration",
        "Bar association compliance badges",
        "Security and privacy certifications"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: [
        { label: "Trust Score Increase", value: "85%" },
        { label: "Time on Site", value: "+3min" },
        { label: "Bounce Rate", value: "-45%" }
      ]
    },
    {
      icon: "Zap",
      title: "Easy to Use & Manage",
      subtitle: "No technical skills required",
      description: `Managing your website shouldn't require a computer science degree. Our intuitive drag-and-drop interface makes it easy to update content, add new cases, and manage client information without any technical knowledge.

Built-in content management tools, automated backups, and 24/7 support ensure your website runs smoothly while you focus on practicing law. Most attorneys are updating their sites within minutes of setup.`,
      features: [
        "Drag-and-drop content editor",
        "One-click content updates",
        "Automated security and backups",
        "24/7 technical support",
        "Mobile app for on-the-go updates",
        "Training and onboarding included"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      stats: [
        { label: "Setup Time", value: "15min" },
        { label: "Learning Curve", value: "1 day" },
        { label: "Support Rating", value: "4.9/5" }
      ]
    }
  ];

  const currentBenefit = benefits[activeTab];

  return (
    <section id="benefits" className="py-20 section-padding bg-background reveal">
      <div className="container-max">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
              Why Law Firms Choose LegalEdge Pro
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Three core benefits that help legal professionals grow their practice and establish market authority.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-4 mb-8 bg-surface rounded-lg p-2">
            {benefits.map((benefit, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 p-4 rounded-lg text-left transition-all duration-250 ${
                  activeTab === index 
                    ? 'bg-white shadow-card text-primary' 
                    : 'text-text-secondary hover:text-primary hover:bg-white/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeTab === index ? 'bg-primary/10' : 'bg-border'
                  }`}>
                    <Icon 
                      name={benefit.icon} 
                      size={20} 
                      color={activeTab === index ? '#1B365D' : '#4A5568'} 
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{benefit.title}</h3>
                    <p className="text-sm opacity-75">{benefit.subtitle}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tab Content */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={currentBenefit.icon} size={24} color="#1B365D" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary font-serif">{currentBenefit.title}</h3>
                    <p className="text-text-secondary">{currentBenefit.subtitle}</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none text-text-secondary mb-8">
                  <p>{currentBenefit.description}</p>
                </div>

                {/* Features List */}
                <StaggeredList className="space-y-3 mb-8" staggerDelay={0.1}>
                  {currentBenefit.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} color="#38A169" />
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </StaggeredList>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {currentBenefit.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-accent">{stat.value}</div>
                      <div className="text-sm text-text-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <Image 
                  src={currentBenefit.image}
                  alt={currentBenefit.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with demo preview */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-8 text-white w-full">
                    <h4 className="text-lg font-semibold mb-2">See It In Action</h4>
                    <p className="text-sm opacity-90 mb-4">
                      Experience how {currentBenefit.title.toLowerCase()} works in our platform
                    </p>
                    <button className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors duration-250">
                      View Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Demo Preview */}
        <ScrollReveal>
          <div className="mt-12 bg-surface rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-primary mb-2">Interactive Platform Preview</h3>
              <p className="text-text-secondary">Drag and drop to see how easy it is to customize your legal website</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-card">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-surface rounded-lg p-4 cursor-move hover:shadow-md transition-shadow duration-250">
                  <Icon name="FileText" size={24} color="#1B365D" className="mb-2" />
                  <h4 className="font-medium text-primary mb-1">Practice Areas</h4>
                  <p className="text-sm text-text-secondary">Drag to reorder your services</p>
                </div>
                
                <div className="bg-surface rounded-lg p-4 cursor-move hover:shadow-md transition-shadow duration-250">
                  <Icon name="Users" size={24} color="#1B365D" className="mb-2" />
                  <h4 className="font-medium text-primary mb-1">Attorney Profiles</h4>
                  <p className="text-sm text-text-secondary">Add team members easily</p>
                </div>
                
                <div className="bg-surface rounded-lg p-4 cursor-move hover:shadow-md transition-shadow duration-250">
                  <Icon name="Star" size={24} color="#1B365D" className="mb-2" />
                  <h4 className="font-medium text-primary mb-1">Client Reviews</h4>
                  <p className="text-sm text-text-secondary">Showcase testimonials</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BenefitsSection;
