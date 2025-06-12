// /home/ubuntu/app/legaledge_pro/src/pages/landing-page/components/FAQSection.jsx
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { ScrollReveal, FadeIn } from '../../../utils/animations';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How quickly can my website be live?",
          answer: `Most law firm websites are live within 2-3 business days. Our streamlined process includes:

• Initial consultation and requirements gathering (Day 1)
• Design customization and content setup (Day 2)
• Review, revisions, and go-live (Day 3)

For complex custom designs or extensive content migration, the timeline may extend to 1-2 weeks. We provide a detailed timeline during your initial consultation.`
        },
        {
          question: "Do I need technical knowledge to manage my website?",
          answer: `Absolutely not! Our platform is designed specifically for legal professionals without technical backgrounds. Features include:

• Drag-and-drop content editor
• One-click updates for practice areas, attorney bios, and case studies
• Automated backups and security updates
• 24/7 technical support for any questions

Most attorneys are confidently updating their websites within 30 minutes of training.`
        },
        {
          question: "Can I migrate my existing website content?",
          answer: `Yes, we handle the complete migration process at no additional cost. Our migration service includes:

• Content transfer from your current website
• SEO preservation to maintain search rankings
• Contact form and lead data migration
• Domain transfer assistance
• Redirect setup to prevent broken links

We ensure zero downtime during the migration process.`
        }
      ]
    },
    {
      category: "Compliance & Security",
      questions: [
        {
          question: "Is the platform compliant with bar association requirements?",
          answer: `Yes, LegalEdge Pro is built specifically for legal professionals and includes all necessary compliance features:

• Attorney advertising compliance for all 50 states
• Client confidentiality and privilege protection
• Secure client portal with encryption
• GDPR and privacy law compliance
• Regular compliance audits and updates

We stay current with changing regulations and automatically update your website to maintain compliance.`
        },
        {
          question: "How secure is client data on the platform?",
          answer: `We implement enterprise-grade security measures specifically designed for legal practices:

• 256-bit SSL encryption for all data transmission
• SOC 2 Type II certified data centers
• Regular security audits and penetration testing
• Automated daily backups with 30-day retention
• Two-factor authentication for admin access
• HIPAA-compliant infrastructure for sensitive cases

Your client data is more secure than most traditional law firm setups.`
        },
        {
          question: "What about attorney-client privilege protection?",
          answer: `Attorney-client privilege is paramount in our design. Protection measures include:

• Secure client portals with individual access controls
• Encrypted document storage and transmission
• Audit trails for all client data access
• Automatic session timeouts for security
• Compliance with ABA Model Rules of Professional Conduct
• Regular legal technology security training for our team

We understand the unique confidentiality requirements of legal practice.`
        }
      ]
    },
    {
      category: "Features & Functionality",
      questions: [
        {
          question: "What lead generation tools are included?",
          answer: `Our platform includes comprehensive lead generation and client acquisition tools:

• Optimized contact forms with smart field validation
• Automated appointment scheduling with calendar integration
• Live chat with mobile notifications
• Lead scoring and qualification systems
• Email automation for lead nurturing
• Call tracking and analytics
• Client intake forms with e-signature capability
• Landing page builder for specific practice areas

These tools typically increase qualified leads by 40-60% within 90 days.`
        },
        {
          question: "Can I track my website\'s performance and ROI?",
          answer: `Yes, our analytics dashboard provides comprehensive insights specifically designed for law firms:

• Lead source tracking and attribution
• Conversion rate analysis by practice area
• Client acquisition cost calculations
• Website traffic and engagement metrics
• Phone call tracking and recording
• Form submission and consultation booking rates
• ROI reporting with revenue attribution
• Competitor analysis and market positioning

Monthly reports help you make data-driven decisions about your marketing investment.`
        },
        {
          question: "Is the website mobile-optimized?",
          answer: `Absolutely! Mobile optimization is critical since 70% of legal searches happen on mobile devices. Our mobile features include:

• Mobile-first responsive design
• Touch-friendly navigation and forms
• Fast loading times (under 2 seconds)
• Click-to-call functionality
• Mobile-optimized appointment scheduling
• Thumb-friendly contact forms
• Local search optimization for mobile
• Progressive web app capabilities

Your website will look and perform perfectly on all devices.`
        }
      ]
    },
    {
      category: "Pricing & Support",
      questions: [
        {
          question: "Are there any setup fees or hidden costs?",
          answer: `No setup fees or hidden costs. Our transparent pricing includes:

• Complete website design and development
• Content migration from existing website
• Domain and hosting (if needed)
• SSL certificate and security features
• Training and onboarding
• Ongoing technical support
• Regular updates and maintenance

The only additional costs are optional add-ons like advanced SEO or social media management, which are clearly priced upfront.`
        },
        {
          question: "What kind of support do you provide?",
          answer: `We provide comprehensive support designed for busy legal professionals:

• 24/7 technical support via phone, email, and chat
• Dedicated account manager for Enterprise clients
• Video training library and documentation
• Monthly group training webinars
• Priority support for urgent issues
• Legal technology consultation
• Marketing strategy guidance
• Regular check-ins to optimize performance

Our support team understands the unique needs of legal practices.`
        },
        {
          question: "Can I cancel my subscription at any time?",
          answer: `Yes, you can cancel your subscription at any time with 30 days' notice. Our cancellation policy includes:

• No long-term contracts or cancellation fees
• 30-day money-back guarantee for new subscribers
• Data export assistance if you choose to leave
• Website backup provided for your records
• Transition support to minimize disruption

We're confident in our service quality and don't believe in trapping clients with restrictive contracts.`
        }
      ]
    },
    {
      category: "Legal Compliance & Ethics",
      questions: [
        {
          question: "How do you handle jurisdiction-specific advertising rules?",
          answer: `We maintain a comprehensive database of state-specific legal advertising requirements and implement them automatically based on your practice location(s):

• Disclaimer language customized for each state bar association
• Proper labeling of advertising content as required
• Case results presentation with appropriate disclaimers
• Specialty certification display compliance
• Client testimonial handling according to state rules
• Regular updates when state bar rules change

Our legal compliance team monitors all 50 state bars and updates our system as regulations evolve.`
        },
        {
          question: "Does the platform help with client conflict checks?",
          answer: `Yes, our platform includes built-in conflict checking tools to help maintain ethical compliance:

• Automated conflict checking against existing client database
• Integration with popular practice management software
• Secure intake forms with conflict check questions
• Customizable conflict search parameters
• Audit trail of all conflict checks performed
• Notification system for potential conflicts

These tools help prevent ethical violations while streamlining your intake process.`
        },
        {
          question: "How do you help with data privacy compliance (GDPR, CCPA)?",
          answer: `Our platform includes comprehensive data privacy compliance features:

• Customizable privacy policies based on your jurisdiction
• Cookie consent management system
• Data subject access request handling
• Data retention policy implementation
• Right to be forgotten workflow
• Data processing agreement documentation
• Privacy impact assessment tools

These features ensure your website meets international, federal, and state privacy requirements.`
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const faqIndex = categoryIndex * 1000 + questionIndex;
    setOpenFAQ(openFAQ === faqIndex ? null : faqIndex);
  };

  return (
    <section id="faq" className="py-20 section-padding bg-surface reveal">
      <div className="container-max">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Get answers to common questions about our legal website platform, compliance, and support.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <ScrollReveal key={categoryIndex}>
              <div className="mb-12">
                {/* Category Header */}
                <div className="bg-primary/5 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-semibold text-primary font-serif">{category.category}</h3>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq, questionIndex) => {
                    const faqIndex = categoryIndex * 1000 + questionIndex;
                    const isOpen = openFAQ === faqIndex;

                    return (
                      <div key={questionIndex} className="bg-white rounded-lg shadow-card overflow-hidden">
                        <button
                          onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-surface transition-colors duration-250"
                        >
                          <h4 className="text-lg font-medium text-primary pr-4">{faq.question}</h4>
                          <Icon 
                            name={isOpen ? "ChevronUp" : "ChevronDown"} 
                            size={20} 
                            color="#1B365D"
                            className="flex-shrink-0 transition-transform duration-250"
                          />
                        </button>
                        
                        {isOpen && (
                          <FadeIn>
                            <div className="px-6 pb-6">
                              <div className="prose prose-lg max-w-none text-text-secondary">
                                <p className="whitespace-pre-line">{faq.answer}</p>
                              </div>
                            </div>
                          </FadeIn>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Contact Support */}
        <ScrollReveal>
          <div className="bg-white rounded-2xl shadow-card p-8 text-center max-w-2xl mx-auto mt-12">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={32} color="#C9A961" />
            </div>
            
            <h3 className="text-xl font-semibold text-primary mb-4">Still Have Questions?</h3>
            <p className="text-text-secondary mb-6">
              Our legal technology experts are here to help you make the right decision for your practice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center space-x-2 btn-hover-scale">
                <Icon name="Calendar" size={20} color="white" />
                <span>Schedule Consultation</span>
              </button>
              
              <button className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-250 flex items-center justify-center space-x-2">
                <Icon name="Phone" size={20} color="currentColor" />
                <span>Call (555) 123-4567</span>
              </button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} color="currentColor" />
                  <span>Response within 1 hour</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} color="currentColor" />
                  <span>Confidential consultation</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Knowledge Base */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-primary mb-4">Additional Resources</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="text-accent hover:text-accent/80 transition-colors duration-250 flex items-center space-x-2">
                <Icon name="BookOpen" size={16} color="currentColor" />
                <span>Legal Website Guide</span>
              </button>
              <button className="text-accent hover:text-accent/80 transition-colors duration-250 flex items-center space-x-2">
                <Icon name="Video" size={16} color="currentColor" />
                <span>Platform Demo Videos</span>
              </button>
              <button className="text-accent hover:text-accent/80 transition-colors duration-250 flex items-center space-x-2">
                <Icon name="Download" size={16} color="currentColor" />
                <span>Compliance Checklist</span>
              </button>
              <button className="text-accent hover:text-accent/80 transition-colors duration-250 flex items-center space-x-2">
                <Icon name="Users" size={16} color="currentColor" />
                <span>User Community</span>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
