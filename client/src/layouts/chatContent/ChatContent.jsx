import React, { memo } from 'react'
import Box from '@mui/material/Box'
import ChatHeader from './ChatHeader'
import ChatFooter from './ChatFooter'
import ChatMessages from './ChatMessages'

const ChatContent = () => {
  return (
    <Box>
      {/* <AppBar position="static"> */}
      <ChatHeader />
      {/* </AppBar> */}
      <ChatMessages />
      {/* <div className="bg-blur absolute bottom-0 w-full shadow-inner"> */}
      <ChatFooter />
      {/* </div> */}
    </Box>
  )
}

export default memo(ChatContent)
