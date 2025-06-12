import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    firmName: '',
    practiceArea: '',
    firmSize: '',
    currentWebsite: '',
    primaryGoal: '',
    timeframe: '',
    budget: '',
    additionalInfo: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const practiceAreas = [
    'Personal Injury',
    'Family Law',
    'Criminal Defense',
    'Business Law',
    'Real Estate',
    'Immigration',
    'Estate Planning',
    'Employment Law',
    'Bankruptcy',
    'Other'
  ];

  const firmSizes = [
    'Solo Practitioner',
    '2-5 Attorneys',
    '6-10 Attorneys',
    '11-25 Attorneys',
    '26-50 Attorneys',
    '50+ Attorneys'
  ];

  const goals = [
    'Generate more leads',
    'Improve online credibility',
    'Replace outdated website',
    'Better mobile experience',
    'Increase conversion rates',
    'Enhance SEO ranking',
    'Streamline client intake',
    'All of the above'
  ];

  const timeframes = [
    'ASAP (Within 1 week)',
    'Within 1 month',
    'Within 3 months',
    'Within 6 months',
    'Just exploring options'
  ];

  const budgets = [
    'Under $100/month',
    '$100-200/month',
    '$200-400/month',
    '$400-600/month',
    '$600+ per month',
    'Need consultation to determine'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const getStepProgress = () => {
    return (currentStep / 3) * 100;
  };

  if (showSuccess) {
    return (
      <section id="consultation" className="py-20 section-padding bg-background">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Icon name="CheckCircle" size={40} color="#38A169" />
            </div>
            
            <h2 className="text-3xl font-bold text-primary mb-6 font-serif">
              Thank You for Your Interest!
            </h2>
            
            <p className="text-xl text-text-secondary mb-8">
              We've received your consultation request and will contact you within 1 hour during business hours.
            </p>
            
            <div className="bg-surface rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-primary mb-4">What Happens Next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <h4 className="font-medium text-primary">Initial Consultation (15-30 minutes)</h4>
                    <p className="text-sm text-text-secondary">We'll discuss your current challenges and goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <h4 className="font-medium text-primary">Custom Strategy Presentation</h4>
                    <p className="text-sm text-text-secondary">Tailored recommendations for your practice</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <h4 className="font-medium text-primary">Live Platform Demo</h4>
                    <p className="text-sm text-text-secondary">See exactly how our solution works for your firm</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-card p-6">
              <h3 className="font-semibold text-primary mb-4">Your Consultation Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-left">
                <div>
                  <span className="text-text-secondary">Name:</span>
                  <span className="ml-2 font-medium">{formData.firstName} {formData.lastName}</span>
                </div>
                <div>
                  <span className="text-text-secondary">Firm:</span>
                  <span className="ml-2 font-medium">{formData.firmName}</span>
                </div>
                <div>
                  <span className="text-text-secondary">Practice Area:</span>
                  <span className="ml-2 font-medium">{formData.practiceArea}</span>
                </div>
                <div>
                  <span className="text-text-secondary">Firm Size:</span>
                  <span className="ml-2 font-medium">{formData.firmSize}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="consultation" className="py-20 section-padding bg-background">
      <div className="container-max">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
              Get Your Free Legal Website Consultation
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Schedule a personalized consultation to see how LegalEdge Pro can transform your practice and increase client acquisition.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Calendar" size={24} color="#C9A961" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Free 30-Minute Consultation</h3>
              <p className="text-sm text-text-secondary">No cost, no obligation strategy session</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="BarChart" size={24} color="#C9A961" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Custom Growth Analysis</h3>
              <p className="text-sm text-text-secondary">Personalized recommendations for your practice</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Gift" size={24} color="#C9A961" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Exclusive Beta Pricing</h3>
              <p className="text-sm text-text-secondary">Special rates for early adopters</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Progress Bar */}
            <div className="bg-surface p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-primary">Step {currentStep} of 3</h3>
                <span className="text-sm text-text-secondary">{Math.round(getStepProgress())}% Complete</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div 
                  className="progress-bar rounded-full h-2 transition-all duration-500"
                  style={{ width: `${getStepProgress()}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8">
              {/* Step 1: Basic Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-primary mb-6">Basic Information</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="form-input w-full"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="form-input w-full"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="form-input w-full"
                        placeholder="your.email@lawfirm.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-primary mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="form-input w-full"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Law Firm Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firmName}
                      onChange={(e) => handleInputChange('firmName', e.target.value)}
                      className="form-input w-full"
                      placeholder="Your Law Firm Name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Current Website (if any)
                    </label>
                    <input
                      type="url"
                      value={formData.currentWebsite}
                      onChange={(e) => handleInputChange('currentWebsite', e.target.value)}
                      className="form-input w-full"
                      placeholder="https://www.yourlawfirm.com"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Practice Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-primary mb-6">Practice Details</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Primary Practice Area *
                    </label>
                    <select
                      required
                      value={formData.practiceArea}
                      onChange={(e) => handleInputChange('practiceArea', e.target.value)}
                      className="form-input w-full"
                    >
                      <option value="">Select your primary practice area</option>
                      {practiceAreas.map((area) => (
                        <option key={area} value={area}>{area}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Firm Size *
                    </label>
                    <select
                      required
                      value={formData.firmSize}
                      onChange={(e) => handleInputChange('firmSize', e.target.value)}
                      className="form-input w-full"
                    >
                      <option value="">Select your firm size</option>
                      {firmSizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Primary Goal *
                    </label>
                    <select
                      required
                      value={formData.primaryGoal}
                      onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                      className="form-input w-full"
                    >
                      <option value="">What's your main goal?</option>
                      {goals.map((goal) => (
                        <option key={goal} value={goal}>{goal}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Implementation Timeframe *
                    </label>
                    <select
                      required
                      value={formData.timeframe}
                      onChange={(e) => handleInputChange('timeframe', e.target.value)}
                      className="form-input w-full"
                    >
                      <option value="">When do you want to get started?</option>
                      {timeframes.map((timeframe) => (
                        <option key={timeframe} value={timeframe}>{timeframe}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 3: Budget & Additional Info */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h4 className="text-xl font-semibold text-primary mb-6">Budget & Additional Information</h4>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Monthly Budget Range *
                    </label>
                    <select
                      required
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="form-input w-full"
                    >
                      <option value="">Select your budget range</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>{budget}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Additional Information
                    </label>
                    <textarea
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                      className="form-input w-full h-32 resize-none"
                      placeholder="Tell us about any specific challenges, requirements, or questions you have..."
                    />
                  </div>

                  {/* Summary */}
                  <div className="bg-surface rounded-lg p-6">
                    <h5 className="font-semibold text-primary mb-4">Consultation Summary</h5>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-text-secondary">Contact:</span>
                        <span className="ml-2">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <div>
                        <span className="text-text-secondary">Firm:</span>
                        <span className="ml-2">{formData.firmName}</span>
                      </div>
                      <div>
                        <span className="text-text-secondary">Practice:</span>
                        <span className="ml-2">{formData.practiceArea}</span>
                      </div>
                      <div>
                        <span className="text-text-secondary">Size:</span>
                        <span className="ml-2">{formData.firmSize}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-250 ${
                    currentStep === 1
                      ? 'text-text-secondary cursor-not-allowed' :'text-primary hover:bg-surface'
                  }`}
                >
                  Previous
                </button>

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" size={20} color="white" className="animate-spin" />
                        <span>Scheduling...</span>
                      </>
                    ) : (
                      <>
                        <Icon name="Calendar" size={20} color="white" />
                        <span>Schedule Consultation</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Trust Elements */}
          <div className="mt-8 text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} color="currentColor" />
                <span>Your information is secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} color="currentColor" />
                <span>Response within 1 hour</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="X" size={16} color="currentColor" />
                <span>No spam, ever</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;