export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'xzz'
export const headline = 'Grade 11 Student at Shanghai Soong Ching Ling School.'
export const introduction =
  "Hi! I'm xzz, a Grade 11 student at Shanghai Soong Ching Ling School. I'm passionate about learning and building projects through the AI Camp program."
export const email = 'your.email@example.com'
export const githubUsername = 'xzz'

// about page
export const aboutMeHeadline = 'About Me'
export const aboutParagraphs = [
  "Hi! I'm xzz, a Grade 11 student at Shanghai Soong Ching Ling School.",
  'I enjoy exploring technology, working on creative projects, and learning new skills through hands-on experiences like AI Camp.',
  'This portfolio showcases my projects, activities, and the things I am learning along the way.',
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
