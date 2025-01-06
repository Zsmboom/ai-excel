import i18n from 'i18next';
import { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import zhTranslation from './locales/zh.json';
import koTranslation from './locales/ko.json';
import deTranslation from './locales/de.json';
import hiTranslation from './locales/hi.json';

export const resources = {
  en: {
    translation: enTranslation,
  },
  zh: {
    translation: zhTranslation,
  },
  ko: {
    translation: koTranslation,
  },
  de: {
    translation: deTranslation,
  },
  hi: {
    translation: hiTranslation,
  },
} as const;

const i18nConfig: InitOptions = {
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  detection: {
    order: ['path', 'localStorage', 'navigator'],
    lookupFromPathIndex: 0,
    caches: ['localStorage'],
  },
  supportedLngs: ['en', 'zh', 'ko', 'de', 'hi'],
  react: {
    useSuspense: false,
    bindI18n: 'languageChanged loaded',
    bindI18nStore: 'added removed',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig);

export default i18n;

export const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'ko', name: '한국어' },
  { code: 'de', name: 'Deutsch' },
  { code: 'hi', name: 'हिन्दी' },
]; 