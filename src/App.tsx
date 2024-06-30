import Container from '@mui/joy/Container'
import CssBaseline from '@mui/joy/CssBaseline'
import Stack from '@mui/joy/Stack'
import { CssVarsProvider } from '@mui/joy/styles'

import InfoCard from './components/InfoCard'

const App = (): JSX.Element => {
  return (
    <CssVarsProvider defaultMode="dark">
      <CssBaseline />
      <Container maxWidth="md">
        <Stack spacing={2} marginBottom={2} marginTop={2}>
          <InfoCard />
        </Stack>
      </Container>
    </CssVarsProvider>
  )
}

export default App
