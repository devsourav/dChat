import React, { useContext, memo, useEffect } from 'react'
// import clsx from 'clsx'
import { AppContext } from '../../providers/storeProvider'
import { getChatMessage } from '../../services/gunServices/messageService'

const addMessageNode = (msgContainer, message, userName) => {
  let div = document.createElement('div')
  if (userName === message.who) {
    div.setAttribute('class', 'text-right chat-msg mb-4')
  } else {
    div.setAttribute('class', 'text-left chat-msg mb-4')
  }
  let child = document.createElement('div')
  child.setAttribute(
    'class',
    'inline-block max-w-[70%] rounded-lg bg-skin-base px-2 py-1 shadow-lg',
  )
  let who = document.createElement('p')
  who.innerText = message.who
  let what = document.createElement('div')
  what.innerText = message.what
  let when = document.createElement('span')
  const date = new Date(message.when)
  when.innerText = date.toDateString()
  child.appendChild(who)
  child.appendChild(what)
  child.appendChild(when)
  div.appendChild(child)
  msgContainer.appendChild(div)
}

const checkPreviousMsg = (message) => {
  if (
    message.who === previousMSg.who &&
    message.what === previousMSg.what &&
    message.when === previousMSg.when
  ) {
    return false
  } else {
    previousMSg.who = message.who
    previousMSg.what = message.what
    previousMSg.when = message.when
    return true
  }
}

const previousMSg = {
  who: '',
  what: '',
  when: '',
}

const ChatMessages = () => {
  const { states } = useContext(AppContext)
  // const [messageList, setMessageList] = useState([])

  useEffect(() => {
    let msgContainer = document.getElementById('msgContainer')
    msgContainer.replaceChildren()
    getChatMessage(states.chatId, '#key', (message) => {
      // setMessageList(() => [...messageList, message])
      console.log(message)
      if (message && checkPreviousMsg(message)) {
        addMessageNode(msgContainer, message, states.userName)
      }
    })
  }, [states.chatId])

  return (
    <div className="scroll-content scroll-chat flex flex-col-reverse p-4">
      <div id="msgContainer">
        {/* {messageList && messageList.length ? (
          messageList.map((message, index) => (
            <div
              key={message.id}
              className={clsx(
                index % 2 == 0 ? 'text-right' : 'text-left',
                'chat-msg mb-4',
              )}
            >
              <div className="inline-block max-w-[70%] rounded-lg bg-skin-base px-2 py-1 shadow-lg">
                <p>{message.who}</p>
                <div>{message.what}</div>
                <span>{message.when}</span>
              </div>
            </div>
          ))
        ) : (
          <div>No message found</div>
        )} */}
      </div>
    </div>
  )
}

export default memo(ChatMessages)
