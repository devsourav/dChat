import React, { memo, useContext, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import { AppContext } from '../../providers/storeProvider'

const ChatCard = ({ chat }) => {
  const { states, actions } = useContext(AppContext)
  const navigate = useNavigate()

  const selectedChatId = () => {
    actions.activeChatId(chat.chatId)
    navigate(`${chat.chatId}`)
  }

  return (
    <ListItemButton
      key={chat.id}
      selected={states.chatId === chat.chatId}
      onClick={selectedChatId}
    >
      <ListItemAvatar>
        <Avatar alt="Chat Avatar" src={chat.avatar}>
          {chat.avatar && chat.avatar.length ? '' : <PersonRoundedIcon />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        className="text-skin-primary"
        primary={chat.name}
        secondary={
          <Fragment>
            <span className="flex justify-between text-skin-primary opacity-60">
              <span>{chat.msg}</span>
              <span>{chat.dateTime}</span>
            </span>
          </Fragment>
        }
      />
    </ListItemButton>
  )
}

export default memo(ChatCard)
