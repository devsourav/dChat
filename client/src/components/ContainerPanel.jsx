import React from 'react'
import clsx from 'clsx'

const ContainerPanel = ({ className, ...props }) => {
  return (
    <div
      className={clsx('relative flex h-full flex-col', className)}
      {...props}
    />
  )
}

export default ContainerPanel
