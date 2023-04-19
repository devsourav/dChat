import React, { memo } from 'react'
import clsx from 'clsx'

const Button = ({ className, ...props }) => {
  return (
    <button
      className={clsx('rounded-sm text-skin-fill hover:opacity-80', className)}
      {...props}
    />
  )
}

export default memo(Button)
