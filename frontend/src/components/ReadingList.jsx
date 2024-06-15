import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const ReadingList = ({ readingList, removeFromReadingList }) => {
  return (
    <div>
      <Typography color="primary" variant="h4" sx={{ fontWeight: 'bold' }}>
        Reading List
      </Typography>
      {readingList.length > 0 ? (
        readingList.map((book, i) => (
          <Card key={i} sx={{ minWidth: 275, marginBottom: 2 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: '15px', fontWeight: 'bold' }}
                component="div"
                color="secondary.dark2"
              >
                {book.title}
              </Typography>
              <Typography
                sx={{ fontSize: '12px', fontWeight: 'bold' }}
                color="secondary.teal"
              >
                {book.author}
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                color="red"
                size="small"
                onClick={() => removeFromReadingList(i)}
              >
                Remove
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography color="primary.turquoise">
          No books in the reading list
        </Typography>
      )}
    </div>
  )
}

export default ReadingList
