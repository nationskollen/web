import React from 'react';
import { Story, Meta } from '@storybook/react';

import HeaderTitle, { Props } from './HeaderTitle';

export default {
  title: 'common/HeaderTitle',
  component: HeaderTitle,
} as Meta;

const Template: Story<Props> = (args) => <HeaderTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
};
