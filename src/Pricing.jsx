import { useState } from 'react';
import './Pricing.css';

const PricingPage = () => {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [activeFeature, setActiveFeature] = useState('websites');
  
  const plans = {
    starter: {
      name: "Starter",
      monthlyPrice: 29,
      annualPrice: 19,
      features: [
        "Responsive website design",
        "Contact form integration",
        "Mobile-friendly design",
        "1 revision round",
        "Chatbot"
      ],
      popular: false,
      ctaText: "Get Started"
    },
    business: {
      name: "Business",
      monthlyPrice: 79,
      annualPrice: 59,
      features: [
        "Everything in Starter",
        "Up to 10 pages",
        "Custom animations",
        "Social media integration",
        "3 revision rounds",
        "Content management system"
      ],
      popular: true,
      ctaText: "Try Business"
    },
    enterprise: {
      name: "Enterprise",
      monthlyPrice: 149,
      annualPrice: 119,
      features: [
        "Everything in Business",
        "Unlimited pages",
        "E-commerce functionality",
        "Custom database integration",
        "Payment gateway setup",
        "User authentication system",
        "Priority support",
        "Unlimited revisions",
        "Performance optimization"
      ],
      popular: false,
      ctaText: "Contact Sales"
    }
  };

  const features = [
    {
      id: 'websites',
      name: 'Websites',
      description: 'Professional websites tailored for your business needs'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      description: 'Powerful online stores to help you sell globally'
    },
    {
      id: 'apps',
      name: 'Web Apps',
      description: 'Custom web applications to streamline your business'
    }
  ];

  const toggleBilling = () => {
    setAnnualBilling(!annualBilling);
  };

  const handleFeatureChange = (featureId) => {
    setActiveFeature(featureId);
  };

  return (
    <div className="pricing-page">
      <div className="pricing-header">
        <h1>Simple, transparent pricing</h1>
        <p>Choose the perfect plan for your business needs</p>
        
        <div className="feature-tabs">
          {features.map(feature => (
            <button 
              key={feature.id}
              className={`feature-tab ${activeFeature === feature.id ? 'active' : ''}`}
              onClick={() => handleFeatureChange(feature.id)}
            >
              {feature.name}
            </button>
          ))}
        </div>
        
        <div className="feature-description">
          {features.find(f => f.id === activeFeature)?.description}
        </div>

        {/* <div className="billing-toggle">
          <span className={!annualBilling ? 'active' : ''}>Monthly</span>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={annualBilling} 
              onChange={toggleBilling}
            />
            <span className="slider round"></span>
          </label>
          <span className={annualBilling ? 'active' : ''}>
            Annually <span className="save-badge">Save 25%</span>
          </span>
        </div> */}
      </div>

      <div className="pricing-plans">
        {Object.values(plans).map((plan) => (
          <div key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <h2>{plan.name}</h2>
            {/* <div className="price">
              <span className="currency">$</span>
              <span className="amount">
                {annualBilling ? plan.annualPrice : plan.monthlyPrice}
              </span>
              <span className="period">/ month</span>
            </div> */}
            {/* {annualBilling && (
              <div className="billed-annually">Billed annually</div>
            )} */}
            <ul className="features-list">
              {plan.features.map((feature, index) => (
                <li key={index}><span className="check-icon">✓</span> {feature}</li>
              ))}
            </ul>
            {/* <button className={`cta-button ${plan.popular ? 'primary' : 'secondary'}`}>
              {plan.ctaText}
            </button> */}
          </div>
        ))}
      </div>

      <div className="pricing-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {/* <div className="faq-item">
            <h3>Can I change plans later?</h3>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle.</p>
          </div>
          <div className="faq-item">
            <h3>Is there a setup fee?</h3>
            <p>No, there are no hidden fees. The price you see is what you pay.</p>
          </div> */}
          <div className="faq-item">
            <h3>Do you offer custom solutions?</h3>
            <p>Absolutely! Contact our  team for tailored solutions that meet your specific requirements.</p>
          </div>
          <div className="faq-item">
            <h3>What payment methods do you accept?</h3>
            <p>We accept all major credit cards, PayPal, and bank transfers.</p>
          </div>
        </div>
      </div>

      <div className="pricing-cta">
        <h2>Not sure which plan is right for you?</h2>
        <p>Our team is ready to help you find the perfect solution for your business.</p>
        <div className="cta-buttons">
          <a href="https://forms.gle/f2RVAPVhSauupu4G9" className="cta-button primary" >Schedule a Demo</a>
          {/* <button className="cta-button secondary">Contact Sales</button> */}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;