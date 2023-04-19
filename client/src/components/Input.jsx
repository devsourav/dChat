import React, { forwardRef, memo } from 'react'
import Icon from '@mui/material/Icon'
import clsx from 'clsx'

const Input = forwardRef(({ className, errors, component, ...props }, ref) => {
  return (
    <div className={clsx(errors ? 'pb-4' : 'pb-0', 'relative flex w-full')}>
      {component ? (
        <div className="absolute self-center px-2">
          <Icon color="warning" component={component} />
        </div>
      ) : (
        <></>
      )}
      <input
        className={clsx(
          component ? 'ps-10' : '',
          'rounded-sm border border-none bg-skin-primary p-2 text-sm text-skin-fill outline-none focus:bg-skin-base',
          className,
        )}
        {...props}
        ref={ref}
      />
      {errors ? (
        errors[props.id] && (
          <span className="absolute bottom-0 left-0 text-xs text-skin-secondary">
            {props.placeholder} is required
          </span>
        )
      ) : (
        <></>
      )}
    </div>
  )
})

export default memo(Input)
