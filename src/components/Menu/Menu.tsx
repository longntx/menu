import React, { useEffect } from 'react';
import './Menu.css';
import {
  BiBarChartAlt2,
  BiBookmark,
  BiFolder,
  BiGridAlt,
  BiLayer,
  BiLogOut,
  BiMessageSquareDetail,
  BiUser,
} from 'react-icons/bi';

export interface MenuProps {
  label: string;
  expanded: boolean;
  activeLink: string;
}

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
    return () => {};
  }, []);

  const activeLink = (needle: string, link: string): boolean => {
    return needle === link;
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
          <div>
            <a href="#" className="nav_logo">
              {' '}
              <BiLayer className="nav_logo-icon"></BiLayer>{' '}
              <span className="nav_logo-name">BBBootstrap</span>{' '}
            </a>
            <div className="nav_list">
              <a
                href="#"
                className={`nav_link ${
                  activeLink('first', props.activeLink) ? 'active' : ''
                }`}
              >
                {' '}
                <BiGridAlt className="nav-icon"></BiGridAlt>{' '}
                <span className="nav_name">Dashboard</span>{' '}
              </a>{' '}
              <a href="#" className="nav_link">
                {' '}
                <BiUser className="nav-icon"></BiUser>{' '}
                <span className="nav_name">Users</span>{' '}
              </a>{' '}
              <a href="#" className="nav_link">
                {' '}
                <BiMessageSquareDetail className="nav-icon"></BiMessageSquareDetail>{' '}
                <span className="nav_name">Messages</span>
              </a>{' '}
              <a href="#" className="nav_link">
                {' '}
                <BiBookmark className="nav-icon"></BiBookmark>{' '}
                <span className="nav_name">Bookmark</span>{' '}
              </a>{' '}
              <a href="#" className="nav_link">
                {' '}
                <BiFolder className="nav-icon"></BiFolder>{' '}
                <span className="nav_name">Files</span>{' '}
              </a>{' '}
              <a href="#" className="nav_link">
                <BiBarChartAlt2 className="nav-icon"></BiBarChartAlt2>{' '}
                <span className="nav_name">Stats</span>{' '}
              </a>
            </div>
          </div>
          <a href="#" className="nav_link">
            {' '}
            <BiLogOut className="nav-icon"></BiLogOut>{' '}
            <span className="nav_name">SignOut</span>{' '}
          </a>
        </nav>
      </div>
    </>
  );
};

export default Menu;
