import React, { useRef , useState} from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';



const Contact = () => {
  const form = useRef();
  const [resultMessage, setResultMessage] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        setResultMessage('✅ Message sent successfully!');
        form.current.reset();
    }, (error) => {
        setResultMessage('❌ Message failed to send. Please try again.');
        console.error(error.text);
    });
  };

  return (
    <div id='Contact' className='contact'>
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p>
          Feel free to reach out through the contact form or find our contact information below. Your feedback, questions 
          and suggestions are important to us as we strive to provide exceptional service to our school community.
        </p>
        <ul>
            <li><FaEnvelope className='icons' color="blue" /> isaactrust447@gmail.com</li>
            <li><FaPhoneAlt className='icons' color="blue" /> +234 803-898-2154</li>
            <li><FaMapMarkerAlt className='icons' color="blue" /> Umuejije, Osisioma <br />Aba, Abia State</li>
</ul>

      </div>

      <div className="contact-col">
        <form ref={form} onSubmit={sendEmail}>
          <label>Your name</label>
          <input type="text" name="name" placeholder='Enter your name' required />

          <label>Phone number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required />

          <label>Write your message here</label>
          <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>

            {resultMessage && <p className="success">{resultMessage}</p>}

          <button type='submit' className='btn dark-btn'>submit now</button>
        </form>
        
        <span></span>
      </div>
    </div>
  )
}

export default Contact;
