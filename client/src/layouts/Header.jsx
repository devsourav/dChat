import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import LoupeRoundedIcon from '@mui/icons-material/LoupeRounded'
import NumbersIcon from '@mui/icons-material/Numbers'
// import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CircleNotificationsRoundedIcon from '@mui/icons-material/CircleNotificationsRounded'
import LogoMini from '../assets/images/logo_mini.png'
import MenuWrap from '../components/MenuWrap'
import PopoverWrap from '../components/PopoverWrap'
import DrawerWrap from '../components/DrawerWrap'

const Header = () => {
  const createMenuRef = useRef(null)
  const notifiyPopoverRef = useRef(null)
  const userDrawerRef = useRef(null)

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
        <Tooltip title="Create">
          <IconButton
            size="large"
            onClick={(event) => createMenuRef.current.handleMenuOpen(event)}
            sx={{ px: 1, py: 0 }}
            color="secondary"
            aria-controls="create-menu"
            aria-haspopup="true"
          >
            <LoupeRoundedIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <MenuWrap
          ref={createMenuRef}
          id={'create-menu'}
          children={
            <div>
              <MenuItem>
                <GroupAddIcon sx={{ pr: 1 }} /> Create group
              </MenuItem>
              <MenuItem>
                <NumbersIcon sx={{ pr: 1 }} /> Create channel
              </MenuItem>
            </div>
          }
        />
        <Tooltip title="Notification">
          <IconButton
            size="large"
            color="secondary"
            sx={{ px: 1, py: 0 }}
            aria-describedby="notification-popover"
            onClick={(event) => notifiyPopoverRef.current.handlePopoverOpen(event)}
          >
            <CircleNotificationsRoundedIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <PopoverWrap
          ref={notifiyPopoverRef}
          id={'notification-popover'}
          children={
            <div>
              <Typography sx={{ p: 2 }}>Notification</Typography>
            </div>
          }
        />
        <Tooltip title="Profile">
          <IconButton
            size="large"
            onClick={() => userDrawerRef.current.handleDrawerOpen()}
            sx={{ ps: 1, py: 0, pr: 0 }}
          >
            <Avatar alt="User Avatar">
              <PersonRoundedIcon />
            </Avatar>
          </IconButton>
        </Tooltip>
        {/* <Drawer anchor="right" open={drawerToggle} onClose={handleDrawer}>
          <div>Drawer</div>
        </Drawer> */}
        <DrawerWrap
          ref={userDrawerRef}
          position={'right'}
          children={<div>Drawer</div>}
        />
      </div>
    </nav>
  )
}

export default Header
