import Card from '@mui/joy/Card'
import Typography from '@mui/joy/Typography'

const About = (): JSX.Element => {
  return (
    <Card>
      <Typography component="h2" level="title-lg">
        About
      </Typography>
      <Typography component="p" level="body-md">
        Hi there! I am a full stack software developer with two years of professional experience in
        the IT field, one of which writing code. I am currently working as a software developer
        while obtaining my master's degree in computer science.
      </Typography>
      <Typography component="p" level="body-md">
        I enjoy working on various long-term projects in collaboration with other people. My
        strongest skills include problem solving and teamwork. As a software engineer, I embrace
        continuous learning. I am willing to learn new technologies and master new tools to grow as
        a professional.
      </Typography>
      <Typography component="p" level="body-md">
        My professional and academic interests include software engineering, cyber security,
        cryptography and human-computer interaction. It is essential to build software that is both
        secure and user-friendly.
      </Typography>
    </Card>
  )
}

export default About
