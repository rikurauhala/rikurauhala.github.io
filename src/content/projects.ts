import { Project } from '~/types'
import { colors, getLinearGradient } from '~/utils/color'

export const projects: Project[] = [
  {
    key: 'rauhala-io',
    // image: 'rauhala-io.png',
    background: getLinearGradient(colors.teal, colors.blue),
    name: 'rauhala.io',
    duration: 'Jan 2022 - Present',
    description:
      'A personal website showcasing my projects and skills, currently in its third iteration',
    repository: 'rikurauhala/rikurauhala.github.io',
  },
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
    description: 'A full stack web application for analyzing university data',
    repository: 'UniversityOfHelsinkiCS/oodikone',
  },
  {
    key: 'seminar-paper',
    // image: 'seminar-paper.png',
    background: getLinearGradient(colors.purple, colors.deepPurple),
    name: 'Seminar paper',
    duration: 'Jan 2024 - Apr 2024',
    description:
      'An academic seminar paper on the topic of implementing multi-factor authentication',
    repository: 'rikurauhala/seminar-paper',
  },
  {
    key: 'bsc-thesis',
    image: 'bsc-thesis.png',
    background: getLinearGradient(colors.purple, colors.deepPurple),
    name: "Bachelor's thesis",
    duration: 'Aug 2023 - Dec 2023',
    description:
      "A bachelor's thesis in computer science on the topic of cracking cryptographic hashes of passwords",
    repository: 'rikurauhala/kandi',
  },
  {
    key: 'hack-this',
    image: 'hack-this.png',
    background: getLinearGradient(colors.green, colors.lightGreen),
    name: 'Hack This',
    duration: 'Jul 2023 - Aug 2023',
    description: 'A full stack web application demonstrating common security vulnerabilities',
    repository: 'rikurauhala/hack-this',
  },
  {
    key: 'berry-picker-tracker',
    image: 'berry-picker-tracker.png',
    background: getLinearGradient(colors.indigo, colors.blue),
    name: 'Berry Picker Tracker',
    duration: 'Jan 2023 - May 2023',
    description:
      'A full stack mobile application for preventing berry pickers from getting lost in the forest',
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
  {
    key: 'rsa',
    // image: 'rsa.png',
    background: getLinearGradient(colors.orange, colors.deepOrange),
    name: 'RSA',
    duration: 'Sep 2022 - Oct 2022',
    description: 'An implementation of the RSA cryptosystem with a command-line interface',
    repository: 'rikurauhala/rsa',
  },
  {
    key: 'yesan',
    // image: 'yesan.png',
    background: getLinearGradient(colors.yellow, colors.amber),
    name: 'Yesan',
    duration: 'Mar 2022 - May 2022',
    description:
      'A desktop application for managing personal finances with a graphical user interface',
    repository: 'rikurauhala/yesan',
  },
  {
    key: 'tj-bot',
    // image: 'tj-bot.png',
    background: getLinearGradient(colors.blue, colors.lightBlue),
    name: 'TJ-bot',
    duration: 'Jun 2021 - Sep 2021',
    description:
      'A Discord bot for reminding your friends in the Finnish military how many morning they have left',
    repository: 'rikurauhala/tj-bot',
  },
  {
    key: 'film-review-app',
    // image: 'film-review-app.png',
    background: getLinearGradient(colors.teal, colors.cyan),
    name: 'Film Review App',
    duration: 'Mar 2021 - Jun 2021',
    description: 'A full stack web application for reading and writing film reviews',
    repository: 'rikurauhala/film-review-app',
  },
]
