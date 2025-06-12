// /home/ubuntu/app/legaledge_pro/src/pages/landing-page/components/LegalResourcesSection.jsx
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { ScrollReveal, StaggeredList } from '../../../utils/animations';

const LegalResourcesSection = () => {
  const [activeCategory, setActiveCategory] = useState('practice');

  const categories = [
    { id: 'practice', label: 'Practice Areas', icon: 'FileText' },
    { id: 'ethics', label: 'Legal Ethics', icon: 'Shield' },
    { id: 'technology', label: 'Legal Technology', icon: 'Cpu' },
    { id: 'compliance', label: 'Compliance', icon: 'CheckSquare' }
  ];

  const resources = {
    practice: [
      {
        title: 'Personal Injury Practice Guide',
        description: 'Comprehensive guide to establishing and growing a personal injury practice',
        type: 'Guide',
        downloadable: true
      },
      {
        title: 'Family Law Client Management',
        description: 'Best practices for managing family law clients and sensitive cases',
        type: 'Whitepaper',
        downloadable: true
      },
      {
        title: 'Criminal Defense Marketing Strategies',
        description: 'Ethical marketing approaches for criminal defense attorneys',
        type: 'Tutorial',
        downloadable: false
      },
      {
        title: 'Estate Planning Practice Builder',
        description: 'Tools and templates to build a successful estate planning practice',
        type: 'Toolkit',
        downloadable: true
      }
    ],
    ethics: [
      {
        title: 'Attorney Advertising Rules by State',
        description: 'State-by-state guide to compliant legal advertising online',
        type: 'Reference',
        downloadable: true
      },
      {
        title: 'Client Confidentiality in Digital Age',
        description: 'Maintaining attorney-client privilege with digital communications',
        type: 'Whitepaper',
        downloadable: true
      },
      {
        title: 'Social Media Ethics for Attorneys',
        description: 'Guidelines for ethical social media use by legal professionals',
        type: 'Guide',
        downloadable: true
      },
      {
        title: 'Conflict Checking Procedures',
        description: 'Implementing robust conflict checking systems for law practices',
        type: 'Tutorial',
        downloadable: false
      }
    ],
    technology: [
      {
        title: 'Legal Technology Adoption Guide',
        description: 'Step-by-step guide to implementing new technology in your firm',
        type: 'Guide',
        downloadable: true
      },
      {
        title: 'Legal Practice Management Software Comparison',
        description: 'Detailed comparison of top practice management solutions',
        type: 'Report',
        downloadable: true
      },
      {
        title: 'Cybersecurity for Law Firms',
        description: 'Essential cybersecurity measures for legal professionals',
        type: 'Toolkit',
        downloadable: true
      },
      {
        title: 'Cloud-Based Document Management',
        description: 'Secure document management solutions for legal practices',
        type: 'Guide',
        downloadable: true
      }
    ],
    compliance: [
      {
        title: 'GDPR Compliance for Law Firms',
        description: 'How to ensure your practice complies with GDPR requirements',
        type: 'Guide',
        downloadable: true
      },
      {
        title: 'ADA Website Compliance',
        description: 'Making your legal website accessible and ADA compliant',
        type: 'Checklist',
        downloadable: true
      },
      {
        title: 'CCPA and Law Firm Data Protection',
        description: 'California Consumer Privacy Act guidelines for attorneys',
        type: 'Whitepaper',
        downloadable: true
      },
      {
        title: 'Trust Account Compliance',
        description: 'Best practices for managing client trust accounts',
        type: 'Tutorial',
        downloadable: false
      }
    ]
  };

  const resourceIcons = {
    'Guide': 'Book',
    'Whitepaper': 'FileText',
    'Tutorial': 'Video',
    'Toolkit': 'Package',
    'Reference': 'Database',
    'Report': 'BarChart',
    'Checklist': 'CheckSquare'
  };

  return (
    <section id="resources" className="py-20 section-padding bg-gradient-to-br from-primary/5 to-accent/5 reveal">
      <div className="container-max">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
              Legal Resources & Knowledge Hub
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Access our comprehensive library of legal resources designed specifically for attorneys and law firms.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Navigation */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-250 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-primary hover:bg-primary/10'
                }`}
              >
                <Icon name={category.icon} size={18} color="currentColor" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Resources Grid */}
        <ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StaggeredList staggerDelay={0.1}>
              {resources[activeCategory].map((resource, index) => (
                <div key={index} className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-shadow duration-250">
                  <div className="bg-primary/5 p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={resourceIcons[resource.type] || 'File'} size={24} color="#1B365D" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-1">{resource.title}</h3>
                    <div className="inline-block bg-accent/10 text-accent text-xs font-medium px-2 py-1 rounded">
                      {resource.type}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-text-secondary text-sm mb-4">{resource.description}</p>
                    {resource.downloadable ? (
                      <button className="flex items-center space-x-2 text-primary font-medium hover:text-primary/80 transition-colors duration-250">
                        <Icon name="Download" size={16} color="currentColor" />
                        <span>Download Resource</span>
                      </button>
                    ) : (
                      <button className="flex items-center space-x-2 text-primary font-medium hover:text-primary/80 transition-colors duration-250">
                        <Icon name="ExternalLink" size={16} color="currentColor" />
                        <span>Access Online</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </StaggeredList>
          </div>
        </ScrollReveal>

        {/* Legal Alerts */}
        <ScrollReveal>
          <div className="mt-16 bg-white rounded-2xl shadow-card p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center">
                <Icon name="Bell" size={24} color="#E53E3E" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary">Legal Updates & Alerts</h3>
                <p className="text-text-secondary">Stay informed about important legal changes affecting your practice</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-250">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-primary">New Bar Advertising Rules</h4>
                  <span className="text-xs bg-error/10 text-error px-2 py-1 rounded">New</span>
                </div>
                <p className="text-sm text-text-secondary mb-3">Updated advertising guidelines for digital marketing by attorneys in California.</p>
                <div className="flex justify-between items-center text-xs text-text-secondary">
                  <span>May 15, 2023</span>
                  <button className="text-primary hover:text-primary/80 transition-colors duration-250">Read More</button>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-250">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-primary">Data Privacy Law Changes</h4>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Updated</span>
                </div>
                <p className="text-sm text-text-secondary mb-3">New federal regulations on handling client data and privacy compliance for law firms.</p>
                <div className="flex justify-between items-center text-xs text-text-secondary">
                  <span>April 22, 2023</span>
                  <button className="text-primary hover:text-primary/80 transition-colors duration-250">Read More</button>
                </div>
              </div>

              <div className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-250">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-primary">Remote Court Proceeding Rules</h4>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Guide</span>
                </div>
                <p className="text-sm text-text-secondary mb-3">Comprehensive guide to new procedures for virtual court appearances across jurisdictions.</p>
                <div className="flex justify-between items-center text-xs text-text-secondary">
                  <span>March 10, 2023</span>
                  <button className="text-primary hover:text-primary/80 transition-colors duration-250">Read More</button>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="btn-primary btn-hover-scale">
                Subscribe to Legal Alerts
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default LegalResourcesSection;
