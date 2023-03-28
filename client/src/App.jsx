import React from 'react'
import { Provider } from './store/storeHandler'
import { Router } from './routes/Router'

function App() {
  return (
    <Provider>
      <Router />
    </Provider>
  )
}

export default App
