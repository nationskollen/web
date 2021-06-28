import React from 'react';
import { Story, Meta } from '@storybook/react';

import Select, { Props } from './Select';

export default {
  title: 'common/Select',
  component: Select,
} as Meta;

const Template: Story<Props> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'label'
};
