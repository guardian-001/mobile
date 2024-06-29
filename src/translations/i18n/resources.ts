import ar from '@/translations/ar';
import en from '@/translations/en';
import fr from '@/translations/fr';

export const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
  fr: {
    translation: fr,
  },
};

export type Language = keyof typeof resources;
