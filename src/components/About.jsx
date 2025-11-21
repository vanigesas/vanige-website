import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
    const { t } = useTranslation();

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">{t('about.title')}</h2>
                        <p className="about-lead">
                            {t('about.lead')}
                        </p>
                        <p className="about-desc">
                            {t('about.desc_1')}
                        </p>
                        <p className="about-desc">
                            {t('about.desc_2')}
                        </p>

                        <div className="values-grid">
                            <div className="value-item">
                                <Target size={20} className="value-icon" />
                                <div>
                                    <h5>{t('about.value_1_title')}</h5>
                                    <p>{t('about.value_1_desc')}</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <Lightbulb size={20} className="value-icon" />
                                <div>
                                    <h5>{t('about.value_2_title')}</h5>
                                    <p>{t('about.value_2_desc')}</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <Users size={20} className="value-icon" />
                                <div>
                                    <h5>{t('about.value_3_title')}</h5>
                                    <p>{t('about.value_3_desc')}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-stats-wrapper"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="stat-card">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">{t('about.stat_1_label')}</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">{t('about.stat_2_label')}</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">{t('about.stat_3_label')}</div>
                        </div>
                        <div className="stat-card highlight">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">{t('about.stat_4_label')}</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
