import Grid from '@mui/joy/Grid'

import { Project } from '~/types'
import ProjectCard from './ProjectCard'

const Projects = (): JSX.Element => {
  const projects: Project[] = [
    {
      key: 'oodikone',
      name: 'Oodikone',
      description: 'A web application for analyzing university data',
      repository: 'UniversityOfHelsinkiCS/oodikone',
      duration: 'Jan 2024 - Present',
      background: 'linear-gradient(45deg, #4dd0e1 0%, #4db6ac 100%)',
    },
    {
      key: 'insights',
      name: 'Insights',
      description: 'A fun, interactive web application for visualizing GitHub data',
      repository: 'rikurauhala/insights',
      duration: 'Apr 2024 - Present',
      background: 'linear-gradient(45deg, #f06292 0%, #ba68c8 100%)',
    },
    {
      key: 'bsc-thesis',
      name: 'B.Sc thesis',
      description: "Bachelor's thesis in computer science",
      repository: 'rikurauhala/kandi',
      duration: 'Aug 2023 - Dec 2023',
      background: 'linear-gradient(45deg, #7986cb 0%, #64b5f6 100%)',
    },
    {
      key: 'hack-this',
      name: 'Hack This',
      description: 'A web application demonstrating common security vulnerabilities',
      repository: 'rikurauhala/hack-this',
      duration: 'Jul 2023 - Aug 2023',
      background: 'linear-gradient(45deg, #4fc3f7 0%, #90a4ae 100%)',
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
