import Card from '@mui/joy/Card'
import FormControl from '@mui/joy/FormControl'
import Switch from '@mui/joy/Switch'

interface ShowAllButtonProps {
  showAll: boolean
  setShowAll: (showAll: boolean) => void
}

const ShowAllButton = ({ showAll, setShowAll }: ShowAllButtonProps): JSX.Element => {
  return (
    <Card>
      <FormControl>
        <Switch
          checked={showAll}
          endDecorator="Show&nbsp;all"
          onChange={() => setShowAll(!showAll)}
        />
      </FormControl>
    </Card>
  )
}

export default ShowAllButton
