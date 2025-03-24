import Grid from '@mui/joy/Grid'
import { useTrail } from '@react-spring/web'

import Section from '~/components/Section'
import { projects } from '~/content/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const trail = useTrail(projects.length, {
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    delay: 100,
    config: { mass: 1, tension: 120, friction: 14 },
  })

  const content = `
    Here are some of the projects I have worked on over the years. Most recent projects are displayed
    first and the very best of them are marked as featured.


    All projects are authored by me, unless specified otherwise.
  `

  return (
    <>
      <Section content={content} title="Projects" />
      <Grid container spacing={2}>
        {trail.map((style, index) => (
          <ProjectCard
            index={index}
            key={projects[index].key}
            project={projects[index]}
            style={style}
          />
        ))}
      </Grid>
    </>
  )
}

export default Projects
