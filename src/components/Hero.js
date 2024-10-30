import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Welcome to Our Website</h1>
        <div className="hero-buttons">
          <Link to="/login">
            <button className="hero-button login-button">Login</button>
          </Link>
          <Link to="/signup">
            <button className="hero-button signup-button">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;