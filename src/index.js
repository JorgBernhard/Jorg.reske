import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Home from './Pages/Home/Home';
import Project from './Pages/Project/Project';
import Logistic from './Pages/Logistic/Logistic';
import Designer from './Pages/Designer/Designer';
import Developer from './Pages/Developer/Developer';
import Me from './Pages/Me/Me';
import Header from './Pages/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Project />
    <Logistic />
    <Designer />
    <Developer />
    <Me />
  </React.StrictMode>
);

