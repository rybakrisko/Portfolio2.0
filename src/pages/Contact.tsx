import SectionTitle from '../components/ui/SectionTitle'
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

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            <div className="lg:col-span-2 bg-cream border border-cloud rounded-2xl p-6 card-shadow dark:bg-slateBlue dark:border-cream/10 flex h-full flex-col">
              <h3 className="text-lg font-display font-semibold text-ink dark:text-cream">
                Email
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-inkSoft dark:text-cream/70">
                For formal communication.
              </p>
              <a
                href="mailto:rybak.riso@gmail.com"
                className="mt-auto pt-6 inline-flex max-w-full truncate text-sm sm:text-base font-semibold text-ink transition-colors hover:text-ink/70 hover:underline underline-offset-4 dark:text-cream dark:hover:text-cream/80"
              >
                rybak.riso@gmail.com
              </a>
            </div>

            <div className="lg:col-span-2 bg-cream border border-cloud rounded-2xl p-6 card-shadow dark:bg-slateBlue dark:border-cream/10 flex h-full flex-col">
              <h3 className="text-lg font-display font-semibold text-ink dark:text-cream">
                LinkedIn
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-inkSoft dark:text-cream/70">
                Professional profile.
              </p>
              <a
                href="https://www.linkedin.com/in/richard-rybak-3663792b7/"
                target="_blank"
                rel="noreferrer"
                className="mt-auto pt-6 inline-flex text-sm sm:text-base font-semibold text-ink transition-colors hover:text-ink/70 hover:underline underline-offset-4 dark:text-cream dark:hover:text-cream/80"
              >
                View LinkedIn
              </a>
            </div>

            <div className="lg:col-span-2 lg:col-start-2 bg-cream border border-cloud rounded-2xl p-6 card-shadow dark:bg-slateBlue dark:border-cream/10 flex h-full flex-col">
              <h3 className="text-lg font-display font-semibold text-ink dark:text-cream">
                Location
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-inkSoft dark:text-cream/70">
                Originally from
              </p>
              <a
                href="https://www.google.com/maps?q=Bratislava,+Slovakia"
                target="_blank"
                rel="noreferrer"
                className="mt-auto pt-6 inline-flex text-sm sm:text-base font-semibold text-ink transition-colors hover:text-ink/70 hover:underline underline-offset-4 dark:text-cream dark:hover:text-cream/80"
              >
                {text.contactLocationValue}
              </a>
            </div>

            <div className="lg:col-span-2 lg:col-start-4 bg-cream border border-cloud rounded-2xl p-6 card-shadow dark:bg-slateBlue dark:border-cream/10 flex h-full flex-col">
              <h3 className="text-lg font-display font-semibold text-ink dark:text-cream">
                CV
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-inkSoft dark:text-cream/70">
                Experience overview.
              </p>
              <a
                href="/cv.pdf"
                download
                className="mt-auto pt-6 inline-flex text-sm sm:text-base font-semibold text-ink transition-colors hover:text-ink/70 hover:underline underline-offset-4 dark:text-cream dark:hover:text-cream/80"
              >
                Download CV
              </a>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-inkSoft dark:text-cream/70">
            Prefer informal communication? I’m also reachable via{' '}
            <a
              href="https://wa.me/421907841353"
              target="_blank"
              rel="noreferrer"
              className="text-inkSoft transition-all duration-200 hover:text-ink hover:underline hover:underline-offset-4 hover:-translate-y-[1px] inline-block dark:text-cream/70 dark:hover:text-cream"
            >
              WhatsApp
            </a>{' '}
            or{' '}
            <a
              href="https://www.instagram.com/r_rybak_1/"
              target="_blank"
              rel="noreferrer"
              className="text-inkSoft transition-all duration-200 hover:text-ink hover:underline hover:underline-offset-4 hover:-translate-y-[1px] inline-block dark:text-cream/70 dark:hover:text-cream"
            >
              Instagram
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
