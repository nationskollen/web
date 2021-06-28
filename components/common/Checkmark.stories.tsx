import React from 'react';
import { Story, Meta } from '@storybook/react';

import Checkmark, { Props } from './Checkmark';

export default {
  title: 'common/Checkmark',
  component: Checkmark,
} as Meta;

const Template: Story<Props> = (args) => <Checkmark {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    checked: true
};
