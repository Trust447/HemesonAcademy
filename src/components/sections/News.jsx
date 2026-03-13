import React from 'react'
import { SITE } from '../../data/site'
import { Icon } from '../ui/Icons'
import './News.css'

export default function News({ navigate }) {
  const preview = SITE.news.slice(0, 3)

  return (
    <section className="news" id="news">
      <div className="news__inner">
        <div className="news__header reveal">
          <div>
            <span className="section-super">Latest from Hemeson</span>
            <h2 className="section-title">News &amp; <em>Events</em></h2>
          </div>
          <button className="news__all-btn" onClick={() => navigate('/news')}>
            View All Stories →
          </button>
        </div>
        <div className="news__grid reveal">
          {preview.map((n) => (
            <div
              key={n.id}
              className={`news-card${n.featured ? ' news-card--featured' : ''}`}
              onClick={() => navigate(`/news/${n.id}`)}
            >
              {/* <div className="news-card__thumb">
                {n.image
                  ? <img src={n.image} alt={n.title} className="news-card__img" />
                  : <div className="news-card__fallback" style={{ background: n.bg }}>
                      <Icon name={n.icon} size={36} stroke="rgba(255,255,255,0.5)" />
                    </div>
                }
                <div className="news-card__shade" />
                <span className="news-card__cat-badge">{n.cat}</span>
              </div> */}
              <div className="news-card__body">
                <div className="news-card__date">{n.date}</div>
                <div className="news-card__title">{n.title}</div>
                <div className="news-card__excerpt">{n.excerpt}</div>
                <span className="news-card__link">Read Full Story →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
