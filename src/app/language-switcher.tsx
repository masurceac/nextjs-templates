'use client';

import { LOCALE_STORAGE_KEY, Locale } from '@/i18n/locales';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const handleChange = (l: Locale) => {
    Cookies.set(LOCALE_STORAGE_KEY, l);
    window.location.reload();
  };

  const {
    i18n: { language },
  } = useTranslation();
  // this will not work, Cookies not available during SSG
  // const language = Cookies.get(LOCALE_STORAGE_KEY)

  return (
    <div className="flex items-center justify-end">
      <div>{language}</div>
      <select
        value={language}
        onChange={(e) => handleChange(e.target.value as Locale)}
      >
        <option value={Locale.Ro}>Română</option>
        <option value={Locale.En}>English</option>
      </select>
    </div>
  );
}
