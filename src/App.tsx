import Container from '@mui/joy/Container'
import CssBaseline from '@mui/joy/CssBaseline'
import Stack from '@mui/joy/Stack'
import { CssVarsProvider } from '@mui/joy/styles'

import InfoCard from './components/InfoCard'
import Projects from './components/Projects'

const App = (): JSX.Element => {
  return (
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
      <Container maxWidth="md">
        <Stack marginBottom={2} marginTop={2}>
          <InfoCard />
          <Projects />
        </Stack>
      </Container>
    </CssVarsProvider>
  )
}

export default App
