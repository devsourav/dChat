import React from 'react'
import AutoComplete from '../components/AutoComplete'
import Tabs from '../components/Tabs'

const SideNav = () => {
  return (
    <div className="flex h-full w-full flex-col bg-skin-fill sm:w-[20%] md:w-[25%] lg:w-[30%]">
      <AutoComplete className={'bg-skin-secondary p-4'} />
      <Tabs />
    </div>
  )
}

export default SideNav
