import React from 'react';
import { Story, Meta } from '@storybook/react';

import LoadingIndicator, { Props } from './LoadingIndicator';

export default {
  title: 'common/LoadingIndicator',
  component: LoadingIndicator,
} as Meta;

const Template: Story<Props> = (args) => <LoadingIndicator {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 'small'
};
