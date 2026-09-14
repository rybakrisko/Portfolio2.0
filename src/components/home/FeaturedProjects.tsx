import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../projects/ProjectCard'
import Button from '../ui/Button'
import { Project } from '../../data/projects'
import { text } from '../../i18n/translations'
import { useColumnCount } from '../../hooks/useColumnCount'

type FeaturedProjectsProps = {
  projects: Project[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const columnCount = useColumnCount()

  const columns = useMemo(() => {
    const cols: Project[][] = Array.from({ length: columnCount }, () => [])
    projects.forEach((project, index) => {
      cols[index % columnCount].push(project)
    })
    return cols
  }, [projects, columnCount])

  return (
    <section id="featured-projects" className="section-padding bg-sand dark:bg-ink">
      <div className="container-custom">
        <SectionTitle
          title={text.featuredTitle}
          subtitle={text.featuredSubtitle}
          className="mb-12"
        />
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          {columns.map((columnProjects, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-8 flex-1">
              {columnProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/projekty">
            <Button variant="outline">
              {text.featuredAll}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
