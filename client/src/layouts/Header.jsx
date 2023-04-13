import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import LoupeRoundedIcon from '@mui/icons-material/LoupeRounded'
import NumbersIcon from '@mui/icons-material/Numbers'
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded'
import LogoMini from '../assets/images/logo_mini.png'

const Header = () => {
  const [notificatonToggle, setNotificatonToggle] = useState(null)
  const [menuToggle, setMenuToggle] = useState(null)
  const [drawerToggle, setDrawerToggle] = useState(false)
  // const handleSearch = (event) => {
  //   // setAnchorElUser(event.currentTarget)
  // }

  const handleMenu = (event) => {
    setMenuToggle(event.currentTarget)
  }

  const handleMenuClose = (event) => {
    setMenuToggle(null)
  }

  const handleNotication = (event) => {
    setNotificatonToggle(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setNotificatonToggle(null)
  }

  const handleDrawer = () => {
    setDrawerToggle(drawerToggle ? false : true)
  }

  const floatingPanelStyle = {
    overflow: 'visible',
    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
    mt: 1.5,
    '& .MuiAvatar-root': {
      width: 32,
      height: 32,
      ml: -0.5,
      mr: 1,
    },
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      right: 14,
      width: 10,
      height: 10,
      bgcolor: 'background.paper',
      transform: 'translateY(-50%) rotate(45deg)',
      zIndex: 0,
    },
  }

  const openPopover = Boolean(notificatonToggle)
  const popoverId = openPopover ? 'notification-popover' : undefined

  const openMenu = Boolean(menuToggle)
  const menuId = openMenu ? 'create-menu' : undefined

  return (
    <nav
      id="navbar"
      className="relative flex items-center justify-between py-2 text-white"
    >
      <div>
        <Link to={'/'}>
          <img src={LogoMini} className="h-5" alt="DChat" />
        </Link>
      </div>
      <div>
        {/* <Tooltip title="Search">
          <IconButton
            size="large"
            onClick={handleSearch}
            sx={{ px: 1, py: 0 }}
            color="secondary"
          >
            <SearchRoundedIcon />
          </IconButton>
        </Tooltip> */}
        <Tooltip title="Create">
          <IconButton
            size="large"
            onClick={handleMenu}
            sx={{ px: 1, py: 0 }}
            color="secondary"
            aria-controls={openMenu ? menuId : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
          >
            <LoupeRoundedIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={menuToggle}
          id={menuId}
          open={openMenu}
          onClose={handleMenuClose}
          onClick={handleMenuClose}
          PaperProps={{
            elevation: 0,
            sx: floatingPanelStyle,
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleMenuClose}>
            <GroupAddIcon sx={{ pr: 1 }} /> Create group
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <NumbersIcon sx={{ pr: 1 }} /> Create channel
          </MenuItem>
        </Menu>
        <Tooltip title="Notification">
          <IconButton
            size="large"
            color="secondary"
            sx={{ px: 1, py: 0 }}
            aria-describedby={popoverId}
            onClick={handleNotication}
          >
            <CircleNotificationsRoundedIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Popover
          id={popoverId}
          open={openPopover}
          anchorEl={notificatonToggle}
          onClose={handlePopoverClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            elevation: 0,
            sx: floatingPanelStyle,
          }}
        >
          <Typography sx={{ p: 2 }}>Notification</Typography>
        </Popover>
        <Tooltip title="Profile">
          <IconButton
            size="large"
            onClick={handleDrawer}
            sx={{ ps: 1, py: 0, pr: 0 }}
          >
            <Avatar alt="User Avatar">
              <PersonRoundedIcon />
            </Avatar>
          </IconButton>
        </Tooltip>
        <Drawer anchor="right" open={drawerToggle} onClose={handleDrawer}>
          <div>Drawer</div>
        </Drawer>
      </div>
    </nav>
  )
}

export default Header
