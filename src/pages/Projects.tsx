import { useEffect, useMemo, useRef, useState } from 'react'
import SectionTitle from '../components/ui/SectionTitle'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'
import { text } from '../i18n/translations'

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'project' | 'experience' | 'sport'>('all')
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const filters = [
    { id: 'all', label: text.filterAll },
    { id: 'project', label: text.filterProjects },
    { id: 'experience', label: text.filterExperiences },
    { id: 'sport', label: text.filterSport },
  ] as const

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'all') return projects
    return projects.filter((project) => project.group === selectedFilter)
  }, [selectedFilter])

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [selectedFilter])

  return (
    <div className="section-padding bg-sand dark:bg-ink">
      <div className="container-custom">
        <div ref={sectionRef}>
          <SectionTitle
            title={text.projectsTitle}
            subtitle={text.projectsSubtitle}
            className="mb-12"
          />
        </div>
        <div className="flex flex-wrap gap-3 mb-8" role="tablist" aria-label="Experience filters">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
