import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PlaceIcon from '@mui/icons-material/Place'
import WorkIcon from '@mui/icons-material/Work'

import InfoItems from './InfoItems'
import ProfilePicture from './ProfilePicture'

const InfoCard = (): JSX.Element => {
  const name = 'Riku Rauhala'

  const aboutItems = [
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
            <Box>{name}</Box>
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" spacing={4}>
            <InfoItems header="About" items={aboutItems} />
            <InfoItems header="Online" items={onlineItems} />
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}

export default InfoCard
