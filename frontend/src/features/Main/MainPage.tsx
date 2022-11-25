import React from 'react';
import { Link } from 'react-router-dom';

function MainPage(): JSX.Element {
  return (
    <div className="main_container">
      <h1 className="main_title">Добро пожаловать в "Свою игру"!</h1>
      <p className='welcome_page'>Чтобы начать играть скорее переходи к <Link className='welcome_link' to="/auth/registration">регистрации</Link>🦊
      </p>
      {/* <img className="main_img" src="https://mf.b37mrtl.ru/russian/images/2021.10/article/6166c22b02e8bd360276f845.jpg" alt="main__back" /> */}
    </div>
  );
}

export default MainPage;
