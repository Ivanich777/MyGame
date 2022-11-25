import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Profile = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="main_container">
      <h1 className="main_title">Если любишь играть - играй!</h1>
      <div className='profile_block'>
        <div className='profile_card'>
        <img className='img_profile' src='https://krasivosti.pro/uploads/posts/2021-03/1616475211_2-p-nyashnie-kotyata-foto-koshka-2.jpg' alt='avatar'/>
          <p>ID: Тут айди</p>
          <p>Логин: Тут логин</p>
          <p>E-mail: Почта@почта.сом</p>
          <p>Статистика: Типа цифра и %</p>
        <button type='button' className='reviewLinkBack' onClick={() => navigate(-1)}>Назад</button>
        </div>
      </div>
    </div>
  )
}
