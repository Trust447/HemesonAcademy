import React from 'react'
import { SITE } from '../../data/site'
import './Values.css'

export default function Values() {
  return (
    <section className="values" id="values">
      <div className="values__inner">
        <div className="section-head reveal">
          <span className="section-super">What We Stand For</span>
          <h2 className="section-title">The Values of <em>Hemeson</em></h2>
          <p className="section-sub">Six core pillars that define every interaction, every lesson, and every decision made at Hemeson Academy.</p>
        </div>
        <div className="values__grid">
          {SITE.values.map((v, i) => (
            <div className={`value-card reveal reveal-d${i % 3}`} key={i}>
              <div className="value-card__num">{v.num}</div>
              <div className="value-card__name">{v.name}</div>
              <div className="value-card__desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
