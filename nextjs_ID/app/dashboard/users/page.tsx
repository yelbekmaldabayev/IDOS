'use client'

'use client';

import { useState } from 'react';
import {
  Ban,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Edit,
  Eye,
  Filter,
  MoreHorizontal,
  Search,
  UserPlus,
  Users,
  XCircle,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Mock users data
const users = [
  {
    id: 1,
    name: 'Yelbek Maldabayev',
    email: 'yelbekmaldabayev@gmail@gmail.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=john',
    status: 'Active',
    role: 'Developer',
    joinDate: '2024-01-15',
    lastActive: '2 hours ago',
    gamesCount: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'Smiley Kindrey@example',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=jane',
    status: 'Active',
    role: 'Publisher',
    joinDate: '2024-01-10',
    lastActive: '1 day ago',
    gamesCount: 12,
  },
  {
    id: 3,
    name: 'Arlan Tarlan',
    email: 'arlantarlan@gmail.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=mike',
    status: 'Inactive',
    role: 'Player',
    joinDate: '2024-01-05',
    lastActive: '1 week ago',
    gamesCount: 3,
  },
  {
    id: 4,
    name: 'Ainur Taubekova',
    email: 'ainurtau@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sarah',
    status: 'Active',
    role: 'Developer',
    joinDate: '2023-12-20',
    lastActive: '5 minutes ago',
    gamesCount: 8,
  },
  {
    id: 5,
    name: 'Arslan Arslanbayev',
    email: 'arstanchik@mail.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=alex',
    status: 'Blocked',
    role: 'Player',
    joinDate: '2023-12-15',
    lastActive: '2 weeks ago',
    gamesCount: 1,
  },
  {
    id: 6,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=emily',
    status: 'Active',
    role: 'Publisher',
    joinDate: '2023-12-10',
    lastActive: '3 hours ago',
    gamesCount: 15,
  },
  {
    id: 7,
    name: 'David Miller',
    email: 'david.miller@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=david',
    status: 'Active',
    role: 'Developer',
    joinDate: '2023-12-05',
    lastActive: '1 hour ago',
    gamesCount: 7,
  },
  {
    id: 8,
    name: 'Lisa Garcia',
    email: 'lisa.garcia@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=lisa',
    status: 'Inactive',
    role: 'Player',
    joinDate: '2023-12-01',
    lastActive: '3 days ago',
    gamesCount: 2,
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Active':
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          Active
        </Badge>
      );
    case 'Inactive':
      return (
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          Inactive
        </Badge>
      );
    case 'Blocked':
      return (
        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
          Blocked
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getRoleBadge = (role: string) => {
  switch (role) {
    case 'Developer':
      return (
        <Badge variant="outline" className="text-blue-600 border-blue-200">
          Developer
        </Badge>
      );
    case 'Publisher':
      return (
        <Badge variant="outline" className="text-purple-600 border-purple-200">
          Publisher
        </Badge>
      );
    case 'Player':
      return (
        <Badge variant="outline" className="text-gray-600 border-gray-200">
          Player
        </Badge>
      );
    default:
      return <Badge variant="outline">{role}</Badge>;
  }
};

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Filter users based on search and filters
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' ||
      user.status.toLowerCase() === statusFilter.toLowerCase();
    const matchesRole =
      roleFilter === 'all' ||
      user.role.toLowerCase() === roleFilter.toLowerCase();

    return matchesSearch && matchesStatus && matchesRole;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const stats = {
    total: users.length,
    active: users.filter((u) => u.status === 'Active').length,
    inactive: users.filter((u) => u.status === 'Inactive').length,
    blocked: users.filter((u) => u.status === 'Blocked').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Users Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and monitor all platform users
          </p>
        </div>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Total Users
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.total}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Active
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.active}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-green-50 dark:bg-green-950">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Inactive
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.inactive}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-yellow-50 dark:bg-yellow-950">
                <XCircle className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  Blocked
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stats.blocked}
                </p>
              </div>
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950">
                <Ban className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <CardTitle>All Users</CardTitle>
              <CardDescription>
                A list of all users in your platform
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-full sm:w-64"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-32">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="blocked">Blocked</SelectItem>
                </SelectContent>
              </Select>
              <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger className="w-full sm:w-32">
                  <SelectValue placeholder="Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Roles</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="publisher">Publisher</SelectItem>
                  <SelectItem value="player">Player</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Games</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedUsers.map((user) => (
                <TableRow
                  key={user.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800"
>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage
                          src={user.avatar || '/placeholder.svg'}
                          alt={user.name}
                        />
                        <AvatarFallback>
                          {user.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{getStatusBadge(user.status)}</TableCell>
                  <TableCell>{getRoleBadge(user.role)}</TableCell>
                  <TableCell>
                    <span className="font-medium">{user.gamesCount}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-500">
                      {user.joinDate}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-gray-500">
                      {user.lastActive}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
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
                          Edit User
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">
                          <Ban className="mr-2 h-4 w-4" />
                          {user.status === 'Blocked' ? 'Unblock' : 'Block'} User
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-500">
              Showing {startIndex + 1} to{' '}
              {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of{' '}
              {filteredUsers.length} results
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"

                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
>
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant="default"

                      onClick={() => setCurrentPage(page)}
                      className="w-8 h-8 p-0"
>
                      {page}
                    </Button>
                  ),
                )}
              </div>
              <Button
                variant="outline"

                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
>
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
