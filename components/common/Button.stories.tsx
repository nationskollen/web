import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button, { Props } from './Button';

export default {
  title: 'common/Button',
  component: Button,
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} > button text </Button>;

export const Success = Template.bind({});
Success.args = {
    size: 'medium',
    style: 'success'
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    style: 'primary'
};
