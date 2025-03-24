import ImageIcon from '@mui/icons-material/Image'
import Box from '@mui/joy/Box'

import { Project } from '~/types'
import { getLinearGradient } from '~/utils/color'

interface ProjectImageProps {
  index: number
  project: Project
}

const ProjectImage = ({ index, project }: ProjectImageProps) => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        background: getLinearGradient(index),
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {project.image ? (
        <img
          alt={project.name}
          src={`img/projects/${project.image}`}
          style={{ width: '100%', height: 'auto' }}
        />
      ) : (
        <ImageIcon sx={{ color: 'white', fontSize: 30 }} />
      )}
    </Box>
  )
}

export default ProjectImage
