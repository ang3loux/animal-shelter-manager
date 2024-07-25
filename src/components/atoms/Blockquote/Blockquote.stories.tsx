import type { Meta, StoryObj } from '@storybook/react';

import { Blockquote } from './Blockquote';

const meta: Meta<typeof Blockquote> = {
  title: 'Atoms/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
  args: {
    children:
      'Adipisicing qui exercitation non consequat dolore do commodo nulla sunt et commodo velit aliquip. Laboris commodo ullamco magna labore nostrud laborum sunt. Tempor excepteur reprehenderit deserunt voluptate nostrud.'
  }
};

export default meta;

type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {};
