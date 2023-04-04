import React from 'react'
import { Provider } from './providers/storeProvider'
import { Router } from './routes/Router'
import './styles/app.scss'

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  )
}

export default App
