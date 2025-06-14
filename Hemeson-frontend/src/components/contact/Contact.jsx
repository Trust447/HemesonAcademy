import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div id='Contact' className='contact'>
        <div className="contact-col">
            <h3>Send us a message</h3>
            <p>
                Feel free to reach out through contact form or find our contact information below. Your feedback, questions 
                and suggestions are importantant to us as we strive to provide exceptional service to our school community.
            </p>
            <ul>
                <li>isaactrust447@gmail.com</li>
                <li>+234 803-898-2154</li>
                <li>Umuejije, Osisioma <br />Aba, Abia State</li>
            </ul>
        </div>

        <div className="contact-col">
            <form >
                <label>Your name</label>
                <input type="text" name="name" placeholder='Enter your name' required/>

                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />

                <label>Write your message here</label>
                <textarea name="message"rows={6} placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>submit now</button>
            </form>
            <span></span>
        </div>
    </div>
  )
}

export default Contact