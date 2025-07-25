'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { format } from 'date-fns';
import { CalendarIcon, Search, X } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { formatDateTime, getInitials } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardFooter, CardHeader, CardTable } from '@/components/ui/card';
import {
  DataGrid,
  DataGridApiFetchParams,
  DataGridApiResponse,
} from '@/components/ui/data-grid';
import { DataGridColumnHeader } from '@/components/ui/data-grid-column-header';
import { DataGridPagination } from '@/components/ui/data-grid-pagination';
import { DataGridTable } from '@/components/ui/data-grid-table';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import { SystemLog } from '@/app/models/system';
import { User } from '@/app/models/user';
import { LogActionsCell } from './log-actions-cell';

const ActivityLogList = () => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'createdAt', desc: true },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRangeFilter, setDateRangeFilter] = useState<
    DateRange | undefined
>();

  // Fetch users from the server API
  const fetchOrders = async ({
    pageIndex,
    pageSize,
    sorting,
    searchQuery,
    dateRangeFilter,
  }: DataGridApiFetchParams & {
    dateRangeFilter: DateRange | undefined;
  }): Promise<DataGridApiResponse<SystemLog>> => {
    const sortField = sorting?.[0]?.id || '';
    const sortDirection = sorting?.[0]?.desc ? 'desc' : 'asc';

    const params = new URLSearchParams({
      page: String(pageIndex + 1),
      limit: String(pageSize),
      ...(sortField ? { sort: sortField, dir: sortDirection } : {}),
      ...(searchQuery ? { query: searchQuery } : {}),
      ...(dateRangeFilter?.from
        ? { createdAtFrom: dateRangeFilter.from.toISOString() }
        : {}),
      ...(dateRangeFilter?.to
        ? { createdAtTo: dateRangeFilter.to.toISOString() }
        : {}),
    });

    const response = await fetch(
      `/api/user-management/logs/?${params.toString()}`,
    );

    if (!response.ok) {
      throw new Error(
        'Oops! Something didn’t go as planned. Please try again in a moment.',
      );
    }

    return response.json();
  };

  // Users query
  const { data, isLoading } = useQuery({
    queryKey: [
      'system-logs',
      pagination,
      sorting,
      searchQuery,
      dateRangeFilter,
    ],
    queryFn: () =>
      fetchOrders({
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
        sorting,
        searchQuery,
        dateRangeFilter,
      }),
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60, // 60 minutes
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: 1,
  });

  const handleDateRangeApply = (range: DateRange | undefined) => {
    setDateRangeFilter(range);
    setPagination({ ...pagination, pageIndex: 0 });
  };

  const handleDateRangeReset = () => {
    setDateRangeFilter(undefined);
    setPagination({ ...pagination, pageIndex: 0 });
  };

  const columns = useMemo<ColumnDef<SystemLog>[]>(
    () => [
      {
        accessorKey: 'user_name',
        id: 'user_name',
        header: ({ column }) => (
          <DataGridColumnHeader
            title="User"
            visibility={true}
            column={column}
          />
        ),
        cell: ({ row }) => {
          const user = row.original.user as User;
          const avatarUrl = user.avatar || null;
          const initials = getInitials(user.name || user.email);

          return (
            <Link
              href={`/user-management/users/${user.id}`}
              className="group inline-flex items-center gap-1.5"
>
              <Avatar className="size-6">
                {avatarUrl && (
                  <AvatarImage src={avatarUrl} alt={user.name || ''} />
                )}
                <AvatarFallback className="bg-warning text-warning-foreground text-xs">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-foreground group-hover:text-primary">
                {user.name || user.email}
              </span>
            </Link>
          );
        },
        size: 125,
        meta: {
          headerClassName: 'min-w-56',
          skeleton: <Skeleton className="w-28 h-7" />,
        },
        enableSorting: true,
        enableHiding: false,
      },
      {
        accessorKey: 'entityType',
        id: 'entityType',
        header: ({ column }) => (
          <DataGridColumnHeader title="Event" column={column} />
        ),
        cell: ({ row }) => {
          const event = row.original.event as string;
          const entityType = row.original.entityType as string;

          return (
            <Badge variant="secondary">
              {entityType}: {event}
            </Badge>
          );
        },
        size: 125,
        meta: {
          headerTitle: 'Event',
          skeleton: <Skeleton className="w-14 h-7" />,
        },
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: 'description',
        id: 'description',
        header: ({ column }) => (
          <DataGridColumnHeader title="Description" column={column} />
        ),
        cell: (info) => info.getValue() as string,
        size: 175,
        meta: {
          headerTitle: 'Description',
          skeleton: <Skeleton className="w-40 h-7" />,
        },
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: 'ipAddress',
        id: 'ipAddress',
        header: ({ column }) => (
          <DataGridColumnHeader title="IP Address" column={column} />
        ),
        cell: (info) => info.getValue() as string,
        size: 100,
        meta: {
          headerTitle: 'IP Address',
          skeleton: <Skeleton className="w-20 h-7" />,
        },
        enableSorting: true,
        enableHiding: true,
      },
      {
        accessorKey: 'createdAt',
        id: 'createdAt',
        header: ({ column }) => (
          <DataGridColumnHeader title="Timestamp" column={column} />
        ),
        cell: (info) => formatDateTime(new Date(info.getValue() as string)),
        size: 140,
        meta: {
          headerTitle: 'Timestamp',
          skeleton: <Skeleton className="w-20 h-7" />,
        },
        enableSorting: true,
        enableHiding: true,
      },
      {
        id: 'actions',
        header: 'Actions',
        cell: ({ row }) => <LogActionsCell row={row} />,
        size: 70,
        enableSorting: false,
        enableHiding: false,
        enableResizing: false,
        meta: {
          skeleton: <Skeleton className="size-5" />,
        },
      },
    ],
    [],
  );

  const [columnOrder, setColumnOrder] = useState<string[]>(
    columns.map((column) => column.id as string),
  );

  const table = useReactTable({
    columns,
    data: data?.data || [],
    pageCount: Math.ceil((data?.pagination.total || 0) / pagination.pageSize),
    getRowId: (row: SystemLog) => row.id,
    getRowCanExpand: (row) => Boolean(row.original.description),
    state: {
      pagination,
      sorting,
      columnOrder,
    },
    onColumnOrderChange: setColumnOrder,
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
    manualSorting: true,
    manualFiltering: true,
  });

  const DataGridToolbar = () => {
    const [inputValue, setInputValue] = useState(searchQuery);
    const [dateRange, setDateRange] = useState<DateRange | undefined>(
      dateRangeFilter,
    );

    const handleSearch = () => {
      setSearchQuery(inputValue);
      setPagination({ ...pagination, pageIndex: 0 });
    };

    return (
      <CardHeader className="py-5">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <Search className="size-4 text-muted-foreground absolute start-3 top-1/2 -translate-y-1/2" />
            <Input
              placeholder="Search logs"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              disabled={isLoading}
              className="ps-9 w-full md:w-56"
            />
            {searchQuery.length> 0 && (
              <Button

                variant="dim"
                disabled={isLoading}
                className="absolute end-1.5 top-1/2 -translate-y-1/2 h-6 w-6"
                onClick={() => setSearchQuery('')}
>
                <X />
              </Button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Popover>
            <PopoverTrigger disabled={isLoading} asChild>
              <Button
                id="date"
                variant="outline"
                className={cn(
                  'w-48 sm:w-60 justify-start font-normal relative',
                  !dateRange && 'text-muted-foreground',
                )}
>
                <CalendarIcon className="h-4 w-4" />
                {dateRange?.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, 'LLL dd, y')} -{' '}
                      {format(dateRange.to, 'LLL dd, y')}
                    </>
                  ) : (
                    format(dateRange.from, 'LLL dd, y')
                  )
                ) : (
                  <span>Filter logs by date range</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                variant="outline"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
              />
              <div className="flex items-center justify-end gap-1.5 border-t border-border p-3">
                <Button variant="outline" onClick={handleDateRangeReset}>
                  Reset
                </Button>
                <Button onClick={() => handleDateRangeApply(dateRange)}>
                  Apply
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
    );
  };

  return (
    <DataGrid
      table={table}
      recordCount={data?.pagination.total || 0}
      isLoading={isLoading}
      tableLayout={{
        columnsPinnable: true,
        columnsMovable: true,
        columnsVisibility: true,
        columnsResizable: true,
      }}
      tableClassNames={{
        edgeCell: 'px-5',
      }}
>
      <Card>
        <DataGridToolbar />
        <CardTable>
          <ScrollArea>
            <DataGridTable />
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardTable>
        <CardFooter>
          <DataGridPagination />
        </CardFooter>
      </Card>
    </DataGrid>
  );
};

export default ActivityLogList;
