import React, { memo } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

const Brand = ({ className, ...props }) => {
  return (
    <div className={clsx('flex justify-center pb-10', className)} {...props}>
      <div className="w-[40%] sm:w-[30%] md:w-[25%] lg:w-[15%]">
        <Link to={'/'}>
          <img src={Logo} alt="DChat" />
        </Link>
      </div>
    </div>
  )
}

export default memo(Brand)
