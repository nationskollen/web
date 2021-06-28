import React from 'react';
import { Story, Meta } from '@storybook/react';

import RadioPillItem, { Props } from './RadioPillItem';

export default {
  title: 'common/RadioPillItem',
  component: RadioPillItem,
} as Meta;

const Template: Story<Props> = (args) => <RadioPillItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'label',
    checked: true
};
