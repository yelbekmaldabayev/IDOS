'use client';

import Link from 'next/link';
import { DropdownMenu5 } from '@/partials/dropdown-menu/dropdown-menu-5';
import { DropdownMenu6 } from '@/partials/dropdown-menu/dropdown-menu-6';
import { EllipsisVertical } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface ILoginSessionsItem {
  avatar: string;
  name: string;
  connections: number;
  location: string;
  recent: string;
}
type ILoginSessionsItems = Array<ILoginSessionsItem>;

const LoginSessions = () => {
  const rows: ILoginSessionsItems = [
    {
      avatar: '300-3.png',
      name: 'Tyler Hero',
      connections: 26,
      location: 'New Zealand',
      recent: 'Current session',
    },
    {
      avatar: '300-1.png',
      name: 'Esther Howard',
      connections: 639,
      location: 'Canada',
      recent: 'Week ago',
    },
    {
      avatar: '300-11.png',
      name: 'Jacob Jones',
      connections: 125,
      location: 'Malaysia',
      recent: 'Today, 9:53 am',
    },
    {
      avatar: '300-2.png',
      name: 'Cody Fisher',
      connections: 81,
      location: 'Turkey',
      recent: 'Current session',
    },
    {
      avatar: '300-5.png',
      name: 'Leslie Alexander',
      connections: 1203,
      location: 'United States',
      recent: 'Month ago',
    },
  ];

  const renderItem = (row: ILoginSessionsItem, index: number) => {
    return (
      <TableRow key={index}>
        <TableCell>
          <div className="flex items-center grow gap-2.5">
            <Avatar className="size-9">
              <AvatarImage
                src={toAbsoluteUrl(`/media/avatars/${row.avatar}`)}
                alt="image"
              />
              <AvatarFallback>CH</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
              <Link
                href="#"
                className="text-sm font-medium text-mono hover:text-primary-actives"
>
                {row.name}
              </Link>
              <span className="text-xs font-normal text-secondary-foreground">
                {row.connections} connections
              </span>
            </div>
          </div>
        </TableCell>
        <TableCell className="text-end text-secondary-foreground font-normal">
          {row.location}
        </TableCell>
        <TableCell className="text-end text-secondary-foreground font-normal">
          {row.recent}
        </TableCell>
        <TableCell className="pr-7.5!">
          <DropdownMenu5
            trigger={
              <Button variant="ghost">
                <EllipsisVertical />
              </Button>
            }
          />
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Login Sessions</CardTitle>
        <DropdownMenu6
          trigger={
            <Button variant="ghost">
              <EllipsisVertical />
            </Button>
          }
        />
      </CardHeader>
      <CardContent className="kt-scrollable-x-auto p-0">
        <div className="kt-scrollable-auto">
          <Table className="align-middle text-secondary-foreground text-sm">
            <TableHeader>
              <TableRow className="bg-accent/60">
                <TableHead className="text-start min-w-48 h-10">Name</TableHead>
                <TableHead className="text-end min-w-20 h-10">
                  Location
                </TableHead>
                <TableHead className="text-end min-w-20 h-10">
                  Recent activity
                </TableHead>
                <TableHead className="text-end w-[70px] h-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, index) => {
                return renderItem(row, index);
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="link" asChild>
          <Link href="#">View 64 more</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { LoginSessions, type ILoginSessionsItem, type ILoginSessionsItems };
