import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Photos from './pages/Photos'
import { text } from './i18n/translations'
function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-sand text-ink dark:bg-ink dark:text-cream">
      <a href="#main-content" className="skip-link">
        {text.skipToContent}
      </a>
      <Header />
      <main id="main-content" className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projekty" element={<Projects />} />
          <Route path="/projekty/:slug" element={<ProjectDetail />} />
          <Route path="/photos-of-me" element={<Photos />} />
          <Route path="/o-mne" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
