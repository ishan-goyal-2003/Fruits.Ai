// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Chat from './pages/Chatbot'; // Updated to match your structure
import Translator from './pages/Translator';
import About from './pages/About';
import FAQ from './pages/FAQ'; // If you want to include the FAQ page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} /> {/* Chatbot page */}
        <Route path="/translator" element={<Translator />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} /> {/* FAQ page */}
      </Routes>
    </Router>
  );
};

export default App;
