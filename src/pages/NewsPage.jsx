import React, { useState, useMemo } from 'react'
import { SITE } from '../data/site'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import TopBar from '../components/layout/TopBar'
import WhatsAppFloat from '../components/ui/WhatsAppFloat'
import { Icon } from '../components/ui/Icons'
import './NewsPage.css'

const ALL_CATS = ['All', ...Array.from(new Set(SITE.news.map(n => n.cat)))]

export default function NewsPage({ navigate }) {
  const [activeCat, setActiveCat] = useState('All')
  const [search, setSearch]       = useState('')

  const filtered = useMemo(() => {
    return SITE.news.filter(n => {
      const matchCat  = activeCat === 'All' || n.cat === activeCat
      const matchText = !search || n.title.toLowerCase().includes(search.toLowerCase()) || n.excerpt.toLowerCase().includes(search.toLowerCase())
      return matchCat && matchText
    })
  }, [activeCat, search])

  const featured = filtered.find(n => n.featured) || filtered[0]
  const rest      = filtered.filter(n => n !== featured)

  return (
    <>
      <TopBar navigate={navigate} onHome={false} />
      <Navbar navigate={navigate} onHome={false} />
      <main className="news-page">

        {/* ── PAGE HERO ── */}
        <div className="news-page__hero">
          <div className="news-page__hero-bg" />
          <div className="news-page__hero-content">
            <button className="news-page__back" onClick={() => navigate('/')}>
              ← Back to Home
            </button>
            <p className="news-page__eyebrow">Hemeson Academy · Aba, Abia State</p>
            <h1 className="news-page__title">News &amp; <em>Stories</em></h1>
            <p className="news-page__sub">
              Achievements, events, announcements and the stories that make Hemeson great.
            </p>
          </div>
        </div>

        <div className="news-page__body">

          {/* ── FILTERS ── */}
          <div className="news-page__filters">
            <div className="news-page__cats">
              {ALL_CATS.map(cat => (
                <button
                  key={cat}
                  className={`news-page__cat-btn${activeCat === cat ? ' active' : ''}`}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <input
              className="news-page__search"
              type="text"
              placeholder="Search articles…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>

          {filtered.length === 0 && (
            <div className="news-page__empty">No articles found.</div>
          )}

          {/* ── FEATURED ARTICLE ── */}
          {featured && (
            <div
              className="news-featured"
              onClick={() => navigate(`/news/${featured.id}`)}
            >
              <div className="news-featured__image">
                {featured.image
                  ? <img src={featured.image} alt={featured.title} />
                  : <div className="news-featured__fallback" style={{ background: featured.bg }}>
                      <Icon name={featured.icon} size={52} stroke="rgba(255,255,255,0.45)" />
                    </div>
                }
                <div className="news-featured__shade" />
                <span className="news-featured__cat">{featured.cat}</span>
              </div>
              <div className="news-featured__body">
                <div className="news-featured__meta">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.author}</span>
                </div>
                <h2 className="news-featured__title">{featured.title}</h2>
                <p className="news-featured__excerpt">{featured.excerpt}</p>
                <div className="news-featured__tags">
                  {featured.tags?.map(t => <span className="news-page__tag" key={t}>{t}</span>)}
                </div>
                <span className="news-featured__read">Read Full Story →</span>
              </div>
            </div>
          )}

          {/* ── ARTICLE GRID ── */}
          {rest.length > 0 && (
            <div className="news-page__grid">
              {rest.map(n => (
                <div
                  key={n.id}
                  className="news-article-card"
                  onClick={() => navigate(`/news/${n.id}`)}
                >
                  <div className="news-article-card__image">
                    {n.image
                      ? <img src={n.image} alt={n.title} />
                      : <div className="news-article-card__fallback" style={{ background: n.bg }}>
                          <Icon name={n.icon} size={32} stroke="rgba(255,255,255,0.45)" />
                        </div>
                    }
                    <span className="news-article-card__cat">{n.cat}</span>
                  </div>
                  <div className="news-article-card__body">
                    <div className="news-article-card__meta">{n.date}</div>
                    <h3 className="news-article-card__title">{n.title}</h3>
                    <p className="news-article-card__excerpt">{n.excerpt}</p>
                    <div className="news-article-card__tags">
                      {n.tags?.map(t => <span className="news-page__tag" key={t}>{t}</span>)}
                    </div>
                    <span className="news-article-card__read">Read More →</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer navigate={navigate} onHome={false} />
      <WhatsAppFloat />
    </>
  )
}
