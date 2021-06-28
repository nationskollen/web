import React from 'react';
import { Story, Meta } from '@storybook/react';

import CardTitle, { Props } from './CardTitle';

export default {
  title: 'common/CardTitle',
  component: CardTitle,
} as Meta;

const Template: Story<Props> = (args) => <CardTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'primary',
    modal: false
};
