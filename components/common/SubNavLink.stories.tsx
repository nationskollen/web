import React from 'react';
import { Story, Meta } from '@storybook/react';

import SubNavLink, { Props } from './SubNavLink';

export default {
  title: 'common/SubNavLink',
  component: SubNavLink,
} as Meta;

const Template: Story<Props> = (args) => <SubNavLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'youtube',
    href: 'https://www.youtube.com/'
};
