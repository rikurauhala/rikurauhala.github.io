import { Box } from '@mui/joy'
import Tooltip from '@mui/joy/Tooltip'
import {
  SiCss3,
  SiDiscord,
  SiDocker,
  SiFlask,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLatex,
  SiMui,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSemanticui,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

const icons: Record<string, { name: string; icon: JSX.Element }> = {
  css: {
    name: 'CSS',
    icon: <SiCss3 />,
  },
  discord: {
    name: 'Discord API',
    icon: <SiDiscord />,
  },
  docker: {
    name: 'Docker',
    icon: <SiDocker />,
  },
  flask: {
    name: 'Flask',
    icon: <SiFlask />,
  },
  github: {
    name: 'GitHub API',
    icon: <SiGithub />,
  },
  html: {
    name: 'HTML',
    icon: <SiHtml5 />,
  },
  javascript: {
    name: 'JavaScript',
    icon: <SiJavascript />,
  },
  latex: {
    name: 'Latex',
    icon: <SiLatex />,
  },
  mui: {
    name: 'Material UI',
    icon: <SiMui />,
  },
  postgres: {
    name: 'PostgreSQL',
    icon: <SiPostgresql />,
  },
  python: {
    name: 'Python',
    icon: <SiPython />,
  },
  react: {
    name: 'React',
    icon: <SiReact />,
  },
  reactnative: {
    name: 'React Native',
    icon: <SiReact />,
  },
  semantic: {
    name: 'Semantic UI',
    icon: <SiSemanticui />,
  },
  sqlite: {
    name: 'SQLite',
    icon: <SiSqlite />,
  },
  tailwind: {
    name: 'Tailwind CSS',
    icon: <SiTailwindcss />,
  },
  typescript: {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
}

type Technology = keyof typeof icons

interface TechnologyIconProps {
  technology: Technology
}

const TechnologyIcon = ({ technology }: TechnologyIconProps): JSX.Element | null => {
  if (!icons[technology]) {
    return null
  }

  return (
    <Tooltip key={technology} title={icons[technology].name}>
      <Box>{icons[technology].icon}</Box>
    </Tooltip>
  )
}

export default TechnologyIcon
