import { useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import SocialLinks from '../components/ui/SocialLinks'
import Button from '../components/ui/Button'
import { socialLinks } from '../data/contact'
import { text } from '../i18n/translations'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // TODO: E-Mail-Versand per API oder E-Mail-Service implementieren.
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="section-padding bg-sand dark:bg-ink">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <SectionTitle
            title={text.contactTitle}
            subtitle={text.contactSubtitle}
            className="mb-12"
          />

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-ink dark:text-cream">
                {text.contactInfo}
              </h3>
              <div className="space-y-4 text-inkSoft dark:text-cream/70">
                <p>
                  <strong>{text.contactEmail}:</strong><br />
                  <a href="mailto:rybak.riso@gmail.com" className="text-ink hover:underline dark:text-cream">
                    rybak.riso@gmail.com
                  </a>
                </p>
                <p>
                  <strong>{text.contactLocation}:</strong><br />
                  {text.contactLocationValue}
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-display font-semibold mb-4 text-ink dark:text-cream">
                  {text.contactSocial}
                </h4>
                <SocialLinks links={socialLinks} />
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-cream border border-cloud rounded-2xl p-8 dark:bg-slateBlue dark:border-cream/10">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-inkSoft mb-2 dark:text-cream/70">
                    {text.contactName} *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-cloud rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-sand dark:bg-ink/60 dark:border-cream/10 dark:text-cream"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-inkSoft mb-2 dark:text-cream/70">
                    {text.contactEmail} *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-cloud rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-sand dark:bg-ink/60 dark:border-cream/10 dark:text-cream"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-inkSoft mb-2 dark:text-cream/70">
                    {text.contactMessage} *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-cloud rounded-xl focus:outline-none focus:ring-2 focus:ring-accent resize-none bg-sand dark:bg-ink/60 dark:border-cream/10 dark:text-cream"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-teal/10 border border-teal/40 rounded-xl text-ink dark:text-cream">
                    {text.contactSuccess}
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-accent/10 border border-accent/40 rounded-xl text-ink dark:text-cream">
                    {text.contactError}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? text.contactSubmitting : text.contactSubmit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
