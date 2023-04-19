import React, {
  memo,
  useCallback,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react'
import Popover from '@mui/material/Popover'
import { floatingPanelStyle } from '../utility/containerStyles'

const PopoverWrap = forwardRef(({ popoverId, children }, ref) => {
  const [popoverToggle, setPopoverToggle] = useState(null)

  useImperativeHandle(ref, () => ({
    handlePopoverOpen(event) {
      setPopoverToggle(event.currentTarget)
    },
  }))

  const handlePopoverClose = useCallback(() => {
    setPopoverToggle(null)
  }, [popoverToggle])

  const openPopover = Boolean(popoverToggle)

  return (
    <Popover
      id={popoverId}
      open={openPopover}
      anchorEl={popoverToggle}
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
      {children}
    </Popover>
  )
})

export default memo(PopoverWrap)
