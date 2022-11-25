import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { RootState } from '../reducer/store';
import logo from './logo.png';

function Header(): JSX.Element {
  const { user } = useSelector((state: RootState) =>
    state.userState);
  return (
    <div>
      <nav className="header">
        <NavLink className="logo" to="/">Своя игра</NavLink>
        {!user ? (
          <div className="header_links">
            <NavLink to="/auth/login">Вход</NavLink>
            <NavLink to="/auth/registration">Регистрация</NavLink>
          </div>
        ) : (
          <div className="header_links">
            <NavLink to="/game">
              Играть!
            </NavLink>
            <NavLink to="/profile">
              Профиль
            </NavLink>
            <NavLink to="/logout">
              Выход
            </NavLink>
          </div>
        )}

      </nav>
      <Outlet />
    </div>

  );
}

export default Header;
