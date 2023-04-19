import React, { useLayoutEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AppContext } from '../providers/storeProvider'
import ContainerWrap from '../components/ContainerWrap'
import ChatContent from '../layouts/chatContent/ChatContent'

export const Chat = () => {
  const { actions } = useContext(AppContext)
  const navigate = useNavigate()
  let params = useParams()
  console.log(params.chatId)

  useLayoutEffect(() => {
    if (params.chatId && params.chatId.length) {
      actions.activeChatId(params.chatId)
    } else {
      navigate('/error')
    }
  }, [params.chatId])

  return (
    <ContainerWrap
      className={
        'w-auto bg-skin-primary opacity-80 sm:w-[80%] md:w-[75%] lg:w-[70%]'
      }
    >
      <ChatContent />
    </ContainerWrap>
  )
}
