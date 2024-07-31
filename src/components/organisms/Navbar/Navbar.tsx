'use client';

import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Home, Package, Users2, Cat, PanelLeft } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/atoms/Button';
import { ModeToggle } from '@/components/molecules/ModeToggle';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from '@/components/molecules/Sheet';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/molecules/Tooltip';

import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { title: 'Dashboard', Icon: Home, path: '/dashboard' },
  { title: 'Pets', Icon: Cat, path: '/dashboard/pets' },
  { title: 'Adopters', Icon: Users2, path: '/dashboard/adopters' },
  { title: 'Inventory', Icon: Package, path: '/dashboard/inventory' }
];

export interface HeaderNavbarProps {
  className?: string;
}

const HeaderNavbar = ({ className }: HeaderNavbarProps) => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className={className}>
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex justify-between flex-col pt-16 sm:max-w-xs"
        aria-description="foo bar"
      >
        <VisuallyHidden.Root>
          <SheetTitle>Foo bar</SheetTitle>
          <SheetDescription>Bar baz</SheetDescription>
        </VisuallyHidden.Root>
        <nav className="grid gap-6 text-lg font-medium">
          {NAV_LINKS.map(({ title, Icon, path }) => (
            <Link
              key={`header-nav-link-${title}`}
              href={path}
              className={cn('flex items-center gap-4 px-2.5', {
                'text-muted-foreground hover:text-foreground': path !== pathname,
                'text-foreground': path === pathname
              })}
            >
              <Icon className="h-5 w-5" />
              {title}
            </Link>
          ))}
        </nav>

        <ModeToggle className="self-end" />
      </SheetContent>
    </Sheet>
  );
};

export interface SideNavbarProps {
  className?: string;
}

const SideNavbar = ({ className }: SideNavbarProps) => {
  const pathname = usePathname();

  return (
    <>
      <nav className={cn('flex flex-col items-center gap-4 px-2 sm:py-5', className)}>
        {NAV_LINKS.map(({ title, Icon, path }) => (
          <Tooltip key={`side-nav-link-${title}`}>
            <TooltipTrigger asChild>
              <Link
                href={path}
                className={cn(
                  'flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8',
                  {
                    'text-muted-foreground': path !== pathname,
                    'bg-accent text-accent-foreground': path === pathname
                  }
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{title}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{title}</TooltipContent>
          </Tooltip>
        ))}
      </nav>

      <ModeToggle />
    </>
  );
};

export { HeaderNavbar, SideNavbar };
