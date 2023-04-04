import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../components/Container'
import Brand from '../components/Brand'

const Random = () => {
  return (
    <Container className={'pt-[12%] text-center text-white'}>
      <Brand />
      <Outlet />
    </Container>
  )
}

export default Random
