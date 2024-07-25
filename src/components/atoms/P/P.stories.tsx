import type { Meta, StoryObj } from '@storybook/react';

import { P } from './P';

const meta: Meta<typeof P> = {
  title: 'Atoms/P',
  component: P,
  tags: ['autodocs'],
  args: {
    children:
      'Magna nulla cillum nostrud minim dolore ea sint in sunt elit consequat. Sint dolor nulla ipsum occaecat ad dolor aliquip fugiat voluptate. Dolore labore cupidatat ad voluptate officia consequat Lorem occaecat amet aute labore commodo. Sint eiusmod amet reprehenderit id eiusmod nisi do incididunt eu.'
  }
};

export default meta;

type Story = StoryObj<typeof P>;

export const Default: Story = {};
