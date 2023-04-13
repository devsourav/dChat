import React, { useState } from 'react'
import Toolbar from '@mui/material/Toolbar'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const ToolBarPanel = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Toolbar variant="dense" className="z-10 shadow-lg">
      {user ? (
        <>
          <Avatar alt="User Avatar" src={user.avatar}>
            {user.avatar && user.avatar.length ? '' : <PersonRoundedIcon />}
          </Avatar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="ps-3 text-start"
            sx={{ flexGrow: 1 }}
          >
            {user.name}
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Details</MenuItem>
          </Menu>
        </>
      ) : (
        <></>
      )}
    </Toolbar>
  )
}

export default ToolBarPanel
