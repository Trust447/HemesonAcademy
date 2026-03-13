import React from 'react'
import { SITE } from '../../data/site'
import { waURL } from '../../utils/whatsapp'
import Button from '../ui/Button'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import Stats from './Stats'
import './Hero.css'

function Panel({ id, deco, eyebrow, title, sub, bgClass, align = 'left' }) {
  return (
    <section className={`hero-panel ${bgClass}`} id={id}>
      <div className="hero-panel__overlay" />
      <div className="hero-panel__deco">{deco}</div>
      <div
        className="hero-panel__content"
        style={{
          textAlign: align === 'right' ? 'right' : 'left',
          marginLeft: align === 'right' ? 'auto' : undefined,
          marginRight: align === 'right' ? 0 : undefined,
        }}
      >
        <p className="hero__eyebrow">{eyebrow}</p>
        <h2 className="hero__title" dangerouslySetInnerHTML={{ __html: title }} />
        <p className="hero__sub">{sub}</p>
      </div>
    </section>
  )
}

export default function Hero() {
  return (
    <>
      {/* ── MAIN HERO ── */}
      <section className="hero" id="home">
        <div className="hero__bg" />
        <div className="hero__overlay" />
        <div className="hero__stripe" />
        <div className="hero__content">
          {/* <p className="hero__eyebrow">Aba's Premier Private School — Est. Abia State, Nigeria</p> */}
          <h1 className="hero__title">Inspiring <em>Excellence</em><br />Shaping Future Leaders.</h1>
          <p className="hero__sub">
            Hemeson Academy provides a supportive and innovative learning environment
            where students grow academically, socially, and morally — preparing them
            to succeed in school and beyond.
          </p>
          <div className="hero__actions">
            <Button variant="primary" href="#admissions">Apply for Admission →</Button>
            <Button variant="ghost-white" href="#values">Discover Our Story</Button>
            <a
              className="btn btn--whatsapp"
              href={waURL(SITE.whatsapp, 'Hello! I would like to know more about Hemeson Academy.')}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={20} /> Quick Enquiry
            </a>
          </div>
        </div>
      </section>

      <Stats />

      <Panel
        id="academics"
        deco="A"
        eyebrow="Academic Excellence"
        title="To <em>Challenge</em> Their<br/>Every Limit."
        sub="Our curriculum blends the Nigerian National Curriculum with innovative pedagogy — equipping students with critical thinking, digital literacy, and the intellectual confidence to compete at the highest level."
        bgClass="hero-panel--academics"
        align="left"
      />

      <Panel
        id="student-life"
        deco="C"
        eyebrow="Arts, Culture & Character"
        title="To <em>Spark</em> Their<br/>Creativity."
        sub="From Cultural Day celebrating Nigerian cultural heritage to drama, fine arts, music and debate — Hemeson students discover who they are beyond the textbook. We celebrate everything that makes Nigeria great."
        bgClass="hero-panel--culture"
        align="right"
      />

      <Panel
        id="sports"
        deco="S"
        eyebrow="Sports & Games"
        title="To <em>Fuel</em> Their<br/>Spirit of Victory."
        sub="From football and gymnastics on the field to chess, scrabble and table tennis in the hall — our students compete, strategise and grow. Champions are built beyond the classroom."
        bgClass="hero-panel--sports"
        align="left"
      />
    </>
  )
}
