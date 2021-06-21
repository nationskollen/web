import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AdminSection, Props } from '../components/admin/AdminSection';

export default {
  title: 'Example/AdminSection',
  component: AdminSection,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = (args) => <AdminSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "Some string",
  children: 'Button',
};
