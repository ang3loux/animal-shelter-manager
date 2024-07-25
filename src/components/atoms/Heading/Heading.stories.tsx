import type { Meta, StoryObj } from '@storybook/react';

import { H1, H2, H3, H4 } from './Heading';

const meta: Meta<typeof H1> = {
  title: 'Atoms/Headings',
  component: H1, // Este componente será el default, pero puedes especificar componentes para cada story individual.
  tags: ['autodocs'],
  args: {
    children: 'Default Heading'
  }
};

export default meta;

type Story = StoryObj<typeof H1>;

export const H1Default: Story = {
  name: 'H1 Default',
  args: {
    children: 'Heading 1'
  }
};

export const H2Default: Story = {
  name: 'H2 Default',
  render: (args) => <H2 {...args} />,
  args: {
    children: 'Heading 2'
  }
};

export const H3Default: Story = {
  name: 'H3 Default',
  render: (args) => <H3 {...args} />,
  args: {
    children: 'Heading 3'
  }
};

export const H4Default: Story = {
  name: 'H4 Default',
  render: (args) => <H4 {...args} />,
  args: {
    children: 'Heading 4'
  }
};
