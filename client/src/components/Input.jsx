import React, { forwardRef } from 'react'
import clsx from 'clsx'

const Input = forwardRef(({ className, errors, ...props }, ref) => {
  return (
    <div className="relative pb-4">
      <input
        className={clsx(
          'rounded-sm border bg-skin-primary p-2 text-sm text-skin-fill focus:ring-offset-black',
          className,
        )}
        {...props}
        ref={ref}
      />
      {errors ? (
        errors[props.id] && (
          <span className="absolute left-0 bottom-0 text-xs text-skin-secondary">
            {props.placeholder} is required
          </span>
        )
      ) : (
        <></>
      )}
    </div>
  )
})

export default Input
