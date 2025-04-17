import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import Pricing from "./Pricing";
import Templates from "./Templates"
import './App.css';
import Footer from './Footer';

const App = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/67ff6c82f308dc1911a95315/1iourvoa6';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <section id="services-section">
                  <ServicesSection />
                </section>

              </>
            }
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/Templates" element={<Templates />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
