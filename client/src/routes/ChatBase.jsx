import React, { useContext, useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../providers/storeProvider'
import { getUserStatus } from '../services/gunServices/userService'
import ContainerWrap from '../components/ContainerWrap'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ChatNav from '../layouts/chatNav/ChatNav'
import Card from '../components/Card'

const ChatBase = () => {
  const { actions } = useContext(AppContext)
  // const navigate = useNavigate()

  useLayoutEffect(() => {
    getUserStatus((value) => {
      console.log('getUserStatus', value)
    })
    actions && getUserStatus()
  }, [])

  return (
    <ContainerWrap className={'w-full px-0 sm:px-2 md:px-4 lg:px-6'}>
      <Header />
      <Card className={'bg-transparent bordered flex h-full'}>
        <ChatNav />
        <Outlet />
      </Card>
      <Footer />
    </ContainerWrap>
  )
}

export default ChatBase
