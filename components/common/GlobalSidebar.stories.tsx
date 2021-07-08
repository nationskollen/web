import React from 'react';
import { Story, Meta } from '@storybook/react';

import GlobalSidebar, { Props } from './GlobalSidebar';
import NavLink from './NavLink'

export default {
  title: 'common/GlobalSidebar',
  component: GlobalSidebar,
} as Meta;

const Template: Story<Props> = (args) => <GlobalSidebar {...args} > <NavLink title="google" href="https://www.google.se/" /> </GlobalSidebar>;

export const Primary = Template.bind({});
Primary.args = {
};
