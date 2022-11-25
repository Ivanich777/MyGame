import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider, useDispatch } from 'react-redux';

import MainPage from '../features/Main/MainPage';
import { Profile } from '../features/Profile/Profile';
import { Modal } from '../features/Modal/Modal';

import * as api from './api';
import CardList from '../features/CardList/CardList';
import Header from '../features/Header/Header';
import Auth from '../features/Auth/Auth';
import Logout from '../features/Auth/Logout';

function App():JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    api.loadCards().then((data) => dispatch({ type: 'INIT_CARD', payload: data })
    );
    api.loadTopics().then((data) => dispatch({ type: 'INIT_TOPICS', payload: data })
    );
  }, []);

  return (

    <Routes>
    <Route path="/" element={<Header />}>
      <Route path="/" element={<MainPage />} />
      <Route path="auth/:name" element={<Auth />} />
      <Route path="/game" element={<CardList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/logout" element={<Logout />} />
    </Route>
    </Routes>

  );
}

export default App;
