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
            <Box
              sx={{
                alignItems: 'center',
                background: 'linear-gradient(45deg, #FFC371 0%, #FF5F6D 100%)',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <ImageIcon sx={{ color: 'white', fontSize: 30 }} />
            </Box>
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography level="title-md">{project.name}</Typography>
            <Typography color="neutral" level="body-sm">
              {project.duration}
            </Typography>
          </Box>
          <Typography level="body-sm">{project.description}</Typography>
        </CardContent>
        <CardOverflow variant="soft">
          <Divider inset="context" />
          <CardContent orientation="horizontal">
            <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
              <Button
                color="neutral"
                component="a"
                href={`https://github.com/${project.repository}`}
                sx={{ flex: 1 }}
                target="_blank"
                variant="outlined"
              >
                View source
              </Button>
              <Button color="primary" sx={{ flex: 1 }} variant="solid">
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
