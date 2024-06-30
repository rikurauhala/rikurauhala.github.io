import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'

import PlaceIcon from '@mui/icons-material/Place'
import WorkIcon from '@mui/icons-material/Work'

import ProfilePicture from './ProfilePicture'

const InfoCard = (): JSX.Element => {
  const name = 'Riku Rauhala'

  const infoItems = [
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
        <Stack direction="column" justifyContent="space-between" spacing={1} textAlign="left">
          <Typography component="h1" level="h4">
            <Box>{name}</Box>
          </Typography>
          {infoItems.map(({ key, title, icon, value }) => (
            <Stack key={key} alignItems="center" direction="row" spacing={1.5}>
              {icon}
              <Stack alignItems="start" direction="column">
                <Typography color="neutral" level="title-sm">
                  {title}
                </Typography>
                <Typography>
                  <Box>{value}</Box>
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Card>
  )
}

export default InfoCard
