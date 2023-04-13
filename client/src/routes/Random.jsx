import React from 'react'
import { Outlet } from 'react-router-dom'
import ContainerPanel from '../components/ContainerPanel'
import Brand from '../components/Brand'
import Footer from '../layouts/Footer'

const Random = () => {
  return (
    <ContainerPanel
      className={
        'w-full pt-[40%] text-center text-white sm:pt-[30%] md:pt-[20%] lg:pt-[12%]'
      }
    >
      <Brand />
      <Outlet />
      <div className="fixed bottom-0 w-full px-0 sm:px-2 md:px-4 lg:px-6">
        <Footer />
      </div>
    </ContainerPanel>
  )
}

export default Random
