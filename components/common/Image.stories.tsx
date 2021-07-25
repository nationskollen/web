import React from 'react';
import { Story, Meta } from '@storybook/react';
import { LibraryIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline'
import { useNation } from '@nationskollen/sdk'
import { useAuth } from '@contexts/Auth'

import Image, { Props } from './Image';

export default {
  title: 'common/Image',
  component: Image,
} as Meta;

const Template: Story<Props> = (args) => <Image {...args} />;
//const { token, oid, logout } = useAuth();
//const { data } = useNation(oid);

export const Primary = Template.bind({});
Primary.args = {
  //src: data?.icon_img_src,
  size: 'small',
  className: "h-12",
  fallbackClassName: "p-sm",
  backgroundClassName: "bg-transparent",
  fallbackIcon: LibraryIcon
};
