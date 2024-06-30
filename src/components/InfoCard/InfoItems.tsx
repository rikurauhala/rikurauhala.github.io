import Box from '@mui/joy/Box'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'

import { InfoItem } from '~/types'

interface InfoItemsProps {
  items: InfoItem[]
}

const InfoItems = ({ items }: InfoItemsProps): JSX.Element => {
  return (
    <Box>
      {items.map(({ key, title, icon, value }) => (
        <Stack key={key} alignItems="center" direction="row" mt={1} spacing={1.5}>
          {icon}
          <Stack alignItems="start" direction="column">
            <Typography color="neutral" level="title-sm">
              {title}
            </Typography>
            <Typography>{value}</Typography>
          </Stack>
        </Stack>
      ))}
    </Box>
  )
}

export default InfoItems
