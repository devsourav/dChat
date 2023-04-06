import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ThreeStars from './layouts/ThreeStars'
import './styles/index.scss'
import './styles/tailwind.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ThreeStars />
  </React.StrictMode>,
)
