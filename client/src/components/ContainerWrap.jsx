import React, { memo } from 'react'
import clsx from 'clsx'

const ContainerWrap = ({ className, ...props }) => {
  return (
    <div
      className={clsx('relative flex h-full flex-col', className)}
      {...props}
    />
  )
}

export default memo(ContainerWrap)
