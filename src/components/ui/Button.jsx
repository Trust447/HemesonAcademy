import React from 'react'
import './Button.css'

// Smooth-scroll to a section id, offsetting for the sticky navbar
function scrollToSection(id) {
  const el = document.getElementById(id)
  if (!el) return
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 76
  const top  = el.getBoundingClientRect().top + window.scrollY - navH
  window.scrollTo({ top, behavior: 'smooth' })
}

// variant: 'navy' | 'primary' | 'outline' | 'ghost-white' | 'whatsapp'
export default function Button({ variant = 'navy', children, onClick, href, className = '', style }) {
  const cls = `btn btn--${variant} ${className}`

  if (href) {
    // Internal anchor — smooth scroll with offset
    if (href.startsWith('#')) {
      const id = href.slice(1)
      return (
        <a
          href={href}
          className={cls}
          style={style}
          onClick={e => { e.preventDefault(); scrollToSection(id) }}
        >
          {children}
        </a>
      )
    }
    // External link
    return (
      <a href={href} className={cls} style={style} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  return (
    <button className={cls} onClick={onClick} style={style}>
      {children}
    </button>
  )
}
