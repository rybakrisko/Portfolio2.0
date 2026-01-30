import SectionTitle from '../ui/SectionTitle'
import { SkillCategory } from '../../data/skills'
import { hardSkills } from '../../data/hardSkills'
import { text } from '../../i18n/translations'

type SkillsSectionProps = {
  skills: SkillCategory[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="section-padding bg-cream dark:bg-ink">
      <div className="container-custom">
        <SectionTitle
          title={text.skillsTitle}
          subtitle={text.skillsSubtitle}
          className="mb-12"
        />
        <h3 className="text-2xl font-display font-semibold text-ink dark:text-cream mb-8">
          Soft Skills
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div
              key={category.name}
              className="bg-sand p-6 rounded-2xl border border-cloud card-shadow dark:bg-slateBlue dark:border-cream/10"
            >
              <h3 className="text-xl font-display font-semibold mb-4 text-ink dark:text-cream">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    title={tech}
                    className="px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] bg-cream text-ink rounded-full border border-cloud hover:border-accent transition-colors dark:bg-ink/40 dark:text-cream dark:border-cream/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-display font-semibold text-ink dark:text-cream mb-8">
            {text.hardSkillsTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {hardSkills.map((skill) => (
              <div
                key={skill.title}
                className="bg-sand p-6 rounded-2xl border border-cloud card-shadow dark:bg-slateBlue dark:border-cream/10"
              >
                <h4 className="text-lg font-display font-semibold text-ink dark:text-cream mb-2">
                  {skill.title}
                </h4>
                <p className="text-inkSoft leading-relaxed dark:text-cream/70">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
