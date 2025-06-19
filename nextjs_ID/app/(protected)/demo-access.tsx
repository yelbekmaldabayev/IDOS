'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function DemoAccess() {
  const router = useRouter(); // eslint-disable-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    // Для демо - автоматически "авторизуем" пользователя
    if (typeof window !== 'undefined') {
      localStorage.setItem('demo-user', JSON.stringify({
        id: '1',
        name: 'Demo User',
        email: 'demo@idosgames.com',
        role: 'admin'
      }));
    }
  }, []);

  return null;
}
