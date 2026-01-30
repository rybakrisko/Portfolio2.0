type TechTagProps = {
  name: string
  className?: string
}

export default function TechTag({ name, className = '' }: TechTagProps) {
  return (
    <span
      className={`
        inline-block px-3 py-1 text-xs font-mono tracking-wide
        bg-cream text-ink rounded-full border border-cloud
        dark:bg-ink/40 dark:text-cream dark:border-cream/20
        ${className}
      `}
    >
      {name}
    </span>
  )
}
