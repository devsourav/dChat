import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import SideNav from '../layouts/SideNav'

const ChatBase = () => {
  return (
    <>
      <Header />
      <SideNav />
      <Outlet />
      <Footer />
    </>
  )
}

export default ChatBase
