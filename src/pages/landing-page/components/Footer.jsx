import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#solutions' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'FAQ', href: '#faq' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Compliance', href: '/compliance' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Support', href: '/support' },
      { name: 'System Status', href: '/status' },
      { name: 'API Documentation', href: '/docs' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press Kit', href: '/press' },
      { name: 'Partner Program', href: '/partners' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/company/legaledgepro' },
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com/legaledgepro' },
    { name: 'Facebook', icon: 'Facebook', href: 'https://facebook.com/legaledgepro' },
    { name: 'YouTube', icon: 'Youtube', href: 'https://youtube.com/legaledgepro' }
  ];

  const certifications = [
    { name: 'SOC 2 Certified', icon: 'Shield' },
    { name: 'GDPR Compliant', icon: 'Lock' },
    { name: 'ABA Approved', icon: 'Award' },
    { name: 'SSL Secured', icon: 'CheckCircle' }
  ];

  const handleLinkClick = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For external links, you would navigate to them
      console.log('Navigate to:', href);
    }
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="container-max">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Scale" size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-serif">LegalEdge Pro</h3>
                  <p className="text-sm opacity-80">Client Growth Platform</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed">
                The only legal website platform that combines professional design, client acquisition tools, 
                and industry compliance in one easy-to-use solution.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} color="#C9A961" />
                  <span className="text-sm">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} color="#C9A961" />
                  <span className="text-sm">hello@legaledgepro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={16} color="#C9A961" />
                  <span className="text-sm">123 Legal District, Suite 100, Law City, LC 12345</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-white/80 hover:text-accent transition-colors duration-250 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-white/80 hover:text-accent transition-colors duration-250 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-white/80 hover:text-accent transition-colors duration-250 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-white/80 hover:text-accent transition-colors duration-250 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-2 font-serif">Stay Updated</h4>
                <p className="text-white/80">
                  Get the latest legal technology insights and platform updates delivered to your inbox.
                </p>
              </div>
              
              <div className="flex space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
                <button className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-250">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-primary/80 section-padding py-6">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-white/80">
              © {currentYear} LegalEdge Pro. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  onClick={() => handleLinkClick(social.href)}
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-250"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={16} color="white" />
                </button>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-center space-x-1 text-xs text-white/60">
                  <Icon name={cert.icon} size={12} color="currentColor" />
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-primary/60 section-padding py-4">
        <div className="container-max">
          <p className="text-xs text-white/60 text-center leading-relaxed">
            LegalEdge Pro is a website platform designed for legal professionals. This platform does not provide legal advice. 
            Attorney advertising rules vary by jurisdiction. Please consult your local bar association for compliance requirements. 
            Results may vary based on individual circumstances and market conditions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;