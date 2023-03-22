import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Chat from './routes/Chat'
// import App from "./App";
import './styles/index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Chat />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
