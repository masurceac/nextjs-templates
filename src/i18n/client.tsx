'use client';

import i18next from 'i18next';
import Cookies from 'js-cookie';
import { ReactNode, useEffect } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { LOCALE_STORAGE_KEY, Locale, mapLocaleValueToLocale } from './locales';
import { resources } from './resources';

function setInitialLocale() {
  if (typeof window !== 'undefined' && !Cookies.get(LOCALE_STORAGE_KEY)) {
    const systemLocale = navigator.language.slice(0, 2);
    if (Object.values(Locale).some((l) => l === systemLocale)) {
      Cookies.set(LOCALE_STORAGE_KEY, systemLocale);
    }
  }
}
setInitialLocale();

const locale = Cookies.get(LOCALE_STORAGE_KEY) ?? Locale.En;

i18next.use(initReactI18next).init({
  resources: resources,
  lng: mapLocaleValueToLocale(locale),
  nsSeparator: false,
  keySeparator: false,
  fallbackLng: false,
  defaultNS: 'translation',
});

const i18n = i18next;

export function I18nNextProvider(props: { lng: Locale; children: ReactNode }) {
  i18n.changeLanguage(props.lng);
  return <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>;
}
