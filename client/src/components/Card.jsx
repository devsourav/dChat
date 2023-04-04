import React from 'react'
import clsx from 'clsx'

const Card = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        'w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800',
        className,
      )}
      {...props}
    />
  )
}

export default Card
