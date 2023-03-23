import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div id="authentication">
      <Outlet />
    </div>
  )
}

export default Auth
