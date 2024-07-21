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
    icon: <WorkIcon />,
    title: 'Profession',
    value: 'Software developer',
  },
  {
    key: 'education',
    icon: <SchoolIcon />,
    title: 'Education',
    value: 'B.Sc. in computer science',
  },
  {
    key: 'location',
    icon: <PlaceIcon />,
    title: 'Location',
    value: 'Helsinki',
  },
]

export const onlineItems: InfoItem[] = [
  {
    key: 'gitHub',
    icon: <GitHubIcon />,
    title: 'GitHub',
    value: <HyperLink href="https://github.com/rikurauhala" text="rikurauhala" />,
  },
  {
    key: 'linkedIn',
    icon: <LinkedInIcon />,
    title: 'LinkedIn',
    value: <HyperLink href="https://linkedin.com/in/rikurauhala" text="rikurauhala" />,
  },
  {
    key: 'email',
    icon: <EmailIcon />,
    title: 'Email',
    value: <HyperLink href="mailto:" text="to be added" />,
  },
]
