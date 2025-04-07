import Button from '@mui/joy/Button'

const ReadMoreButton = ({ url }: { url: string | undefined }) => {
  return (
    <Button
      color="primary"
      component="a"
      disabled={!url}
      href={url}
      sx={{ flex: 1 }}
      rel="noopener noreferrer"
      target="_blank"
      variant="solid"
    >
      Read more
    </Button>
  )
}

export default ReadMoreButton
