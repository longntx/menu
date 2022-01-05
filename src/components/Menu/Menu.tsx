import React, { useEffect } from 'react';
import './Menu.scss';
import { MenuList, MenuProps } from '../../interfaces';
import { nanoid } from 'nanoid';
import { GroupMenu, SingleMenu } from '../index';

const Menu = (props: MenuProps) => {
  useEffect(() => {
    const addListener = function () {
      const showNavbar = (toggleId: string, navId: string) => {
        const toggle = document.getElementById(toggleId);
        const nav = document.getElementById(navId);

        if (toggle && nav) {
          toggle.addEventListener('click', () => {
            // show navbar
            nav.classList.toggle('show');
          });
        }
      };

      showNavbar('header-toggle', 'nav-bar');
      /*===== LINK ACTIVE =====*/
      const linkColor = document.querySelectorAll('.nav_link');

      function colorLink(event: any) {
        if (linkColor) {
          linkColor.forEach((l) => l.classList.remove('active'));
          event && event.srcElement && event.srcElement.classList.add('active');
          // this.classList.add('active');
        }
      }
      linkColor.forEach((l) => l.addEventListener('click', colorLink));
      // Your code to run since DOM is loaded and ready
    };

    addListener();
    return () => {
      // intention
    };
  }, []);

  const activeLink = (needle: MenuList, link: string): boolean => {
    if (!needle.child || needle.child.length === 0) return needle.link === link;
    const activeItem = needle.child.find((item) => item.link === link);
    return !!activeItem;
  };

  const preventDefault = (e: any) => e.preventDefault();

  return (
    <>
      <div
        style={{
          position: 'absolute',
          cursor: 'pointer',
          left: '450px',
          top: '50px',
        }}
        id="header-toggle"
      >
        Click Me
      </div>
      <br />
      <div className={`l-navbar ${props.expanded ? 'show' : ''}`} id="nav-bar">
        <ul className="metismenu">
          {props.menu &&
            props.menu.length > 0 &&
            props.menu.map((item, index) => (
              <React.Fragment key={nanoid()}>
                {!item.child && (
                  <SingleMenu
                    item={item}
                    isActive={activeLink(item, props.activeLink)}
                    isHtml={props.html}
                  />
                )}

                {item.child && item.child.length > 0 && (
                  <GroupMenu
                    activeLink={props.activeLink}
                    menu={item}
                    id={nanoid()}
                  />
                )}
              </React.Fragment>
            ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
