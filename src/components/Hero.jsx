import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Cpu, TrendingUp, CheckCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
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
                        Now accepting new enterprise clients
                    </div>

                    <h1 className="hero-title">
                        Scalable Digital Solutions for <span className="text-highlight">Modern Business</span>
                    </h1>

                    <p className="hero-subtitle">
                        Vanige S.A.S. empowers companies with cutting-edge web development, data-driven marketing, and intelligent AI agents. We turn complex challenges into streamlined growth opportunities.
                    </p>

                    <div className="hero-cta">
                        <button className="btn-primary">
                            Schedule Consultation <ArrowRight size={18} />
                        </button>
                        <button className="btn-secondary">
                            Explore Our Services
                        </button>
                    </div>

                    <div className="hero-trust">
                        <p>Trusted by forward-thinking companies</p>
                        <div className="trust-badges">
                            <div className="trust-item"><CheckCircle size={16} /> Enterprise Ready</div>
                            <div className="trust-item"><CheckCircle size={16} /> 24/7 Support</div>
                            <div className="trust-item"><CheckCircle size={16} /> Scalable Architecure</div>
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
                            <h4>Web Dev</h4>
                            <p>React, Next.js, Node</p>
                        </div>
                    </div>
                    <div className="visual-card card-2">
                        <Cpu size={32} className="visual-icon" />
                        <div className="visual-text">
                            <h4>AI Agents</h4>
                            <p>Automation & NLP</p>
                        </div>
                    </div>
                    <div className="visual-card card-3">
                        <TrendingUp size={32} className="visual-icon" />
                        <div className="visual-text">
                            <h4>Growth</h4>
                            <p>SEO & Analytics</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
