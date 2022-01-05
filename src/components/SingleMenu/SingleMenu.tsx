import React from 'react';
import { MenuItem } from '../../interfaces';

const SingleMenu = (props: {
  item?: MenuItem;
  isActive?: boolean;
  isHtml?: boolean;
}) => {
  const { item, isActive, isHtml } = props;
  return (
    <a onClick={() => {}} className={`${isActive ? 'mm-active' : ''}`}>
      <>
        {isHtml && item?.component}
        {!item?.component && <span className="">{item?.label}</span>}
      </>
    </a>
  );
};

export const SingleMenuMeMo = React.memo(SingleMenu);

