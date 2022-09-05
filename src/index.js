import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Pages/Main/Main';
import Header from './Pages/Header/Header';
import AboutMe from './Pages/AboutMe/AboutMe';
import Design from './Pages/Design/Design';
import Contact from './Pages/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <AboutMe />
    <Design />
    <Contact />
  </React.StrictMode>
);

