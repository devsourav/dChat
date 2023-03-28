import React from 'react'
import { useRouteError } from 'react-router-dom'
import Brand from '../components/Brand'
import Container from '../components/Container'

const Error = () => {
  const error = useRouteError()
  console.error(error)
  return (
    <Container>
      <Brand />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p> {error ? <i>{error.statusText || error.message}</i> : <></>}</p>
    </Container>
  )
}

export default Error
