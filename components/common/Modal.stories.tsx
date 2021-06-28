import React from 'react';
import { Story, Meta } from '@storybook/react';

import Modal, { Props } from './MenuItem';

export default {
  title: 'common/Modal',
  component: Modal,
} as Meta;

const Template: Story<Props> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'title'
};
