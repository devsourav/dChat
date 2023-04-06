import React from 'react'
import { Provider } from './providers/storeProvider'
import { Router } from './routes/Router'
import './styles/app.scss'

function App() {
  return (
    <div className="animate">
      <Provider>
        <Router />
      </Provider>
    </div>
  )
}

export default App
