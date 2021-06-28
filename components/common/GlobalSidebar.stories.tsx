import React from 'react';
import { Story, Meta } from '@storybook/react';

import GlobalSidebar, { Props } from './GlobalSidebar';

export default {
  title: 'common/GlobalSidebar',
  component: GlobalSidebar,
} as Meta;

const Template: Story<Props> = (args) => <GlobalSidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
