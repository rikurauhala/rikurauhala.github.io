import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PlaceIcon from '@mui/icons-material/Place'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'

import HyperLink from '~/components/HyperLink'
import { InfoItem } from '~/types'

export const name = 'Riku Rauhala'

export const aboutItems: InfoItem[] = [
  {
    key: 'profession',
    title: 'Profession',
    icon: <WorkIcon />,
    value: 'Software developer',
  },
  {
    key: 'education',
    title: 'Education',
    icon: <SchoolIcon />,
    value: 'B.Sc. in computer science',
  },
  {
    key: 'location',
    title: 'Location',
    icon: <PlaceIcon />,
    value: 'Helsinki',
  },
]

export const onlineItems = [
  {
    key: 'gitHub',
    title: 'GitHub',
    icon: <GitHubIcon />,
    value: <HyperLink href="https://github.com/rikurauhala" text="rikurauhala" />,
  },
  {
    key: 'linkedIn',
    title: 'LinkedIn',
    icon: <LinkedInIcon />,
    value: <HyperLink href="https://linkedin.com/in/rikurauhala" text="rikurauhala" />,
  },
  {
    icon: <EmailIcon />,
    key: 'email',
    title: 'Email',
    value: <HyperLink href="mailto:" text="to be added" />,
  },
]
