import React, {
  memo,
  useCallback,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react'
import Menu from '@mui/material/Menu'
import { floatingPanelStyle } from '../utility/containerStyles'

const MenuWrap = forwardRef(({ menuId, children }, ref) => {
  const [menuToggle, setMenuToggle] = useState(null)

  useImperativeHandle(ref, () => ({
    handleMenuOpen(event) {
      setMenuToggle(event.currentTarget)
    },
  }))

  const handleMenuClose = useCallback(() => {
    setMenuToggle(null)
  }, [menuToggle])

  const openMenu = Boolean(menuToggle)

  return (
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
      {children}
    </Menu>
  )
})

export default memo(MenuWrap)
