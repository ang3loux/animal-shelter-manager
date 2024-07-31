import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/atoms/Button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from './DropdownMenu';

const Component: React.FC = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">Dropdown Menu</Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent className="w-56">
      <DropdownMenuLabel>Title</DropdownMenuLabel>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem>
          <span>Item 1</span>
          <DropdownMenuShortcut>T</DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <span>Item 2</span>
          </DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem>
                <span>Subitem 1</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);

const meta: Meta = {
  title: 'Molecules/DropdownMenu',
  component: Component,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
