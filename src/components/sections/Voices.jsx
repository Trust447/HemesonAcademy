import React, { useState, useEffect, useRef, useCallback } from 'react'
import { SITE } from '../../data/site'
import './Voices.css'

export default function Voices() {
  const [active, setActive] = useState(0)
  const [fading, setFading] = useState(false)
  const timerRef  = useRef(null)
  // Keep a ref in sync with active so the interval always reads current value
  const activeRef = useRef(0)

  const goTo = useCallback((idx) => {
    setFading(true)
    setTimeout(() => {
      activeRef.current = idx
      setActive(idx)
      setFading(false)
    }, 340)
  }, [])

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      const next = (activeRef.current + 1) % SITE.voices.length
      goTo(next)
    }, 5000)
  }, [goTo])

  useEffect(() => {
    startTimer()
    return () => clearInterval(timerRef.current)
  }, [startTimer])

  const handleThumbClick = (i) => {
    clearInterval(timerRef.current)
    goTo(i)
    // Restart the timer after a manual click
    setTimeout(() => startTimer(), 5000)
  }

  const v = SITE.voices[active]

  return (
    <section className="voices" id="voices">
      <div className="voices__inner">
        <div className="section-head reveal">
          <span className="section-super section-super--light">Our Community Speaks</span>
          <h2 className="section-title section-title--light">The Voices of <em>Hemeson</em></h2>
          <p className="section-sub section-sub--light">Real words from our students, parents and teachers.</p>
        </div>
        <div className="voices__slider reveal">
          <div className="voice-thumbs">
            {SITE.voices.map((vv, i) => (
              <div
                key={i}
                className={`voice-thumb${active === i ? ' voice-thumb--active' : ''}`}
                onClick={() => handleThumbClick(i)}
              >
                <div className="voice-thumb__avatar">{vv.initial}</div>
                <div>
                  <div className="voice-thumb__name">{vv.name}</div>
                  <div className="voice-thumb__role">{vv.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="voice-main">
            <div className="voice-main__mark">"</div>
            <p className={`voice-main__quote${fading ? ' voice-main__quote--fade' : ''}`}>{v.quote}</p>
            <div className="voice-main__name">{v.name}</div>
            <div className="voice-main__role">{v.role}, Hemeson Academy</div>
          </div>
        </div>
      </div>
    </section>
  )
}
