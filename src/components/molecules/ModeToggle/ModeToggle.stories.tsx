import type { Meta, StoryObj } from '@storybook/react';

import { ModeToggle } from './ModeToggle';

const meta: Meta<typeof ModeToggle> = {
  title: 'Molecules/ModeToggle',
  component: ModeToggle,
  tags: ['autodocs'],
  args: {
    children: 'Example',
    variant: 'default'
  }
};

export default meta;

type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {};
