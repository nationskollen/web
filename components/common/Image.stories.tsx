import React from 'react';
import { Story, Meta } from '@storybook/react';

import Image, { Props } from './Image';

export default {
  title: 'common/Image',
  component: Image,
} as Meta;

const Template: Story<Props> = (args) => <Image {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    //src: '../../public/vercel.svg',
    size: 'small'
};
