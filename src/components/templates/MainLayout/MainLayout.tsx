import Image from 'next/image';

import { Button } from '@/components/atoms/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/molecules/DropdownMenu';
import { SideNavbar, HeaderNavbar } from '@/components/organisms/Navbar';
import { NavigationTrace } from '@/components/organisms/NavigationTrace';
import { SearchInput } from '@/components/organisms/SearchInput';

import { cn } from '@/lib/utils';

export interface MainLayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const MainLayout = ({ children, className }: MainLayoutProps) => {
  const wrapperStyles = cn('flex min-h-screen w-full flex-col bg-muted/40', className);

  return (
    <div className={wrapperStyles}>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex items-center justify-between py-2">
        <SideNavbar />
      </aside>

      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <HeaderNavbar className="sm:hidden" />

          <NavigationTrace />

          <div className="relative ml-auto flex-1 md:grow-0">
            <SearchInput />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                <Image
                  src="/placeholder-user.jpg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="p-4 sm:px-6 sm:py-0">{children}</main>
      </div>
    </div>
  );
};

export { MainLayout };
