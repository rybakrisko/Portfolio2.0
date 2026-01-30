import { useEffect } from 'react'
import { Link } from 'react-router-dom'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  items: Array<{ href: string; label: string }>
  currentPath: string
}

export default function MobileMenu({ isOpen, onClose, items, currentPath }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="md:hidden fixed inset-0 top-16 bg-cream z-40 overflow-y-auto dark:bg-ink">
      <nav className="container-custom py-8">
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={onClose}
                className={`
                  block py-3 text-lg font-semibold transition-colors uppercase tracking-[0.2em]
                  ${currentPath === item.href
                    ? 'text-ink border-l-4 border-accent pl-4 dark:text-cream'
                    : 'text-inkSoft hover:text-ink dark:text-cream/70 dark:hover:text-cream'
                  }
                `}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
