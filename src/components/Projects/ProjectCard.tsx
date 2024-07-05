import { keyframes } from '@emotion/react'
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
import StarOutlineIcon from '@mui/icons-material/StarOutline'
import Tooltip from '@mui/joy/Tooltip'
import { animated, SpringValue } from '@react-spring/web'

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
                    top: 5,
                    right: 5,
                    margin: 1,
                  }}
                >
                  <Tooltip
                    arrow
                    enterTouchDelay={0}
                    placement="left"
                    title="Featured"
                    variant="plain"
                  >
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
