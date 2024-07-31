import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    placeholder: 'placeholder',
    defaultValue: 'default value',
    disabled: false
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' }
    }
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
