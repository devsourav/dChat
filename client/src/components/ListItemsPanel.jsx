import React, { useState, Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'

const ListItemsPanel = ({ users }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const navigate = useNavigate()

  const handleListItemClick = (index, user) => {
    setSelectedIndex(index)
    navigate(`${user}`)
  }

  return (
    <List sx={{ width: '100%' }} className="scroll-content scroll-list">
      {users && users.length ? (
        users.map((user, index) => (
          <ListItemButton
            key={user.id}
            selected={selectedIndex === index}
            onClick={() => handleListItemClick(index, user.id)}
          >
            <ListItemAvatar>
              <Avatar alt="User Avatar" src={user.avatar}>
                {user.avatar && user.avatar.length ? '' : <PersonRoundedIcon />}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              className="text-skin-primary"
              primary={user.name}
              secondary={
                <Fragment>
                  <span className="flex justify-between text-skin-primary opacity-60">
                    <span>{user.msg}</span>
                    <span>{user.dateTime}</span>
                  </span>
                </Fragment>
              }
            />
          </ListItemButton>
        ))
      ) : (
        <div>No user found!</div>
      )}
    </List>
  )
}

export default ListItemsPanel
