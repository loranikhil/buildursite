import { useState, useEffect } from 'react';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiVite, SiJavascript } from 'react-icons/si';
import { IoIosArrowDown } from 'react-icons/io';
import "./HeroSection.css"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const technologies = [
    { name: 'React', icon: <FaReact className="tech-icon-svg" /> },
    { name: 'Vite', icon: <SiVite className="tech-icon-svg" /> },
    { name: 'JavaScript', icon: <SiJavascript className="tech-icon-svg" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="tech-icon-svg" /> },
  ];

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const floatingElements = document.querySelectorAll('.floating-element');
      floatingElements.forEach(el => {
        const distanceFromTop = window.scrollY;
        const movement = distanceFromTop * 0.1; 
        el.style.transform = `translateY(${movement}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-line">Create Stunning</span>
            <span className="title-line ">Web Experiences with</span>
            <span className="highlight">BuildUrSite<span className="dot">.</span>ui</span>
          </h1>
            
          <p className="hero-subtitle">
            We craft modern, responsive, and high-performance websites using React and Vite
            that elevate your brand and convert visitors into customers.
          </p>
          
          <div className="hero-ctaa">
          <a 
            href="https://forms.gle/pznKCvowiQBD6fAj9" 
            className="primaryy-button" 
            rel="noopener noreferrer"
            >
            Start Your Project
            <span className="button-highlight"></span>
            </a>

            {/* <a href="/portfolio" className="secondary-button">View Our Work</a> */}
          </div>

          <div className="tech-stack">
            <p className="tech-title">Powered by:</p>
            <div className="tech-icons">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-badge">
                  {tech.icon}
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <img 
              src="https://i.ibb.co/FLjYwPZ6/Buildursite-ui1.jpg" 
              alt="Web Development Illustration" 
            />
          </div>
          <div className="floating-elements">
            <div className="floating-element code-block">{'<React />'}</div>
            <div className="floating-element design-element">UI/UX</div>
            <div className="floating-element vite-logo">⚡</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        {/* <div className="scroll-text">Scroll to explore</div> */}
        <div className="scroll-arrow">
          <IoIosArrowDown className="arrow-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;