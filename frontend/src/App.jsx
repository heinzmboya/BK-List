import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BookList from './components/BookList'
import Search from './components/Search'
import Grid from '@mui/material/Unstable_Grid2'
import ReadingList from './components/ReadingList'

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

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <Search books={books} onSearch={handleSearch} />
      </div>

      <Grid container spacing={2}>
        <Grid xs={8}>
          <BookList books={filteredBooks} addToReadingList={addToReadingList} />
        </Grid>
        <Grid xs={4}>
          <ReadingList
            readingList={readingList}
            removeFromReadingList={removeFromReadingList}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default App
