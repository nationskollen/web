import React from 'react';
import { Story, Meta } from '@storybook/react';

import Checkbox, { Props } from './Checkbox';

export default {
  title: 'common/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<Props> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    checked: true
};
