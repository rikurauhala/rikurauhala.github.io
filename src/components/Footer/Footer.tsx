import Card from '@mui/joy/Card'
import Stack from '@mui/joy/Stack'

import HyperLink from '~/components/HyperLink'

const Footer = (): JSX.Element => {
  const authorUrl = 'https://github.com/rikurauhala'
  const sourceUrl = `${authorUrl}/rauhala.io`
  const licenseUrl = `${sourceUrl}/blob/main/LICENSE.md`

  const items = [
    { key: 'author', text: 'Author', url: authorUrl },
    { key: 'source', text: 'Source code', url: sourceUrl },
    { key: 'license', text: 'License', url: licenseUrl },
  ]

  return (
    <Card sx={{ marginTop: 2, padding: 2 }} variant="soft">
      <Stack direction="row" justifyContent="space-evenly" spacing={1} textAlign="center">
        {items.map(({ key, text, url }) => (
          <HyperLink key={key} href={url} text={text} />
        ))}
      </Stack>
    </Card>
  )
}

export default Footer
