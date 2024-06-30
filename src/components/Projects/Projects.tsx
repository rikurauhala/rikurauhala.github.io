import Grid from '@mui/joy/Grid'

import { Project } from '../../types'
import ProjectCard from './ProjectCard'

const Projects = (): JSX.Element => {
  const projects: Project[] = [
    {
      key: 'oodikone',
      name: 'Oodikone',
      description: 'A web application for analyzing university data',
      repository: 'UniversityOfHelsinkiCS/oodikone',
    },
    {
      key: 'insights',
      name: 'Insights',
      description: 'A fun, interactive web application for visualizing GitHub data',
      repository: 'rikurauhala/insights',
    },
    {
      key: 'bsc-thesis',
      name: "Bachelor's Thesis",
      description: "Bachelor's thesis in computer science",
      repository: 'rikurauhala/kandi',
    },
    {
      key: 'hack-this',
      name: 'Hack This',
      description: 'A web application demonstrating common security vulnerabilities',
      repository: 'rikurauhala/hack-this',
    },
  ]

  return (
    <Grid container marginTop={2} spacing={2}>
      {projects.map((project) => (
        <ProjectCard key={project.key} project={project} />
      ))}
    </Grid>
  )
}

export default Projects
