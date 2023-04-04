import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../components/Container'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import SideNav from '../layouts/SideNav'
import Card from '../components/Card'

const ChatBase = () => {
  return (
    <Container className={'px-6'}>
      <Header />
      <Card className={'flex h-full'}>
        <SideNav />
        <Outlet />
      </Card>
      {/* <div className="w-full rounded-lg border border-gray-200 bg-white shadow"></div> */}
      <Footer />
    </Container>
  )
}

export default ChatBase
