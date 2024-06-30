import Grid from '@mui/joy/Grid'
import {
  amber,
  blue,
  blueGrey,
  brown,
  cyan,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lime,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@mui/material/colors'

import { Project } from '~/types'
import ProjectCard from './ProjectCard'

const getLinearGradient = (color1: string, color2: string): string => {
  return `linear-gradient(90deg, ${color1} 0%, ${color2} 80%)`
}

const level = 300

const Projects = (): JSX.Element => {
  const projects: Project[] = [
    {
      key: 'insights',
      image: 'insights.png',
      background: getLinearGradient(teal[level], blue[level]),
      name: 'Insights',
      duration: 'Apr 2024 - Present',
      description: 'An interactive web application for visualizing GitHub data',
      repository: 'rikurauhala/insights',
    },
    {
      key: 'oodikone',
      image: 'oodikone.png',
      background: getLinearGradient(red[level], pink[level]),
      name: 'Oodikone',
      duration: 'Jan 2024 - Present',
      description: 'A web application for analyzing university data',
      repository: 'UniversityOfHelsinkiCS/oodikone',
    },
    {
      key: 'bsc-thesis',
      image: 'bsc-thesis.png',
      background: getLinearGradient(purple[level], deepPurple[level]),
      name: 'B.Sc thesis',
      duration: 'Aug 2023 - Dec 2023',
      description: "Bachelor's thesis in computer science",
      repository: 'rikurauhala/kandi',
    },
    {
      key: 'hack-this',
      image: 'hack-this.png',
      background: getLinearGradient(green[level], lightGreen[level]),

      name: 'Hack This',
      duration: 'Jul 2023 - Aug 2023',
      description: 'A web application demonstrating common security vulnerabilities',
      repository: 'rikurauhala/hack-this',
    },
    {
      key: 'berry-picker-tracker',
      image: 'berry-picker-tracker.png',
      background: getLinearGradient(indigo[level], blue[level]),
      name: 'Berry Picker Tracker',
      duration: 'Jan 2023 - May 2023',
      description:
        'A mobile application for preventing berry pickers from getting lost in the Finnish forests',
      repository: 'marjanpoimijat',
    },
    {
      key: '0b-is',
      image: '0b-is.png',
      background: getLinearGradient(grey[level], blueGrey[level]),
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
