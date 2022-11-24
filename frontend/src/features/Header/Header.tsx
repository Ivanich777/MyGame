import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Header.css';
import logo from './logo.png';

function Header():JSX.Element {
  return (
    <div className="app__container">
      <nav className="header__nav">
        <div className="header__container">
          {/* <h1>logo</h1> */}
          <ul className="header__menu">
            <li>
              <NavLink className="header__item" to="/main">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="header__item" to="/auth">
                Authorization
              </NavLink>
            </li>
            <li>
              <NavLink className="header__item" to="/profile">
                Профиль
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Header;
