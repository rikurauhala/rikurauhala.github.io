import Grid from '@mui/joy/Grid'

import { Project } from '~/types'
import ProjectCard from './ProjectCard'

const Projects = (): JSX.Element => {
  const projects: Project[] = [
    {
      key: 'insights',
      image: 'insights.png',
      background: 'linear-gradient(45deg, #f06292 0%, #ba68c8 100%)',
      name: 'Insights',
      duration: 'Apr 2024 - Present',
      description: 'An interactive web application for visualizing GitHub data',
      repository: 'rikurauhala/insights',
    },
    {
      key: 'oodikone',
      image: 'oodikone.png',
      background: 'linear-gradient(45deg, #4dd0e1 0%, #4db6ac 100%)',
      name: 'Oodikone',
      duration: 'Jan 2024 - Present',
      description: 'A web application for analyzing university data',
      repository: 'UniversityOfHelsinkiCS/oodikone',
    },
    {
      key: 'bsc-thesis',
      image: 'bsc-thesis.png',
      background: 'linear-gradient(45deg, #7986cb 0%, #64b5f6 100%)',
      name: 'B.Sc thesis',
      duration: 'Aug 2023 - Dec 2023',
      description: "Bachelor's thesis in computer science",
      repository: 'rikurauhala/kandi',
    },
    {
      key: 'hack-this',
      image: 'hack-this.png',
      background: 'linear-gradient(45deg, #4fc3f7 0%, #90a4ae 100%)',
      name: 'Hack This',
      duration: 'Jul 2023 - Aug 2023',
      description: 'A web application demonstrating common security vulnerabilities',
      repository: 'rikurauhala/hack-this',
    },
    {
      key: 'berry-picker-tracker',
      image: 'berry-picker-tracker.png',
      background: 'linear-gradient(45deg, #ba68c8 0%, #9575cd 100%)',
      name: 'Berry Picker Tracker',
      duration: 'Jan 2023 - May 2023',
      description:
        'A mobile application for preventing berry pickers from getting lost in the Finnish forests',
      repository: 'marjanpoimijat',
    },
    {
      key: '0b-is',
      image: '0b-is.png',
      background: 'linear-gradient(45deg, #4db6ac 0%, #4fc3f7 100%)',
      name: '0b.is',
      duration: 'Dec 2022 - Feb 2023',
      description:
        'An intuitive web application for quickly converting numbers between different bases',
      repository: 'rikurauhala/0b.is',
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
