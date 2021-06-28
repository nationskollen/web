import React from 'react';
import { Story, Meta } from '@storybook/react';

import CustomPopover, { Props } from './Popover';

export default {
  title: 'common/CustomPopover',
  component: CustomPopover,
} as Meta;

const Template: Story<Props> = (args) => <CustomPopover {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
