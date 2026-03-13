import React from 'react'
import { SITE } from '../../data/site'
import { Icon } from '../ui/Icons'
import './Levels.css'

export default function Levels() {
  return (
    <section className="levels" id="levels">
      <div className="levels__inner">
        <div className="section-head reveal">
          <span className="section-super">Academic Programme</span>
          <h2 className="section-title">A Journey from <em>Nursery</em> to Senior Secondary</h2>
          <p className="section-sub">A seamless, nurturing education at every stage — each level designed for where your child is, and where they are going.</p>
        </div>
        <div className="levels__grid">
          {SITE.levels.map((l, i) => (
            <div className={`level-card reveal reveal-d${i}`} key={i}>

              {/* Photo area — shows image if set, otherwise gradient fallback */}
              <div className="level-card__photo">
                {l.image
                  ? <img src={l.image} alt={l.name} className="level-card__photo-img" />
                  : <div className="level-card__photo-fallback">
                      <Icon name={l.icon} size={36} stroke="rgba(255,255,255,0.5)" />
                    </div>
                }
              </div>

              <div className="level-card__body">
                <div className="level-card__num">0{i + 1}</div>
                <div className="level-card__name">{l.name}</div>
                <div className="level-card__ages">{l.ages}</div>
                <div className="level-card__desc">{l.desc}</div>
                <div className="level-card__tags">
                  {l.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
