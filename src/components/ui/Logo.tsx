type LogoProps = {
  className?: string
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`text-xl font-display font-semibold tracking-tight text-ink dark:text-cream ${className}`}>
      <span className="inline-flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
        Richard Rybak
      </span>
    </span>
  )
}
