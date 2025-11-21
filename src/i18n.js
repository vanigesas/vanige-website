import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'es', // Default to Spanish if language not detected or translation missing
        lng: 'es', // Default language
        debug: true, // Enable debug for development
        interpolation: {
            escapeValue: false, // React already safes from xss
        },
        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
