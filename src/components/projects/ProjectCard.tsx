import { useState } from 'react'
import TechTag from '../ui/TechTag'
import { Project } from '../../data/projects'
import { getCategoryLabel } from '../../i18n/utils'

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const visibleTech = isExpanded ? project.techStack : project.techStack.slice(0, 4)
  const remainingCount = Math.max(project.techStack.length - 4, 0)

  return (
    <div className="group">
      <div className="bg-cream rounded-2xl border border-cloud overflow-hidden transition-all duration-300 h-full md:min-h-[44.5rem] flex flex-col group-hover:-translate-y-2 group-hover:border-ink/20 card-shadow dark:bg-slateBlue dark:border-cream/10 dark:group-hover:border-cream/30">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.thumbnail || project.images?.[0] || '/placeholder-project.jpg'}
            alt={project.title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:from-ink/90" />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-inkSoft mb-3 dark:text-cream/60">
            <span>{getCategoryLabel(project.category)}</span>
            {project.year && <span>{project.year}</span>}
          </div>
          <h3 className="text-2xl font-display font-semibold mb-2 text-ink group-hover:text-accent transition-colors dark:text-cream">
            {project.title}
          </h3>
          <p className="text-inkSoft mb-4 flex-1 whitespace-pre-line dark:text-cream/70">
            {isDescriptionExpanded && project.fullDescription ? project.fullDescription : project.shortDescription}
          </p>
          {project.fullDescription && (
            <button
              type="button"
              onClick={() => setIsDescriptionExpanded((prev) => !prev)}
              className="self-start mb-4 text-sm font-medium text-accent hover:underline"
            >
              {isDescriptionExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
          <div className="flex flex-wrap content-start gap-2 min-h-[3.75rem]">
            {visibleTech.map((tech) => (
              <TechTag key={tech} name={tech} />
            ))}
            {!isExpanded && remainingCount > 0 && (
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] bg-cream text-ink rounded-full border border-cloud hover:border-accent transition-colors dark:bg-ink/40 dark:text-cream dark:border-cream/20"
                aria-label={`Show ${remainingCount} more skills`}
              >
                +{remainingCount}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
