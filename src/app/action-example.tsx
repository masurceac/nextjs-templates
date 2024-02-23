'use client';

import { serverActionExample } from './server-action';

export function ActionExample() {
  function onClick() {
    serverActionExample();
  }
  return <button onClick={onClick}>Trigger server action</button>;
}
