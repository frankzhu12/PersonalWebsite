export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Frank Zhu'
export const headline = 'Grade 11 student at Shanghai Soong Ching Ling School.'
export const introduction =
  'I enjoy programming and playing badminton. Currently preparing for the TOEFL exam and learning through AI Camp.'
export const email = '202860133@stu.scls-sh.org'
export const githubUsername = 'frankzhu12'

// about page
export const aboutMeHeadline = 'About Me'
export const aboutParagraphs = [
  "Hi, I'm Frank — a Grade 11 student at Shanghai Soong Ching Ling School.",
  "I'm into programming, badminton, and (maybe too much) Brawl Stars. No big achievements yet — just a student learning step by step.",
  "Right now I'm focused on TOEFL prep, AI Camp with Mr. Derek, and the BiteByte club at school. I hope to join physics competitions in the future.",
]

// blog
export const blogHeadLine = 'Writing'
export const blogIntro = 'Notes and reflections — coming soon.'

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = []

// https://simpleicons.org/
export const techIcons = [
  'python',
  'javascript',
  'html5',
  'css3',
  'git',
  'github',
  'react',
  'nextdotjs',
]
