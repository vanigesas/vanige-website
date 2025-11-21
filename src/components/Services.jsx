import React from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp, Bot, Smartphone, Database, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Services.css';

const Services = () => {
    const { t } = useTranslation();

    const services = [
        {
            id: 1,
            title: t('services.web_dev'),
            desc: t('services.desc_web'),
            features: ['Single Page Applications (SPA)', 'E-commerce Solutions', 'Progressive Web Apps (PWA)'],
            icon: <Code size={28} />
        },
        {
            id: 2,
            title: t('services.ai_agents'),
            desc: 'Automate repetitive tasks and enhance customer support with intelligent AI agents. We implement LLMs and custom bots tailored to your business workflows.',
            features: ['Customer Support Bots', 'Process Automation', 'Data Analysis Agents'],
            icon: <Bot size={28} />
        },
        {
            id: 3,
            title: t('services.marketing'),
            desc: 'Drive organic traffic and improve your search rankings. Our data-driven approach ensures your brand reaches the right audience at the right time.',
            features: ['Technical SEO Audits', 'Content Strategy', 'Social Media Management'],
            icon: <TrendingUp size={28} />
        },
        {
            id: 4,
            title: 'Mobile App Development',
            desc: 'Extend your reach with native and cross-platform mobile applications. We create seamless experiences for iOS and Android users.',
            features: ['React Native', 'iOS & Android', 'App Store Optimization'],
            icon: <Smartphone size={28} />
        },
        {
            id: 5,
            title: 'Backend & Cloud Infrastructure',
            desc: 'Secure and scalable backend systems. We manage cloud infrastructure on AWS, Google Cloud, or Azure to ensure high availability.',
            features: ['API Development', 'Database Design', 'Cloud Migration'],
            icon: <Database size={28} />
        },
        {
            id: 6,
            title: 'Local SEO & Business Growth',
            desc: 'Dominate your local market. We help local businesses optimize their online presence to attract nearby customers effectively.',
            features: ['Google Business Profile', 'Local Citations', 'Reputation Management'],
            icon: <Search size={28} />
        }
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t('services.heading')}</h2>
                    <p className="section-subtitle">
                        From code to content, we provide end-to-end digital solutions designed to scale with your business.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            className="service-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
