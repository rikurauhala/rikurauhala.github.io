import Box from '@mui/joy/Box'
import Tooltip from '@mui/joy/Tooltip'
import {
  SiCss3,
  SiCypress,
  SiDiscord,
  SiDocker,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLatex,
  SiMui,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSemanticui,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

type IconDetails = {
  name: string
  icon: JSX.Element
  color: string
}

const technologies: Record<string, IconDetails> = {
  css: {
    name: 'CSS',
    icon: <SiCss3 />,
    color: '#2196F3',
  },
  cypress: {
    name: 'Cypress',
    icon: <SiCypress />,
    color: '#5DD1A1',
  },
  discord: {
    name: 'Discord API',
    icon: <SiDiscord />,
    color: '#5865F2',
  },
  docker: {
    name: 'Docker',
    icon: <SiDocker />,
    color: '#1D63ED',
  },
  github: {
    name: 'GitHub API',
    icon: <SiGithub />,
    color: '',
  },
  html: {
    name: 'HTML',
    icon: <SiHtml5 />,
    color: '#E34C26',
  },
  javascript: {
    name: 'JavaScript',
    icon: <SiJavascript />,
    color: '#F1E05A',
  },
  joy: {
    name: 'Joy UI',
    icon: <SiMui />,
    color: '#007FFF',
  },
  latex: {
    name: 'Latex',
    icon: <SiLatex />,
    color: '#0F7F7F',
  },
  mui: {
    name: 'Material UI',
    icon: <SiMui />,
    color: '#007FFF',
  },
  node: {
    name: 'Node.js',
    icon: <SiNodedotjs />,
    color: '#5FA04E',
  },
  postgres: {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
    color: '#336791',
  },
  python: {
    name: 'Python',
    icon: <SiPython />,
    color: '#3572A5',
  },
  react: {
    name: 'React.js',
    icon: <SiReact />,
    color: '#58C4DC',
  },
  reactnative: {
    name: 'React Native',
    icon: <SiReact />,
    color: '#58C4DC',
  },
  semantic: {
    name: 'Semantic UI',
    icon: <SiSemanticui />,
    color: '#35BDB2',
  },
  sqlite: {
    name: 'SQLite',
    icon: <SiSqlite />,
    color: '#0482C7',
  },
  tailwind: {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
    color: '#38BDF8',
  },
  typescript: {
    name: 'TypeScript',
    icon: <SiTypescript />,
    color: '#3178C6',
  },
}

type Technology = keyof typeof technologies

const TechnologyIcon = ({ technology }: { technology: Technology }) => {
  if (!technologies[technology]) {
    return null
  }

  const { name, icon, color } = technologies[technology]

  return (
    <Tooltip arrow enterTouchDelay={0} key={technology} title={name}>
      <Box color={color}>{icon}</Box>
    </Tooltip>
  )
}

export default TechnologyIcon
