import React from 'react';
import { Story, Meta } from '@storybook/react';

//export const Primary: React.VFC<{}> = () => <NavLink />;

import NavLink, { Props } from '../components/common/NavLink';

export default {
  title: 'Example/Navlink',
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
