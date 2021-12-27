import React, { useEffect, useRef } from 'react';
import { MenuItem, MenuList } from '../../interfaces';
import './GroupMenu.scss';
import { nanoid } from 'nanoid';
import SingleMenu from '../SingleMenu';
import { BiCaretRight } from 'react-icons/bi';

const GroupMenu = (props: { menu: MenuList; activeLink: string }) => {
  const { menu, activeLink } = props;
  const toggleButton = useRef('');

  useEffect(() => {
    function clickListener() {
      if (toggleButton && toggleButton.current) {
        // @ts-ignore
        toggleButton && toggleButton.current.classList.toggle('open');
      }
    }
    if (toggleButton && toggleButton.current) {
      // @ts-ignore
      toggleButton.current.addEventListener('click', clickListener);
    }
    return () => {
      // @ts-ignore
      toggleButton?.current?.removeEventListener('click', clickListener, false);
    };
  }, []);

  const isActive = (activeURL: string, listLink: MenuItem[] | undefined) => {
    const activeItem = listLink?.find((item) => item.link === activeURL);
    return activeItem !== undefined;
  };

  return (
    <>
      <div
        // @ts-ignore
        ref={toggleButton}
        className={`nav_links ${
          isActive(activeLink, menu?.child) ? 'open' : ''
        }`}
      >
        <div
          className={`nav_links--title ${
            isActive(activeLink, menu?.child) ? 'active' : ''
          }`}
        >
          <span>{menu.label}</span>
          <BiCaretRight className="nav-icon" />
        </div>
        <div className="nav_links__items">
          {menu.child &&
            menu.child.map((item: MenuItem) => (
              <SingleMenu
                key={nanoid()}
                item={item}
                isActive={item.link === activeLink}
                isHtml={item.component !== undefined}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export const GroupMenuMeMo = React.memo(GroupMenu);

