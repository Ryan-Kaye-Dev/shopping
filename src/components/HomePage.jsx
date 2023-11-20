import hero from '../assets/hero.jpg';
import Button from './Button';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <div className="homepage-container">
        <h1 className="hero-text">ACHIEVE NEW HEIGHTS</h1>
        <img className="hero" src={hero} alt="hero image" />
        <Button className="home-button" label="ENTER STORE" to="/shop" />
      </div>
    </>
  );
};

export default HomePage;
