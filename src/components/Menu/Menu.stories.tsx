import React, { FC, ReactElement } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Menu from './Menu';
import { MenuList, MenuProps } from '../../interfaces';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

const Comp: FC<any> = (props): ReactElement => {
  return <h1>{props.label}</h1>;
};

const menuListNoChild: MenuList[] = [
  {
    label: 'Dashboard',
    link: '/dashboard',
  },
  // {
  //   label: 'Users',
  //   link: '/users',
  //   component: <Comp label={'ABED'}/>,
  // },
  {
    label: 'Documents',
    link: '/documents',
  },
];

const menuListWithChild: MenuList[] = [
  {
    label: 'Dashboard',
    link: '/dashboard',
  },
  {
    label: 'Documents',
    link: '/documents',
    child: [
      {
        label: 'Documents 1',
        link: '/document1',
      },
      {
        label: 'Documents 2',
        link: '/document2',
      },
    ],
  },
  {
    label: 'Stats',
    link: '/stats',
    child: [
      {
        label: 'Stats 1',
        link: '/stats1',
      },
      {
        label: 'Stats 2',
        link: '/stats2',
      },
    ],
  },
];

const menuProps: MenuProps = {
  expanded: true,
  activeLink: '/users',
  html: true,
  menu: [],
};

export const DefaultMenu = Template.bind({});

DefaultMenu.args = {
  ...menuProps,
  menu: menuListNoChild,
};

export const MenuWithChild = Template.bind({});

MenuWithChild.args = {
  ...menuProps,
  menu: menuListWithChild,
};

export const MenuWithChildActive = Template.bind({});

MenuWithChildActive.args = {
  ...menuProps,
  menu: menuListWithChild,
  activeLink: '/document2',
};

export const MenuWithActive = Template.bind({});

MenuWithActive.args = {
  ...menuProps,
  menu: menuListWithChild,
  activeLink: '/dashboard',
};
