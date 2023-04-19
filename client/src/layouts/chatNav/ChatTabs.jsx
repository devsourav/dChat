import React, { useContext, memo, useCallback } from 'react'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import ForumIcon from '@mui/icons-material/Forum'
import Groups2Icon from '@mui/icons-material/Groups2'
import TagIcon from '@mui/icons-material/Tag'
import ChatTabContent from './ChatTabContent'
import { AppContext } from '../../providers/storeProvider'

const tabProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const ChatTabs = () => {
  const { states, actions } = useContext(AppContext)
  const handleChange = useCallback(
    (event, tabId) => {
      actions.activeTab(tabId)
    },
    [states.activeTab],
  )

  return (
    <Box>
      <AppBar position="static">
        <Tabs
          className="m-0 bg-skin-tertiary"
          value={states.activeTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="chat tabs"
        >
          <Tab icon={<ForumIcon />} {...tabProps(0)} />
          <Tab icon={<Groups2Icon />} {...tabProps(1)} />
          <Tab icon={<TagIcon />} {...tabProps(2)} />
        </Tabs>
      </AppBar>
      <ChatTabContent value={states.activeTab} />
    </Box>
  )
}

export default memo(ChatTabs)
