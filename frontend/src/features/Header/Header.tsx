import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from './logo.png';

function Header(): JSX.Element {
  return (
    <div>
      <nav className='header'>
          <NavLink className='logo' to='/'>Своя игра</NavLink>

        <div className='header_links'>

            <NavLink to='/auth/login'>Вход</NavLink>


            <NavLink to='/auth/registration'>Регистрация</NavLink>

        </div>
      </nav>
      <Outlet />
    </div>

  );
}

export default Header;
