import type { Meta, StoryObj } from '@storybook/react';

import { TooltipProvider } from '../../molecules/Tooltip';
import { SideNavbar } from './Navbar';

const Component = () => (
  <TooltipProvider>
    <div className="flex flex-col w-10">
      <SideNavbar />
    </div>
  </TooltipProvider>
);

const meta: Meta<typeof SideNavbar> = {
  title: 'Organisms/SideNavbar',
  component: Component,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj<typeof SideNavbar>;

export const Default: Story = {};
