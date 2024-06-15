import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#335C6E',
      turquoise: '#5ACCCC',
      steel: '#335C6E',
      white: '#FFFFFF',
      yellow: '#5ABD33',
    },
     secondary: {
      main: '#CFFAFA',
      light: '#CFFAFA',
      red: '#F76434',
      teal: '#4AA088',
      yellow: '#FAAD00',
      dark1: '#53C2C2',
      pastel: '#FFE6DC',
      dark2: '#28B8B8',
    },
    turquoise: {
      main: '#5ACCCC',
    },
    white: {
      main: '#FFFFFF',
    },
    steel: {
      main: '#335C6E',
    },
    red: {
      main: '#F76434',
    },
  },
  typography: {
    fontFamily: 'Mulish, Arial',
    button: {
      textTransform: 'none',
    },
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
