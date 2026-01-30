type BioSection = {
  title: string
  content: string[]
}

type TimelineItem = {
  year: string
  title: string
  description: string
  category: 'education' | 'sport' | 'experience'
}

export const bioContent: { sections: BioSection[]; timeline: TimelineItem[] } = {
  sections: [
    {
      title: 'About me',
      content: [
        'I am an Entrepreneurship student with a strong interest in how data, decision-making, and customer experience connect in real-world business contexts. I focus on understanding problems clearly, evaluating opportunities, and translating insights into practical actions that create value.',
        'My goal is to develop entrepreneurial thinking grounded in structure, evidence, and real constraints. I value clarity, simplicity, and execution - whether in shaping ideas, analyzing outcomes, or communicating decisions. I aim for approaches that are thoughtful, realistic, and scalable.',
      ],
    },
    {
      title: 'Professional journey',
      content: [
        'I am currently building my entrepreneurial foundation through academic work and independent projects, with a focus on opportunity analysis, problem-solving, and business thinking. Over time, I have become increasingly interested in how data and customer insight support product direction, service improvement, and strategic decisions.',
        'Alongside my academic path, I spent eight years as a competitive basketball player. I represented Slovakia at the national team level and won five national championships. This experience shaped my discipline, teamwork, and ability to perform under pressure - skills that strongly influence how I approach entrepreneurial and collaborative work today.',
      ],
    },
    {
      title: 'Values and approach',
      content: [
        'I value structured thinking, ownership, and clear communication. I prefer to understand the "why" behind outcomes, not just the results themselves, and I continuously reflect on what can be improved.',
        'Adaptability, feedback, and learning through iteration are central to how I work. Whether in sports or entrepreneurship, I believe consistent effort, accountability, and informed decision-making lead to meaningful outcomes.',
      ],
    },
  ],
  timeline: [
    {
      year: '2013-2021',
      title: 'Primary Education - CZS Narnia',
      description: 'Academic foundations with early involvement in team-based activities.',
      category: 'education',
    },
    {
      year: '2018',
      title: 'Started Competitive Basketball',
      description: 'Entered organized club basketball and long-term athletic development in BK Pezinok.',
      category: 'sport',
    },
    {
      year: '2021',
      title: 'Inter Bratislava - Called up form BK Pezinok',
      description: 'Slovak Champion (U16, U17).',
      category: 'sport',
    },
    {
      year: '2022',
      title: 'Slovak National Basketball Team - Youth Level',
      description: 'Selected to represent Slovakia at the national level.',
      category: 'sport',
    },
    {
      year: '2022',
      title: 'Inter Bratislava',
      description: 'Slovak Champion (U17, U19).',
      category: 'sport',
    },
    {
      year: '2023',
      title: 'Inter Bratislava',
      description: 'Slovak Champion (U18).',
      category: 'sport',
    },
    {
      year: '2024 - 2025',
      title: 'BK Levice Senec',
      description: 'Transferred from Inter Bratislava for the 2024–2025 season and going.',
      category: 'sport',
    },
    {
      year: '2021-2026',
      title: 'Lyceum C. S. Lewis - Business Analytics',
      description: `Focus on analytical thinking, business projects, and data-driven problem solving.
Expected graduation: 2026.
Key Academic & Applied Projects:
- Business Innovation Projects
- Crowdfunding Campaigns
- Case studies
View all in the experiences.`,
      category: 'education',
    },
    {
      year: '2022-2024',
      title: 'Co-Founder & Organizer - SPARX Startup Conference',
      description: 'Co-founded and organized a regional student startup event with 400+ attendees and 20+ teams. Led strategy, logistics, promotion, budgeting, speaker coordination, and moderated the main program.',
      category: 'experience',
    },
    {
      year: '2024-2025',
      title: 'DXC Technology - Job Shadowing Program',
      description: 'Observed enterprise analytics, digital transformation initiatives, and agile workflows in an IT consulting environment.',
      category: 'experience',
    },
    {
      year: '2025',
      title: 'Martinus Project - Customer Experience Analysis',
      description: 'Led a CX-focused project for a major Slovak bookstore: customer journey mapping, pain-point identification, service design, and engagement recommendations.',
      category: 'experience',
    },
    {
      year: '2025-Present',
      title: 'AI Dental - Data Analysis & Digital Marketing',
      description: 'Ongoing role focused on data analysis and end-to-end digital marketing execution: campaign strategy and performance tracking, audience research and content planning, data-informed optimization of user engagement.',
      category: 'experience',
    },
  ],
}
