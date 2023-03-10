import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Work from './Pages/Work/Work';
import Education from './Pages/Education/Education';
import Contact from './Pages/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Work />
    <Education />
    <Contact />
  </React.StrictMode>
);