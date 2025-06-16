import React from 'react'
import { Link } from 'react-scroll';
import './hero.css'

const Hero = () => {
  return (
    <div 
      id='Home' 
      className='hero container'>
      <div className='hero-text'>
        <h1>Welcome to Hemeson Academy</h1>
        <p>We help students  grow and succeed</p>
        <button className='btn'> <Link to="Contact" smooth={true} offset={-240} duration={500} className='btn'> Get Started</Link> </button>
      </div>
    </div>
  )
}

export default Hero