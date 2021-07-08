import React from 'react';
import { Story, Meta } from '@storybook/react';

import Container, { Props } from './Container';
import NavLink from './NavLink'

export default {
  title: 'common/Container',
  component: Container,
} as Meta;

const Template: Story<Props> = (args) => <Container {...args} > <NavLink title="google" href="https://www.google.se/" /> </Container>;

export const Primary = Template.bind({});
Primary.args = {
  as: "nav",
  role: "navigation",
  className: "w-full flex flex-row justify-between items-center py-sm",
  noPadding: false
};
