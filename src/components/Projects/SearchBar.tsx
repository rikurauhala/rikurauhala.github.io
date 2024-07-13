import ClearIcon from '@mui/icons-material/Clear'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/joy/IconButton'
import Input from '@mui/joy/Input'
import { useState } from 'react'

const SearchBar = (): JSX.Element => {
  const [search, setSearch] = useState('')

  const handleClear = () => {
    setSearch('')
  }

  return (
    <Input
      endDecorator={
        search && (
          <IconButton onClick={handleClear} sx={{ marginRight: -1 }}>
            <ClearIcon />
          </IconButton>
        )
      }
      fullWidth
      onChange={(event) => setSearch(event.target.value)}
      placeholder="Search"
      size="lg"
      startDecorator={<SearchIcon />}
      value={search}
    />
  )
}

export default SearchBar
