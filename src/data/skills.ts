export type SkillCategory = {
  name: string
  technologies: string[]
}

export const skills: SkillCategory[] = [
  {
    name: 'Communication',
    technologies: [
      'Clarity',
      'Stakeholder alignment',
      'Documentation',
      'Presentation',
      'Active listening',
    ],
  },
  {
    name: 'Problem solving',
    technologies: [
      'Root cause analysis',
      'Structured thinking',
      'Decision-making',
      'Risk assessment',
      'Systems thinking',
    ],
  },
  {
    name: 'Collaboration',
    technologies: [
      'Teamwork',
      'Feedback loops',
      'Ownership',
      'Leadership',
      'Accountability',
      'Mentoring',
    ],
  },
  {
    name: 'Execution & discipline',
    technologies: [
      'Focus',
      'Consistency',
      'Prioritization',
      'Resilience',
      'Iteration',
    ],
  },
]
