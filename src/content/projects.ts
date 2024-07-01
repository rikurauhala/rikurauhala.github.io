import { Project } from '~/types'
import { colors, getLinearGradient } from '~/utils/color'

export const projects: Project[] = [
  {
    key: 'insights',
    image: 'insights.png',
    background: getLinearGradient(colors.teal, colors.blue),
    name: 'Insights',
    duration: 'Apr 2024 - Present',
    description: 'An interactive web application for visualizing GitHub data',
    repository: 'rikurauhala/insights',
  },
  {
    key: 'oodikone',
    image: 'oodikone.png',
    background: getLinearGradient(colors.red, colors.pink),
    name: 'Oodikone',
    duration: 'Jan 2024 - Present',
    description: 'A web application for analyzing university data',
    repository: 'UniversityOfHelsinkiCS/oodikone',
  },
  {
    key: 'bsc-thesis',
    image: 'bsc-thesis.png',
    background: getLinearGradient(colors.purple, colors.deepPurple),
    name: 'B.Sc thesis',
    duration: 'Aug 2023 - Dec 2023',
    description: "Bachelor's thesis in computer science",
    repository: 'rikurauhala/kandi',
  },
  {
    key: 'hack-this',
    image: 'hack-this.png',
    background: getLinearGradient(colors.green, colors.lightGreen),
    name: 'Hack This',
    duration: 'Jul 2023 - Aug 2023',
    description: 'A web application demonstrating common security vulnerabilities',
    repository: 'rikurauhala/hack-this',
  },
  {
    key: 'berry-picker-tracker',
    image: 'berry-picker-tracker.png',
    background: getLinearGradient(colors.indigo, colors.blue),
    name: 'Berry Picker Tracker',
    duration: 'Jan 2023 - May 2023',
    description:
      'A mobile application for preventing berry pickers from getting lost in the Finnish forests',
    repository: 'marjanpoimijat',
  },
  {
    key: '0b-is',
    image: '0b-is.png',
    background: getLinearGradient(colors.grey, colors.blueGrey),
    name: '0b.is',
    duration: 'Dec 2022 - Feb 2023',
    description:
      'An intuitive web application for quickly converting numbers between different bases',
    repository: 'rikurauhala/0b.is',
  },
]
