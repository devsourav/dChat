import React from 'react'
import clsx from 'clsx'

const Brand = ({ className, ...props }) => {
  return (
    <h1 className={clsx('pb-10 text-3xl font-bold', className)} {...props}>
      DChat
    </h1>
  )
}

export default Brand
