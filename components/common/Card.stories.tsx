import React from 'react';
import { Story, Meta } from '@storybook/react';

import Card, { Props } from './Card';

export default {
  title: 'common/Card',
  component: Card,
} as Meta;

const Template: Story<Props> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    noPadding: true,
    radiusSmall: true,
    active: true
};
