import Grid from '@mui/joy/Grid'
import { useTrail } from '@react-spring/web'

import { projects } from '~/content/projects'
import ProjectCard from './ProjectCard'

const Projects = (): JSX.Element => {
  const trail = useTrail(projects.length, {
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    delay: 200,
    config: { mass: 1, tension: 120, friction: 14 },
  })

  return (
    <Grid container marginTop={2} spacing={2}>
      {trail.map((style, index) => (
        <ProjectCard key={projects[index].key} project={projects[index]} style={style} />
      ))}
    </Grid>
  )
}

export default Projects
