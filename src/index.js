import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Resume from './Pages/Resume/Resume';
import Work from './Pages/Work/Work';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Resume />
    <Work />
  </React.StrictMode>
);
