import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const SEO = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const currentLang = i18n.language.startsWith('es') ? 'es' : 'en';

    // Base URL
    const baseUrl = 'https://vanigedev.com.co';

    // Construct canonical URL
    const canonicalUrl = currentLang === 'es'
        ? `${baseUrl}/`
        : `${baseUrl}/en`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <html lang={currentLang} />
            <title>{t('seo.title')}</title>
            <meta name="description" content={t('seo.description')} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={t('seo.title')} />
            <meta property="og:description" content={t('seo.description')} />
            <meta property="og:image" content={`${baseUrl}/vanige_og_banner.png`} />
            <meta property="og:locale" content={currentLang === 'es' ? 'es_CO' : 'en_US'} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={t('seo.title')} />
            <meta property="twitter:description" content={t('seo.description')} />
            <meta property="twitter:image" content={`${baseUrl}/vanige_og_banner.png`} />

            {/* Internationalization (Hreflang) */}
            <link rel="alternate" hreflang="es" href={`${baseUrl}/`} />
            <link rel="alternate" hreflang="en" href={`${baseUrl}/en`} />
            <link rel="alternate" hreflang="x-default" href={`${baseUrl}/`} />

            {/* Canonical */}
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    );
};

export default SEO;
