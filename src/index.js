import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Portugues from "./pages/Portugues";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Header />}>
          <Route index element={<Main />} />
          <Route path="portugues" element={<Portugues />} />
        
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);