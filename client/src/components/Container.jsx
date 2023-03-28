import React from 'react'
import clsx from 'clsx'

const Container = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        'flex h-full w-full flex-col pt-[12%] text-center text-white',
        className,
      )}
      {...props}
    />
  )
}

export default Container
