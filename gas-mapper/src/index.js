import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// This file is meant to be the entry point for the javascript

//https://www.youtube.com/watch?v=c02YoWR9gSY <-- used this for routing

//DECLARITIVE MODE

// Use loaders when loading route 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);
