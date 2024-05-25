import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import NewTheme from './styles/theme'

import { ChakraProvider } from '@chakra-ui/react'
import './styles/fonts.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={NewTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
