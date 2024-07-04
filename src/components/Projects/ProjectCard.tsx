import AspectRatio from '@mui/joy/AspectRatio'
import Box from '@mui/joy/Box'
import Button from '@mui/joy/Button'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Chip from '@mui/joy/Chip'
import Divider from '@mui/joy/Divider'
import Grid from '@mui/joy/Grid'
import Typography from '@mui/joy/Typography'
import ImageIcon from '@mui/icons-material/Image'
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import { animated, SpringValue } from '@react-spring/web'
import { css, keyframes } from '@emotion/react'

import { Project } from '~/types'
import { colors } from '~/utils/color'

interface ProjectCardProps {
  project: Project
  style: {
    opacity: SpringValue<number>
    transform: SpringValue<string>
  }
}

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

const effect = css`
  background: linear-gradient(45deg, ${colors.yellow}, ${colors.orange}, ${colors.amber});
  background-size: 200% 200%;
  color: black;
  animation: ${gradient} 5s linear infinite;
`

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
            <Box sx={{ position: 'relative' }}>
              {project.featured && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    margin: 1,
                  }}
                >
                  <Chip
                    size="sm"
                    startDecorator={<StarOutlineIcon sx={{ color: 'black' }} />}
                    sx={effect}
                  >
                    Featured
                  </Chip>
                </Box>
              )}
            </Box>
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
                rel="noopener noreferrer"
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
      </AnimatedCard>
    </Grid>
  )
}

export default ProjectCard
