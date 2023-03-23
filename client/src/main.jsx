import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing'
import Auth from './routes/Auth'
import ChatBase from './routes/ChatBase'
import Error from './pages/Error'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Chat from './pages/Chat'
import './styles/index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: '/auth',
    element: <Auth />,
    errorElement: <Error />,
    children: [
      {
        path: 'sign-in',
        element: <Signin />,
      },
      {
        path: 'sign-up',
        element: <Signup />,
      },
    ],
  },
  {
    path: '/Chats',
    element: <ChatBase />,
    errorElement: <Error />,
    children: [
      {
        path: ':userId',
        element: <Chat />,
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
