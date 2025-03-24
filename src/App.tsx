import Container from '@mui/joy/Container'
import CssBaseline from '@mui/joy/CssBaseline'
import Stack from '@mui/joy/Stack'
import { CssVarsProvider } from '@mui/joy/styles'

import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Info from './components/Info'
import Projects from './components/Projects'

const App = () => {
  return (
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
      <Container maxWidth="md">
        <Stack gap={2} marginBottom={2} marginTop={2}>
          <Info />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </Stack>
      </Container>
    </CssVarsProvider>
  )
}

export default App
