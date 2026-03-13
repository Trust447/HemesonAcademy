import React from 'react'
import { SITE } from '../../data/site'
import { waURL } from '../../utils/whatsapp'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import './TopBar.css'

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 76
  const top  = el.getBoundingClientRect().top + window.scrollY - navH
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function TopBar({ navigate, onHome }) {
  const handleLink = (target) => {
    if (onHome) {
      scrollToSection(target)
    } else {
      navigate('/')
      setTimeout(() => scrollToSection(target), 300)
    }
  }

  return (
    <div className="topbar">
      <span>Aba, Abia State, Nigeria &nbsp;|&nbsp; Proudly Nigerian &nbsp;|&nbsp; 2025/2026 Admissions Now Open</span>
      <div className="topbar__links">
        <button className="topbar__btn" onClick={() => handleLink('contact')}>Contact Us</button>
        <a
          href={waURL(SITE.whatsapp, 'Hello Hemeson Academy! I have a quick question.')}
          target="_blank"
          rel="noreferrer"
          className="topbar__wa topbar__btn"
        >
          <WhatsAppIcon size={13} /> WhatsApp Us
        </a>
        <button className="topbar__btn topbar__apply" onClick={() => handleLink('admissions')}>Apply Now</button>
      </div>
    </div>
  )
}
