'use client'

'use client';

import { useState } from 'react';
import {
  Clock,
  DollarSign,
  Download,
  Globe,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock analytics data
const revenueData = [
  { date: '2024-01-01', revenue: 12450, users: 2340, downloads: 456 },
  { date: '2024-01-02', revenue: 13200, users: 2567, downloads: 523 },
  { date: '2024-01-03', revenue: 11800, users: 2234, downloads: 445 },
  { date: '2024-01-04', revenue: 14500, users: 2890, downloads: 612 },
  { date: '2024-01-05', revenue: 15600, users: 3123, downloads: 678 },
  { date: '2024-01-06', revenue: 13900, users: 2756, downloads: 534 },
  { date: '2024-01-07', revenue: 16200, users: 3456, downloads: 723 },
];

const retentionData = [
  { day: 'Day 1', retention: 85, users: 1000 },
  { day: 'Day 3', retention: 65, users: 650 },
  { day: 'Day 7', retention: 45, users: 450 },
  { day: 'Day 14', retention: 32, users: 320 },
  { day: 'Day 30', retention: 25, users: 250 },
];

const geographyData = [
  { country: 'United States', users: 3456, percentage: 35, color: '#3b82f6' },
  { country: 'United Kingdom', users: 2234, percentage: 22, color: '#10b981' },
  { country: 'Germany', users: 1567, percentage: 16, color: '#f59e0b' },
  { country: 'France', users: 1234, percentage: 12, color: '#ef4444' },
  { country: 'Others', users: 1509, percentage: 15, color: '#8b5cf6' },
];

const conversionData = [
  { stage: 'Visitors', users: 10000, conversion: 100 },
  { stage: 'Signups', users: 3500, conversion: 35 },
  { stage: 'Active Users', users: 2800, conversion: 28 },
  { stage: 'Paying Users', users: 560, conversion: 5.6 },
  { stage: 'Retained Users', users: 420, conversion: 4.2 },
];

const gamePerformance = [
  {
    name: 'Crypto Warriors',
    revenue: 28450,
    users: 3421,
    retention: 75,
    rating: 4.8,
  },
  {
    name: 'NFT Racing',
    revenue: 19230,
    users: 2156,
    retention: 68,
    rating: 4.6,
  },
  {
    name: 'Block Builder',
    revenue: 15680,
    users: 4567,
    retention: 82,
    rating: 4.7,
  },
  {
    name: 'DeFi Adventure',
    revenue: 8920,
    users: 567,
    retention: 45,
    rating: 4.2,
  },
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('7d');
  const [selectedGame, setSelectedGame] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
            <p className="text-muted-foreground">
              Deep insights into your games performance
            </p>
          </div>
          <div className="flex gap-2">
            <Select value={selectedGame} onValueChange={setSelectedGame}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select game" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Games</SelectItem>
                <SelectItem value="crypto-warriors">Crypto Warriors</SelectItem>
                <SelectItem value="nft-racing">NFT Racing</SelectItem>
                <SelectItem value="block-builder">Block Builder</SelectItem>
              </SelectContent>
            </Select>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">7 days</SelectItem>
                <SelectItem value="30d">30 days</SelectItem>
                <SelectItem value="90d">90 days</SelectItem>
                <SelectItem value="1y">1 year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$89,234</div>
              <p className="text-xs text-muted-foreground">
                +22.3% from last period
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,459</div>
              <p className="text-xs text-muted-foreground">
                +15.2% from last period
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Session
              </CardTitle>
              <Clock className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5m</div>
              <p className="text-xs text-muted-foreground">
                +8.1% from last period
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950 dark:to-orange-900">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Conversion Rate
              </CardTitle>
              <Target className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5.6%</div>
              <p className="text-xs text-muted-foreground">
                +2.1% from last period
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Tabs */}
        <Tabs defaultValue="revenue" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="revenue">Revenue & Users</TabsTrigger>
            <TabsTrigger value="retention">User Retention</TabsTrigger>
            <TabsTrigger value="geography">Geography</TabsTrigger>
            <TabsTrigger value="performance">Game Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="revenue" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Revenue & User Trends
                </CardTitle>
                <CardDescription>
                  Daily revenue and user acquisition over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      dataKey="revenue"
                      fill="#10b981"
                      name="Revenue ($)"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="users"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      name="Active Users"
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="downloads"
                      stroke="#f59e0b"
                      strokeWidth={2}
                      name="Downloads"
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="retention" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>User Retention Curve</CardTitle>
                  <CardDescription>
                    How many users return after their first visit
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={retentionData}>
                      <defs>
                        <linearGradient
                          id="colorRetention"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
>
                          <stop
                            offset="5%"
                            stopColor="#8b5cf6"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#8b5cf6"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="day" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="retention"
                        stroke="#8b5cf6"
                        fillOpacity={1}
                        fill="url(#colorRetention)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Conversion Funnel</CardTitle>
                  <CardDescription>
                    User journey from visitor to paying customer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {conversionData.map((stage, index) => (
                      <div
                        key={stage.stage}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </div>
                          <span className="font-medium">{stage.stage}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">
                            {stage.users.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stage.conversion}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="geography" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    User Distribution by Country
                  </CardTitle>
                  <CardDescription>
                    Where your players are located
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={geographyData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="users"
>
                        {geographyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Top Countries</CardTitle>
                  <CardDescription>
                    Detailed breakdown by region
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {geographyData.map((country) => (
                      <div
                        key={country.country}
                        className="flex items-center justify-between"
>
                        <div className="flex items-center gap-3">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: country.color }}
                          />
                          <span className="font-medium">{country.country}</span>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">
                            {country.users.toLocaleString()}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {country.percentage}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="performance" className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Game Performance Comparison</CardTitle>
                <CardDescription>
                  Compare key metrics across your games
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={gamePerformance}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar
                      yAxisId="left"
                      dataKey="revenue"
                      fill="#10b981"
                      name="Revenue ($)"
                    />
                    <Bar
                      yAxisId="right"
                      dataKey="users"
                      fill="#3b82f6"
                      name="Active Users"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
