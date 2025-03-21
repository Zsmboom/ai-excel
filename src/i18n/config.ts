import i18n from 'i18next';
import { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
// import zhTranslation from './locales/zh.json';
// import koTranslation from './locales/ko.json';
// import deTranslation from './locales/de.json';
// import hiTranslation from './locales/hi.json';

export const resources = {
  en: {
    translation: enTranslation,
  },
  /* 暂时注释以下语言支持
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
  */
} as const;

const i18nConfig: InitOptions = {
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  supportedLngs: ['en'], // 仅支持英语
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
  .use(initReactI18next)
  .init(i18nConfig);

export default i18n;

export const languages = [
  { code: 'en', name: 'English' },
  /* 暂时注释以下语言选项
  { code: 'zh', name: '中文' },
  { code: 'ko', name: '한국어' },
  { code: 'de', name: 'Deutsch' },
  { code: 'hi', name: 'हिन्दी' },
  */
]; 