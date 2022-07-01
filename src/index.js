import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import Wall from './pages/Wall/Wall';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Wall /> 
    <Projects />   
    <Contact />
  </React.StrictMode>
);

