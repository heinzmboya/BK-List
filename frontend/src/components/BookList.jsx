import React from 'react'
import BookItem from './BookItem'
import Grid from '@mui/material/Unstable_Grid2'

const BookList = ({ books, addToReadingList }) => {
  return (
    <div>
      <h2>Book List</h2>
      <Grid container spacing={3}>
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
