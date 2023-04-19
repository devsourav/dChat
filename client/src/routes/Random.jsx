import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { AppContext } from '../providers/storeProvider'
import ContainerWrap from '../components/ContainerWrap'
import Brand from '../components/Brand'
import Footer from '../layouts/Footer'

const Random = () => {
  const { states } = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (states && states.userName.length) {
      navigate('/sign-in')
    }
  }, [])

  return (
    <ContainerWrap
      className={
        'w-full pt-[40%] text-center text-white sm:pt-[30%] md:pt-[20%] lg:pt-[12%]'
      }
    >
      <Brand />
      <Outlet />
      <div className="fixed bottom-0 w-full px-0 sm:px-2 md:px-4 lg:px-6">
        <Footer />
      </div>
    </ContainerWrap>
  )
}

export default Random
