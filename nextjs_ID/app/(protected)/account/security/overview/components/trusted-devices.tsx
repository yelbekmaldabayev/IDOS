'use client';

import Link from 'next/link';
import { DropdownMenu2 } from '@/partials/dropdown-menu/dropdown-menu-2';
import { EllipsisVertical, LogOut } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';

interface ITrustedDevicesItem {
  logo: string;
  browser: string;
  location: string;
  flag: string;
  device: string;
  datetime: string;
}
type ITrustedDevicesItems = Array<ITrustedDevicesItem>;

const TrustedDevices = () => {
  const items: ITrustedDevicesItems = [
    {
      logo: 'chrome.svg',
      browser: 'Chrome',
      location: 'Seville, Spain',
      flag: 'spain.svg',
      device: 'MacOS 12.19.6',
      datetime: 'Active: Today at 9:03 AM',
    },
    {
      logo: 'chrome.svg',
      browser: 'Chrome',
      location: 'Lyon, France',
      flag: 'france.svg',
      device: 'Android 14.35',
      datetime: 'Active: Mar 18 at 9:03 AM',
    },
  ];

  const renderItem = (item: ITrustedDevicesItem, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell className="min-w-48 w-48">
          <div className="flex items-center gitem gap-2.5">
            <img
              src={toAbsoluteUrl(`/media/brand-logos/${item.logo}`)}
              className="h-6"
              alt="image"
            />
            <div className="flex flex-col">
              <div className="text-sm font-medium text-mono hover:text-primary-active mb-px">
                {item.browser}
              </div>
              <div className="flex gap-1.5">
                <span className="text-xs text-secondary-foreground">
                  {item.location}
                </span>
                <img
                  src={toAbsoluteUrl(`/media/flags/${item.flag}`)}
                  className="h-3.5 rounded-full"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </TableCell>
        <TableCell className="min-w-56 text-secondary-foreground font-normal">
          {item.device}
          <br />
          {item.datetime}
        </TableCell>
        <TableCell className="pr-7.5! min-w-16 text-end">
          <Button variant="ghost">
            <LogOut size={16} />
          </Button>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Trusted Devices</CardTitle>
        <DropdownMenu2
          trigger={
            <Button variant="ghost">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto p-0">
        <div className="kt-scrollable-auto">
          <Table className="align-middle text-secondary-foreground font-medium text-sm">
            <TableBody>
              {items.map((item, index) => {
                return renderItem(item, index);
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="link" asChild>
          <Link href="#">Manage Trusted Devices</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { TrustedDevices, type ITrustedDevicesItem, type ITrustedDevicesItems };
