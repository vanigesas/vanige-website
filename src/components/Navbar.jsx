import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    if (i18n.language.startsWith('es')) {
      navigate('/en');
    } else {
      navigate('/');
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <img src={logo} alt="Vanige Logo" />
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>{t('nav.home')}</a>
          <a href="#services" onClick={() => setIsOpen(false)}>{t('nav.services')}</a>
          <a href="#about" onClick={() => setIsOpen(false)}>{t('nav.about')}</a>

          <button onClick={toggleLanguage} className="lang-btn">
            <Globe size={16} />
            {i18n.language.startsWith('es') ? 'EN' : 'ES'}
          </button>

          <a href="#contact" onClick={() => setIsOpen(false)} className="cta-btn">{t('contact.button')}</a>
        </div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
