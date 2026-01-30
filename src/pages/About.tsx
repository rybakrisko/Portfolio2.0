import { useMemo, useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import { bioContent } from '../data/bio'
import { text } from '../i18n/translations'

export default function About() {
  const [selectedFilter, setSelectedFilter] = useState<'educationExperience' | 'sport'>('educationExperience')
  const filters = [
    { id: 'educationExperience', label: text.timelineFilterEducation },
    { id: 'sport', label: text.timelineFilterSport },
  ] as const
  const filteredTimeline = useMemo(() => {
    if (selectedFilter === 'educationExperience') {
      return bioContent.timeline.filter((item) => item.category === 'education' || item.category === 'experience')
    }
    return bioContent.timeline.filter((item) => item.category === 'sport')
  }, [selectedFilter])

  return (
    <div className="section-padding bg-sand dark:bg-ink">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <SectionTitle
            title={text.aboutTitle}
            subtitle={text.aboutSubtitle}
            className="mb-12"
          />

          <div className="max-w-none">
            {bioContent.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-3xl font-display font-semibold mb-4 text-ink dark:text-cream">
                  {section.title}
                </h2>
                <div className="space-y-4 text-inkSoft leading-relaxed dark:text-cream/70">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-display font-semibold mb-6 text-ink dark:text-cream">
              {text.aboutTimeline}
            </h3>
            <div className="flex flex-wrap gap-3 mb-8" role="tablist" aria-label="Timeline filters">
              {filters.map((filter) => {
                const isActive = selectedFilter === filter.id
                return (
                  <button
                    key={filter.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors border ${
                      isActive
                        ? 'bg-ink text-cream border-ink dark:bg-cream dark:text-ink dark:border-cream'
                        : 'bg-cream text-inkSoft border-cloud hover:border-ink/40 dark:bg-slateBlue dark:text-cream/70 dark:border-cream/10 dark:hover:border-cream/40'
                    }`}
                  >
                    {filter.label}
                  </button>
                )
              })}
            </div>
            <div className="space-y-6">
              {filteredTimeline.map((item) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className="flex gap-6 items-start bg-cream border border-cloud rounded-2xl p-6 text-left dark:bg-slateBlue dark:border-cream/10"
                >
                  <div className="text-sm font-mono uppercase tracking-[0.3em] text-accent">
                    {item.year}
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-semibold text-ink mb-2 dark:text-cream">
                      {item.title}
                    </h4>
                    <p className="text-inkSoft leading-relaxed whitespace-pre-line dark:text-cream/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-cream rounded-2xl border border-cloud dark:bg-slateBlue dark:border-cream/10">
            <h3 className="text-2xl font-display font-semibold mb-4 text-ink dark:text-cream">
              {text.aboutDownloadTitle}
            </h3>
            <p className="text-inkSoft mb-6 dark:text-cream/70">
              {text.aboutDownloadText}
            </p>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold uppercase tracking-[0.18em] bg-ink text-cream hover:bg-slateBlue transition-colors"
            >
              {text.aboutDownloadButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
