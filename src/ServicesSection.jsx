import { useState } from 'react';
import { 
  FaLaptopCode, 
  FaShoppingCart, 
  FaMobileAlt, 
  FaSearch, 
  FaPalette, 
  FaServer,
  FaWordpress,
  FaCog
} from 'react-icons/fa';
import './ServicesSection.css';

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('webDevelopment');
  
  const services = {
    webDevelopment: {
      id: "1",
      title: "Web Development",
      description: "Custom websites built with React, Vue, or Angular that are blazing fast, responsive, and user-friendly.",
      features: [
        "Modern React applications with Vite",
        "Custom component development",
        "Performance optimization",
        "Interactive UI elements",
        "API integration",
        "State management solutions"
      ],
      icon: <FaLaptopCode />,
      image: 'https://i.ibb.co/XZQ7dKWg/Buildursite-ui3.jpg'
    },
    ecommerce: {
      id: "2",
      title: "E-commerce",
      description: "Powerful online stores that drive sales with seamless checkout experiences and inventory management.",
      features: [
        "Custom shopping cart integration",
        "Payment gateway setup",
        "Product catalog management",
        "Order processing systems",
        "Customer account portals",
        "Mobile shopping experiences"
      ],
      icon: <FaShoppingCart />,
      image: 'https://i.ibb.co/xSSdPGKS/Buildursite-ui4.png'
    },
    mobileFirst: {
      id: "3",
      title: "Mobile-First Design",
      description: "Responsive websites that provide an optimal viewing experience across all devices.",
      features: [
        "Responsive frameworks implementation",
        "Touch-friendly interfaces",
        "Adaptive layouts",
        "Cross-device compatibility",
        "Mobile performance optimization",
        "Progressive Web Apps (PWAs)"
      ],
      icon: <FaMobileAlt />,
      image: 'https://i.ibb.co/CpCTX7w9/Buildursite-ui5.webp'
    },
    uiux: {
      id: "4",
      title: "UI/UX Design",
      description: "Beautiful and intuitive interfaces that enhance user experience and engagement.",
      features: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Interaction design",
        "Usability testing",
        "Design systems creation"
      ],
      icon: <FaPalette />,
      image: 'https://i.ibb.co/5WzNMr4z/Buildursite-ui6.jpg'
    },
    backend: {
      id: "5",  
      title: "Backend",
      description: "Robust server-side solutions that power your web applications with security and performance.",
      features: [
        "API development",
        "Database architecture",
        "Authentication systems",
        "Server configuration",
        "Performance optimization",
        "Cloud deployment"
      ],
      icon: <FaServer />,
      image: 'https://i.ibb.co/5h6XsJkg/Buildursite-ui7.png'
    }
  };

return (
  <section className="services-section" id="services">
    <div className="container">
      <div className="section-header">
        <span className="section-subtitle">What We Offer</span>
        <h2 className="section-title">Our Web Design & Development Services</h2>
        <p className="section-description">
          We craft digital experiences that help businesses grow. Our web design and development services are tailored to meet your specific needs and goals.
        </p>
      </div>

      <div className="services-tabs">
        <div className="tabs-nav">
          {Object.entries(services).map(([key, service]) => (
            <div 
              key={key}
              className={`tab-item ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              <span className="tab-icon">{service.icon}</span>
              <span className="tab-title">{service.title}</span>
            </div>
          ))}
        </div>

        <div className="tab-content">
          <div id={`service-${services[activeTab].id}`} className="service-details">
            <div className="service-text">
              <h3>{services[activeTab].title}</h3>
              <p>{services[activeTab].description}</p>
              <ul className="service-features">
                {services[activeTab].features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-bullet">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-image">
              <img src={services[activeTab].image} alt={services[activeTab].title} />
            </div>
          </div>
        </div>
      </div>

      <div className="tech-stack">
        <h3>Our Technology Stack</h3>
        <div className="tech-icons">
        <div className="tech-icon">
               <img src="https://i.ibb.co/PscqkJzt/Buildursite-ui8.png" alt="React" />
               <span>React</span>
             </div>
             <div className="tech-icon">
               <img src="https://i.ibb.co/SwcpKvL7/Buildursite-ui9.jpg" alt="Vite" />
               <span>Vite</span>
             </div>
             <div className="tech-icon">
               <img src="https://i.ibb.co/0pS4BqSC/Buildursite-ui10.png" alt="Node.js" />
               <span>Node.js</span>
             </div>
             <div className="tech-icon">
               <img src="https://i.ibb.co/XfFbf99s/Buildursite-ui11.png" alt="Tailwind CSS" />
               <span>Tailwind</span>
             </div>
             <div className="tech-icon">
               <img src="https://i.ibb.co/MDRbmWQK/mongodb-logo-png-seeklogo-481256.png" alt="MongoDB" />
               <span>MongoDB</span>
             </div>
             <div className="tech-icon">
               <img src="https://i.ibb.co/vvdfhkq8/Buildursite-ui14.png" alt="Firebase" />
               <span>Firebase</span>
             </div>
             <div className="tech-icon">
               <img src="https://i.ibb.co/j9QLpTGj/Buildursite-ui15.png" alt="Php" />
               <span>php</span>
             </div>
           </div>
         </div>
      </div>
  </section>
);
};

export default ServicesSection;