import React from 'react'
import './Footer.css'

const Footer = () => {
    const date = new Date();
    const currentDate = date.getFullYear();
  return (
    <div className='footer container'>
        <p>&copy; {currentDate} Hemeson Academy. All Rights Reserved</p>
        <p className='trust'>Powered by Trusted Ideas</p>
    </div>
  )
}

export default Footer