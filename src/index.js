import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Main from './Main/Main';
import Header from './Header/Header';
import Portfolio from './Portfolio/Portfolio';
import Project from './Projects/Projects';
import Contact from './Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Portfolio /> 
    <Project />
    <Contact />
  </React.StrictMode>
);

