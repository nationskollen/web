import React from 'react';
import { Story, Meta } from '@storybook/react';

import Container, { Props } from './Container';

export default {
  title: 'common/Container',
  component: Container,
} as Meta;

const Template: Story<Props> = (args) => <Container {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    noPadding: false
};
