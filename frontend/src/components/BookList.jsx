import BookItem from './BookItem'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'

const BookList = ({ books, addToReadingList }) => {
  return (
    <div>
      <Typography color="primary" variant="h4" sx={{ fontWeight: 'bold' }}>
        Book List
      </Typography>
      <Grid container spacing={5}>
        {books.map((book, index) => (
          <Grid xs={12} sm={6} md={4} key={index + book.title}>
            <BookItem
              book={book}
              index={index}
              addToReadingList={addToReadingList}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default BookList
