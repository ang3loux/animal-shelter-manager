import type { Meta, StoryObj } from '@storybook/react';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './Card';

const Component = () => (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Card title</CardTitle>
      <CardDescription>Card description</CardDescription>
    </CardHeader>
    <CardContent>Card content</CardContent>
    <CardFooter className="flex justify-between">Card footer</CardFooter>
  </Card>
);

const meta: Meta = {
  title: 'Molecules/Card',
  component: Component,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
