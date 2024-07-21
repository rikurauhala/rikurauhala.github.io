import Card from '@mui/joy/Card'
import Stack from '@mui/joy/Stack'

import HyperLink from '~/components/HyperLink'
import { authorUrl, licenseUrl, sourceUrl } from '~/content/footer'

const Footer = (): JSX.Element => {
  const items = [
    { key: 'author', text: 'Author', url: authorUrl },
    { key: 'source', text: 'Source code', url: sourceUrl },
    { key: 'license', text: 'License', url: licenseUrl },
  ]

  return (
    <Card sx={{ padding: 2 }} variant="soft">
      <Stack
        alignItems="center"
        direction={{ xs: 'column', sm: 'row' }}
        justifyContent="space-evenly"
        spacing={1}
        textAlign="center"
      >
        {items.map(({ key, text, url }) => (
          <HyperLink key={key} href={url} text={text} />
        ))}
      </Stack>
    </Card>
  )
}

export default Footer
