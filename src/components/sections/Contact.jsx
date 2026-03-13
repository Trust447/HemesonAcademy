import React from 'react'
import { SITE } from '../../data/site'
import { waURL } from '../../utils/whatsapp'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import { IconMap, IconPhone, IconMail, IconClock } from '../ui/Icons'
import './Contact.css'

const CARDS = [
  { Icon: IconMap,   label: 'Address',      value: () => SITE.address },
  { Icon: IconPhone, label: 'Phone',        value: () => SITE.phone.join('\n') },
  { Icon: IconMail,  label: 'Email',        value: () => `${SITE.email.admissions}\n${SITE.email.info}` },
  { Icon: IconClock, label: 'Office Hours', value: () => SITE.hours },
]

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">
        <div className="section-head reveal">
          <span className="section-super">Find Us</span>
          <h2 className="section-title">Get in <em>Touch</em></h2>
        </div>

        <div className="contact__grid reveal">
          <div className="contact-cards">
            {CARDS.map(({ Icon: Ic, label, value }) => (
              <div className="contact-card" key={label}>
                <div className="contact-card__icon">
                  <Ic size={20} stroke="currentColor" />
                </div>
                <div className="contact-card__label">{label}</div>
                <div className="contact-card__value" style={{ whiteSpace: 'pre-line' }}>{value()}</div>
              </div>
            ))}
          </div>

          <div className="contact-wa">
            <div className="contact-wa__title">Prefer to chat?<br />WhatsApp us directly.</div>
            <p className="contact-wa__sub">
              Get quick answers about admissions, school fees, curriculum or anything else.
              Our team responds fast.
            </p>
            <div className="contact-wa__number">
              <WhatsAppIcon size={22} /> {SITE.phone[0]}
            </div>
            <a
              className="contact-wa__btn"
              href={waURL(SITE.whatsapp, 'Hello Hemeson Academy! I have a question.')}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={20} /> Open WhatsApp Chat
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
