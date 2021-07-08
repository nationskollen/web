// FIXME: error
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { SearchIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

import MenuItem, { Props } from './MenuItem';

export default {
  title: 'common/MenuItem',
  component: MenuItem,
} as Meta;

const Template: Story<Props> = (args) => <MenuItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: PencilAltIcon,
  label: "Ändra",
  onClick: () => console.log('asd')
};
