import React from 'react'
import { Outlet } from 'react-router-dom'
import ContainerPanel from '../components/ContainerPanel'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import SideNav from '../layouts/SideNav'
import Card from '../components/Card'

const ChatBase = () => {
  return (
    <ContainerPanel className={'w-full px-0 sm:px-2 md:px-4 lg:px-6'}>
      <Header />
      <Card className={'bg-transparent bordered flex h-full'}>
        <SideNav />
        <Outlet />
      </Card>
      {/* <div className="w-full rounded-lg border border-gray-200 bg-white shadow"></div> */}
      <Footer />
    </ContainerPanel>
  )
}

export default ChatBase
