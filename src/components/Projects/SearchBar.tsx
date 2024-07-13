import SearchIcon from '@mui/icons-material/Search'
import Input from '@mui/joy/Input'

const SearchBar = (): JSX.Element => {
  return <Input fullWidth placeholder="Search" startDecorator={<SearchIcon />} size="lg" />
}

export default SearchBar
