import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider, useDispatch } from 'react-redux';

import Header from '../features/Header/Header';
import MainPage from '../features/Main/MainPage';

function App():JSX.Element {
  return (
    <Routes>
    <Route path="/" element={<Header />}>
      <Route path="main" element={<MainPage />} />
    </Route>
    </Routes>
  );
}

export default App;
