// FIXME: error: no one uses radio
import React from 'react';
import { Story, Meta } from '@storybook/react';

import Radio, { Props } from './RadioGroup';

export default {
  title: 'common/Radio',
  component: Radio,
} as Meta;

const Template: Story<Props> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title',
    value: 'value'
};
