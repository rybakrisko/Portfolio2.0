import SectionTitle from '../components/ui/SectionTitle'
import { slideshowImages } from '../data/slideshow'

const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif']
const isImage = (path: string) => imageExtensions.some((ext) => path.toLowerCase().endsWith(ext))

export default function Photos() {
  return (
    <div className="section-padding bg-sand dark:bg-ink">
      <div className="container-custom">
        <SectionTitle
          title="Photos of me"
          subtitle="All images from the slideshow"
          className="mb-12"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slideshowImages.map((item) => (
            <div
              key={item}
              className="relative rounded-2xl overflow-hidden border border-cloud bg-cream card-shadow dark:bg-slateBlue dark:border-cream/10"
            >
              {isImage(item) ? (
                <img
                  src={item}
                  alt="Photo of Richard Rybak"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              ) : (
                <div className="flex flex-col items-start gap-3 p-6 min-h-[280px] text-inkSoft dark:text-cream/70">
                  <span className="text-xs uppercase tracking-[0.3em] text-accent">File</span>
                  <span className="text-lg font-display font-semibold text-ink dark:text-cream">
                    {item.split('/').pop()}
                  </span>
                  <a
                    href={item}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:underline dark:text-cream"
                  >
                    Open file
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
