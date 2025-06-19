'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from './header';
import { Sidebar } from './sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Отладка - выводим текущий путь в консоль
  console.log('DashboardLayout - Current pathname:', pathname);

  // Страницы БЕЗ dashboard (auth страницы)
  const authPages = [
    '/signin',
    '/signup',
    '/auth/signin',
    '/auth/signup',
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password',
    '/auth/forgot-password',
    '/auth/reset-password',
    // Добавьте другие auth пути если нужно
  ];

  const isAuthPage = authPages.includes(pathname);

  // Отладка
  console.log('DashboardLayout - Is auth page:', isAuthPage);

  // Если это auth страница - показываем только children без dashboard
  if (isAuthPage) {
    console.log('DashboardLayout - Rendering auth page without dashboard');
    return <div className="w-full h-full">{children}</div>;
  }

  // Обычные страницы С dashboard (сайдбар + хедер)
  console.log('DashboardLayout - Rendering with dashboard layout');
  return (
    <div className="flex h-full w-full">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1 lg:pl-72">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 overflow-auto">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
