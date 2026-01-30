import { useParams, Link } from 'react-router-dom'
import TechTag from '../components/ui/TechTag'
import Button from '../components/ui/Button'
import CTASection from '../components/home/CTASection'
import { projects } from '../data/projects'
import { getCategoryLabel } from '../i18n/utils'
import { text } from '../i18n/translations'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="section-padding text-center">
        <h1 className="text-4xl font-display font-semibold mb-4">{text.projectNotFound}</h1>
        <Link to="/projekty">
          <Button variant="primary">{text.projectBack}</Button>
        </Link>
      </div>
    )
  }

  return (
    <>
      <div className="bg-cream py-16 dark:bg-ink">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="uppercase tracking-[0.4em] text-xs text-inkSoft mb-4 dark:text-cream/60">
                {text.projectCaseStudy}
              </p>
              <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4 text-ink dark:text-cream">
                {project.title}
              </h1>
              <p className="text-xl text-inkSoft mb-6 dark:text-cream/70">
                {project.tagline || project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-inkSoft mb-6 dark:text-cream/70">
                {project.year && (
                  <span className="rounded-full border border-cloud px-3 py-1 dark:border-cream/10">
                    {text.projectYear}: <strong className="text-ink dark:text-cream">{project.year}</strong>
                  </span>
                )}
                {project.role && (
                  <span className="rounded-full border border-cloud px-3 py-1 dark:border-cream/10">
                    {text.projectRole}: <strong className="text-ink dark:text-cream">{project.role}</strong>
                  </span>
                )}
                <span className="rounded-full border border-cloud px-3 py-1 dark:border-cream/10">
                  {text.projectCategory}: <strong className="text-ink dark:text-cream">{getCategoryLabel(project.category)}</strong>
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <TechTag key={tech} name={tech} />
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <Button variant="primary" href={project.demoUrl} target="_blank">
                    {text.projectDemo}
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" href={project.githubUrl} target="_blank">
                    {text.projectGithub}
                  </Button>
                )}
              </div>
            </div>

            {project.images && project.images[0] && (
              <div className="relative aspect-video rounded-2xl overflow-hidden card-shadow border border-cloud dark:border-cream/10">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="section-padding bg-sand dark:bg-ink">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto max-w-none">
            {project.challenge && (
              <section className="mb-12">
                <h2 className="text-3xl font-display font-semibold mb-4 text-ink dark:text-cream">
                  {text.projectChallenge}
                </h2>
                <div className="text-inkSoft space-y-4 leading-relaxed dark:text-cream/70">
                  {project.challenge.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {project.solution && (
              <section className="mb-12">
                <h2 className="text-3xl font-display font-semibold mb-4 text-ink dark:text-cream">
                  {text.projectSolution}
                </h2>
                <div className="text-inkSoft space-y-4 leading-relaxed dark:text-cream/70">
                  {project.solution.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {project.images && project.images.length > 1 && (
              <section className="mb-12">
                <h2 className="text-3xl font-display font-semibold mb-6 text-ink dark:text-cream">
                  {text.projectVisuals}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="relative aspect-video rounded-2xl overflow-hidden card-shadow border border-cloud dark:border-cream/10">
                      <img
                        src={image}
                        alt={`${project.title} - ${text.projectScreenshot} ${index + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {project.technicalDetails && (
              <section className="mb-12">
                <h2 className="text-3xl font-display font-semibold mb-4 text-ink dark:text-cream">
                  {text.projectTechnical}
                </h2>
                <div className="text-inkSoft space-y-4 leading-relaxed dark:text-cream/70">
                  {project.technicalDetails.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {project.results && (
              <section className="mb-12">
                <h2 className="text-3xl font-display font-semibold mb-4 text-ink dark:text-cream">
                  {text.projectResults}
                </h2>
                <div className="text-inkSoft space-y-4 leading-relaxed dark:text-cream/70">
                  {project.results.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>

      <CTASection />
    </>
  )
}
