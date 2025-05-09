import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={`${process.env.PUBLIC_URL}/videos/Invinsible.mp4`} autoPlay loop muted playsInline />
      <h1>JONATHAN DARGAKIS</h1>
      <p>ʕ•ᴥ•ʔ</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;