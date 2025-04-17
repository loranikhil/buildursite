import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', to: '/', isAnchor: false },
    { id: 'features', label: 'Features', to: '#services-section', isAnchor: true },
    { id: 'templates', label: 'Templates', to: '/templates', isAnchor: false },
    { id: 'pricing', label: 'Pricing', to: '/pricing', isAnchor: false },
  ];
  
  return (
    <>
      <header className={`bsite-header ${isScrolled ? 'bsite-header-scrolled' : ''}`}>
        <div className="bsite-header-container">
          <div className="bsite-logo-wrapper">
            <div className="bsite-logo-icon">
              <div className="bsite-logo-cube">
                <img
                  src="https://i.ibb.co/n8B5nkDK/Buildursite-ui2.png"
                  alt="Logo"
                  className="logo-image"
                />
              </div>
            </div>
            <Link to='/'> 
              <span className="bsite-logo-text">
                Buildur<span className="bsite-logo-highlight">Site</span>
                <span className="bsite-logo-dot">.</span>
                <span className="bsite-logo-ui">ui</span>
              </span>  
            </Link>
          </div>

          <div className="bsite-desktop-nav">
            <nav className="bsite-nav-links">
              {navLinks.map(link => (
                link.isAnchor ? (
                  <a
                    key={link.id}
                    href={link.to}
                    className={`bsite-nav-item ${activePage === link.id ? 'bsite-active' : ''}`}
                    onClick={() => setActivePage(link.id)}
                  >
                    {link.label}
                    <span className="bsite-nav-indicator"></span>
                  </a>
                ) : (
                  <Link
                    key={link.id}
                    to={link.to}
                    className={`bsite-nav-item ${activePage === link.id ? 'bsite-active' : ''}`}
                    onClick={() => setActivePage(link.id)}
                  >
                    {link.label}
                    <span className="bsite-nav-indicator"></span>
                  </Link>
                )
              ))}
            </nav>
            <div className="bsite-auth-buttons">
              <button className="bsite-login-btn">
                <a className="bsite-login-btns" href="https://forms.gle/pznKCvowiQBD6fAj9">
                  <span>Get Started</span>
                </a>
                <svg className="bsite-btn-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`bsite-hamburger ${isMenuOpen ? 'bsite-hamburger-active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <div className={`bsite-mobile-menu ${isMenuOpen ? 'bsite-menu-open' : ''}`}>
        <div className="bsite-mobile-menu-container">
          <div className="bsite-menu-close" onClick={() => setIsMenuOpen(false)}>
            <svg className="bsite-close-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <nav className="bsite-mobile-nav">
            {navLinks.map(link => (
              link.isAnchor ? (
                <a
                  key={link.id}
                  href={link.to}
                  className={`bsite-mobile-nav-item ${activePage === link.id ? 'bsite-mobile-active' : ''}`}
                  onClick={() => {
                    setActivePage(link.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.id}
                  to={link.to}
                  className={`bsite-mobile-nav-item ${activePage === link.id ? 'bsite-mobile-active' : ''}`}
                  onClick={() => {
                    setActivePage(link.id);
                    setIsMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          <div className="bsite-mobile-auth">
            <a href="https://forms.gle/pznKCvowiQBD6fAj9" className="bsite-mobile-login-btn">Get Started</a>
          </div>
        </div>
        <div className="bsite-menu-bg-shape"></div>
      </div>

      {isMenuOpen && 
        <div 
          className={`bsite-menu-backdrop ${isMenuOpen ? 'bsite-backdrop-active' : ''}`} 
          onClick={() => setIsMenuOpen(false)}
        ></div>
      }
    </>
  );
};

export default Header;