import React from 'react'
import clsx from 'clsx'

const Card = ({ className, ...props }) => {
  return (
    <div
      className={clsx('w-full overflow-hidden rounded-sm shadow-xl', className)}
      {...props}
    />
  )
}

export default Card
