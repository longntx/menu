export interface MenuItem {
  label: string;
  component?: JSX.Element;
  link?: string;
}

export interface MenuList extends MenuItem {
  child?: MenuItem[];
}

export interface MenuProps {
  html: boolean;
  expanded: boolean;
  activeLink: string;
  menu: MenuList[];
}
