import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../components/Container'
import Brand from '../components/Brand'

const Random = () => {
  return (
    <Container
      className={
        'pt-[40%] text-center text-white sm:pt-[30%] md:pt-[20%] lg:pt-[12%]'
      }
    >
      <Brand />
      <Outlet />
    </Container>
  )
}

export default Random
