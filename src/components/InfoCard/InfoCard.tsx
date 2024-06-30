import Card from '@mui/joy/Card'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'

import PlaceIcon from '@mui/icons-material/Place'
import WorkIcon from '@mui/icons-material/Work'

import ProfilePicture from './ProfilePicture'

const InfoCard = (): JSX.Element => {
  return (
    <Card>
      <Stack alignItems="center" my={2} spacing={2}>
        <ProfilePicture />
        <Typography component="h1" level="h1">
          Riku Rauhala
        </Typography>
        <Stack alignItems="center">
          <Typography component="h2" level="h4" startDecorator={<WorkIcon sx={{ fontSize: 20 }} />}>
            Software Developer
          </Typography>
          <Typography
            component="h2"
            level="h4"
            startDecorator={<PlaceIcon sx={{ fontSize: 20 }} />}
          >
            Helsinki
          </Typography>
        </Stack>
      </Stack>
    </Card>
  )
}

export default InfoCard
