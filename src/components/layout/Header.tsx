import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo'
import MobileMenu from '../ui/MobileMenu'
import { text } from '../../i18n/translations'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) return storedTheme === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const navItems = [
    { href: '/', label: text.navHome },
    { href: '/projekty', label: text.navProjects },
    { href: '/o-mne', label: text.navAbout },
    { href: '/kontakt', label: text.navContact },
  ]

  return (
    <header className="sticky top-0 z-50 relative bg-cream/90 backdrop-blur-md border-b border-cloud dark:bg-ink/90 dark:border-cream/10">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`
                  text-sm font-medium transition-colors uppercase tracking-[0.2em]
                  ${location.pathname === item.href
                    ? 'text-ink border-b-2 border-accent pb-1 dark:text-cream'
                    : 'text-inkSoft hover:text-ink dark:text-cream/70 dark:hover:text-cream'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              className="p-2 rounded-full border border-cloud bg-transparent text-ink hover:border-ink/40 transition-colors dark:border-cream/20 dark:text-cream dark:hover:border-cream/60"
              aria-label={isDark ? text.toggleLight : text.toggleDark}
            >
              {isDark ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 4.5a1 1 0 0 1 1 1V7a1 1 0 1 1-2 0V5.5a1 1 0 0 1 1-1zm0 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm7-3.5a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM4 12a1 1 0 0 1 1-1H6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm12.95 5.45a1 1 0 0 1 1.41 0l.71.7a1 1 0 0 1-1.42 1.42l-.7-.71a1 1 0 0 1 0-1.41zM5.64 6.64a1 1 0 0 1 1.41 0l.7.71a1 1 0 0 1-1.41 1.41l-.71-.7a1 1 0 0 1 0-1.42zm12.02-1.42a1 1 0 0 1 0 1.42l-.7.7a1 1 0 1 1-1.42-1.41l.71-.71a1 1 0 0 1 1.41 0zM6.64 17.36a1 1 0 0 1 0 1.41l-.7.71a1 1 0 1 1-1.42-1.42l.71-.7a1 1 0 0 1 1.41 0z" />
                </svg>
              ) : (
                <img
                  src="/chatgpt-image-jan-27-2026-1.png"
                  alt=""
                  className="w-6 h-6"
                  aria-hidden="true"
                />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-cloud transition-colors dark:hover:bg-cream/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={text.menuToggle}
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6 text-ink dark:text-cream"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={navItems}
        currentPath={location.pathname}
      />
    </header>
  )
}
