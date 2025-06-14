import React from 'react'
import './About.css'
import Title from '../Title/Title'

const About = () => {
  return (
    <div id='About' className='about'>
        <div className='about-left'>
            <img className='about-img' src="about-image.jpg" alt="" />
        </div>
        <div className='about-right'>
            <h3>ABOUT HEMESON ACADEMY</h3>
            <h2>Nurturing Tomorow's Leaders Today</h2>
            <p>
                Founded in 2016, our school was established with a clear vision: to provide a 
                nurturing and inspiring learning environment where every student can thrive. Since our inception, 
                we have remained committed to academic excellence, character development, and community engagement.
            </p>
            <p>
                At Hemeson Academy, we believe that education goes beyond the classroom. Our dedicated team of educators,
                modern teaching approach, and supportive environment ensure that students not only succeed academically 
                but also grow into confident, responsible individuals.
            </p>
            <p>
                We are proud of our journey so far and continue to shape minds, build futures, and prepare our 
                students for a world full of possibilities.
            </p>
        </div>
    </div>
  )
}

export default About