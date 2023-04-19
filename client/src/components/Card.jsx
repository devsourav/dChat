import React, { memo } from 'react'
import clsx from 'clsx'

const Card = ({ className, ...props }) => {
  return (
    <div
      className={clsx('w-full overflow-hidden rounded-sm shadow-lg', className)}
      {...props}
    />
  )
}

export default memo(Card)
