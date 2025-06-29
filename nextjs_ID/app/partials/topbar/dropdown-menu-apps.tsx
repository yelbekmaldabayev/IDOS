'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Switch } from '@/components/ui/switch';

interface DropdownAppsItem {
  logo: string;
  title: string;
  description: string;
  checkbox: boolean;
}

export function DropdownMenuApps({ trigger }: { trigger: ReactNode }) {
  const items: DropdownAppsItem[] = [
    {
      logo: 'jira.svg',
      title: 'Jira',
      description: 'Project management',
      checkbox: false,
    },
    {
      logo: 'inferno.svg',
      title: 'Inferno',
      description: 'Ensures healthcare app',
      checkbox: true,
    },
    {
      logo: 'evernote.svg',
      title: 'Evernote',
      description: 'Notes management app',
      checkbox: true,
    },
    {
      logo: 'gitlab.svg',
      title: 'Gitlab',
      description: 'DevOps platform',
      checkbox: false,
    },
    {
      logo: 'google-webdev.svg',
      title: 'Google webdev',
      description: 'Building web experiences',
      checkbox: true,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-[325px] p-0" side="bottom" align="end">
        <div className="flex items-center justify-between gap-2.5 text-xs text-gray-600 font-medium px-5 py-3 border-b border-b-gray-100">
          <span>Apps</span>
          <span>Enabled</span>
        </div>
        <div className="flex flex-col scrollable-y-auto max-h-[400px] divide-y divide-gray-100">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between flex-wrap gap-2 px-5 py-3.5"
>
              <div className="flex items-center flex-wrap gap-2">
                <div className="flex items-center justify-center shrink-0 rounded-full bg-gray-100 border border-gray-200 size-10">
                  <img
                    src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
                    className="size-6"
                    alt={item.title}
                  />
                </div>

                <div className="flex flex-col">
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-900 hover:text-primary-active"
>
                    {item.title}
                  </a>
                  <span className="text-xs font-medium text-gray-600">
                    {item.description}
                  </span>
                </div>
              </div>
              <Switch defaultChecked={item.checkbox}></Switch>
            </div>
          ))}
        </div>
        <div className="grid p-5 border-t border-t-gray-200">
          <Button asChild variant="outline">
            <Link href="/account/api-keys">Go to Apps</Link>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
