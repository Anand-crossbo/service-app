import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const availableLanguage = ['en-US', 'ko-KR', 'zh-CN', 'ar-AE', 'de-DE', 'es-ES', 'fr-FR', 'ru-RU', 'hi-IN'];  // added some more languages

const option: any = {
  order: [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
  lookupQueryString: 'lng',
  lookupCookie: 'lng',
  lookupLocalStorage: 'lng',
  lookupSessionStorage: 'lng',
  checkwhitelist: true,
};

// load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
// learn more: https://github.com/i18next/i18next-http-backend
// want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
i18n
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en-US',
    debug: true,
    detection: option,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })
  .then((t) => {});

export default i18n;
