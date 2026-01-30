import Button from '../ui/Button'
import { text } from '../../i18n/translations'

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('featured-projects')
    projectsSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="section-padding relative overflow-hidden bg-cream hero-glow dark:bg-ink">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none dark:opacity-10" aria-hidden="true" />
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="uppercase tracking-[0.4em] text-xs text-inkSoft mb-4 dark:text-cream/60">
              {text.heroNorthStar}
            </p>
            <h1 className="text-5xl md:text-6xl font-display font-semibold mb-6 text-ink dark:text-cream">
              {text.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-inkSoft mb-6 leading-relaxed dark:text-cream/70">
              {text.heroDescription.split('\n').map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" onClick={scrollToProjects}>
                {text.heroPrimary}
              </Button>
              <Button variant="outline" to="/kontakt">
                {text.heroSecondary}
              </Button>
            </div>
            <div className="mt-4">
              <a
                href="/cv.pdf"
                download
                className="text-sm font-mono uppercase tracking-[0.2em] text-inkSoft hover:text-ink dark:text-cream/70 dark:hover:text-cream"
              >
                {text.heroCv}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-inkSoft dark:text-cream/60">
              <span className="font-mono">{text.heroMetaOne}</span>
              <span className="font-mono">{text.heroMetaTwo}</span>
            </div>
          </div>

          <div className="relative aspect-[4/5] animate-fade-in-delay">
            <div className="absolute -right-6 -top-6 h-full w-full rounded-[32px] border border-ink/10 bg-sand/80 dark:border-cream/10 dark:bg-ink/40" aria-hidden="true" />
            <img
              src="/IMG_6692.jpg"
              alt={text.heroAlt}
              className="relative rounded-[28px] object-cover shadow-2xl w-full h-full animate-[floatSlow_6s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
