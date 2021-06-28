import React from 'react';
import { Story, Meta } from '@storybook/react';

import InputError, { Props } from './InputError';

export default {
  title: 'common/InputError',
  component: InputError,
} as Meta;

const Template: Story<Props> = (args) => <InputError {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title'
};
