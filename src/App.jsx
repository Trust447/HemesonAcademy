import React from 'react'
import { useRouter } from './hooks/useRouter'
import { useReveal } from './hooks/useReveal'

// Layout
import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFloat from './components/ui/WhatsAppFloat'

// Home sections
import Hero from './components/sections/Hero'
import Principal from './components/sections/Principal'
import Values from './components/sections/Values'
import Levels from './components/sections/Levels'
import Voices from './components/sections/Voices'
import News from './components/sections/News'
import Admissions from './components/sections/Admissions'
import Contact from './components/sections/Contact'

// Pages
import NewsPage from './pages/NewsPage'
import ArticlePage from './pages/ArticlePage'

function HomePage({ navigate }) {
  useReveal()
  return (
    <>
      <TopBar navigate={navigate} onHome={true} />
      <Navbar navigate={navigate} onHome={true} />
      <main>
        <Hero />
        <Principal />
        <Values />
        <Levels />
        <Voices />
        <News navigate={navigate} />
        <Admissions />
        <Contact />
      </main>
      <Footer navigate={navigate} onHome={true} />
      <WhatsAppFloat />
    </>
  )
}

export default function App() {
  const { route, params, navigate } = useRouter()

  if (route === 'news')    return <NewsPage navigate={navigate} />
  if (route === 'article') return <ArticlePage id={params.id} navigate={navigate} />
  return <HomePage navigate={navigate} />
}
