// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS for Home
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Import Footer

const Home = () => {
  const cards = [
    { title: 'Chat', link: '/chat' },
    { title: 'Translator', link: '/translator' },
    { title: 'About', link: '/about' },
    { title: 'FAQ', link: '/FAQ' },
    { title: 'Translator',  link: '/translator' },
    { title: 'About', link: '/about' },
  ];

  return (
    <div className="main-container">
      <Navbar />
      <div className="card-container">
        {cards.map((card, index) => (
          <Link to={card.link} className="card" key={index}>
            <h3 className='container-name'>{card.title}</h3>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
