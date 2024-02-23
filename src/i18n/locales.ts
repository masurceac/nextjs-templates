export enum Locale {
  En = 'En',
  Ro = 'Ro',
}

export const LOCALE_STORAGE_KEY = 'locale' as const;

export const mapLocaleValueToLocale = (localeValue: string): Locale => {
  switch (localeValue) {
    case Locale.En:
      return Locale.En;
    case Locale.Ro:
      return Locale.Ro;
    default:
      return Locale.En;
  }
};
