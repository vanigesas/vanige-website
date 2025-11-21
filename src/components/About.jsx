import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, Target, Lightbulb } from 'lucide-react';
import './About.css';

const About = () => {
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
                        <h2 className="section-title">About Vanige S.A.S.</h2>
                        <p className="about-lead">
                            We are a forward-thinking technology partner dedicated to transforming businesses through digital innovation.
                        </p>
                        <p className="about-desc">
                            Founded with a vision to bridge the gap between complex technology and business growth, Vanige S.A.S. specializes in delivering high-impact web solutions, data-driven marketing strategies, and cutting-edge AI implementations.
                        </p>
                        <p className="about-desc">
                            Our team consists of expert developers, creative strategists, and AI specialists who work collaboratively to ensure your digital presence is not just functional, but exceptional.
                        </p>

                        <div className="values-grid">
                            <div className="value-item">
                                <Target size={20} className="value-icon" />
                                <div>
                                    <h5>Result Oriented</h5>
                                    <p>We focus on measurable outcomes and ROI.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <Lightbulb size={20} className="value-icon" />
                                <div>
                                    <h5>Innovation First</h5>
                                    <p>Always exploring the latest in Tech & AI.</p>
                                </div>
                            </div>
                            <div className="value-item">
                                <Users size={20} className="value-icon" />
                                <div>
                                    <h5>Client Partnership</h5>
                                    <p>Your success is our success.</p>
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
                            <div className="stat-label">Years of Excellence</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">AI Solutions Deployed</div>
                        </div>
                        <div className="stat-card highlight">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support & Maintenance</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
