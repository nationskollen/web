// FIXME: dosent show
import React from 'react';
import { Story, Meta } from '@storybook/react';

import InputGroup, { Props } from './InputGroup';

export default {
  title: 'common/InputGroup',
  component: InputGroup,
} as Meta;

const Template: Story<Props> = (args) => <InputGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    columns: 3
};
