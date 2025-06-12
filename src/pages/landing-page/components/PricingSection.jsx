import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [firmSize, setFirmSize] = useState(1);
  const [practiceAreas, setPracticeAreas] = useState(['general']);

  const plans = [
    {
      name: "Solo Practitioner",
      description: "Perfect for individual attorneys starting their practice",
      monthlyPrice: 99,
      yearlyPrice: 990,
      savings: "Save $198/year",
      popular: false,
      features: [
        "Professional website design",
        "Mobile-optimized responsive layout",
        "Basic SEO optimization",
        "Contact forms and lead capture",
        "Attorney profile pages",
        "Practice area pages (up to 5)",
        "Client testimonials section",
        "Basic analytics dashboard",
        "SSL certificate included",
        "Email support",
        "1 GB storage",
        "Bar association compliance"
      ],
      limitations: [
        "Single attorney profile",
        "Basic customization options",
        "Standard templates only"
      ],
      cta: "Start Solo Plan",
      badge: null
    },
    {
      name: "Small Firm",
      description: "Ideal for growing law firms with multiple attorneys",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      savings: "Save $398/year",
      popular: true,
      features: [
        "Everything in Solo Practitioner",
        "Up to 10 attorney profiles",
        "Advanced SEO tools",
        "Appointment scheduling system",
        "Live chat integration",
        "Case study showcases",
        "Client portal access",
        "Advanced analytics & reporting",
        "Priority email support",
        "Phone support included",
        "5 GB storage",
        "Custom domain included",
        "Social media integration",
        "Newsletter management"
      ],
      limitations: [
        "Up to 10 attorney profiles",
        "Standard integrations"
      ],
      cta: "Start Small Firm Plan",
      badge: "Most Popular"
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large law firms",
      monthlyPrice: 399,
      yearlyPrice: 3990,
      savings: "Save $798/year",
      popular: false,
      features: [
        "Everything in Small Firm",
        "Unlimited attorney profiles",
        "Custom website design",
        "Advanced lead generation tools",
        "CRM integration",
        "Document management system",
        "Multi-location support",
        "White-label options",
        "Dedicated account manager",
        "24/7 priority support",
        "Unlimited storage",
        "Custom integrations",
        "Advanced security features",
        "Training and onboarding"
      ],
      limitations: [],
      cta: "Contact Sales",
      badge: "Best Value"
    }
  ];

  const practiceAreaOptions = [
    { id: 'general', name: 'General Practice', multiplier: 1 },
    { id: 'personal-injury', name: 'Personal Injury', multiplier: 1.2 },
    { id: 'family-law', name: 'Family Law', multiplier: 1.1 },
    { id: 'criminal-defense', name: 'Criminal Defense', multiplier: 1.15 },
    { id: 'business-law', name: 'Business Law', multiplier: 1.25 },
    { id: 'real-estate', name: 'Real Estate', multiplier: 1.1 },
    { id: 'immigration', name: 'Immigration', multiplier: 1.2 }
  ];

  const addOns = [
    {
      name: "Advanced SEO Package",
      description: "Local SEO optimization, keyword research, and monthly reporting",
      price: 149,
      icon: "Search"
    },
    {
      name: "Social Media Management",
      description: "Professional social media content and management",
      price: 199,
      icon: "Share2"
    },
    {
      name: "Pay-Per-Click Advertising",
      description: "Google Ads management and optimization",
      price: 299,
      icon: "Target"
    },
    {
      name: "Content Writing Service",
      description: "Professional legal content creation and blog posts",
      price: 249,
      icon: "PenTool"
    }
  ];

  const calculatePrice = (basePrice) => {
    let price = basePrice;
    
    // Firm size multiplier
    if (firmSize > 10) {
      price *= 1.5;
    } else if (firmSize > 5) {
      price *= 1.2;
    }
    
    // Practice area multiplier
    const maxMultiplier = Math.max(...practiceAreas.map(area => 
      practiceAreaOptions.find(option => option.id === area)?.multiplier || 1
    ));
    price *= maxMultiplier;
    
    return Math.round(price);
  };

  const handlePracticeAreaChange = (areaId) => {
    setPracticeAreas(prev => 
      prev.includes(areaId) 
        ? prev.filter(id => id !== areaId)
        : [...prev, areaId]
    );
  };

  return (
    <section id="pricing" className="py-20 section-padding bg-background">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
            Choose Your Growth Plan
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Transparent pricing designed for law firms of all sizes. No hidden fees, no long-term contracts.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex bg-surface rounded-lg p-1 mb-8">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-250 ${
                billingCycle === 'monthly' ?'bg-white text-primary shadow-sm' :'text-text-secondary hover:text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-250 ${
                billingCycle === 'yearly' ?'bg-white text-primary shadow-sm' :'text-text-secondary hover:text-primary'
              }`}
            >
              Yearly
              <span className="ml-2 bg-accent text-white px-2 py-1 rounded text-xs">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Interactive Calculator */}
        <div className="bg-surface rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-semibold text-primary mb-6 text-center">Customize Your Quote</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Firm Size */}
            <div>
              <label className="block text-sm font-medium text-primary mb-3">
                Number of Attorneys: {firmSize}
              </label>
              <input
                type="range"
                min="1"
                max="50"
                value={firmSize}
                onChange={(e) => setFirmSize(parseInt(e.target.value))}
                className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-text-secondary mt-1">
                <span>1</span>
                <span>25</span>
                <span>50+</span>
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <label className="block text-sm font-medium text-primary mb-3">
                Practice Areas
              </label>
              <div className="grid grid-cols-2 gap-2">
                {practiceAreaOptions.slice(0, 6).map((area) => (
                  <label key={area.id} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={practiceAreas.includes(area.id)}
                      onChange={() => handlePracticeAreaChange(area.id)}
                      className="rounded border-border text-accent focus:ring-accent"
                    />
                    <span className="text-sm text-text-secondary">{area.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const price = billingCycle === 'monthly' 
              ? calculatePrice(plan.monthlyPrice)
              : calculatePrice(plan.yearlyPrice);
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-card overflow-hidden ${
                  plan.popular ? 'ring-2 ring-accent transform scale-105' : ''
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-primary mb-2 font-serif">{plan.name}</h3>
                    <p className="text-text-secondary mb-6">{plan.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">${price}</span>
                      <span className="text-text-secondary">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                    </div>
                    
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-success font-medium">{plan.savings}</p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Icon name="CheckCircle" size={16} color="#38A169" className="mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Limitations */}
                  {plan.limitations.length > 0 && (
                    <div className="space-y-2 mb-8 pt-4 border-t border-border">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-start space-x-3">
                          <Icon name="Minus" size={16} color="#4A5568" className="mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA */}
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-250 ${
                      plan.popular
                        ? 'btn-primary' :'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add-ons */}
        <div className="bg-surface rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center font-serif">Optional Add-ons</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-card">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={addon.icon} size={24} color="#1B365D" />
                </div>
                <h4 className="font-semibold text-primary mb-2">{addon.name}</h4>
                <p className="text-sm text-text-secondary mb-4">{addon.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-accent">${addon.price}/mo</span>
                  <button className="text-sm text-primary hover:text-accent transition-colors duration-250">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mt-12 bg-white rounded-2xl shadow-card overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="text-xl font-semibold text-primary text-center">Feature Comparison</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-surface">
                <tr>
                  <th className="text-left p-4 font-medium text-primary">Features</th>
                  <th className="text-center p-4 font-medium text-primary">Solo</th>
                  <th className="text-center p-4 font-medium text-primary">Small Firm</th>
                  <th className="text-center p-4 font-medium text-primary">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 text-text-secondary">Attorney Profiles</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center">Up to 10</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-secondary">Storage</td>
                  <td className="p-4 text-center">1 GB</td>
                  <td className="p-4 text-center">5 GB</td>
                  <td className="p-4 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-secondary">Support</td>
                  <td className="p-4 text-center">Email</td>
                  <td className="p-4 text-center">Email + Phone</td>
                  <td className="p-4 text-center">24/7 Priority</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-secondary">Custom Design</td>
                  <td className="p-4 text-center">
                    <Icon name="X" size={16} color="#E53E3E" className="mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Icon name="X" size={16} color="#E53E3E" className="mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <Icon name="CheckCircle" size={16} color="#38A169" className="mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-3 bg-success/10 border border-success/20 rounded-lg px-6 py-4">
            <Icon name="Shield" size={24} color="#38A169" />
            <div className="text-left">
              <h4 className="font-semibold text-success">30-Day Money-Back Guarantee</h4>
              <p className="text-sm text-text-secondary">Not satisfied? Get a full refund, no questions asked.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;