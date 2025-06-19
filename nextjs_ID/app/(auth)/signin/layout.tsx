import { ReactNode } from 'react';

export default function SignInLayout({ children }: { children: ReactNode }) {
  // Простой layout без dashboard для signin страницы
  return <div className="w-full h-full">{children}</div>;
}
