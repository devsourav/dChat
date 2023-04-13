import React from 'react'
import IconTabPanel from '../components/IconTabPanel'
import Input from '../components/Input'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

const SideNav = () => {
  return (
    <div className="flex h-full w-full flex-col bg-skin-fill opacity-90 sm:w-[20%] md:w-[25%] lg:w-[30%]">
      <div className="bg-skin-secondary px-4 pt-4 opacity-80">
        <Input
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          className="w-full"
          component={SearchRoundedIcon}
        />
      </div>
      <IconTabPanel />
    </div>
  )
}

export default SideNav
