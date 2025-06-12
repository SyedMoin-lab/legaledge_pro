// /home/ubuntu/app/legaledge_pro/src/pages/landing-page/components/ProblemSection.jsx
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { ScrollReveal, FadeInLeft, FadeInRight } from '../../../utils/animations';

const ProblemSection = () => {
  const [currentVolume, setCurrentVolume] = useState(10);
  const [calculatorResult, setCalculatorResult] = useState(null);

  const problems = [
    {
      title: "Outdated Website Design",
      description: "Your current website looks unprofessional and drives potential clients to competitors",
      impact: "Lost 60% of potential clients",
      icon: "AlertTriangle"
    },
    {
      title: "Poor Mobile Experience",
      description: "70% of legal searches happen on mobile, but your site isn\'t optimized",
      impact: "Missing 70% of leads",
      icon: "Smartphone"
    },
    {
      title: "No Lead Generation",
      description: "Your website doesn\'t capture visitor information or convert browsers to clients",
      impact: "Zero conversion tracking",
      icon: "TrendingDown"
    },
    {
      title: "Compliance Issues",
      description: "Your site may not meet bar association requirements or security standards",
      impact: "Potential violations",
      icon: "Shield"
    },
    {
      title: "Legal Ethics Concerns",
      description: "Your content may not comply with attorney advertising rules in your jurisdiction",
      impact: "Risk of disciplinary action",
      icon: "AlertOctagon"
    }
  ];

  const legalRisks = [
    {
      title: "Attorney Advertising Violations",
      description: "Each state bar has strict rules about how attorneys can advertise their services online",
      consequence: "Bar disciplinary proceedings"
    },
    {
      title: "Client Confidentiality Breaches",
      description: "Insecure contact forms and data handling can expose confidential client information",
      consequence: "Ethical violations and malpractice"
    },
    {
      title: "Unauthorized Practice of Law",
      description: "Unclear geographical service boundaries can lead to unauthorized practice claims",
      consequence: "Legal penalties and sanctions"
    }
  ];

  const calculateGrowth = () => {
    const projectedClients = Math.round(currentVolume * 1.4); // 40% increase
    const additionalRevenue = (projectedClients - currentVolume) * 5000; // $5k per client
    setCalculatorResult({
      current: currentVolume,
      projected: projectedClients,
      increase: projectedClients - currentVolume,
      revenue: additionalRevenue
    });
  };

  return (
    <section id="problems" className="py-20 section-padding bg-background reveal">
      <div className="container-max">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
              Is Your Website Costing You Clients?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Most law firms lose potential clients every day due to outdated websites and poor online presence. 
              See how much your current site might be costing you.
            </p>
          </div>
        </ScrollReveal>

        {/* Before/After Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Before - Outdated Website */}
          <FadeInLeft>
            <div className="space-y-6">
              <div className="bg-error/10 border border-error/20 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="X" size={24} color="#E53E3E" />
                  <h3 className="text-xl font-semibold text-error">Typical Attorney Website</h3>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-card mb-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
                    alt="Outdated Attorney Website"
                    className="w-full h-48 object-cover opacity-75"
                  />
                  <div className="p-4">
                    <div className="text-sm text-text-secondary space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} color="#E53E3E" />
                        <span>8+ second load time</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Smartphone" size={16} color="#E53E3E" />
                        <span>Not mobile optimized</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Search" size={16} color="#E53E3E" />
                        <span>Poor SEO ranking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Problem List */}
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className={`bg-white border border-border rounded-lg p-4 shadow-card slide-in-left stagger-${index + 1}`}>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-error/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon name={problem.icon} size={16} color="#E53E3E" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary mb-1">{problem.title}</h4>
                        <p className="text-sm text-text-secondary mb-2">{problem.description}</p>
                        <div className="text-sm font-medium text-error">{problem.impact}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInLeft>

          {/* After - Professional Website */}
          <FadeInRight>
            <div className="space-y-6">
              <div className="bg-success/10 border border-success/20 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="CheckCircle" size={24} color="#38A169" />
                  <h3 className="text-xl font-semibold text-success">LegalEdge Pro Website</h3>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-card mb-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Professional Legal Website"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="text-sm text-text-secondary space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="Zap" size={16} color="#38A169" />
                        <span>&lt;2 second load time</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Smartphone" size={16} color="#38A169" />
                        <span>Mobile-first design</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="TrendingUp" size={16} color="#38A169" />
                        <span>SEO optimized</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <div className="bg-white border border-border rounded-lg p-4 shadow-card slide-in-right stagger-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="Users" size={20} color="#38A169" />
                    <h4 className="font-semibold text-primary">40% More Clients</h4>
                  </div>
                  <p className="text-sm text-text-secondary">Professional design and lead generation tools convert more visitors into paying clients.</p>
                </div>
                
                <div className="bg-white border border-border rounded-lg p-4 shadow-card slide-in-right stagger-2">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="Shield" size={20} color="#38A169" />
                    <h4 className="font-semibold text-primary">100% Compliant</h4>
                  </div>
                  <p className="text-sm text-text-secondary">Built specifically for legal professionals with all necessary compliance features.</p>
                </div>
                
                <div className="bg-white border border-border rounded-lg p-4 shadow-card slide-in-right stagger-3">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="Zap" size={20} color="#38A169" />
                    <h4 className="font-semibold text-primary">Easy Management</h4>
                  </div>
                  <p className="text-sm text-text-secondary">No technical skills required. Update content, add cases, and manage leads effortlessly.</p>
                </div>
                
                <div className="bg-white border border-border rounded-lg p-4 shadow-card slide-in-right stagger-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="FileText" size={20} color="#38A169" />
                    <h4 className="font-semibold text-primary">Legal Ethics Compliant</h4>
                  </div>
                  <p className="text-sm text-text-secondary">Built-in attorney advertising rules compliance for all 50 states with automatic updates.</p>
                </div>
              </div>
            </div>
          </FadeInRight>
        </div>

        {/* Legal Compliance Risks Section */}
        <ScrollReveal>
          <div className="bg-primary/5 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold text-primary mb-6 font-serif text-center">
              Legal Ethics & Compliance Risks
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {legalRisks.map((risk, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-card">
                  <div className="w-12 h-12 bg-error/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name="AlertTriangle" size={24} color="#E53E3E" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-2">{risk.title}</h4>
                  <p className="text-sm text-text-secondary mb-4">{risk.description}</p>
                  <div className="text-sm font-medium bg-error/10 text-error rounded-full px-3 py-1 inline-block">
                    {risk.consequence}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-text-secondary mb-4">
                Our platform automatically handles these compliance requirements to protect your practice.
              </p>
              <button className="btn-primary btn-hover-scale">
                Learn More About Legal Compliance
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Calculator */}
        <ScrollReveal>
          <div className="bg-surface rounded-2xl p-8 shadow-card">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4 font-serif">
                Calculate Your Potential Growth
              </h3>
              <p className="text-text-secondary">
                See how many more clients you could get with a professional website
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <label className="block text-sm font-medium text-primary mb-3">
                  How many new clients do you currently get per month?
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={currentVolume}
                    onChange={(e) => setCurrentVolume(parseInt(e.target.value))}
                    className="flex-1 h-2 bg-border rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="w-16 text-center">
                    <span className="text-2xl font-bold text-primary">{currentVolume}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={calculateGrowth}
                className="btn-primary w-full mb-6 btn-hover-scale"
              >
                Calculate My Growth Potential
              </button>

              {calculatorResult && (
                <div className="bg-white rounded-lg p-6 shadow-card zoom-in">
                  <h4 className="text-lg font-semibold text-primary mb-4 text-center">Your Growth Projection</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-text-secondary">{calculatorResult.current}</div>
                      <div className="text-sm text-text-secondary">Current Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-success">{calculatorResult.projected}</div>
                      <div className="text-sm text-text-secondary">Projected Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">+{calculatorResult.increase}</div>
                      <div className="text-sm text-text-secondary">Additional Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">${calculatorResult.revenue.toLocaleString()}</div>
                      <div className="text-sm text-text-secondary">Extra Revenue</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
