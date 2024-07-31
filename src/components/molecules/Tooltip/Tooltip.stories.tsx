import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './Tooltip';

interface ComponentProps {
  side?: 'top' | 'right' | 'bottom' | 'left';
}

const Component = ({ side }: ComponentProps) => (
  <TooltipProvider>
    <div className="flex justify-center">
      <Tooltip>
        <TooltipTrigger>Hover me!</TooltipTrigger>
        <TooltipContent side={side}>
          <p>Hello world!</p>
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
);

const meta: Meta<ComponentProps> = {
  title: 'Molecules/Tooltip',
  component: Component,
  tags: ['autodocs'],
  args: { side: 'left' },
  argTypes: {
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'radio' }
    }
  }
};

export default meta;

type Story = StoryObj<ComponentProps>;

export const Default: Story = {};
