'use server';

import i18next, { TFunction } from 'i18next';
import { LOCALE_STORAGE_KEY, Locale, mapLocaleValueToLocale } from './locales';
import { resources } from './resources';

type GetServerTOptions =
  | [
      cookies: () => { get: (i: string) => { value?: string } | undefined } // cookie
    ]
  | [lang: Locale];
export async function getServerT(...args: GetServerTOptions) {
  const locale =
    typeof args[0] === 'string'
      ? args[0]
      : mapLocaleValueToLocale(
          (args[0]().get(LOCALE_STORAGE_KEY)?.value as Locale | undefined) ??
            Locale.En
        );

  void (await i18next.init({
    resources: resources,
    lng: locale,
    interpolation: {
      escapeValue: false,
    },
    nsSeparator: false,
    keySeparator: false,

    // do not load a fallback
    fallbackLng: false,
  }));

  const output: TFunction = i18next.getFixedT(locale, 'translation');

  return output;
}
