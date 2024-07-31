import type { Meta, StoryObj } from '@storybook/react';

import { HeaderNavbar } from './Navbar';

const meta: Meta<typeof HeaderNavbar> = {
  title: 'Organisms/HeaderNavbar',
  component: HeaderNavbar,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj<typeof HeaderNavbar>;

export const Default: Story = {};
