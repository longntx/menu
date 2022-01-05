import React, { useEffect, useRef } from 'react';
import { MenuItem, MenuList } from '../../interfaces';
import './GroupMenu.scss';
import { nanoid } from 'nanoid';
import { BiCaretRight } from 'react-icons/bi';
import { SingleMenu } from '../index';

const GroupMenu = (props: {
  menu?: MenuList;
  activeLink?: string;
  id: string;
}) => {
  const { menu, activeLink, id } = props;
  const toggleButton = useRef('');

  useEffect(() => {
    function clickListener() {
      if (toggleButton && toggleButton.current) {
        const hasChildActive = isActive(activeLink, menu?.child);
        if (!hasChildActive)
          toggleButton && toggleButton.current.classList.toggle('mm-active');
        toggleButton && toggleButton.current.classList.toggle('expanded');
        const subMenuList =
          document && document.querySelectorAll('.mm-active.expanded');
        if (subMenuList?.length > 0) {
          subMenuList.forEach((element) => {
            const isActiveRoute = element.querySelector('li.mm-active');
            const idElement = element.getAttribute('id');
            if (id !== idElement) {
              if (!isActiveRoute) element.classList.remove('mm-active');
              element.classList.remove('expanded');
            }
          });
        }
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

  const isActive = (
    activeURL: string | undefined,
    listLink: MenuItem[] | undefined,
  ) => {
    const activeItem = listLink?.find((item) => item.link === activeURL);
    return activeItem !== undefined;
  };

  return (
    <>
      <li
        ref={toggleButton}
        id={id}
        className={`${
          isActive(activeLink, menu?.child) ? 'mm-active expanded' : ''
        }`}
      >
        <a onClick={() => {}}>{menu?.label}</a>
        <div className="sub-menu">
          <ul>
            {menu?.child &&
              menu.child.map((item: MenuItem) => (
                <SingleMenu
                  key={nanoid()}
                  item={item}
                  isActive={item.link === activeLink}
                  isHtml={item.component !== undefined}
                />
              ))}
          </ul>
        </div>
      </li>
    </>
  );
};

export const GroupMenuMeMo = React.memo(GroupMenu);
