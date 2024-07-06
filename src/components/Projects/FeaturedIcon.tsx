import { keyframes } from '@emotion/react'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import Box from '@mui/joy/Box'
import Tooltip from '@mui/joy/Tooltip'

import { colors } from '~/utils/color'

const FeaturedIcon = (): JSX.Element => {
  const gradient = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  `

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 5,
        right: 5,
        margin: 1,
      }}
    >
      <Tooltip arrow enterTouchDelay={0} placement="left" title="Featured" variant="plain">
        <StarOutlineIcon
          sx={{
            animation: `${gradient} 3s linear infinite`,
            background: `linear-gradient(45deg, ${colors.yellow}, ${colors.orange}, ${colors.amber})`,
            backgroundSize: '200% 200%',
            borderRadius: '50%',
            color: 'black',
            fontSize: '30px',
            padding: '3px',
          }}
        />
      </Tooltip>
    </Box>
  )
}

export default FeaturedIcon
