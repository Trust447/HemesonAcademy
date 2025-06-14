import React, { useEffect, useState} from 'react'
import { Link } from 'react-scroll';
import './navbar.css'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

const [mobileMenu, setMobileMenu] = useState(false)
  function toggleMenu() {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky?'dark-nav' : ""}`}>
        
        <Link to="hero" smooth={true} offset={0} duration={500} className="logo"><img src="hemeson-logo.png" alt="" />
          <p>HEMESON ACADEMY</p>
        </Link>
         
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link> </li>
            <li><Link to="Admission" smooth={true} offset={-250} duration={500}>Admission</Link> </li>
            <li><Link to="About" smooth={true} offset={-70} duration={500}>About us</Link> </li>
            <li><Link to="Testimonial" smooth={true} offset={-250} duration={500}>Testimonials</Link> </li>
            <li><Link to="Contact" smooth={true} offset={-240} duration={500} className='btn'>Contact us</Link> </li>

        </ul>
        <div onClick={toggleMenu} className='menu-icon'>{mobileMenu ? '\u2716' : '\u2630'}</div>
    </nav>
  )
}

export default Navbar