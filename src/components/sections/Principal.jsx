import React from 'react'
import { SITE } from '../../data/site'
import './Principal.css'


export default function Principal() {
  return (
    <section className="principal" id="principal">
      <div className="principal__inner">

        {/* ── LEFT: Photo column ── */}
        <div className="principal__photo-col reveal">
          <div className="principal__photo-frame">
            {SITE.principal_img
              ? <img
                  src={SITE.principal_img}
                  alt={`${SITE.principal} — Principal, Hemeson Academy`}
                  className="principal__photo"
                />
              : <div className="principal__photo-placeholder">
                  <svg viewBox="0 0 80 80" fill="none" width="64" height="64">
                    <circle cx="40" cy="28" r="16" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
                    <path d="M10 72c0-16.6 13.4-30 30-30s30 13.4 30 30"
                          stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none"/>
                  </svg>
                  <span>Principal's photo coming soon</span>
                </div>
            }
            {/* Decorative corner accent */}
            <div className="principal__photo-accent" />
          </div>

          {/* Name plate below photo */}
          <div className="principal__nameplate">
            <div className="principal__name">{SITE.principal}</div>
            <div className="principal__title">Principal, Hemeson Academy</div>
            <div className="principal__location">Aba, Abia State</div>
          </div>
        </div>

        {/* ── RIGHT: Speech column ── */}
        <div className="principal__speech-col reveal">
          <div className="principal__speech-inner">
            <span className="section-super">A Word from Leadership</span>
            <h2 className="principal__heading">
              Welcome to <em>Hemeson Academy</em>
            </h2>

            {/* Opening quote mark */}
            <div className="principal__quote-mark">"</div>

            <div className="principal__body">
              <p>
                On behalf of our dedicated staff, our vibrant student body, and the entire
                Hemeson Academy family, I warmly welcome you to our school. Hemeson Academy
                was founded on a single, unshakeable conviction: that every Nigerian child
                deserves a world-class education rooted in strong values, academic rigour,
                and a deep pride in their heritage.
              </p>
              <p>
                Since our establishment, we have remained committed to nurturing not just
                scholars, but complete human beings — young men and women of character,
                courage and compassion. Our results speak for themselves:
                years of 100% WAEC pass rates, state-wide competition victories, and most
                importantly, graduates who go on to lead in their communities and professions.
              </p>
              <p>
                At Hemeson Academy, we believe that excellence is not an accident. It is the
                product of consistent effort, inspired teaching, and an environment where
                every child is seen, valued, and challenged to become the very best version
                of themselves. That is our promise to every family that walks through our gates.
              </p>
              <p>
                I invite you to explore our school, meet our teachers, and discover for
                yourself why Hemeson Academy stands apart. Your child's future begins here.
              </p>
            </div>

            <div className="principal__signature">
              <div className="principal__sig-name">{SITE.principal}</div>
              <div className="principal__sig-role">Principal &amp; Head of School</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
