import SectionTitle from '../ui/SectionTitle'
import { SoftSkill } from '../../data/skills'
import { hardSkills } from '../../data/hardSkills'
import { text } from '../../i18n/translations'

type SkillsSectionProps = {
  skills: SoftSkill[]
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
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill) => (
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
