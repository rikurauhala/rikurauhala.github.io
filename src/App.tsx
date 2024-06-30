import Container from '@mui/joy/Container'
import CssBaseline from '@mui/joy/CssBaseline'
import { CssVarsProvider } from '@mui/joy/styles'

const App = (): JSX.Element => {
  return (
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
      <Container maxWidth="md">
        <h1>Hello there!</h1>
      </Container>
    </CssVarsProvider>
  )
}

export default App
