import { useState, useEffect } from 'react'

// Lightweight hash router — no React Router needed.
// Routes:
//   /          → home
//   /news      → news listing page
//   /news/:id  → individual article
//
// Usage:
//   const { route, params, navigate } = useRouter()

function parseHash() {
  const hash = window.location.hash.replace('#', '') || '/'
  if (hash === '/' || hash === '') return { route: 'home', params: {} }
  if (hash === '/news')             return { route: 'news', params: {} }
  const m = hash.match(/^\/news\/(.+)$/)
  if (m) return { route: 'article', params: { id: m[1] } }
  return { route: 'home', params: {} }
}

export function useRouter() {
  const [state, setState] = useState(parseHash)

  useEffect(() => {
    const handler = () => setState(parseHash())
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  const navigate = (path) => {
    window.location.hash = path
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { ...state, navigate }
}
