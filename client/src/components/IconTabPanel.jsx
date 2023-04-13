import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import ForumIcon from '@mui/icons-material/Forum'
import Groups2Icon from '@mui/icons-material/Groups2'
import TagIcon from '@mui/icons-material/Tag'
import ListItemsPanel from './ListItemsPanel'
import { DataList } from '../dummy/dummy'

const TabPanel = (props) => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

const tabProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const IconTabPanel = () => {
  const theme = useTheme()
  const [value, setValue] = useState(0)

  const dataList = DataList.slice()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box>
      <AppBar position="static">
        <Tabs
          className="m-0 bg-skin-tertiary"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="chat tabs"
        >
          <Tab
            // label="Chats"
            // iconPosition="start"
            icon={<ForumIcon />}
            {...tabProps(0)}
          />
          <Tab
            // label="Groups"
            // iconPosition="start"
            icon={<Groups2Icon />}
            {...tabProps(1)}
          />
          <Tab
            // label="Channels"
            // iconPosition="start"
            icon={<TagIcon />}
            {...tabProps(2)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <ListItemsPanel users={dataList} />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <ListItemsPanel users={dataList} />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <ListItemsPanel users={dataList} />
      </TabPanel>
    </Box>
  )
}

export default IconTabPanel
