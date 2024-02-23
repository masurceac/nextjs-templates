'use client';

import { useTranslation } from 'react-i18next';

export function ClientExample() {
  const { t } = useTranslation();

  return <div>{t('Hello Client Component')}</div>;
}
