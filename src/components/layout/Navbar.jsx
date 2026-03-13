import React, { useState, useEffect } from 'react'
import { SITE } from '../../data/site'
import { waURL } from '../../utils/whatsapp'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import logoSrc from '../../assets/hemeson-logo.png'
import './Navbar.css'

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 76
  const top  = el.getBoundingClientRect().top + window.scrollY - navH
  window.scrollTo({ top, behavior: 'smooth' })
}

const DISPLAY_NAV = [
  { label: 'Home',         target: 'home'      },
  { label: 'Academics',    target: 'levels'    },
  // { label: 'Student Life', target: 'collage'   },
  { label: 'About Us',     target: 'values'    },
  { label: 'News',         target: 'news'      },
]

const MOBILE_LINKS = [
  { label: 'Home',           target: 'home'       },
  { label: 'Academics',      target: 'levels'     },
  // { label: 'Student Life',   target: 'collage'    },
  { label: 'Our Values',     target: 'values'     },
  { label: 'Student Voices', target: 'voices'     },
  { label: 'News & Events',  target: 'news'       },
  { label: 'Admissions',     target: 'admissions' },
  { label: 'Contact Us',     target: 'contact'    },
]

export default function Navbar({ navigate, onHome }) {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLink = (target) => {
    setMobileOpen(false)
    if (onHome) {
      scrollToSection(target)
    } else {
      navigate('/')
      setTimeout(() => scrollToSection(target), 300)
    }
  }

  const goHome = (e) => {
    e.preventDefault()
    if (onHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
    }
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner">

          {/* Logo */}
          <a className="navbar__logo" href="#" onClick={goHome}>
            <div className="navbar__logo-img-wrap">
              <img
                src={logoSrc}
                alt="Hemeson Academy Crest"
                className="navbar__logo-img"
              />
            </div>
            <div>
              <div className="navbar__brand-name">Hemeson Academy</div>
              <div className="navbar__brand-tag">Striving for Excellence · Aba, Abia State</div>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="navbar__links">
            {DISPLAY_NAV.map(({ label, target }) => (
              <li key={label}>
                <button className="navbar__link" onClick={() => handleLink(target)}>{label}</button>
              </li>
            ))}
            <li>
              <a
                className="navbar__wa-btn"
                href={waURL(SITE.whatsapp, 'Hello Hemeson Academy!')}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon size={15} /> WhatsApp
              </a>
            </li>
            <li>
              <button className="navbar__link navbar__cta" onClick={() => handleLink('admissions')}>
                Apply Now
              </button>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            className={`hamburger${mobileOpen ? ' hamburger--open' : ''}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav__logo">
            <img src={logoSrc} alt="Hemeson Academy" className="mobile-nav__logo-img" />
            <span>Hemeson Academy</span>
          </div>
          {MOBILE_LINKS.map(({ label, target }) => (
            <button key={label} className="mobile-nav__link" onClick={() => handleLink(target)}>
              {label}
            </button>
          ))}
          <a
            className="mobile-nav__wa"
            href={waURL(SITE.whatsapp, 'Hello Hemeson Academy!')}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={20} /> Chat with us on WhatsApp
          </a>
        </div>
      )}
    </>
  )
}
