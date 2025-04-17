import { 
    FaTwitter, 
    FaFacebookF, 
    FaInstagram, 
    FaLinkedinIn, 
    FaMapMarkerAlt, 
    FaPhoneAlt, 
    FaEnvelope,
    FaLaptopCode,
    FaArrowRight
  } from 'react-icons/fa';
  import './Footer.css';

  
  const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-info">
                <div className="footer-logo">
                  <FaLaptopCode className="logo-icon" />
                  <span>BuildurSite.ui</span>
                </div>
                <p>
                  We create stunning, responsive websites and web applications using modern technologies like React and Vite. Your vision, our expertise.
                </p>
                <div className="footer-social">
                  {/* <a href="#" className="social-link">
                    <FaTwitter />
                  </a> */}
                  {/* <a href="#" className="social-link">
                    <FaFacebookF />
                  </a> */}
                  <a href="https://www.instagram.com/buildursite.ui/?hl=en" className="social-link">
                    <FaInstagram />
                  </a>
                  {/* <a href="#" className="social-link">
                    <FaLinkedinIn />
                  </a> */}
                </div>
              </div>
              
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#process">Process</a></li>
                  <li><a href="pricing">Pricing</a></li>
                  <li><a href="https://forms.gle/pznKCvowiQBD6fAj9">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-services">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="#service-1">Web Development</a></li>
                  <li><a href="#service-2">E-commerce</a></li>
                  <li><a href="#service-3">Mobile-First Design</a></li>
                  <li><a href="#service-4">UI/UX Design</a></li>
                  <li><a href="#service-5">Backend</a></li>
                </ul>
              </div>
              
              <div className="footer-contact">
                <h4>Contact Us</h4>
                <ul className="contact-info">
                  <li>
                    <FaMapMarkerAlt className="contact-icon" />
                    <span>Hyderabad, India</span>
                  </li>
                  {/* <li>
                    <FaPhoneAlt className="contact-icon" />
                    <span></span>
                  </li> */}
                  <li>
                    <FaEnvelope className="contact-icon" />
                    <span>buildursite.ui@gmail.com</span>
                  </li>
                </ul>
                {/* <div className="newsletter">
                  <h5>Subscribe to our newsletter</h5>
                  <div className="newsletter-form">
                    <input type="email" placeholder="Your Email" />
                    <button type="submit">
                      <FaArrowRight />
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; {currentYear} BuildurSite.ui. All Rights Reserved.</p>
            {/* <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div> */}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;