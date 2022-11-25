import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../reducer/store';

export default function Profile(): JSX.Element {
  const navigate = useNavigate();
  const { user, points } = useSelector((state: RootState) =>
    state.userState);

  return (
    <div className="main_container">
      <h1 className="main_title">Если любишь играть - играй!</h1>
      <div className="profile_block">
        <div className="profile_card">
          <img className="img_profile" src="https://krasivosti.pro/uploads/posts/2021-03/1616475211_2-p-nyashnie-kotyata-foto-koshka-2.jpg" alt="avatar" />
          <p>Логин: {user}</p>
          <p>Статистика: {points} рублей</p>
          <button type="button" className="reviewLinkBack" onClick={() => navigate(-1)}>Назад</button>
        </div>
      </div>
    </div>
  );
}
