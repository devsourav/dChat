import React, { memo } from 'react'
import List from '@mui/material/List'
import ChatCard from './ChatCard'
import { DataList } from '../../dummy/dummy'

const ChatList = ({ type }) => {
  const chats = DataList.slice()
  console.log(type)

  return (
    <List sx={{ width: '100%' }} className="scroll-content scroll-list">
      {chats && chats.length ? (
        chats.map((chat) => <ChatCard key={chat.id} chat={chat} />)
      ) : (
        <div>No user found!</div>
      )}
    </List>
  )
}

export default memo(ChatList)
