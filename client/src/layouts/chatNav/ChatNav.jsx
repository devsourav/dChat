import React, { memo } from 'react'
import ChatTabs from './ChatTabs'
import Input from '../../components/Input'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'

const ChatNav = () => {
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
      <ChatTabs />
    </div>
  )
}

export default memo(ChatNav)
