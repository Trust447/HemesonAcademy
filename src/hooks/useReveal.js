import { useEffect } from 'react'

// Attaches an IntersectionObserver to every .reveal element.
// Runs after every render so newly-mounted elements are picked up.
// rootMargin '0px 0px -40px 0px' keeps elements that are already
// in the viewport (hero, stats) from staying invisible.
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    )

    // Query fresh every call so newly-rendered elements are included
    const els = document.querySelectorAll('.reveal:not(.visible)')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  })  // ← no dependency array: runs after every render
}
