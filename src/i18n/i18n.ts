import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa tus archivos de traducción
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

const resources = {
  en: {
    translation: translationEN.translation // Ajustado al formato
  },
  es: {
    translation: translationES.translation // Ajustado al formato
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Idioma por defecto si el del navegador falla
    debug: true, // Desactiva esto en producción
    interpolation: {
      escapeValue: false // React ya protege contra XSS
    }
  });

export default i18n;