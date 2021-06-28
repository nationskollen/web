import React from 'react';
import { Story, Meta } from '@storybook/react';

import Input, { Props } from './Input';

export default {
  title: 'common/Input',
  component: Input,
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 'small'
};
