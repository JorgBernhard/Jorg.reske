import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './components/Main';
import About from './components/About';
import { BrowserRouter } from 'react-router-dom';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Main />
    <About />
    <Projects/>
    <Contacts />
    </BrowserRouter>
  </React.StrictMode>
);
