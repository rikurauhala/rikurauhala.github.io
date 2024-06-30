import Box from '@mui/joy/Box'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'

interface InfoItem {
  key: string
  title: string
  icon: JSX.Element
  value: string
}

interface InfoItemsProps {
  header: string
  items: InfoItem[]
}

const InfoItems = ({ header, items }: InfoItemsProps): JSX.Element => {
  return (
    <Box>
      <Typography component="h1" level="title-md" mb={1}>
        {header}
      </Typography>
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
