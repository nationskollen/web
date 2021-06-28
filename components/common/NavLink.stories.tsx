import React from 'react';
import { Story, Meta } from '@storybook/react';

//export const Primary: React.VFC<{}> = () => <NavLink />;

import NavLink, { Props } from './NavLink';

export default {
  title: 'common/Navlink',
  component: NavLink,
} as Meta;

const Template: Story<Props> = (args) => <NavLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'youtube',
  href: 'https://www.youtube.com/watch?v=VApXDsYO5Gg',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'google',
  href: 'https://www.google.se/',
};
