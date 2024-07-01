import Grid from '@mui/joy/Grid'

import { projects } from '~/content/projects'
import ProjectCard from './ProjectCard'

const Projects = (): JSX.Element => {
  return (
    <Grid container marginTop={2} spacing={2}>
      {projects.map((project) => (
        <ProjectCard key={project.key} project={project} />
      ))}
    </Grid>
  )
}

export default Projects
