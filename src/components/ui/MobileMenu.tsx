import { Link } from 'react-router-dom'

type MobileMenuProps = {
  isOpen: boolean
  onClose: () => void
  items: Array<{ href: string; label: string }>
  currentPath: string
}

export default function MobileMenu({ isOpen, onClose, items, currentPath }: MobileMenuProps) {
  return (
    <div
      id="mobile-menu"
      className={`
        md:hidden absolute left-0 right-0 top-full z-40 overflow-hidden
        transition-all duration-300
        ${isOpen ? 'max-h-[70vh] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'}
      `}
      aria-hidden={!isOpen}
    >
      <nav className="container-custom py-4">
        <div className="mx-auto max-w-md rounded-2xl border border-cloud bg-cream/95 shadow-xl backdrop-blur-md dark:border-cream/10 dark:bg-ink/95">
          <ul className="divide-y divide-cloud/70 dark:divide-cream/10">
          {items.map((item) => (
            <li key={item.href} className="py-1">
              <Link
                to={item.href}
                onClick={onClose}
                className={`
                  block px-2 py-3 text-lg font-semibold transition-colors uppercase tracking-[0.2em] rounded-lg
                  hover:bg-cloud/70 dark:hover:bg-cream/10
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
        </div>
      </nav>
    </div>
  )
}
