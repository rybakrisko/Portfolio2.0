import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from '../ui/Button'
import { text } from '../../i18n/translations'
import { slideshowImages } from '../../data/slideshow'

export default function BioPreview() {
  const images = slideshowImages
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="section-padding bg-sand dark:bg-ink">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <Link to="/photos-of-me" aria-label="Open photo gallery" className="block">
              <div className="relative aspect-square">
                <div className="absolute -left-4 -bottom-4 h-full w-full rounded-[28px] bg-cream border border-cloud dark:bg-slateBlue dark:border-cream/10" aria-hidden="true" />
                <div className="relative rounded-[24px] shadow-xl w-full h-full overflow-hidden">
                  {images.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={text.bioAlt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                </div>
              </div>
            </Link>
            <Link
              to="/photos-of-me"
              className="mt-5 block text-center text-[10px] font-mono uppercase tracking-[0.2em] text-ink/50 hover:text-ink/70 dark:text-cream/40 dark:hover:text-cream/70"
            >
              View all photos of me
            </Link>
          </div>
          <div>
            <h2 className="text-4xl font-display font-semibold mb-6 text-ink dark:text-cream">
              {text.bioTitle}
            </h2>
            <div className="space-y-4 text-inkSoft leading-relaxed mb-8 dark:text-cream/70">
              <p>
                I am an Entrepreneurship student with a strong interest in how data, decision-making, and customer experience connect in real-world business contexts. I focus on understanding problems clearly, evaluating opportunities, and translating insights into practical actions that create value.
              </p>
              <p>
                My goal is to develop entrepreneurial thinking grounded in structure, evidence, and real constraints. I value clarity, simplicity, and execution - whether in shaping ideas, analyzing outcomes, or communicating decisions. I aim for approaches that are thoughtful, realistic, and scalable.
              </p>
            </div>
            <Link to="/o-mne">
              <Button variant="primary">
                {text.bioCta}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
