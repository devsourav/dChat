import React, { useRef, useContext, memo } from 'react'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendIcon from '@mui/icons-material/Send'
import Input from '../../components/Input'
import { AppContext } from '../../providers/storeProvider'
import { sendMessage } from '../../services/gunServices/messageService'

const ChatFooter = () => {
  const { states } = useContext(AppContext)
  const message = useRef('')

  const sendAttachment = () => {}

  const sendUserMessage = () => {
    if (message.current.value !== '') {
      sendMessage(states.chatId, message.current.value, '#key')
      console.log('Message: ', message.current.value)
      message.current.value = ''
    }
  }

  return (
    <Toolbar
      variant="dense"
      className="bg-blur absolute bottom-0 w-full shadow-inner"
    >
      <IconButton size="large" onClick={sendAttachment} color="warning">
        <AttachFileIcon />
      </IconButton>
      <Input
        type="text"
        id="message"
        name="message"
        placeholder="Type a message"
        className="w-full bg-skin-base"
        ref={message}
      />
      <IconButton size="large" onClick={sendUserMessage} color="secondary">
        <SendIcon />
      </IconButton>
    </Toolbar>
  )
}

export default memo(ChatFooter)
