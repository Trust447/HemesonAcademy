import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { SITE } from '../../data/site'
import { waURL } from '../../utils/whatsapp'
import WhatsAppIcon from '../ui/WhatsAppIcon'
import './Admissions.css'

const STEPS = [
  ['1', 'Submit Your Enquiry',         'Complete the form or WhatsApp us — your application is reviewed within 48 hours.'],
  ['2', 'Receive Confirmation',         'Our admissions team contacts you to confirm receipt and schedule a campus visit.'],
  ['3', 'Campus Visit & Assessment',    'Tour Hemeson Academy. Your child sits a friendly placement assessment.'],
  ['4', 'Welcome to Hemeson!',          'Receive your offer letter, complete enrolment, and join our family.'],
]

const LEVELS = [
  'Nursery / KG (Ages 2–5)',
  'Basic 1–3 (Ages 6–9)',
  'Basic 4–6 (Ages 10–12)',
  'JSS 1–3 (Ages 12–15)',
  'SSS 1–3 (Ages 15–18)',
]

export default function Admissions() {
  const [form, setForm]       = useState({ parent:'', child:'', phone:'', email:'', age:'', level:'', notes:'' })
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSubmit = async () => {
    setError('')
    if (!form.parent || !form.child || !form.phone || !form.email || !form.level) {
      setError('Please fill in all required fields.'); return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.'); return
    }

    setLoading(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          parent_name:  form.parent,
          child_name:   form.child,
          child_age:    form.age || 'Not specified',
          level:        form.level,
          phone:        form.phone,
          email:        form.email,
          notes:        form.notes || 'None',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSuccess(true)
    } catch (err) {
      setError('Something went wrong. Please try again or WhatsApp us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="admissions" id="admissions">
      <div className="admissions__inner">
        <div className="section-head reveal">
          <span className="section-super">Join Our Family</span>
          <h2 className="section-title">Begin Your Child's <em>Hemeson Journey</em></h2>
          <p className="section-sub">We welcome families who share our commitment to excellence, character and the bright future of every Nigerian child.</p>
        </div>

        <div className="admissions__grid">
          {/* Steps */}
          <div className="steps reveal">
            {STEPS.map(([n, title, desc]) => (
              <div className="step" key={n}>
                <div className="step__circle">{n}</div>
                <div>
                  <div className="step__title">{title}</div>
                  <div className="step__desc">{desc}</div>
                </div>
              </div>
            ))}
            <a
              className="admissions__wa-btn"
              href={waURL(SITE.whatsapp, 'Hello Hemeson Academy! I would like to enquire about admission for my child.')}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon size={20} /> WhatsApp Admissions Now
            </a>
          </div>

          {/* Form */}
          <div className="form-card reveal reveal-d2">
            {!success ? (
              <>
                <div className="form-card__title">Admission Enquiry</div>
                <div className="form-card__sub">We will get back to you within 48 hours</div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Parent / Guardian *</label>
                    <input className="form-input" placeholder="Full name" value={form.parent} onChange={set('parent')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Child's Full Name *</label>
                    <input className="form-input" placeholder="As on birth certificate" value={form.child} onChange={set('child')} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input className="form-input" type="tel" placeholder="080XXXXXXXX" value={form.phone} onChange={set('phone')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={set('email')} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Child's Age</label>
                    <input className="form-input" type="number" placeholder="e.g. 9" min="2" max="18" value={form.age} onChange={set('age')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Applying for Level *</label>
                    <select className="form-select" value={form.level} onChange={set('level')}>
                      <option value="">Select level...</option>
                      {LEVELS.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Additional Notes</label>
                  <textarea className="form-textarea" placeholder="Special requirements, previous school, or questions..." value={form.notes} onChange={set('notes')} />
                </div>

                {error && <p className="form-error">{error}</p>}

                <button className="form-submit" onClick={handleSubmit} disabled={loading}>
                  {loading ? 'Sending...' : 'Send →'}
                </button>
                <p className="form-note">Sent to {SITE.email.admissions} — we respond within 48 hours.</p>
              </>
            ) : (
              <div className="form-success">
                <div className="form-success__icon">✓</div>
                <div className="form-success__title">Application Received!</div>
                <p className="form-success__msg">
                  Thank you for choosing Hemeson Academy.<br />
                  Our admissions team will contact you within 48 hours.<br /><br />
                  We look forward to welcoming your child to our family.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
