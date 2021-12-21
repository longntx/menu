import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from './Menu';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Collapsed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Collapsed.args = {
  label: 'Hello world!',
};

export const Expanded = Template.bind({});
Expanded.args = {
  ...Collapsed.args,
  expanded: true,
};

export const ActiveLink = Template.bind({});
ActiveLink.args = {
  ...Expanded.args,
  expanded: true,
  activeLink: 'first',
};
