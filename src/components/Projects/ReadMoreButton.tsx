import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Tooltip from '@mui/joy/Tooltip'

const ReadMoreButton = (): JSX.Element => {
  return (
    <Tooltip arrow followCursor placement="top" title="Coming soon">
      <Box sx={{ flex: 1 }}>
        <Button color="primary" disabled fullWidth variant="solid">
          Read more
        </Button>
      </Box>
    </Tooltip>
  )
}

export default ReadMoreButton
