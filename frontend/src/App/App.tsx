import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider, useDispatch } from 'react-redux';

import MainPage from '../features/Main/MainPage';

import * as api from './api';
import CardList from '../features/CardList/CardList';

function App():JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    api.loadCards().then((data) => dispatch({ type: 'INIT_CARD', payload: data })
    );
  }, []);

  return (

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/game" element={<CardList />} />
      </Routes>

  );
}

export default App;
