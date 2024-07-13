import SearchIcon from '@mui/icons-material/Search'
import Card from '@mui/joy/Card'
import FormControl from '@mui/joy/FormControl'
import Grid from '@mui/joy/Grid'
import Input from '@mui/joy/Input'
import Stack from '@mui/joy/Stack'
import Switch from '@mui/joy/Switch'
import { useTrail } from '@react-spring/web'
import { useState } from 'react'

import { projects } from '~/content/projects'
import ProjectCard from './ProjectCard'

const Projects = (): JSX.Element => {
  const [showAll, setShowAll] = useState(false)

  const filteredProjects = showAll ? projects : projects.filter((project) => project.featured)

  const trail = useTrail(filteredProjects.length, {
    from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    delay: 200,
    config: { mass: 1, tension: 120, friction: 14 },
  })

  return (
    <>
      <Stack direction="row" gap={2}>
        <Input fullWidth placeholder="Search" startDecorator={<SearchIcon />} size="lg" />
        <Card>
          <FormControl>
            <Switch
              checked={showAll}
              endDecorator="Show&nbsp;all"
              onChange={() => setShowAll(!showAll)}
            />
          </FormControl>
        </Card>
      </Stack>
      <Grid container spacing={2}>
        {trail.map((style, index) => (
          <ProjectCard
            key={filteredProjects[index].key}
            project={filteredProjects[index]}
            style={style}
          />
        ))}
      </Grid>
    </>
  )
}

export default Projects
