import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function MediaCard({ book, addToReadingList, i }) {
  return (
    <Card sx={{ maxWidth: 385, borderRadius: 4 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={`./${book.coverPhotoURL}`}
        title={book.title}
      />
      <CardContent sx={{ py: 0 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontSize: '15px', fontWeight: 'bold', pt: 1.5 }}
        >
          {book.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: '12px', fontWeight: 'bold' }}
        >
          {book.author}
        </Typography>
      </CardContent>
      <CardActions sx={{ py: 0.5 }}>
        <Button size="small" onClick={() => addToReadingList(book, i)}>
          Add to reading list
        </Button>
      </CardActions>
    </Card>
  )
}
