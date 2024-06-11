import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'

import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Mulish, Arial',
    button: {
      textTransform: 'none'
    }
  },
})

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

// client
//   .query({
//     query: gql`
//       query Books {
//         books {
//           author
//           coverPhotoURL
//           readingLevel
//           title
//         }
//       }
//     `,
//   })
//   .then(result => console.log(result))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}> 
      <App />
    </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
