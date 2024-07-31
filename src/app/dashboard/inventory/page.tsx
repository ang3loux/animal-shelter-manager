import { ListFilter, MoreHorizontal, PlusCircle, File } from 'lucide-react';
import Image from 'next/image';

import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/molecules/Card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/molecules/DropdownMenu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/molecules/Table';

const MOCKED_ITEMS = [
  {
    id: '1a3e4567-e89b-12d3-a456-426614174000',
    name: 'Dog Food',
    stockLevel: 'high',
    stock: 50,
    updatedAt: '2024-07-30 09:15 AM'
  },
  {
    id: '1a3e4567-e89b-12d3-a456-426614174001',
    name: 'Cat Food',
    stockLevel: 'medium',
    stock: 30,
    updatedAt: '2024-07-30 09:20 AM'
  },
  {
    id: '1a3e4567-e89b-12d3-a456-426614174002',
    name: 'Cat Litter',
    stockLevel: 'low',
    stock: 15,
    updatedAt: '2024-07-30 09:25 AM'
  },
  {
    id: '1a3e4567-e89b-12d3-a456-426614174003',
    name: 'Leashes',
    stockLevel: 'medium',
    stock: 25,
    updatedAt: '2024-07-30 09:30 AM'
  },
  {
    id: '1a3e4567-e89b-12d3-a456-426614174004',
    name: 'Collars',
    stockLevel: 'high',
    stock: 40,
    updatedAt: '2024-07-30 09:35 AM'
  },
  {
    id: '1a3e4567-e89b-12d3-a456-426614174005',
    name: 'Toys',
    stockLevel: 'low',
    stock: 10,
    updatedAt: '2024-07-30 09:40 AM'
  },
  {
    id: '1a3e4567-e89b-12d3-a456-426614174006',
    name: 'Blankets',
    stockLevel: 'medium',
    stock: 20,
    updatedAt: '2024-07-30 09:45 AM'
  },
  {
    id: '1a3e4567-e89b-12d3-a456-426614174007',
    name: 'Beds',
    stockLevel: 'high',
    stock: 35,
    updatedAt: '2024-07-30 09:50 AM'
  },
  {
    id: '1a3e4567-e89b-12d3-a456-426614174008',
    name: 'Cleaning Supplies',
    stockLevel: 'medium',
    stock: 18,
    updatedAt: '2024-07-30 09:55 AM'
  },
  {
    id: '1a3e4567-e89b-12d3-a456-426614174009',
    name: 'Flea Treatment',
    stockLevel: 'low',
    stock: 12,
    updatedAt: '2024-07-30 10:00 AM'
  }
];

// interface InventoryPageProps {}

const InventoryPage = () => {
  return (
    <>
      <div className="flex items-center justify-end gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Stock level</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Updated at</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" variant="outline" className="h-8 gap-1">
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
        </Button>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Product</span>
        </Button>
      </div>

      <Card className="mt-3">
        <CardHeader>
          <CardTitle>Inventory</CardTitle>
          <CardDescription>Manage your inventory and view the stock of your items.</CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  <span className="sr-only">Image</span>
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Stock level</TableHead>
                <TableHead className="hidden md:table-cell">Stock</TableHead>
                <TableHead className="hidden md:table-cell">Updated at</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {MOCKED_ITEMS.map(({ id, name, stockLevel, stock, updatedAt }) => (
                <TableRow key={id}>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt="Product image"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src="/placeholder.svg"
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{name}</TableCell>
                  <TableCell>
                    <Badge variant={stockLevel === 'low' ? 'destructive' : 'secondary'}>
                      {stockLevel}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{stock}</TableCell>
                  <TableCell className="hidden md:table-cell">{updatedAt}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button aria-haspopup="true" size="icon" variant="ghost">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Delete</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>

        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>1-10</strong> of <strong>32</strong> products
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default InventoryPage;
