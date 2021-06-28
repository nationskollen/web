import React from 'react';
import { Story, Meta } from '@storybook/react';

import Title, { Props } from './Title';

export default {
  title: 'common/Title',
  component: Title,
} as Meta;

const Template: Story<Props> = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'text',
  size: 'default',
};
