import React, { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(error.message);
        }
    };

    return (
        <footer className="contact" id="contact">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2 className="section-title">{t('contact.title')}</h2>
                        <p className="contact-desc">
                            {t('contact.desc')}
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail className="contact-icon" />
                                <span>contacto@vanigedev.com.co</span>
                            </div>
                            <div className="contact-item">
                                <Phone className="contact-icon" />
                                <span>+57 301 350 7441</span>
                            </div>
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <span>Bucaramanga, Colombia</span>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">{t('contact.name')}</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder={t('contact.name')}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">{t('contact.email')}</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder={t('contact.email')}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">{t('contact.message')}</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder={t('contact.message')}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary submit-btn"
                                disabled={status === 'loading' || status === 'success'}
                            >
                                {status === 'loading' ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} /> {t('contact.sending')}
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle size={20} /> {t('contact.sent')}
                                    </>
                                ) : (
                                    t('contact.button')
                                )}
                            </button>

                            {status === 'error' && (
                                <div className="form-message error">
                                    <AlertCircle size={16} />
                                    <span>{errorMessage || t('contact.error')}</span>
                                </div>
                            )}

                            {status === 'success' && (
                                <div className="form-message success">
                                    <span>{t('contact.success')}</span>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} {t('contact.footer_rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
