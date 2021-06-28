import React from 'react';
import { Story, Meta } from '@storybook/react';

import BackArrow, { Props } from './BackArrow';

export default {
  title: 'common/BackArrow',
  component: BackArrow,
} as Meta;

const Template: Story<Props> = (args) => <BackArrow {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    href: '/admin/users',
    className: 'mb-sm'
};
