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
            features: [t('services.feat_web_1'), t('services.feat_web_2'), t('services.feat_web_3')],
            icon: <Code size={28} />
        },
        {
            id: 2,
            title: t('services.ai_agents'),
            desc: t('services.desc_ai'),
            features: [t('services.feat_ai_1'), t('services.feat_ai_2'), t('services.feat_ai_3')],
            icon: <Bot size={28} />
        },
        {
            id: 3,
            title: t('services.marketing'),
            desc: t('services.desc_marketing'),
            features: [t('services.feat_marketing_1'), t('services.feat_marketing_2'), t('services.feat_marketing_3')],
            icon: <TrendingUp size={28} />
        },
        {
            id: 4,
            title: t('services.mobile'),
            desc: t('services.desc_mobile'),
            features: [t('services.feat_mobile_1'), t('services.feat_mobile_2'), t('services.feat_mobile_3')],
            icon: <Smartphone size={28} />
        },
        {
            id: 5,
            title: t('services.backend'),
            desc: t('services.desc_backend'),
            features: [t('services.feat_backend_1'), t('services.feat_backend_2'), t('services.feat_backend_3')],
            icon: <Database size={28} />
        },
        {
            id: 6,
            title: t('services.local_seo'),
            desc: t('services.desc_local_seo'),
            features: [t('services.feat_local_seo_1'), t('services.feat_local_seo_2'), t('services.feat_local_seo_3')],
            icon: <Search size={28} />
        }
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">{t('services.heading')}</h2>
                    <p className="section-subtitle">
                        {t('services.subtitle')}
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
