import { Link } from 'react-router-dom'
import Logo from '../ui/Logo'
import SocialLinks from '../ui/SocialLinks'
import { socialLinks } from '../../data/contact'
import { text } from '../../i18n/translations'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const footerLinks = [
    { href: '/projekty', label: text.navProjects },
    { href: '/o-mne', label: text.navAbout },
    { href: '/kontakt', label: text.navContact },
  ]

  return (
    <footer className="bg-ink text-cream">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Logo className="text-cream mb-4" />
            <p className="text-cream/70 text-sm leading-relaxed">
              {text.footerTagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-[0.2em] text-xs text-cream/70">
              {text.footerLinks}
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-cream/70 hover:text-cream transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4 uppercase tracking-[0.2em] text-xs text-cream/70">
              {text.footerSocial}
            </h3>
            <SocialLinks links={socialLinks} variant="light" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cream/10 text-center text-sm text-cream/60">
          <p>&copy; {currentYear} Richard Rybak. {text.footerRights}</p>
        </div>
      </div>
    </footer>
  )
}
