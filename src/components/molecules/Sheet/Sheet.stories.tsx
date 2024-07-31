import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/atoms/Button';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from './Sheet';

interface ComponentProps {
  side?: 'top' | 'right' | 'bottom' | 'left';
}

const Component = ({ side }: ComponentProps) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open</Button>
    </SheetTrigger>
    <SheetContent side={side}>
      <SheetHeader>
        <SheetTitle>Sheet title</SheetTitle>
        <SheetDescription>Sheet description</SheetDescription>
      </SheetHeader>
      Sheet content
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Close sheet</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
);

const meta: Meta<ComponentProps> = {
  title: 'Molecules/Sheet',
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
