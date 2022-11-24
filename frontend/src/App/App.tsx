import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider, useDispatch } from 'react-redux';

import Header from '../features/Header/Header';
import MainPage from '../features/Main/MainPage';
import { Profile } from '../features/Profile/Profile';

function App():JSX.Element {
  return (
    <Routes>
    <Route path="/" element={<Header />}>
      <Route path="/" element={<MainPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/modal" element={<Modal />} />
    </Route>
    </Routes>
  );
}

export default App;
