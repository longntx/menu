import React, { useEffect } from 'react';
import './Menu.css';
import { BiLogOut } from 'react-icons/bi';
import { MenuList, MenuProps } from '../../interfaces';
import GroupMenu from '../GroupMenu';
import { nanoid } from 'nanoid';
import SingleMenu from '../SingleMenu';

const Menu = (props: MenuProps) => {
  useEffect(() => {
    const addListener = function () {
      const showNavbar = (
        toggleId: string,
        navId: string,
        bodyId: string,
        headerId: string,
      ) => {
        const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId),
          bodypd = document.getElementById(bodyId),
          headerpd = document.getElementById(headerId);

        // Validate that all variables exist
        // if (toggle && nav && bodypd && headerpd) {
        //   toggle.addEventListener('click', () => {
        //     // show navbar
        //     nav.classList.toggle('show');
        //     // change icon
        //     toggle.classList.toggle('bx-x');
        //     // add padding to body
        //     bodypd.classList.toggle('body-pd');
        //     // add padding to header
        //     headerpd.classList.toggle('body-pd');
        //   });
        // }
        if (toggle && nav) {
          toggle.addEventListener('click', () => {
            // show navbar
            nav.classList.toggle('show');
            // change icon
            // toggle.classList.toggle('bx-x');
            // add padding to body
            // bodypd.classList.toggle('body-pd');
            // add padding to header
            // headerpd.classList.toggle('body-pd');
          });
        }
      };

      showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header');
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
        <nav className="nav">
          <>
            <div className="nav_list">
              {props.menu &&
                props.menu.length > 0 &&
                props.menu.map((item, index) => (
                  <div key={nanoid()}>
                    {!item.child && (
                      <SingleMenu
                        item={item}
                        isActive={activeLink(item, props.activeLink)}
                        isHtml={props.html}
                      />
                    )}

                    {item.child && item.child.length > 0 && (
                      <GroupMenu activeLink={props.activeLink} menu={item} />
                    )}
                  </div>
                ))}
            </div>
          </>
          <a href="#" className="nav_link">
            {' '}
            <BiLogOut className="nav-icon" />{' '}
            <span className="nav_name">SignOut</span>{' '}
          </a>
        </nav>
      </div>
    </>
  );
};

export default Menu;
