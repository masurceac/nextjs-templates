'use server';

import { getServerT } from '@/i18n/server';
import { cookies } from 'next/headers';

export async function serverActionExample() {
  const t = await getServerT(cookies);

  console.log(t('Hello Server Action'));
}
