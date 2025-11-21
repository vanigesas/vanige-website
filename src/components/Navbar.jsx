import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <img src={logo} alt="Vanige Logo" />
          <span className="logo-text">VANIGE</span>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="cta-btn">Contact Us</a>
        </div>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
