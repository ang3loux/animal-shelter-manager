import type { Meta, StoryObj } from '@storybook/react';
import { Search } from 'lucide-react';

import { Input } from '../../atoms/Input';

const Component = () => (
  <div>
    <Search className="absolute left-4 top-5 h-5 w-5 text-muted-foreground" />
    <Input
      type="search"
      placeholder="Search..."
      className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
    />
  </div>
);

const meta: Meta = {
  title: 'Organisms/SearchInput',
  component: Component,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
