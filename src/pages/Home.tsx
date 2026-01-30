import Hero from '../components/home/Hero'
import FeaturedProjects from '../components/home/FeaturedProjects'
import SkillsSection from '../components/home/SkillsSection'
import BioPreview from '../components/home/BioPreview'
import RecommendationsSection from '../components/home/RecommendationsSection'
import CTASection from '../components/home/CTASection'
import { projects } from '../data/projects'
import { skills } from '../data/skills'

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3)

  return (
    <>
      <Hero />
      <FeaturedProjects projects={featuredProjects} />
      <SkillsSection skills={skills} />
      <BioPreview />
      <RecommendationsSection />
      <CTASection />
    </>
  )
}
