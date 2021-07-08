// FIXME: dosent show
import clsx from 'clsx'

import React from 'react';
import { Story, Meta } from '@storybook/react';

import Anchor, { Props } from './Anchor';

export default {
  title: 'common/Anchor',
  component: Anchor,
} as Meta;

const Template: Story<Props> = (args) => <Anchor {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'unicID',
  offsetClass: '-top-admin-header'
};
