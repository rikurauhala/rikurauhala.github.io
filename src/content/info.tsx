import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PlaceIcon from '@mui/icons-material/Place'
import SchoolIcon from '@mui/icons-material/School'
import WorkIcon from '@mui/icons-material/Work'
import he from 'he'

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

const letters = [
  '&#x6D;',
  '&#x61;',
  '&#x69;',
  '&#x6C;',
  '&#x74;',
  '&#x6F;',
  '&#x3A;',
  '&#x72;',
  '&#x69;',
  '&#x6B;',
  '&#x75;',
  '&#x40;',
  '&#x72;',
  '&#x61;',
  '&#x75;',
  '&#x68;',
  '&#x61;',
  '&#x6C;',
  '&#x61;',
  '&#x2E;',
  '&#x69;',
  '&#x6F;',
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
    value: <HyperLink href={he.decode(letters.join(''))} text="click to send" />,
  },
]
