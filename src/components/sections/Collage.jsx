import React from 'react'
import { SITE } from '../../data/site'
import { Icon } from '../ui/Icons'
import './Collage.css'

export default function Collage() {
  return (
    <section className="collage" id="collage">
      <div className="collage__inner">
        <div className="collage__head reveal">
          <span className="section-super">Life at Hemeson</span>
          <h2 className="collage__title">Beyond the <em>Classroom</em></h2>
          <p className="collage__sub">A school where academics meet culture, sport, creativity and community.</p>
        </div>
        <div className="collage__grid reveal">
          {SITE.collage.map((c, i) => {
            const cls = ['collage-item', c.tall ? 'collage-item--tall' : '', c.wide ? 'collage-item--wide' : ''].filter(Boolean).join(' ')
            return (
              <div key={i} className={cls} style={{ background: c.bg }}>
                <div className="collage-item__icon">
                  <Icon name={c.icon} size={32} stroke="rgba(255,255,255,0.7)" />
                </div>
                <div className="collage-item__label">{c.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
