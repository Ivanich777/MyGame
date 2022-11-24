import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Profile = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className='profile'>
      <h1>Профиль</h1>
      <div className='profile_block'>
        <img className='img_profile' src='https://krasivosti.pro/uploads/posts/2021-03/1616475211_2-p-nyashnie-kotyata-foto-koshka-2.jpg' alt='avatar'/>
        <div className='profile_info'>
          <p>ID: </p>
          <p>Логин: </p>
          <p>E-mail: </p>
          <p>Статистика: </p>
        </div>
        <button type='button' className='reviewLinkBack' onClick={() => navigate(-1)}>Назад</button>
      </div>
    </div>
  )
}
