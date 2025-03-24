import Card from '@mui/joy/Card'
import Typography from '@mui/joy/Typography'

const Section = ({ content, title }: { content: string; title: string }) => {
  return (
    <Card>
      <Typography component="h2" level="title-lg">
        {title}
      </Typography>
      {content.split('\n\n').map((line, index) => (
        <Typography key={index} component="p" level="body-md">
          {line}
        </Typography>
      ))}
    </Card>
  )
}

export default Section
