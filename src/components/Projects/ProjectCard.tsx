import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Divider from '@mui/joy/Divider'
import Grid from '@mui/joy/Grid'
import Typography from '@mui/joy/Typography'
import ImageIcon from '@mui/icons-material/Image'

import { Project } from '../../types'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  return (
    <Grid xs={12} sm={6} sx={{ display: 'flex' }}>
      <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <Box>
              <ImageIcon sx={{ fontSize: 30 }} />
            </Box>
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography level="title-md">{project.name}</Typography>
          <Typography level="body-sm">{project.description}</Typography>
        </CardContent>
        <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
              <Button
                component="a"
                color="neutral"
                variant="outlined"
                href={`https://github.com/${project.repository}`}
                sx={{ flex: 1 }}
              >
                View source
              </Button>
              <Button color="primary" variant="solid" sx={{ flex: 1 }}>
                Read more
              </Button>
            </Box>
          </CardContent>
        </CardOverflow>
      </Card>
    </Grid>
  )
}

export default ProjectCard
