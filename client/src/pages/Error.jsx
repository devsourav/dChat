import React from 'react'
import { useRouteError } from 'react-router-dom'
import Brand from '../components/Brand'
import ContainerWrap from '../components/ContainerWrap'

const Error = () => {
  const error = useRouteError()
  console.error(error)
  return (
    <ContainerWrap
      className={
        'w-full pt-[40%] text-center text-white sm:pt-[30%] md:pt-[20%] lg:pt-[12%]'
      }
    >
      <Brand />
      <h1 className="text-xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p> {error ? <i>{error.statusText || error.message}</i> : <></>}</p>
    </ContainerWrap>
  )
}

export default Error
