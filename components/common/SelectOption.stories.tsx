// FIXME: error
import React from 'react';
import { Story, Meta } from '@storybook/react';

import SelectOption, { Props } from './SelectOption';

export default {
  title: 'common/SelectOption',
  component: SelectOption,
} as Meta;

const Template: Story<Props> = (args) => <SelectOption {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  index: 1,
  //key: 3 //option.id
  //option: 34 //
};
