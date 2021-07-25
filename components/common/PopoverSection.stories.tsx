// FIXME: dosent show
import React from 'react';
import { Story, Meta } from '@storybook/react';

import PopoverSection, { Props } from './PopoverSection';

export default {
  title: 'common/PopoverSection',
  component: PopoverSection,
} as Meta;

const Template: Story<Props> = (args) => <PopoverSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
