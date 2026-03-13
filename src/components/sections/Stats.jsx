import React from 'react'
import { SITE } from '../../data/site'
import './Stats.css'

export default function Stats() {
  return (
    <div className="stats">
      <div className="stats__grid">
        {SITE.stats.map((s, i) => (
          <div className={`stat reveal reveal-d${i}`} key={i}>
            <div className="stat__num">{s.num}</div>
            <div className="stat__label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
