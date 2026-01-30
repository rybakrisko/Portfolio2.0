import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold uppercase tracking-[0.18em] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent min-h-[44px] disabled:opacity-60 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-accent text-cream hover:bg-accentStrong focus:ring-accent shadow-[0_16px_30px_-20px_rgba(59,130,246,0.8)]',
    secondary: 'bg-ink text-cream hover:bg-slateBlue focus:ring-ink dark:bg-cream dark:text-ink dark:hover:bg-cloud dark:focus:ring-cream',
    outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-cream focus:ring-ink dark:border-cream dark:text-cream dark:hover:bg-cream dark:hover:text-ink dark:focus:ring-cream',
  }

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName}>
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
