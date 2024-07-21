import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Divider from '@mui/joy/Divider'
import Grid from '@mui/joy/Grid'
import Stack from '@mui/joy/Stack'
import Typography from '@mui/joy/Typography'
import { animated, SpringValue } from '@react-spring/web'

import { Project } from '~/types'
import FeaturedIcon from './FeaturedIcon'
import ProjectImage from './ProjectImage'
import ReadMoreButton from './ReadMoreButton'
import TechnologyIcon from './TechnologyIcon'
import ViewSourceButton from './ViewSourceButton'

interface ProjectCardProps {
  index: number
  project: Project
  style: {
    opacity: SpringValue<number>
    transform: SpringValue<string>
  }
}

const ProjectCard = ({ index, project, style }: ProjectCardProps): JSX.Element => {
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
            <ProjectImage index={index} project={project} />
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
          <Typography level="body-sm" sx={{ flexGrow: 1 }}>
            {project.description}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Stack alignItems="center" direction="row" spacing={1}>
            {project.technologies.map((technology) => (
              <TechnologyIcon technology={technology} />
            ))}
          </Stack>
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
