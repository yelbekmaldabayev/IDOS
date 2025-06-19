'use client'

'use client';

import { useState } from 'react';
import {
  DollarSign,
  Edit,
  Eye,
  Filter,
  Gamepad2,
  MoreHorizontal,
  Plus,
  Search,
  Star,
  Trash2,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock games data
const games = [
  {
    id: 'game1',
    title: 'Crypto Warriors',
    description: 'Epic blockchain-based RPG with NFT characters and weapons',
    genre: 'RPG',
    platform: ['Web', 'Mobile'],
    status: 'Published',
    imageUrl: '/placeholder.svg?height=80&width=120',
    revenue: 28450.5,
    totalUsers: 12459,
    activeUsers: 3421,
    downloads: 25678,
    rating: 4.8,
    createdAt: '2024-01-15',
    lastUpdate: '2024-01-20',
  },
  {
    id: 'game2',
    title: 'NFT Racing Championship',
    description: 'High-speed racing with collectible NFT cars',
    genre: 'Racing',
    platform: ['Web', 'Desktop'],
    status: 'Published',
    imageUrl: '/placeholder.svg?height=80&width=120',
    revenue: 19230.25,
    totalUsers: 8934,
    activeUsers: 2156,
    downloads: 18923,
    rating: 4.6,
    createdAt: '2024-01-10',
    lastUpdate: '2024-01-18',
  },
  {
    id: 'game3',
    title: 'Block Builder Universe',
    description: 'Creative sandbox game with blockchain integration',
    genre: 'Puzzle',
    platform: ['Web', 'Mobile', 'Desktop'],
    status: 'Published',
    imageUrl: '/placeholder.svg?height=80&width=120',
    revenue: 15680.75,
    totalUsers: 15678,
    activeUsers: 4567,
    downloads: 32145,
    rating: 4.7,
    createdAt: '2024-01-05',
    lastUpdate: '2024-01-16',
  },
  {
    id: 'game4',
    title: 'DeFi Adventure',
    description: 'Educational game teaching DeFi concepts',
    genre: 'Educational',
    platform: ['Web'],
    status: 'Testing',
    imageUrl: '/placeholder.svg?height=80&width=120',
    revenue: 8920.0,
    totalUsers: 2345,
    activeUsers: 567,
    downloads: 4567,
    rating: 4.2,
    createdAt: '2024-01-01',
    lastUpdate: '2024-01-14',
  },
  {
    id: 'game5',
    title: 'Metaverse Tycoon',
    description: 'Business simulation in virtual worlds',
    genre: 'Simulation',
    platform: ['Web', 'Desktop'],
    status: 'Development',
    imageUrl: '/placeholder.svg?height=80&width=120',
    revenue: 0.0,
    totalUsers: 0,
    activeUsers: 0,
    downloads: 0,
    rating: 0.0,
    createdAt: '2023-12-20',
    lastUpdate: '2024-01-12',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Published':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'Testing':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    case 'Development':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'Maintenance':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
};

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredGames = games.filter((game) => {
    const matchesSearch =
      game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.genre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === 'all' ||
      game.status.toLowerCase() === selectedStatus.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Games Management</h1>
            <p className="text-muted-foreground">
              Manage your game portfolio and track performance
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add New Game
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Games
                  </p>
                  <p className="text-2xl font-bold">{games.length}</p>
                </div>
                <Gamepad2 className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Published
                  </p>
                  <p className="text-2xl font-bold">
                    {games.filter((g) => g.status === 'Published').length}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Revenue
                  </p>
                  <p className="text-2xl font-bold">
                    $
                    {games
                      .reduce((sum, game) => sum + game.revenue, 0)
                      .toLocaleString()}
                  </p>
                </div>
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Total Players
                  </p>
                  <p className="text-2xl font-bold">
                    {games
                      .reduce((sum, game) => sum + game.totalUsers, 0)
                      .toLocaleString()}
                  </p>
                </div>
                <Users className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search games..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Tabs value={selectedStatus} onValueChange={setSelectedStatus}>
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="published">Published</TabsTrigger>
                    <TabsTrigger value="testing">Testing</TabsTrigger>
                    <TabsTrigger value="development">Development</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Game</TableHead>
                  <TableHead>Genre</TableHead>
                  <TableHead>Platform</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Players</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredGames.map((game) => (
                  <TableRow key={game.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={game.imageUrl || '/placeholder.svg'}
                          alt={game.title}
                          className="w-12 h-8 rounded object-cover"
                        />
                        <div>
                          <p className="font-medium">{game.title}</p>
                          <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                            {game.description}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{game.genre}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {game.platform.map((platform) => (
                          <Badge
                            key={platform}
                            variant="outline"
                            className="text-xs"
>
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(game.status)}>
                        {game.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <p className="font-medium">
                          {game.activeUsers.toLocaleString()}
                        </p>
                        <p className="text-muted-foreground">active</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="font-medium">
                        ${game.revenue.toLocaleString()}
                      </p>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{game.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Game
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <TrendingUp className="mr-2 h-4 w-4" />
                            Analytics
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete Game
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
