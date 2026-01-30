type SocialLink = {
  name: string
  url: string
  icon: string
}

type SocialLinksProps = {
  links: SocialLink[]
  variant?: 'dark' | 'light'
}

export default function SocialLinks({ links, variant = 'dark' }: SocialLinksProps) {
  const iconColor = variant === 'light'
    ? 'text-cream/70 hover:text-cream'
    : 'text-inkSoft hover:text-ink dark:text-cream/70 dark:hover:text-cream'

  return (
    <div className="flex items-center space-x-4">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${iconColor} transition-colors`}
          aria-label={link.name}
        >
          <span className="sr-only">{link.name}</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d={link.icon} />
          </svg>
        </a>
      ))}
    </div>
  )
}
