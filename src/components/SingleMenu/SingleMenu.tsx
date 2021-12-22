import React from 'react';
import { MenuItem } from '../../interfaces';

const SingleMenu = (props: {
  item: MenuItem;
  isActive: boolean;
  isHtml: boolean;
}) => {
  const { item, isActive, isHtml } = props;
  return (
    <a href="#" className={`nav_link ${isActive ? 'active' : ''}`}>
      <>
        {isHtml && item.component}
        {!item.component && <span className="nav_name">{item.label}</span>}
      </>
    </a>
  );
};

export default SingleMenu;
