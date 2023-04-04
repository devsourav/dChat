import React from 'react'
import clsx from 'clsx'

const Container = ({ className, ...props }) => {
  return (
    <div
      className={clsx('flex h-full w-full flex-col', className)}
      {...props}
    />
  )
}

export default Container
