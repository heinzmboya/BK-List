import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

export default function BookSearch({ books, onSearch }) {
  const recentBooks = books.slice(-8).reverse()

  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={recentBooks}
      getOptionLabel={option => option.title}
      onInputChange={(event, value) => onSearch(value)}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{
            '& > img': { mr: 2, flexShrink: 0, borderRadius: 2, width: 60 },
            fontSize: '13px',
            fontWeight: 'bold',
          }}
          {...props}
          key={`${option.title}-${option.author}`}
        >
          <img
            loading="lazy"
            width="40"
            src={`./${option.coverPhotoURL}`}
            alt=""
          />
          {option.title} - {option.author}
        </Box>
      )}
      renderInput={params => <TextField {...params} label="Search by title" />}
    />
  )
}
