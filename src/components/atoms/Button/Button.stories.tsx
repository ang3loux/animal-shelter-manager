import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Button',
    variant: 'default',
    size: 'lg'
  },
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline'],
      control: { type: 'radio' }
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'radio' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
