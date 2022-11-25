import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../reducer/store';

function MainPage(): JSX.Element {
  const { user } = useSelector((state: RootState) =>
    state.userState);

  return (
    <>
      {!user ? (
        <>
          <h1 className="main_title">Добро пожаловать в "Свою игру"!</h1>
          <p className="welcome_page">Чтобы начать играть скорее переходи к <Link className="welcome_link" to="/auth/registration">регистрации</Link>🦊
          </p>
        </>
      )
        :
        (
          <>
            <h1 className="main_title">Добро пожаловать, {user}!</h1>
            <p className="welcome_page">Ты уже зарегистрирован, скорее переходи к <Link className="welcome_link" to="/game">игре</Link>!
            </p>
          </>
        )}
    </>
  );
}

export default MainPage;
