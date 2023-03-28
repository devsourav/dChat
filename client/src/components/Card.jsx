import React from 'react'
import clsx from 'clsx'

const Card = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8',
        className,
      )}
      {...props}
    />
  )
}

export default Card
