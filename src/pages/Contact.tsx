import SectionTitle from '../components/ui/SectionTitle'
import SocialLinks from '../components/ui/SocialLinks'
import Button from '../components/ui/Button'
import { socialLinks } from '../data/contact'
import { text } from '../i18n/translations'

export default function Contact() {
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
                  <strong>{text.contactPhone}:</strong><br />
                  <a href="tel:+421907841353" className="text-ink hover:underline dark:text-cream">
                    0907 841 353
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
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6 bg-cream border border-cloud rounded-2xl p-8 dark:bg-slateBlue dark:border-cream/10"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label htmlFor="bot-field">
                    Don’t fill this out: <input id="bot-field" name="bot-field" />
                  </label>
                </p>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-inkSoft mb-2 dark:text-cream/70">
                    {text.contactName} *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-cloud rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-sand dark:bg-ink/60 dark:border-cream/10 dark:text-cream"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-inkSoft mb-2 dark:text-cream/70">
                    {text.contactEmail} *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-cloud rounded-xl focus:outline-none focus:ring-2 focus:ring-accent bg-sand dark:bg-ink/60 dark:border-cream/10 dark:text-cream"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-inkSoft mb-2 dark:text-cream/70">
                    {text.contactMessage} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-cloud rounded-xl focus:outline-none focus:ring-2 focus:ring-accent resize-none bg-sand dark:bg-ink/60 dark:border-cream/10 dark:text-cream"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  {text.contactSubmit}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
