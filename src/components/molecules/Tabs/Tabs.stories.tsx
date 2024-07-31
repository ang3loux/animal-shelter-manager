import type { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';

const Component = () => (
  <Tabs defaultValue="tab1">
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      <div className="p-3">Tab 1 content</div>
    </TabsContent>
    <TabsContent value="tab2">
      <div className="p-3">Tab 2 content</div>
    </TabsContent>
  </Tabs>
);

const meta: Meta = {
  title: 'Molecules/Tabs',
  component: Component,
  tags: ['autodocs'],
  args: {}
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
