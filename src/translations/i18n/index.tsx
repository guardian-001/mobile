import { locale } from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

import { resources } from './resources';
import { getLanguage } from './utils';
export * from './utils';

(async () => {
  const language = (await getLanguage()) || locale;

  i18n.use(initReactI18next).init({
    resources,
    lng: language, // Use the resolved language
    fallbackLng: 'en',
    compatibilityJSON: 'v3',

    interpolation: {
      escapeValue: false,
    },
  });

  // Is it a RTL language?
  const isRTL: boolean = i18n.dir() === 'rtl';

  I18nManager.allowRTL(isRTL);
  I18nManager.forceRTL(isRTL);
})();
export const isRTL: boolean = i18n.dir() === 'rtl';

export default i18n;
