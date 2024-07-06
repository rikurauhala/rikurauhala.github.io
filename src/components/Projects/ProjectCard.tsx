import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Divider from '@mui/joy/Divider'
import Grid from '@mui/joy/Grid'
import Typography from '@mui/joy/Typography'
import { animated, SpringValue } from '@react-spring/web'

import { Project } from '~/types'
import FeaturedIcon from './FeaturedIcon'
import ProjectImage from './ProjectImage'
import ReadMoreButton from './ReadMoreButton'
import ViewSourceButton from './ViewSourceButton'

interface ProjectCardProps {
  project: Project
  style: {
    opacity: SpringValue<number>
    transform: SpringValue<string>
  }
}

const ProjectCard = ({ project, style }: ProjectCardProps): JSX.Element => {
  const AnimatedCard = animated(Card)

  return (
    <Grid xs={12} sm={6} sx={{ display: 'flex' }}>
      <AnimatedCard
        variant="outlined"
        sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
        style={style}
      >
        <CardOverflow>
          <AspectRatio ratio="2">
            {project.featured && <FeaturedIcon />}
            <ProjectImage project={project} />
          </AspectRatio>
        </CardOverflow>
        <CardContent sx={{ flexGrow: 1 }}>
          <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'space-between' }}>
            <Typography component="h3" level="title-md">
              {project.name}
            </Typography>
            <Typography color="neutral" level="body-sm">
              {project.duration}
            </Typography>
          </Box>
          <Typography level="body-sm">{project.description}</Typography>
        </CardContent>
        <CardOverflow variant="soft">
          <Divider inset="context" />
          <CardContent orientation="horizontal" sx={{ display: 'flex', gap: 1, width: '100%' }}>
            <ViewSourceButton repository={project.repository} />
            <ReadMoreButton />
          </CardContent>
        </CardOverflow>
      </AnimatedCard>
    </Grid>
  )
}

export default ProjectCard
