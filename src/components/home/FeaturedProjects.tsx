import { Link } from 'react-router-dom'
import SectionTitle from '../ui/SectionTitle'
import ProjectCard from '../projects/ProjectCard'
import Button from '../ui/Button'
import { Project } from '../../data/projects'
import { text } from '../../i18n/translations'

type FeaturedProjectsProps = {
  projects: Project[]
}

export default function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section id="featured-projects" className="section-padding bg-sand dark:bg-ink">
      <div className="container-custom">
        <SectionTitle
          title={text.featuredTitle}
          subtitle={text.featuredSubtitle}
          className="mb-12"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
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
