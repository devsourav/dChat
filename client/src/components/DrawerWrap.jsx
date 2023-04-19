import React, {
  memo,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react'
import Drawer from '@mui/material/Drawer'

const DrawerWrap = forwardRef(({ position, children }, ref) => {
  const [drawerToggle, setDrawerToggle] = useState(false)

  useImperativeHandle(ref, () => ({
    handleDrawerOpen() {
      setDrawerToggle(true)
    },
  }))

  const handleDrawerClose = useCallback(() => {
    setDrawerToggle(false)
  }, [drawerToggle])

  return (
    <Drawer anchor={position} open={drawerToggle} onClose={handleDrawerClose}>
      {children}
    </Drawer>
  )
})

export default memo(DrawerWrap)
