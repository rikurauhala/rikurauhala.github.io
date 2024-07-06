import Button from '@mui/joy/Button'

interface ViewSourceButtonProps {
  repository: string
}

const ViewSourceButton = ({ repository }: ViewSourceButtonProps) => {
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
