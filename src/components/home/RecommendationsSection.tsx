import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { text } from '../../i18n/translations'

const recommendations = [
  {
    name: 'Milina Matulova',
    role: 'Entrepreneurship teacher',
    description: 'Richard is a student who naturally combines analytical thinking with strong communication skills. He excels in mathematics, business analysis, problem solving, and presenting—disciplines in which he consistently demonstrates both precision and creativity.',
    file: '/milina_recomendation_letter.pdf',
  },
  {
    name: 'Fraser Coyle',
    role: 'Business English teacher',
    description: 'A major source of his progress is the discipline he brings from his basketball background. Richard shows strong determination and work ethic in sports, and when he applies this same focus to academics, his results are excellent. His performance is closely tied to motivation.',
    file: '/fraser_recomendation_letter.pdf',
  },
]

export default function RecommendationsSection() {
  return (
    <section className="section-padding bg-cream dark:bg-ink">
      <div className="container-custom">
        <SectionTitle
          title={text.recommendationsTitle}
          subtitle={text.recommendationsSubtitle}
          className="mb-12"
        />
        <div className="grid md:grid-cols-2 gap-6">
          {recommendations.map((item) => (
            <div
              key={item.file}
              className="bg-sand p-6 rounded-2xl border border-cloud card-shadow dark:bg-slateBlue dark:border-cream/10"
            >
              <h3 className="text-xl font-display font-semibold text-ink dark:text-cream mb-4">
                {item.name}
              </h3>
              {item.role && (
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-ink/60 mb-3 dark:text-cream/50">
                  {item.role}
                </p>
              )}
              {item.description && (
                <p className="text-inkSoft text-sm leading-relaxed mb-4 dark:text-cream/70">
                  {item.description}
                </p>
              )}
              <Button variant="primary" href={item.file}>
                {text.recommendationsDownload}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
