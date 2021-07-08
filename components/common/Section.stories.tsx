// FIXME: dont show
import React from 'react';
import { Story, Meta } from '@storybook/react';

import Section, { Props } from './Section';

export default {
  title: 'common/Section',
  component: Section,
} as Meta;

const Template: Story<Props> = (args) => <Section {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    id: 'id'
};
