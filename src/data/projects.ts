export type Project = {
  id: string
  slug: string
  title: string
  shortDescription: string
  tagline?: string
  thumbnail?: string
  images?: string[]
  techStack: string[]
  category: string
  group?: 'project' | 'experience' | 'sport' | 'other'
  year?: number | string
  role?: string
  featured?: boolean
  demoUrl?: string
  githubUrl?: string
  challenge?: string
  solution?: string
  technicalDetails?: string
  results?: string
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'sparx-startup-event',
    title: 'SPARX Startup Event',
    shortDescription: 'Co-founded SPARX, a student-led startup event designed to connect teams, ideas, and audiences within the school ecosystem. The event attracted over 400 attendees and more than 20 participating teams, with responsibility spanning concept development, coordination, and co-moderation of the full programme.',
    tagline: 'SPARX Startup Event',
    thumbnail: '/sparx.png',
    images: [
      '/sparx.png',
    ],
    techStack: [
      'Entrepreneurship',
      'Event Strategy',
      'Public Speaking',
      'Leadership',
      'Execution',
    ],
    category: 'entrepreneurship',
    group: 'experience',
    year: '2022-2024',
    role: 'Co-founder',
    featured: true,
    demoUrl: undefined,
    technicalDetails: 'Entrepreneurship · Event Strategy · Public Speaking · Leadership · Execution',
  },
  {
    id: '2',
    slug: 'business-analytics-marketing',
    title: 'AI:Dental',
    shortDescription: 'Worked on data analysis and end-to-end digital marketing execution for a health-tech startup focused on dental AI solutions. The role combined analytical work with hands-on campaign ownership, from performance tracking to strategic adjustments based on results.',
    tagline: 'Data Analysis & Digital Marketing - AI:Dental',
    thumbnail: '/ai_dental_logo.jpeg',
    images: [
      '/ai_dental_logo.jpeg',
    ],
    techStack: [
      'Data Analysis',
      'Digital Marketing',
      'Performance Measurement',
      'Business Insight',
      'Ownership',
    ],
    category: 'digital',
    group: 'experience',
    year: '2025-2026',
    role: 'Business Analytics & Marketing',
    featured: true,
    demoUrl: undefined,
    technicalDetails: 'Data Analysis · Digital Marketing · Performance Measurement · Business Insight · Ownership',
  },
  {
    id: '3',
    slug: 'crowdfunding-campaign-strategy',
    title: 'Crowdfunding Campaign',
    shortDescription: 'Co-led a crowdfunding initiative focused on awareness-building through a large-scale presentation and structured messaging. The campaign combined storytelling, audience targeting, and clear value framing, resulting in funding that exceeded the original goal by over 200%.',
    tagline: 'Crowdfunding Campaign Strategy & Awareness Presentation',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=800&fit=crop',
    ],
    techStack: [
      'Campaign Strategy',
      'Public Presentation',
      'Awareness Building',
      'Outcome Measurement',
      'Team Collaboration',
    ],
    category: 'entrepreneurship',
    group: 'experience',
    year: 2023,
    role: 'Co-lead',
    featured: true,
    demoUrl: undefined,
    technicalDetails: 'Campaign Strategy · Public Presentation · Awareness Building · Outcome Measurement · Team Collaboration',
  },
  {
    id: '6',
    slug: 'martinus-community-platform',
    title: 'Community Platform Prototype - Martinus',
    shortDescription: 'Worked on a conceptual product project proposing a new community system for Martinus, designed to function as a brand-specific social platform similar to Facebook. The project focused on defining user roles, interaction mechanics, and value exchange, and resulted in a functional website prototype demonstrating the core concept.',
    tagline: 'Community Platform Prototype - Martinus',
    thumbnail: '/martinus.png',
    images: [
      '/martinus.png',
    ],
    techStack: [
      'Product Thinking',
      'Community Design',
      'UX Structure',
      'Prototyping',
      'Systems Thinking',
    ],
    category: 'digital',
    group: 'project',
    role: 'Product concept',
    featured: true,
    technicalDetails: 'Product Thinking · Community Design · UX Structure · Prototyping · Systems Thinking',
  },
  {
    id: '9',
    slug: 'public-transport-cx-analysis',
    title: 'Public Transport Customer Experience Analysis (ARRIVA)',
    shortDescription: 'Analysed customer experience issues in regional public transport, focusing on delays, driver behaviour, and passenger communication. The project combined qualitative observation with structured problem framing to identify systemic service gaps rather than isolated incidents.',
    tagline: 'Customer Experience • Service Analysis',
    thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1200&h=800&fit=crop',
    ],
    techStack: [
      'Customer Experience',
      'Service Analysis',
      'Problem Framing',
      'Data Interpretation',
    ],
    category: 'digital',
    group: 'project',
    role: 'Analyst',
    featured: false,
    technicalDetails: 'Customer Experience · Service Analysis · Problem Framing · Data Interpretation',
  },
  {
    id: '10',
    slug: 'yourlox-mobile-app',
    title: 'YourLox Mobile App',
    shortDescription: 'Examined onboarding and payment flow friction in a smart locker mobile application after encountering real user-side issues during registration and Apple Pay setup. Mapped the user journey to highlight unnecessary complexity and points of failure affecting adoption.',
    tagline: 'UX Analysis • User Journey Mapping',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=800&fit=crop',
    ],
    techStack: [
      'UX Analysis',
      'User Journey Mapping',
      'Friction Identification',
      'Product Thinking',
    ],
    category: 'digital',
    group: 'project',
    role: 'UX Analyst',
    featured: false,
    technicalDetails: 'UX Analysis · User Journey Mapping · Friction Identification · Product Thinking',
  },
  {
    id: '11',
    slug: 'powerbi-reporting',
    title: 'Power BI Reporting & Data Exploration Projects',
    shortDescription: 'Built interactive dashboards and reports to explore datasets and communicate insights clearly. Focused on structuring data, selecting meaningful metrics, and translating raw numbers into understandable patterns for decision-making.',
    tagline: 'Power BI • Data Visualisation',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556761175-129418cb2dfe?w=1200&h=800&fit=crop',
    ],
    techStack: [
      'Power BI',
      'Data Visualisation',
      'Analytical Thinking',
      'Insight Communication',
    ],
    category: 'digital',
    group: 'project',
    role: 'Data Analyst',
    featured: false,
    technicalDetails: 'Power BI · Data Visualisation · Analytical Thinking · Insight Communication',
  },
  {
    id: '12',
    slug: 'dxc-technology',
    title: 'DXC Technology',
    shortDescription: 'Prepared for a professional analytics internship environment by developing formal communication, understanding corporate structures, and aligning analytical skills with real business contexts. Emphasis was placed on clarity, professionalism, and learning expectations.',
    tagline: 'Business Communication • Professional Readiness',
    thumbnail: '/dxc.jpg',
    images: [
      '/dxc.jpg',
    ],
    techStack: [
      'Business Communication',
      'Professional Readiness',
      'Analytical Mindset',
    ],
    category: 'entrepreneurship',
    group: 'experience',
    role: 'Analyst (preparation)',
    featured: false,
    technicalDetails: 'Business Communication · Professional Readiness · Analytical Mindset',
  },
  {
    id: '13',
    slug: 'competitive-basketball',
    title: 'Competitive Basketball - National & Club Level',
    shortDescription: 'Spent eight years in competitive basketball, including representing Slovakia at national level and winning five national championships. This experience developed discipline, performance under pressure, teamwork, and long-term commitment to improvement.',
    tagline: 'Teamwork • Discipline • Performance Mindset',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&h=800&fit=crop',
    ],
    techStack: [
      'Teamwork',
      'Discipline',
      'Performance Mindset',
      'Leadership',
    ],
    category: 'sport',
    group: 'sport',
    role: 'Player',
    featured: false,
    technicalDetails: 'Teamwork · Discipline · Performance Mindset · Leadership',
  },
]
