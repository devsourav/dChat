import React, { useContext } from 'react'
import clsx from 'clsx'
import { AppContext } from '../providers/storeProvider'

const MessagePanel = () => {
  const { states } = useContext(AppContext)

  return (
    <div className="scroll-content scroll-chat flex flex-col-reverse p-4">
      <div>
        {states && states.messageList ? (
          states.messageList.map((message, index) => (
            <div
              key={message.id}
              className={clsx(
                index % 2 == 0 ? 'text-right' : 'text-left',
                'chat-msg mb-4',
              )}
            >
              <p className="inline-block max-w-[70%] rounded-lg bg-skin-base px-2 py-1 shadow-lg">
                {message.msg}
              </p>
            </div>
          ))
        ) : (
          <div>No message found</div>
        )}
      </div>
    </div>
  )
}

export default MessagePanel
