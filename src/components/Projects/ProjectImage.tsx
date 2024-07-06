import ImageIcon from '@mui/icons-material/Image'
import Box from '@mui/joy/Box'

import { Project } from '~/types'

interface ProjectImageProps {
  project: Project
}

const ProjectImage = ({ project }: ProjectImageProps): JSX.Element => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        background: project.background,
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
