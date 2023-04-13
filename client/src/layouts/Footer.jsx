import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex justify-between py-2 text-skin-primary opacity-50">
      <div>@copyright 2023</div>
      <div>
        <NavLink className="px-4" to={'/about'}>
          About
        </NavLink>
        <NavLink to={'/contacts'}>Contacts</NavLink>
      </div>
    </div>
  )
}

export default Footer
