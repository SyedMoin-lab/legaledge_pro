import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Managing Partner",
      firm: "Johnson & Associates",
      location: "Denver, CO",
      practiceArea: "Personal Injury",
      firmSize: "8 attorneys",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      linkedinVerified: true,
      rating: 5,
      quote: `LegalEdge Pro transformed our practice completely. Within 60 days of launching our new website, we saw a 300% increase in qualified leads. The automated intake forms and appointment scheduling have saved us countless hours, and the professional design has significantly improved our credibility with potential clients.`,
      results: {
        clientIncrease: "300%",
        timeToResults: "60 days",
        leadQuality: "85% qualified",
        roi: "450%"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hasVideo: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      title: "Solo Practitioner",
      firm: "Rodriguez Law Office",
      location: "Phoenix, AZ",
      practiceArea: "Criminal Defense",
      firmSize: "Solo practice",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      linkedinVerified: true,
      rating: 5,
      quote: `As a solo practitioner, I needed a website that could compete with larger firms. LegalEdge Pro delivered exactly that. The compliance features gave me peace of mind, and the lead generation tools helped me grow from 5 clients per month to 20. The ROI has been incredible.`,
      results: {
        clientIncrease: "400%",
        timeToResults: "45 days",
        leadQuality: "90% qualified",
        roi: "380%"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hasVideo: true
    },
    {
      id: 3,
      name: "Emily Chen",
      title: "Partner",
      firm: "Chen & Partners Family Law",
      location: "Seattle, WA",
      practiceArea: "Family Law",
      firmSize: "12 attorneys",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      linkedinVerified: true,
      rating: 5,
      quote: `The mobile optimization alone was worth the investment. 70% of our clients now find us through mobile searches, and our new website converts them at twice the rate of our old site. The client portal has also improved our service delivery significantly.`,
      results: {
        clientIncrease: "240%",
        timeToResults: "30 days",
        leadQuality: "88% qualified",
        roi: "320%"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hasVideo: false
    },
    {
      id: 4,
      name: "David Thompson",
      title: "Senior Partner",
      firm: "Thompson Business Law",
      location: "Atlanta, GA",
      practiceArea: "Business Law",
      firmSize: "15 attorneys",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      linkedinVerified: true,
      rating: 5,
      quote: `We were skeptical about switching platforms, but the migration was seamless and the results speak for themselves. Our website now generates 3x more leads, and the quality of inquiries has improved dramatically. The analytics dashboard helps us make data-driven decisions.`,
      results: {
        clientIncrease: "280%",
        timeToResults: "75 days",
        leadQuality: "92% qualified",
        roi: "410%"
      },
      videoThumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      hasVideo: true
    }
  ];

  const caseStudies = [
    {
      firm: "Martinez Personal Injury Law",
      challenge: "Outdated website with poor mobile experience losing clients to competitors",
      solution: "Complete website redesign with mobile-first approach and lead generation optimization",
      timeline: "6 weeks implementation",
      results: [
        "350% increase in online leads",
        "65% improvement in mobile conversion",
        "$280,000 additional revenue in first year",
        "Page load time reduced from 8s to 1.9s"
      ],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      firm: "Wilson Family Law Group",
      challenge: "No online presence and relying entirely on referrals for new clients",
      solution: "Built comprehensive website with SEO optimization and local search focus",
      timeline: "4 weeks implementation",
      results: [
        "Generated 45 new clients in first 90 days",
        "Ranked #1 for 'family lawyer [city]'",
        "200% increase in consultation requests",
        "Reduced marketing costs by 40%"
      ],
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPlaying) {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, testimonials.length]);

  const currentTestimonial = testimonials[activeTestimonial];

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  return (
    <section id="testimonials" className="py-20 section-padding bg-surface">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">
            Success Stories from Legal Professionals
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            See how attorneys across the country have transformed their practices with LegalEdge Pro
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2">
            {/* Video/Image Side */}
            <div className="relative">
              {currentTestimonial.hasVideo ? (
                <div className="relative h-full min-h-96">
                  <Image 
                    src={currentTestimonial.videoThumbnail}
                    alt={`${currentTestimonial.name} Video Testimonial`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={handleVideoPlay}
                      className="w-20 h-20 bg-accent rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors duration-250 hover:scale-105 transform"
                    >
                      <Icon name="Play" size={32} color="white" className="ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-primary">
                    Video Testimonial
                  </div>
                </div>
              ) : (
                <div className="h-full min-h-96 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center">
                    <Image 
                      src={currentTestimonial.avatar}
                      alt={currentTestimonial.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
                    />
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Icon key={i} name="Star" size={20} color="#C9A961" />
                      ))}
                    </div>
                    <p className="text-text-secondary">Written Testimonial</p>
                  </div>
                </div>
              )}
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12">
              {/* Attorney Info */}
              <div className="flex items-center space-x-4 mb-6">
                <Image 
                  src={currentTestimonial.avatar}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-border"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-lg font-semibold text-primary">{currentTestimonial.name}</h3>
                    {currentTestimonial.linkedinVerified && (
                      <Icon name="CheckCircle" size={16} color="#0077B5" />
                    )}
                  </div>
                  <p className="text-text-secondary">{currentTestimonial.title}</p>
                  <p className="text-sm text-text-secondary">{currentTestimonial.firm} • {currentTestimonial.location}</p>
                </div>
              </div>

              {/* Practice Info */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {currentTestimonial.practiceArea}
                </span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {currentTestimonial.firmSize}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} color="#C9A961" />
                ))}
                <span className="ml-2 text-sm text-text-secondary">Verified Review</span>
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-text-primary leading-relaxed mb-8 italic">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Results */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{currentTestimonial.results.clientIncrease}</div>
                  <div className="text-sm text-text-secondary">Client Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{currentTestimonial.results.timeToResults}</div>
                  <div className="text-sm text-text-secondary">Time to Results</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{currentTestimonial.results.leadQuality}</div>
                  <div className="text-sm text-text-secondary">Qualified Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{currentTestimonial.results.roi}</div>
                  <div className="text-sm text-text-secondary">ROI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="p-6 bg-surface border-t border-border">
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-250 ${
                      activeTestimonial === index ? 'bg-accent' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-surface transition-colors duration-250"
                >
                  <Icon name="ChevronLeft" size={20} color="currentColor" />
                </button>
                <button
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-surface transition-colors duration-250"
                >
                  <Icon name="ChevronRight" size={20} color="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-lg shadow-card overflow-hidden">
              <Image 
                src={study.image}
                alt={study.firm}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">{study.firm}</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-error mb-2">Challenge:</h4>
                    <p className="text-sm text-text-secondary">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-primary mb-2">Solution:</h4>
                    <p className="text-sm text-text-secondary">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-accent mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <Icon name="CheckCircle" size={14} color="#38A169" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-border">
                  <span className="text-sm font-medium text-accent">{study.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Carousel */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-primary mb-8">Trusted by 500+ Law Firms</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="w-24 h-12 bg-border rounded flex items-center justify-center">
                <span className="text-xs text-text-secondary font-medium">Law Firm {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;