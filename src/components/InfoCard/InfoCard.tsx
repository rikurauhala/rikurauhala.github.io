import Card from '@mui/joy/Card'
import Divider from '@mui/joy/Divider'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PlaceIcon from '@mui/icons-material/Place'
import WorkIcon from '@mui/icons-material/Work'

import { InfoItem } from '~/types'

import InfoItems from './InfoItems'
import ProfilePicture from './ProfilePicture'

const InfoCard = (): JSX.Element => {
  const name = 'Riku Rauhala'

  const aboutItems: InfoItem[] = [
    {
      key: 'profession',
      title: 'Profession',
      icon: <WorkIcon />,
      value: 'Software developer',
    },
    {
      key: 'location',
      title: 'Location',
      icon: <PlaceIcon />,
      value: 'Helsinki',
    },
  ]

  const onlineItems = [
    {
      key: 'gitHub',
      title: 'GitHub',
      icon: <GitHubIcon />,
      value: 'rikurauhala',
    },
    {
      key: 'linkedIn',
      title: 'LinkedIn',
      icon: <LinkedInIcon />,
      value: 'rikurauhala',
    },
  ]

  return (
    <Card>
      <Stack
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="center"
        my={2}
        spacing={4}
      >
        <ProfilePicture />
        <Stack direction="column" justifyContent="space-between" spacing={2} textAlign="left">
          <Typography component="h1" level="h4" textAlign={{ xs: 'center', sm: 'left' }}>
            {name}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 2, sm: 4 }}
            alignItems="flex-start"
          >
            <InfoItems items={aboutItems} />
            <Divider
              orientation="horizontal"
              sx={{
                display: { xs: 'block', sm: 'none' },
                width: '100%',
              }}
            />
            <Divider
              orientation="vertical"
              sx={{
                display: { xs: 'none', sm: 'block' },
                height: 'auto',
              }}
            />
            <InfoItems items={onlineItems} />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}

export default InfoCard
