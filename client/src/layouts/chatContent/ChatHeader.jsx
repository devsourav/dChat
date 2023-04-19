import React, {
  useState,
  useContext,
  useLayoutEffect,
  useRef,
  memo,
} from 'react'
import Toolbar from '@mui/material/Toolbar'
import MenuItem from '@mui/material/MenuItem'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import MenuWrap from '../../components/MenuWrap'
import { AppContext } from '../../providers/storeProvider'
import { DataList } from '../../dummy/dummy'

const ChatHeader = () => {
  const { states } = useContext(AppContext)
  const [user, setUser] = useState(null)
  const menuRef = useRef(null)

  useLayoutEffect(() => {
    let index = DataList.findIndex((value) => value.chatId === states.chatId)
    if (index !== -1) {
      setUser(DataList[index])
    }
  }, [states.chatId])

  return (
    <Toolbar variant="dense" className="z-10 shadow-lg">
      {user ? (
        <>
          <Avatar alt="User Avatar" src={user.avatar} className="ms-2">
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
            aria-controls="chat-header-menu"
            aria-haspopup="true"
            onClick={(event) => menuRef.current.handleMenuOpen(event)}
            color="inherit"
          >
            <MoreVertIcon />
          </IconButton>
          <MenuWrap
            ref={menuRef}
            id={'chat-header-menu'}
            children={
              <div>
                <MenuItem>Profile</MenuItem>
                <MenuItem>Search</MenuItem>
                <MenuItem>Transactions</MenuItem>
              </div>
            }
          />
        </>
      ) : (
        <></>
      )}
    </Toolbar>
  )
}

export default memo(ChatHeader)
