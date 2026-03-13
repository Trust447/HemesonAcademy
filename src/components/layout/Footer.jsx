import React, { useState } from 'react'
import { SITE } from '../../data/site'
import { waURL } from '../../utils/whatsapp'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { IconMap } from '../ui/Icons'
import logoSrc from '../../assets/hemeson-logo.png'
import './Footer.css'

// Scroll to a section on the home page with navbar offset
function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 76
  const top = el.getBoundingClientRect().top + window.scrollY - navH
  window.scrollTo({ top, behavior: 'smooth' })
}

const COLS = [
  {
    heading: 'Quick Links',
    links: [
      { label: 'Home', target: 'home' },
      { label: 'Academics', target: 'levels' },
      { label: 'News & Events', target: 'news' },
      { label: 'Admissions', target: 'admissions' },
    ],
  },
  {
    heading: 'About Us',
    links: [
      { label: 'Our Values', target: 'values' },
      { label: 'Student Voices', target: 'voices' },
      { label: 'Contact Us', target: 'contact' },
    ],
  },
  {
    heading: 'Portals',
    links: [
      { label: 'Student Portal', target: null, portal: true },
      { label: 'Parent Portal', target: null, portal: true },
      { label: 'School Calendar', target: null, portal: true },
      { label: 'Exam Timetable', target: null, portal: true },
      { label: 'Apply Now', target: 'admissions' },
    ],
  },
]

// navigate  — the router's navigate fn (passed in as prop)
// onHome    — true when currently on the home page
export default function Footer({ navigate, onHome }) {
  const [toast, setToast] = useState('')

  const showToast = (label) => {
    setToast(`${label} — Coming Soon`)
    setTimeout(() => setToast(''), 2800)
  }

  const handleLink = (target) => {
    if (!target) return
    if (onHome) {
      // Already on home — just scroll
      scrollToSection(target)
    } else {
      // On another page — go home first, then scroll after mount
      navigate('/')
      setTimeout(() => scrollToSection(target), 300)
    }
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">

          {/* Brand column */}
          <div>
            <div className="footer__brand">
              <div className="footer__logo-wrap">
                <img src={logoSrc} alt="Hemeson Academy" className="footer__logo-img" />
              </div>
              <div>
                <div className="footer__name">Hemeson Academy</div>
                <span className="footer__tag">Striving for Excellence · Aba, Abia State</span>
              </div>
            </div>
            <p className="footer__about">
              A proud institution of learning in Aba, Abia State — nurturing Nigerian minds
              from Nursery through Senior Secondary with excellence, integrity and deep cultural pride.
            </p>
            <div className="footer__socials">
              {[
                { abbr: 'f', label: 'Facebook', url: 'https://web.facebook.com/profile.php?id=61576599762395' },
                { abbr: 'in', label: 'Instagram', url: null },
                { abbr: 'x', label: 'Twitter', url: null },
                { abbr: 'yt', label: 'YouTube', url: null },
              ].map(({ abbr, label, url }) => (
                url
                  ? <a key={label} className="footer__social" href={url} target="_blank" rel="noreferrer" aria-label={label}>{abbr}</a>
                  : <button key={label} className="footer__social" onClick={() => showToast(label)} title="Coming Soon">{abbr}</button>
              ))}
              <a
                className="footer__social footer__social--wa"
                href={waURL(SITE.whatsapp, 'Hello Hemeson Academy!')}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={15} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.heading}>
              <div className="footer__col-heading">{col.heading}</div>
              <ul className="footer__col-list">
                {col.links.map(({ label, target, portal }) => (
                  <li key={label}>
                    {portal ? (
                      <button
                        className="footer__col-btn"
                        onClick={() => showToast(label)}
                        title="Coming Soon"
                      >
                        {label}
                      </button>
                    ) : (
                      <button
                        className="footer__col-btn"
                        onClick={() => handleLink(target)}
                      >
                        {label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© 2025 Hemeson Academy, Aba, Abia State, Nigeria. All rights reserved.</span>
          <a
            href="https://trustedideas.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              color: "#ffffff",
              opacity: 0.8,
              transition: "opacity 0.2s",
              fontSize: "10px",
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.5}
          >
            <img src="/favicon.png" alt="Trusted Ideas" style={{ width: "14px", height: "14px", objectFit: "contain" }} />
            Developed by Trusted Ideas
          </a>
          <span className="footer__copy">Proudly Nigerian · Striving for Excellence</span>
        </div>
      </div>

      {toast && <div className="footer__toast">{toast}</div>}
    </footer>
  )
}
