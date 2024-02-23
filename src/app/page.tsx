import { getServerT } from '@/i18n/server';
import { cookies } from 'next/headers';
import { ClientExample } from './client-example';
import { LanguageSwitcher } from './language-switcher';
import { ActionExample } from './action-example';
import '../i18n/client';

export default async function Home() {
  const t = await getServerT(cookies);
  return (
    <main>
      {t('Hello Server Component')}

      <ClientExample />
      <ActionExample />
      <LanguageSwitcher />
    </main>
  );
}
