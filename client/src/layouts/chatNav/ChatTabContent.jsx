import React, { memo } from 'react'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'
import ChatList from './ChatList'

const chatTypes = ['friends', 'groups', 'channels']

const getTabContent = (index, type, other) => {
  return (
    <div
      role="tabpanel"
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box>
        <ChatList type={type} />
      </Box>
    </div>
  )
}

const ChatTabContent = ({ value, ...other }) => {
  return getTabContent(value, chatTypes[value], other)
}

ChatTabContent.propTypes = {
  value: PropTypes.number.isRequired,
}

export default memo(ChatTabContent)
