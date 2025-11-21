import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, TrendingUp, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Hero.css';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="hero-content"
                >
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        {t('hero.badge')}
                    </div>

                    <h1 className="hero-title">
                        {t('hero.tagline_1')} <span className="text-highlight">{t('hero.tagline_2')}</span>
                    </h1>

                    <p className="hero-subtitle">
                        {t('hero.subtitle')}
                    </p>

                    <div className="hero-cta">
                        <button className="btn-primary">
                            {t('hero.cta_main')} <ArrowRight size={18} />
                        </button>
                        <button className="btn-secondary">
                            {t('hero.cta_secondary')}
                        </button>
                    </div>

                    <div className="hero-trust">
                        <p>{t('hero.trust_text')}</p>
                        <div className="trust-badges">
                            <div className="trust-item"><CheckCircle size={16} /> {t('hero.trust_1')}</div>
                            <div className="trust-item"><CheckCircle size={16} /> {t('hero.trust_2')}</div>
                            <div className="trust-item"><CheckCircle size={16} /> {t('hero.trust_3')}</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hero-visual"
                >
                    {/* Abstract geometric representation instead of image */}
                    <div className="visual-card card-1">
                        <Code size={32} className="visual-icon" />
                        <div className="visual-text">
                            <h4>{t('hero.visual_1_title')}</h4>
                            <p>{t('hero.visual_1_desc')}</p>
                        </div>
                    </div>
                    <div className="visual-card card-2">
                        <Cpu size={32} className="visual-icon" />
                        <div className="visual-text">
                            <h4>{t('hero.visual_2_title')}</h4>
                            <p>{t('hero.visual_2_desc')}</p>
                        </div>
                    </div>
                    <div className="visual-card card-3">
                        <TrendingUp size={32} className="visual-icon" />
                        <div className="visual-text">
                            <h4>{t('hero.visual_3_title')}</h4>
                            <p>{t('hero.visual_3_desc')}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
