import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const ReadingList = ({ readingList, removeFromReadingList }) => {
  return (
    <div>
      <h2>Reading List</h2>
      {readingList.length > 0 ? (
        readingList.map((book, i) => (
          <Card key={i} sx={{ minWidth: 275, marginBottom: 2 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: '15px', fontWeight: 'bold' }}
                component="div"
              >
                {book.title}
              </Typography>
              <Typography
                sx={{ fontSize: '12px', fontWeight: 'bold' }}
                color="text.secondary"
              >
                {book.author}
              </Typography>
            </CardContent>

            <CardActions>
              <Button size="small" onClick={() => removeFromReadingList(i)}>
                Remove
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <p>No books in the reading list</p>
      )}
    </div>
  )
}

export default ReadingList
