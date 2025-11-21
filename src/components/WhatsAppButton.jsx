import React from 'react';
import whatsappLogo from '../assets/images/whatsapp-logo.svg';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    const phoneNumber = '15551234567'; // Replace with real number
    const message = encodeURIComponent("Hello, I'm interested in your services and would like to know more about pricing.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-icon" />
        </a>
    );
};

export default WhatsAppButton;
