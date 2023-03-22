import { useState } from 'react'
import Content from './layout/Content'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <Content />
}

export default App
