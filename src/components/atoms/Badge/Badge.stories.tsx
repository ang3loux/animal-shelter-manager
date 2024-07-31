import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  args: {
    children: 'Badge',
    variant: 'default'
  },
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline'],
      control: { type: 'radio' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
