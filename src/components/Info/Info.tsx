import Card from '@mui/joy/Card'
import Divider from '@mui/joy/Divider'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'

import { aboutItems, name, onlineItems } from '~/content/info'
import InfoItems from './InfoItems'
import ProfilePicture from './ProfilePicture'

const Info = () => {
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
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }}>
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

export default Info
