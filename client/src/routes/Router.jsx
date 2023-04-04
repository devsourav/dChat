import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from '../pages/Error'
import Random from './Random'
import ChatBase from './ChatBase'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Random />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        async lazy() {
          let { Landing } = await import('../pages/Landing')
          return { Component: Landing }
        },
      },
      {
        path: '/sign-in',
        async lazy() {
          let { Signin } = await import('../pages/Signin')
          return { Component: Signin }
        },
      },
      {
        path: 'sign-up',
        async lazy() {
          let { Signup } = await import('../pages/Signup')
          return { Component: Signup }
        },
      },
    ],
  },
  {
    path: '/chats',
    element: <ChatBase />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        async lazy() {
          let { Chat } = await import('../pages/Chat')
          return { Component: Chat }
        },
      },
    ],
  },
  {
    path: '*',
    element: <Error />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
