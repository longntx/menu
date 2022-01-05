import React from 'react';
import { MenuItem } from '../../interfaces';

const SingleMenu = (props: {
  item?: MenuItem;
  isActive?: boolean;
  isHtml?: boolean;
}) => {
  const { item, isActive, isHtml } = props;
  return (
    <li className={`${isActive ? 'mm-active' : ''}`}>
      <a onClick={() => {}}>
        <>
          {isHtml && item?.component}
          {!item?.component && <span className="">{item?.label}</span>}
        </>
      </a>
    </li>
  );
};

export const SingleMenuMeMo = React.memo(SingleMenu);
