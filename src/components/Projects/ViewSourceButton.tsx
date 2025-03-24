import Button from '@mui/joy/Button'

const ViewSourceButton = ({ repository }: { repository: string }) => {
  return (
    <Button
      color="neutral"
      component="a"
      href={`https://github.com/${repository}`}
      sx={{ flex: 1 }}
      rel="noopener noreferrer"
      target="_blank"
      variant="outlined"
    >
      View source
    </Button>
  )
}

export default ViewSourceButton
