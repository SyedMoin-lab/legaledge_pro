import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustBar = () => {
  const metrics = [
    {
      icon: "Users",
      value: "500+",
      label: "Law Firms Served",
      color: "#38A169"
    },
    {
      icon: "TrendingUp",
      value: "40%",
      label: "Avg Client Increase",
      color: "#C9A961"
    },
    {
      icon: "Shield",
      value: "100%",
      label: "Bar Compliant",
      color: "#1B365D"
    },
    {
      icon: "Clock",
      value: "24/7",
      label: "Support Available",
      color: "#2C5282"
    }
  ];

  const certifications = [
    { name: "ABA Compliant", icon: "Award" },
    { name: "SSL Secured", icon: "Lock" },
    { name: "GDPR Ready", icon: "Shield" },
    { name: "SOC 2 Certified", icon: "CheckCircle" }
  ];

  return (
    <section className="bg-surface py-12 section-padding border-y border-border">
      <div className="container-max">
        {/* Real-time Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-card">
                <Icon name={metric.icon} size={24} color={metric.color} />
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-sm text-text-secondary">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="border-t border-border pt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-primary mb-2">Trusted & Certified</h3>
            <p className="text-text-secondary">Industry-leading security and compliance standards</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2 text-text-secondary">
                <Icon name={cert.icon} size={20} color="#38A169" />
                <span className="text-sm font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-primary">Live Activity</h4>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-text-secondary">Real-time updates</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">Johnson & Associates just got 3 new leads</span>
              <span className="text-accent font-medium">2 min ago</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">Miller Law Firm website went live</span>
              <span className="text-accent font-medium">5 min ago</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-secondary">Davis Legal increased conversion by 45%</span>
              <span className="text-accent font-medium">12 min ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;