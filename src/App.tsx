import Container from '@mui/joy/Container'
import CssBaseline from '@mui/joy/CssBaseline'
import Stack from '@mui/joy/Stack'
import { CssVarsProvider } from '@mui/joy/styles'

import Footer from './components/Footer'
import Info from './components/Info'
import Projects from './components/Projects'

const App = (): JSX.Element => {
  return (
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
      <Container maxWidth="md">
        <Stack marginBottom={2} marginTop={2}>
          <Info />
          <Projects />
          <Footer />
        </Stack>
      </Container>
    </CssVarsProvider>
  )
}

export default App
