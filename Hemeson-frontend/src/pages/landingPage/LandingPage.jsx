import React from 'react'
import About from '../../components/about/About'
import Contact from '../../components/contact/Contact'
import Hero from '../../components/hero/Hero'
import Admission from '../../components/Admission/Admission'
import Title from '../../components/Title/Title'
import Testimonials from '../../components/Testimonials/Testimonials'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <div className='container'>
        <Title subtitle="ADMISSION"  title="START YOUR JOURNEY WITH US"/>
        <Admission />
        <About />
        <Title  subtitle="TESTIMONIALS"  title="WHAT PARENTS SAY"/>
        <Testimonials  />
        <Title subtitle="contact us"  title="get in touch"/>
        <Contact /> 
      </div>
      
    </div>
  )
}

export default LandingPage