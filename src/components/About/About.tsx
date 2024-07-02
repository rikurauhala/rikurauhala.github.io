import Card from '@mui/joy/Card'
import Typography from '@mui/joy/Typography'
import { about } from '~/content/about'

const About = (): JSX.Element => {
  return (
    <Card>
      <Typography component="h2" level="title-lg">
        About
      </Typography>
      {about.split('\n\n').map((line, index) => (
        <Typography key={index} component="p" level="body-md">
          {line}
        </Typography>
      ))}
    </Card>
  )
}

export default About
