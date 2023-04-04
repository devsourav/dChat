import React from 'react'
import AutoComplete from '../components/AutoComplete'
import Tabs from '../components/Tabs'

const SideNav = () => {
  return (
    <div className="flex h-full w-1/3 flex-col bg-slate-500">
      <AutoComplete className={'p-4'} />
      <Tabs />
    </div>
  )
}

export default SideNav
