import { Locale } from './locales';
import en from './messages/en.json';
import ro from './messages/ro.json';

export const resources = {
  [Locale.En]: { translation: en },
  [Locale.Ro]: { translation: ro },
} as const;
