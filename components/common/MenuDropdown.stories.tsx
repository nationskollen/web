import React from 'react';
import { Story, Meta } from '@storybook/react';

import MenuDropdown, { Props } from './MenuDropdown';
import { SortDescendingIcon, SortAscendingIcon, DotsVerticalIcon } from '@heroicons/react/outline'

export default {
  title: 'common/MenuDropdown',
  component: MenuDropdown,
} as Meta;

const Template: Story<Props> = (args) => <MenuDropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cardClassName: "w-actions-popover",
  size: "icon",
  style: "transparent",
  button: () => <DotsVerticalIcon />
};
