import { useState, useEffect } from 'react'
import './App.css'
import BookList from './components/BookList'
import Search from './components/Search'
import Grid from '@mui/material/Unstable_Grid2'
import ReadingList from './components/ReadingList'
import { useMediaQuery } from '@mui/material'

function App() {
  const [readingList, setReadingList] = useState(() => {
    const savedList = sessionStorage.getItem('readingList')
    return savedList ? JSON.parse(savedList) : []
  })

  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    sessionStorage.setItem('readingList', JSON.stringify(readingList))
  }, [readingList])

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
             query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
          `,
        }),
      })
      const { data } = await response.json()
      setBooks(data.books)
      setFilteredBooks(data.books)
    }

    fetchBooks()
  }, [])

  const addToReadingList = (book, i) => {
    setReadingList(prevList => {
      if (!prevList.some((b, ind) => ind === i)) {
        return [...prevList, book]
      }
      return prevList
    })
  }

  const removeFromReadingList = i => {
    setReadingList(prevList => prevList.filter((book, ind) => ind !== i))
  }

  const handleSearch = query => {
    setFilteredBooks(
      books.filter(book =>
        book.title.toLowerCase().includes(query.toLowerCase()),
      ),
    )
  }

  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('sm'))

  return (
    <>
      <div className="search-container">
        <Search books={books} onSearch={handleSearch} />
      </div>

      <Grid container spacing={5}>
        <Grid xs={12} sm={9}>
          <BookList books={filteredBooks} addToReadingList={addToReadingList} />
        </Grid>

        {!isSmallScreen && (
          <Grid xs={12} sm={3}>
            <ReadingList
              readingList={readingList}
              removeFromReadingList={removeFromReadingList}
            />
          </Grid>
        )}
      </Grid>
    </>
  )
}

export default App
