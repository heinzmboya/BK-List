import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function MediaCard({ book, addToReadingList, i }) {
  return (
    <Card sx={{ maxWidth: 385 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={`./${book.coverPhotoURL}`}
        title={book.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addToReadingList(book, i)}>
          Add to reading list More
        </Button>
      </CardActions>
    </Card>
  )
}
