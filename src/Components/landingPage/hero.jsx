import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/images/hero.jpg';
import './hero.css'; // Import your CSS file

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Your Mental Wellness Simplified</h1>
        <p>Track, Heal, and Thrive Every Day.</p>
        <div className="hero-buttons">
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Mental wellness visual" />
      </div>
    </header>
  );
};

export default Hero;
