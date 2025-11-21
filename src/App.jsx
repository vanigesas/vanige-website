import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import SEO from './components/SEO';

function App() {
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (location.pathname === '/en') {
      i18n.changeLanguage('en');
    } else {
      i18n.changeLanguage('es');
    }
  }, [location, i18n]);

  return (
    <div className="app">
      <SEO />
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <WhatsAppButton />
    </div>
  );
}

export default App;
