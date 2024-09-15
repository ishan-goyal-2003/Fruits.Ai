// src/pages/About.js
import React from 'react';
import './About.css'; // Import CSS for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About Fruits.ai</h1>
      <p>
        Welcome to Fruits.ai, your personal health manager designed to help you
        make informed dietary choices. Our application provides a wealth of
        information about various Fruitss, their nutritional benefits, and how
        they can contribute to a healthier lifestyle.
      </p>
      <h2>Our Mission</h2>
      <p>
        At Fruits.ai, we aim to empower individuals by providing easy access to
        nutritional information and personalized recommendations. Our goal is to
        promote healthier eating habits and support users in their wellness
        journey.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Interactive Chatbot for personalized Fruits recommendations.</li>
        <li>Translation feature to understand nutritional information in your preferred language.</li>
        <li>Comprehensive FAQ section to answer all your Fruits-related queries.</li>
        <li>Easy navigation for a seamless user experience.</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, feel free to reach out to us at
        <a href="mailto:support@Fruits.ai"> support@Fruits.ai</a>.
      </p>
    </div>
  );
};

export default About;
