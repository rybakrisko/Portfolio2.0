import Button from '../ui/Button'
import SocialLinks from '../ui/SocialLinks'
import { socialLinks } from '../../data/contact'
import { text } from '../../i18n/translations'

export default function CTASection() {
  return (
    <section className="section-padding bg-ink text-cream">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6">
            {text.ctaTitle}
          </h2>
          <p className="text-lg text-cream/70 mb-8">
            {text.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button variant="primary" to="/kontakt">
              {text.ctaPrimary}
            </Button>
            <Button variant="outline" to="/projekty" className="border-cream text-cream hover:bg-cream hover:text-ink">
              {text.ctaSecondary}
            </Button>
          </div>
          <div className="flex justify-center">
            <SocialLinks links={socialLinks} variant="light" />
          </div>
        </div>
      </div>
    </section>
  )
}
