// FIXME: dont show
import React from 'react';
import { Story, Meta } from '@storybook/react';

import Subnavigation, { Props } from './Subnavigation';

export default {
  title: 'common/Subnavigation',
  component: Subnavigation,
} as Meta;

const Template: Story<Props> = (args) => <Subnavigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
