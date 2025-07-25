'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CardConnection, CardConnectionRow } from '@/partials/cards';
import { LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface INetworkItem {
  name: string;
  info: string;
  avatar: {
    className: string;
    fallback?: string;
    image?: string;
    imageClass?: string;
    badgeClass: string;
  };
  email: string;
  team: {
    size?: string;
    group: Array<{ filename?: string; variant?: string; fallback?: string }>;
    more?: {
      number: number;
      variant: string;
    };
  };
  statistics: Array<{ total: string; description: string }>;
  connected: boolean;
}
type INetworkItems = Array<INetworkItem>;

const Network = () => {
  const [activeView, setActiveView] = useState('cards');

  const items: INetworkItems = [
    {
      name: 'Jenny Klabber',
      info: 'Pinnacle Innovate',
      avatar: {
        className: 'size-20 relative',
        image: '300-1.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      email: 'kevin@pinnacle.com',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-4.png' },
          { filename: '300-1.png' },
          { filename: '300-2.png' },
        ],
        more: {
          number: 10,
          variant: 'text-white ring-background bg-green-500 size-7',
        },
      },
      statistics: [
        {
          total: '92',
          description: 'Purchases',
        },
        {
          total: '$69',
          description: 'Avg. Price',
        },
        {
          total: '$6,240',
          description: 'Total spent',
        },
      ],
      connected: true,
    },
    {
      name: 'Sarah Johnson',
      info: 'InnovateX',
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-info size-20 ring-1 ring-violet-200 bg-violet-50 rounded-full',
        fallback: 'S',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      email: 'sarahj@innx.com',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-5.png' },
          { filename: '300-6.png' },
          { filename: '300-7.png' },
          { filename: '300-11.png' },
        ],
      },
      statistics: [
        {
          total: '123',
          description: 'Purchases',
        },
        {
          total: '$30',
          description: 'Avg. Price',
        },
        {
          total: '$3,713',
          description: 'Total spent',
        },
      ],
      connected: false,
    },
    {
      name: 'Kevin Wang',
      info: 'Pinnacle Innovate',
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-destructive size-20 ring-1 ring-red-200 bg-red-50 rounded-full',
        fallback: 'K',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      email: 'kevin@pinnacle.com',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-29.png' },
          { filename: '300-33.png' },
          { filename: '300-23.png' },
          { filename: '300-31.png' },
        ],
      },
      statistics: [
        {
          total: '30',
          description: 'Purchases',
        },
        {
          total: '$150',
          description: 'Avg. Price',
        },
        {
          total: '$4,500',
          description: 'Total spent',
        },
      ],
      connected: true,
    },
    {
      name: 'Brian Davis',
      info: 'Vortex Tech',
      avatar: {
        className: 'size-20 relative',
        image: '300-9.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      email: 'brian@vortextech.com',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-14.png' },
          { filename: '300-3.png' },
          { filename: '300-19.png' },
          { filename: '300-15.png' },
        ],
      },
      statistics: [
        {
          total: '87',
          description: 'Purchases',
        },
        {
          total: '$22',
          description: 'Avg. Price',
        },
        {
          total: '$1958',
          description: 'Total spent',
        },
      ],
      connected: true,
    },
    {
      name: 'Megan Taylor',
      info: 'Catalyst',
      avatar: {
        className:
          'flex items-center justify-center relative text-2xl text-green-500 size-20 ring-1 ring-green-200 bg-green-50 rounded-full',
        fallback: 'M',
        badgeClass:
          'flex size-2.5 bg-accent rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      email: 'megan@catalyst.com',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-5.png' },
          { filename: '300-26.png' },
          { filename: '300-6.png' },
          { filename: '300-1.png' },
        ],
      },
      statistics: [
        {
          total: '45',
          description: 'Purchases',
        },
        {
          total: '$300',
          description: 'Avg. Price',
        },
        {
          total: '$13,500',
          description: 'Total spent',
        },
      ],
      connected: false,
    },
    {
      name: 'Alex Martinez',
      info: 'Precision Solutions',
      avatar: {
        className: 'size-20 relative',
        image: '300-8.png',
        imageClass: 'rounded-full',
        badgeClass:
          'flex size-2.5 bg-green-500 rounded-full absolute bottom-0.5 start-16 transform -translate-y-1/2',
      },
      email: 'alex@kteam.com',
      team: {
        size: 'size-7',
        group: [
          { filename: '300-4.png' },
          { filename: '300-5.png' },
          { filename: '300-11.png' },
        ],
        more: {
          number: 10,
          variant: 'text-white ring-background bg-green-500 size-7',
        },
      },
      statistics: [
        {
          total: '63',
          description: 'Purchases',
        },
        {
          total: '$65',
          description: 'Avg. Price',
        },
        {
          total: '$4,095',
          description: 'Total spent',
        },
      ],
      connected: true,
    },
  ];

  const renderItem = (item: INetworkItem, index: number) => {
    return (
      <CardConnection
        name={item.name}
        info={item.info}
        avatar={item.avatar}
        email={item.email}
        team={item.team}
        statistics={item.statistics}
        connected={item.connected}
        key={index}
      />
    );
  };

  const renderData = (data: INetworkItem, index: number) => {
    return (
      <CardConnectionRow
        name={data.name}
        info={data.info}
        avatar={data.avatar}
        email={data.email}
        team={data.team}
        statistics={data.statistics}
        connected={data.connected}
        key={index}
      />
    );
  };

  return (
    <div className="flex flex-col items-stretch gap-5 lg:gap-7.5">
      <div className="flex flex-wrap items-center gap-5 justify-between">
        <h3 className="text-lg text-mono font-semibold">
          {items.length} Connections
        </h3>
        <ToggleGroup
          type="single"
          variant="outline"
          value={activeView}
          onValueChange={(value) => {
            if (value) setActiveView(value);
          }}
>
          <ToggleGroupItem value="cards">
            <LayoutGrid size={16} />
          </ToggleGroupItem>
          <ToggleGroupItem value="list">
            <List size={16} />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      {activeView === 'cards' && (
        <div id="network_cards">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7.5">
            {items.map((item, index) => {
              return renderItem(item, index);
            })}
          </div>
          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <Button variant="link" asChild>
              <Link href="/account/members/team-info">
                Show more Connections
              </Link>
            </Button>
          </div>
        </div>
      )}
      {activeView === 'list' && (
        <div id="network_list">
          <div className="flex flex-col gap-5 lg:gap-7.5">
            {items.map((data, index) => {
              return renderData(data, index);
            })}
          </div>
          <div className="flex grow justify-center pt-5 lg:pt-7.5">
            <Button variant="link" asChild>
              <Link href="/account/members/team-info">
                Show more Connections
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export { Network, type INetworkItem, type INetworkItems };
