import Box from '@mui/joy/Box'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'

import { InfoItem } from '~/types'

interface InfoItemsProps {
  items: InfoItem[]
}

const InfoItems = ({ items }: InfoItemsProps) => {
  return (
    <Box>
      {items.map(({ key, icon, title, value }) => (
        <Stack key={key} alignItems="center" direction="row" mt={1} spacing={1.5}>
          {icon}
          <Stack alignItems="start" direction="column">
            <Typography level="body-xs">{title}</Typography>
            <Typography level="body-md">{value}</Typography>
          </Stack>
        </Stack>
      ))}
    </Box>
  )
}

export default InfoItems
