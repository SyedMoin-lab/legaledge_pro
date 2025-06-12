import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  });
  const [spotsRemaining, setSpotsRemaining] = useState(23);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Simulate spots being taken
    const spotsTimer = setInterval(() => {
      setSpotsRemaining(prev => {
        if (prev > 5) {
          return Math.max(5, prev - Math.floor(Math.random() * 2));
        }
        return prev;
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(spotsTimer);
  }, []);

  const offers = [
    {
      title: "30% Off First Year",
      description: "Save up to $1,200 on your annual subscription",
      value: "$1,200",
      icon: "DollarSign"
    },
    {
      title: "Free Custom Design",
      description: "Professional custom website design (normally $2,500)",
      value: "$2,500",
      icon: "Palette"
    },
    {
      title: "Priority Setup",
      description: "Skip the queue and get live in 24 hours",
      value: "Priceless",
      icon: "Zap"
    },
    {
      title: "3 Months Free SEO",
      description: "Advanced SEO package included at no cost",
      value: "$450",
      icon: "TrendingUp"
    }
  ];

  const testimonialSnippets = [
    {
      text: "Best decision I made for my practice!",
      author: "Sarah M., Personal Injury Attorney",
      time: "2 hours ago"
    },
    {
      text: "Doubled my client intake in 60 days",
      author: "Michael R., Criminal Defense",
      time: "4 hours ago"
    },
    {
      text: "The ROI has been incredible",
      author: "Jennifer L., Family Law",
      time: "6 hours ago"
    }
  ];

  const handleClaimOffer = () => {
    const consultationSection = document.querySelector('#consultation');
    if (consultationSection) {
      consultationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 section-padding bg-gradient-to-br from-accent/10 to-primary/10">
      <div className="container-max">
        {/* Main Offer */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-accent to-accent/80 text-white p-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 font-serif">Limited-Time Beta Access</h2>
            <p className="text-xl opacity-90">Join the first 100 law firms and save big</p>
          </div>

          <div className="p-8">
            {/* Countdown Timer */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-primary mb-6">Offer Expires In:</h3>
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((unit, index) => (
                  <div key={index} className="bg-primary text-white rounded-lg p-4">
                    <div className="text-2xl font-bold">{unit.value.toString().padStart(2, '0')}</div>
                    <div className="text-sm opacity-80">{unit.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spots Remaining */}
            <div className="bg-error/10 border border-error/20 rounded-lg p-4 mb-8 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Icon name="AlertTriangle" size={20} color="#E53E3E" />
                <span className="font-semibold text-error">Only {spotsRemaining} Beta Spots Remaining</span>
              </div>
              <p className="text-sm text-text-secondary">
                We're limiting beta access to ensure personalized onboarding for each firm
              </p>
            </div>

            {/* Offers Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {offers.map((offer, index) => (
                <div key={index} className="bg-surface rounded-lg p-6 border border-accent/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={offer.icon} size={24} color="#C9A961" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary mb-2">{offer.title}</h4>
                      <p className="text-sm text-text-secondary mb-2">{offer.description}</p>
                      <div className="text-lg font-bold text-accent">Value: {offer.value}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Value */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8 text-center">
              <h4 className="text-lg font-semibold text-primary mb-2">Total Package Value</h4>
              <div className="text-3xl font-bold text-accent mb-2">$4,150+</div>
              <p className="text-text-secondary">Yours free when you join during beta</p>
            </div>

            {/* Social Proof */}
            <div className="mb-8">
              <h4 className="font-semibold text-primary mb-4 text-center">Recent Beta Members Say:</h4>
              <div className="space-y-3">
                {testimonialSnippets.map((snippet, index) => (
                  <div key={index} className="bg-white border border-border rounded-lg p-4 flex items-center justify-between">
                    <div>
                      <p className="text-text-primary font-medium">"{snippet.text}"</p>
                      <p className="text-sm text-text-secondary">{snippet.author}</p>
                    </div>
                    <div className="text-xs text-accent">{snippet.time}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <button 
                onClick={handleClaimOffer}
                className="btn-primary text-xl px-12 py-4 mb-4 hover:scale-105 transform transition-all duration-250"
              >
                Claim Your Beta Spot Now
              </button>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="Shield" size={16} color="currentColor" />
                  <span>30-day guarantee</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="CreditCard" size={16} color="currentColor" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="X" size={16} color="currentColor" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="bg-white rounded-lg shadow-card p-8 text-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Icon name="Shield" size={32} color="#38A169" />
          </div>
          
          <h3 className="text-2xl font-bold text-primary mb-4 font-serif">100% Risk-Free Guarantee</h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Try LegalEdge Pro for 30 days. If you don't see an increase in qualified leads and client inquiries, 
            we'll refund every penny. No questions asked, no hassle.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <Icon name="TrendingUp" size={24} color="#38A169" className="mx-auto mb-2" />
              <h4 className="font-semibold text-primary mb-1">More Leads</h4>
              <p className="text-sm text-text-secondary">Or your money back</p>
            </div>
            <div className="text-center">
              <Icon name="Users" size={24} color="#38A169" className="mx-auto mb-2" />
              <h4 className="font-semibold text-primary mb-1">Better Clients</h4>
              <p className="text-sm text-text-secondary">Higher quality inquiries</p>
            </div>
            <div className="text-center">
              <Icon name="DollarSign" size={24} color="#38A169" className="mx-auto mb-2" />
              <h4 className="font-semibold text-primary mb-1">Increased Revenue</h4>
              <p className="text-sm text-text-secondary">Measurable ROI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;