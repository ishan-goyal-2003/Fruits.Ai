// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/App.css'; // Your CSS file if you have one

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
