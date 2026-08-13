import { Container } from '@/components/layout/Container'
import Education from '@/components/home/Education'
import SocialLinks from '@/components/home/SocialLinks'
import { headline, introduction, techIcons } from '@/config/infoConfig'
import { ProjectCard } from '@/components/project/ProjectCard'
import { ActivityCard } from '@/components/home/ActivityCard'
import {
  projectHeadLine,
  projectIntro,
  projects,
  activities,
  activitiesHeadLine,
  activitiesIntro,
} from '@/config/projects'
import IconCloud from '@/components/ui/icon-cloud'
import { Briefcase, Heart } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        {/* personal info */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className="md:mt-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl opacity-80">
              {headline}
            </h2>
            <p className="mt-6 text-xl text-muted-foreground">{introduction}</p>
            <SocialLinks className="md:mt-24" />
          </div>
          <div className="relative flex size-full items-center justify-center overflow-hidden w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
            <IconCloud iconSlugs={techIcons} />
          </div>
        </div>

        {/* Projects */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Briefcase size={28} />
            {projectHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {projectIntro}
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} titleAs="h3" />
            ))}
          </ul>
        </div>

        {/* Activities & Hobbies */}
        <div className="mx-auto flex flex-col max-w-xl gap-6 lg:max-w-none my-4 py-8 border-t border-muted">
          <h2 className="flex flex-row items-center justify-start gap-2 text-xl font-semibold tracking-tight md:text-3xl opacity-80 mb-4">
            <Heart size={28} />
            {activitiesHeadLine}
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mb-8">
            {activitiesIntro}
          </p>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3"
          >
            {activities.map((activity) => (
              <ActivityCard
                key={activity.name}
                activity={activity}
                titleAs="h3"
              />
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="mx-auto max-w-xl lg:max-w-none my-4 py-8 border-t border-muted">
          <Education />
        </div>
      </Container>
    </>
  )
}
