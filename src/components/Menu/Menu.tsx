import React from 'react';
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
}

const Menu = (props: MenuProps) => {
  return (
    <div className="l-navbar" id="nav-bar">
      <nav className="nav">
        <div>
          <a href="#" className="nav_logo">
            {' '}
            <BiLayer className="nav_logo-icon"></BiLayer>{' '}
            <span className="nav_logo-name">BBBootstrap</span>{' '}
          </a>
          <div className="nav_list">
            <a href="#" className="nav_link active">
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
  );
};

export default Menu;
