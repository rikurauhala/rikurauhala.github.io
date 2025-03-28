import StarOutlineIcon from '@mui/icons-material/StarOutline'
import Box from '@mui/joy/Box'
import Chip from '@mui/joy/Chip'

import { colors } from '~/utils/color'

const FeaturedIcon = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 1,
      }}
    >
      <Chip endDecorator={<StarOutlineIcon />} sx={{ color: colors.amber }}>
        Featured
      </Chip>
    </Box>
  )
}

export default FeaturedIcon
