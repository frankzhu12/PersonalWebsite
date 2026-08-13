// Types
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[]
}

export type ActivityItemType = {
  name: string
  description: string
  date: string
  location: string
  link?: string
}

// Awards
export const awardsHeadLine = 'Awards & Honors'
export const awardsIntro = 'Recognition for academic achievements.'

export const awards: Array<ActivityItemType> = []

// Projects
export const projectHeadLine = 'Projects'
export const projectIntro = 'Things I am building and learning through AI Camp.'

export const projects: Array<ProjectItemType> = [
  {
    name: 'Personal Portfolio',
    description:
      'This website — my first step into web development, built during AI Camp with Next.js and Tailwind CSS.',
    link: {
      href: 'https://github.com/frankzhu12/PersonalWebsite',
      label: 'View on GitHub',
    },
    tags: ['Website', 'Next.js', 'Tailwind CSS'],
  },
]

// Activities & hobbies
export const activitiesHeadLine = 'Activities & Hobbies'
export const activitiesIntro = 'What I spend my time on outside of class.'

export const activities: Array<ActivityItemType> = [
  {
    name: 'AI Camp',
    description:
      'Learning web development and AI tools with Mr. Derek at Shanghai Soong Ching Ling School.',
    date: '2026',
    location: 'SCLS, Shanghai',
  },
  {
    name: 'BiteByte Club',
    description: 'School tech club exploring programming and computer science.',
    date: '2026',
    location: 'SCLS, Shanghai',
  },
  {
    name: 'Badminton',
    description: 'Playing badminton to stay active and unwind after studying.',
    date: 'Ongoing',
    location: 'Shanghai',
  },
  {
    name: 'Brawl Stars',
    description: 'A guilty pleasure — probably playing more than I should.',
    date: 'Ongoing',
    location: 'Mobile',
  },
]
