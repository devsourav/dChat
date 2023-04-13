import React from 'react'
import ReactDOM from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import App from './App'
import ThreeStars from './layouts/ThreeStars'
import './styles/index.scss'
import './styles/tailwind.scss'

const appTheme = createTheme({
  palette: {
    primary: {
      main: '#ebe8d9',
    },
    secondary: {
      main: '#cb4635',
    },
    info: {
      main: '#ffffff',
    },
    warning: {
      main: '#1e1f23',
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
    <ThreeStars />
  </React.StrictMode>,
)
