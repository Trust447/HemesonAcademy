import React from 'react'
import { SITE } from '../data/site'
import { waURL } from '../utils/whatsapp'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import TopBar from '../components/layout/TopBar'
import WhatsAppFloat from '../components/ui/WhatsAppFloat'
import WhatsAppIcon from '../components/ui/WhatsAppIcon'
import { Icon, IconPhoto } from '../components/ui/Icons'
import './ArticlePage.css'

export default function ArticlePage({ id, navigate }) {
  const article = SITE.news.find(n => n.id === id)

  // If article not found, redirect home
  if (!article) {
    return (
      <>
        <TopBar navigate={navigate} onHome={false} />
        <Navbar navigate={navigate} onHome={false} />
        <div className="article-not-found">
          <h2>Article not found</h2>
          <button onClick={() => navigate('/news')}>← Back to News</button>
        </div>
        <Footer navigate={navigate} onHome={false} />
      </>
    )
  }

  const related = SITE.news.filter(n => n.id !== id && (n.cat === article.cat || n.tags?.some(t => article.tags?.includes(t)))).slice(0, 3)

  const waMsg = waURL(SITE.whatsapp, `Hello Hemeson Academy! I read your article: "${article.title}" and would like to know more.`)

  return (
    <>
      <TopBar navigate={navigate} onHome={false} />
      <Navbar navigate={navigate} onHome={false} />
      <main className="article-page">

        {/* ── ARTICLE HERO ── */}
        <div className="article-hero">
          {article.image ? (
            <div className="article-hero__image-wrap">
              <img className="article-hero__image" src={article.image} alt={article.title} />
              <div className="article-hero__image-shade" />
            </div>
          ) : (
            <div className="article-hero__fallback" style={{ background: article.bg }}>
              <Icon name={article.icon} size={72} stroke="rgba(255,255,255,0.3)" />
            </div>
          )}

          <div className="article-hero__overlay">
            <div className="article-hero__content">
              <button className="article-hero__back" onClick={() => navigate('/news')}>
                ← All News
              </button>
              <span className="article-hero__cat">{article.cat}</span>
              <h1 className="article-hero__title">{article.title}</h1>
              <div className="article-hero__meta">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── ARTICLE BODY ── */}
        <div className="article-body">
          <div className="article-body__inner">

            {/* Tags */}
            {article.tags?.length > 0 && (
              <div className="article-body__tags">
                {article.tags.map(t => (
                  <span className="article-tag" key={t}>{t}</span>
                ))}
              </div>
            )}

            {/* Lead paragraph */}
            <p className="article-body__lead">{article.excerpt}</p>

            {/* Body paragraphs */}
            {article.body?.map((para, i) => (
              <p className="article-body__para" key={i}>{para}</p>
            ))}

            {/* Image slot note */}
            {/* {!article.image && (
              <div className="article-body__image-slot">
                <div className="article-body__image-slot-icon"><IconPhoto size={28} stroke="var(--navy-light)" /></div>
                <div className="article-body__image-slot-text">
                  <strong>Add a photo here</strong>
                  <span>In <code>src/data/site.js</code>, set <code>image: '/images/news/{article.id}.jpg'</code> then place your photo in <code>public/images/news/</code></span>
                </div>
              </div>
            )} */}

            {/* Share / WhatsApp CTA */}
            <div className="article-cta">
              <div className="article-cta__text">
                <div className="article-cta__title">Inspired by what you read?</div>
                <div className="article-cta__sub">Chat with our admissions team on WhatsApp — we'd love to tell you more about Hemeson Academy.</div>
              </div>
              <div className="article-cta__actions">
                <a
                  className="article-cta__wa"
                  href={waMsg}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon size={20} /> Chat on WhatsApp
                </a>
                <button
                  className="article-cta__apply"
                  onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('admissions'); el?.scrollIntoView({ behavior: 'smooth' }) }, 200) }}
                >
                  Apply for Admission →
                </button>
              </div>
            </div>
          </div>

          {/* ── RELATED ARTICLES ── */}
          {related.length > 0 && (
            <div className="article-related">
              <div className="article-related__inner">
                <h2 className="article-related__heading">More from Hemeson</h2>
                <div className="article-related__grid">
                  {related.map(r => (
                    <div key={r.id} className="article-related-card" onClick={() => navigate(`/news/${r.id}`)}>
                      <div className="article-related-card__image">
                        {r.image
                          ? <img src={r.image} alt={r.title} />
                          : <div className="article-related-card__fallback" style={{ background: r.bg }}>
                              <Icon name={r.icon} size={28} stroke="rgba(255,255,255,0.45)" />
                            </div>
                        }
                        <span className="article-related-card__cat">{r.cat}</span>
                      </div>
                      <div className="article-related-card__body">
                        <div className="article-related-card__date">{r.date}</div>
                        <div className="article-related-card__title">{r.title}</div>
                        <span className="article-related-card__read">Read More →</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

      </main>
      <Footer navigate={navigate} onHome={false} />
      <WhatsAppFloat />
    </>
  )
}
