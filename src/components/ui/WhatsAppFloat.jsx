import React, { useState, useEffect } from 'react'
import WhatsAppIcon from './WhatsAppIcon'
import { waURL } from '../../utils/whatsapp'
import { SITE } from '../../data/site'
import './WhatsAppFloat.css'

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [tip, setTip]         = useState(false)

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  if (!visible) return null

  return (
    <div className="wa-float">
      {tip && <div className="wa-float__tooltip">Chat with Hemeson Academy</div>}
      <a
        className="wa-float__btn"
        href={waURL(SITE.whatsapp, 'Hello Hemeson Academy! I have a question.')}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setTip(true)}
        onMouseLeave={() => setTip(false)}
        aria-label="WhatsApp Hemeson Academy"
      >
        <WhatsAppIcon size={28} />
      </a>
    </div>
  )
}
