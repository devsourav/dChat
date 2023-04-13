import React, { useRef, useContext, useState } from 'react'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendIcon from '@mui/icons-material/Send'
import Input from './Input'
import { AppContext } from '../providers/storeProvider'

const TextBar = () => {
  const [messageId, setMessageId] = useState(0)
  const { actions } = useContext(AppContext)
  const message = useRef('')

  const sendAttachment = () => {}

  const sendMessage = () => {
    if (message.current.value !== '') {
      actions.addChatMessage({
        msg: message.current.value,
        id: messageId,
      })
      setMessageId(messageId + 1)
      message.current.value = ''
    }
    console.log('Message: ', message.current.value, messageId)
  }

  return (
    <Toolbar variant="dense">
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
      <IconButton size="large" onClick={sendMessage} color="secondary">
        <SendIcon />
      </IconButton>
    </Toolbar>
  )
}

export default TextBar
