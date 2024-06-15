import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { styled } from '@mui/system'
import { Box } from '@mui/material'

const ZoomCardMedia = styled(CardMedia)({
  transition: 'transform 1s ease',
})

export default function MediaCard({ book, addToReadingList, i }) {
  return (
    <Card
      sx={{
        maxWidth: 385,
        borderRadius: 4,
        overflow: 'hidden',
        '&:hover .zoom-media': {
          transform: 'scale(1.1)',
        },
      }}
    >
      <Box sx={{ overflow: 'hidden' }}>
        <ZoomCardMedia
          sx={{ height: 240 }}
          image={`./${book.coverPhotoURL}`}
          title={book.title}
          className="zoom-media"
        />
      </Box>

      <CardContent sx={{ py: 0 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: 'bold', pt: 1.5 }}
          color="primary.steel"
        >
          {book.title}
        </Typography>
        <Typography
          variant="body2"
          color="secondary.teal"
          sx={{ fontSize: '12px', fontWeight: 'bold' }}
        >
          by {book.author}
        </Typography>
      </CardContent>
      <CardActions sx={{ py: 1.5 }}>
        <Button
          endIcon={<ArrowOutwardIcon />}
          color="turquoise"
          size="small"
          onClick={() => addToReadingList(book, i)}
        >
          Add to reading list
        </Button>
      </CardActions>
    </Card>
  )
}
