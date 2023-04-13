import React, { useEffect, useContext, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import ContainerPanel from '../components/ContainerPanel'
import { DataList } from '../dummy/dummy'
import ToolBarPanel from '../components/ToolBarPanel'
import TextBar from '../components/TextBar'
import MessagePanel from '../components/MessagePanel'
import { AppContext } from '../providers/storeProvider'

export const Chat = () => {
  const [user, setUser] = useState(null)
  const { states, actions } = useContext(AppContext)
  let params = useParams()
  const navigate = useNavigate()
  console.log(params.userId)

  useEffect(() => {
    const getUser = () => {
      const userIndex = DataList.findIndex((user) => user.id == params.userId)
      if (userIndex !== -1) {
        setUser(DataList[userIndex])
        actions.updateChatMessage([])
        console.log(user)
      } else {
        navigate('/error')
      }
    }
    DataList && getUser()
  }, [params])

  return (
    <ContainerPanel
      className={
        'w-auto bg-skin-primary opacity-80 sm:w-[80%] md:w-[75%] lg:w-[70%]'
      }
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <ToolBarPanel user={user} />
        </AppBar>
        <MessagePanel />
        <div className="bg-blur absolute bottom-0 w-full shadow-inner">
          <TextBar />
        </div>
      </Box>
    </ContainerPanel>
  )
}
