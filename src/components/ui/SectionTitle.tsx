type SectionTitleProps = {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-4xl md:text-5xl font-display font-semibold mb-4 text-ink dark:text-cream">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-inkSoft max-w-2xl mx-auto dark:text-cream/70">
          {subtitle}
        </p>
      )}
    </div>
  )
}
