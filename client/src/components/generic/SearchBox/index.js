import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

const SearchBox = () => {
  return (
    <Box
      sx={{ backgroundColor: 'rgba(255,255,255, 0.8)' }}
    >
      <form>
        <Stack
            direction='row'
            spacing={2}
          >
          <TextField
            id='search-box'
            fullWidth
            className='text'
            onInput={(e) => {
              setSearchQuery(e.target.value);
            }}
            label='Search programs, teams or projects'
            variant='filled'
            placeholder='Example Program 2024'
          />
          <IconButton type='submit' aria-label='search'>
            <SearchIcon />
          </IconButton>
        </Stack>
      </form>
    </Box>
  )
}

export default SearchBox