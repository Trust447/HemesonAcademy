import React from 'react'
import '../index.css'
import Navbar from './navbar/Navbar'
import LandingPage from '../pages/landingPage/LandingPage'
import Footer from './Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <div className='container'><Footer /></div>
      
    </div>
  )
}

export default App