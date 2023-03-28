import React from 'react'
import { Outlet } from 'react-router-dom'
import Container from '../components/Container'
import Brand from '../components/Brand'

const Random = () => {
  return (
    <Container>
      <Brand />
      <Outlet />
    </Container>
  )
}

export default Random
