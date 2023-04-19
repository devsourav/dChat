import React, { createContext, useReducer } from 'react'

// Initial State
const initialState = {
  theme: 'light',
  isActive: false,
  activeTab: 0,
  chatId: null,
  user: null,
  chatList: [],
  requestList: [],
  messageList: [],
  userName: '',
  account: '',
  contract: null,
  provider: null,
}

// Action types
const type = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  IS_ACTIVE_USER: 'IS_ACTIVE_USER',
  ACTIVE_TAB: 'ACTIVE_TAB',
  ACTIVE_CHAT_ID: 'ACTIVE_CHAT_ID',
  UPDATE_USER: 'UPDATE_USER',
  ADD_CHAT_USER: 'ADD_CHAT_USER',
  REMOVE_CHAT_USER: 'REMOVE_CHAT_USER',
  UPDATE_CHAT_USER: 'UPDATE_CHAT_USER',
  ADD_REQUEST_USER: 'ADD_REQUEST_USER',
  REMOVE_REQUEST_USER: 'REMOVE_REQUEST_USER',
  ADD_CHAT_MESSAGE: 'ADD_CHAT_MESSAGE',
  REMOVE_CHAT_MESSAGE: 'REMOVE_CHAT_MESSAGE',
  UPDATE_CHAT_MESSAGE: 'UPDATE_CHAT_MESSAGE',
  SET_USER_NAME: 'SET_USER_NAME',
  SET_ACCOUNT: 'SET_ACCOUNT',
  SET_CONTRACT: 'SET_CONTRACT',
  SET_PROVIDER: 'SET_PROVIDER',
}

// Reducer to Handle Actions
const reducer = (state, action) => {
  switch (action.type) {
    case type.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      }
    case type.IS_ACTIVE_USER:
      return {
        ...state,
        isActive: action.isActive,
      }
    case type.ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.activeTab,
      }
    case type.ACTIVE_CHAT_ID:
      return {
        ...state,
        chatId: action.chatId,
      }
    case type.UPDATE_USER:
      return {
        ...state,
        user: action.user,
      }
    case type.ADD_CHAT_USER:
      return {
        ...state,
        chatList: [...state.chatList, action.user],
      }
    case type.REMOVE_CHAT_USER:
      const filteredChatList = state.chatList.filter(
        (_user) => _user.id !== action.userId,
      )
      return {
        ...state,
        chatList: filteredChatList,
      }
    case type.UPDATE_CHAT_USER:
      return {
        ...state,
        chatList: [...action.chatList],
      }
    case type.ADD_REQUEST_USER:
      return {
        ...state,
        requestList: [...state.requestList, action.user],
      }
    case type.REMOVE_REQUEST_USER:
      const filteredRequestList = state.requestList.filter(
        (_user) => _user.id !== action.userId,
      )
      return {
        ...state,
        requestList: filteredRequestList,
      }
    case type.ADD_CHAT_MESSAGE:
      return {
        ...state,
        messageList: [...state.messageList, action.message],
      }
    case type.REMOVE_CHAT_MESSAGE:
      const filteredMessageList = state.messageList.filter(
        (_message) => _message.id !== action.messageId,
      )
      return {
        ...state,
        messageList: filteredMessageList,
      }
    case type.UPDATE_CHAT_MESSAGE:
      return {
        ...state,
        messageList: [...action.messageList],
      }
    case type.SET_USER_NAME:
      return {
        ...state,
        userName: action.userName,
      }
    case type.SET_ACCOUNT:
      return {
        ...state,
        account: action.account,
      }
    case type.SET_CONTRACT:
      return {
        ...state,
        contract: action.contract,
      }
    case type.SET_PROVIDER:
      return {
        ...state,
        provider: action.provider,
      }
    default:
      return state
  }
}

//Context and Provider
export const AppContext = createContext()

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const states = {
    theme: state.theme,
    isActive: state.isActive,
    activeTab: state.activeTab,
    chatId: state.chatId,
    user: state.user,
    chatList: state.chatList,
    requestList: state.requestList,
    messageList: state.messageList,
    userName: state.userName,
    account: state.account,
    contract: state.contract,
    provider: state.provider,
  }

  const actions = {
    toggleTheme: () => {
      dispatch({ type: type.TOGGLE_THEME })
    },
    isActiveUser: (isActive) => {
      dispatch({ type: type.IS_ACTIVE_USER, isActive })
    },
    activeTab: (activeTab) => {
      dispatch({ type: type.ACTIVE_TAB, activeTab })
    },
    activeChatId: (chatId) => {
      dispatch({ type: type.ACTIVE_CHAT_ID, chatId })
    },
    updateUser: (user) => {
      dispatch({ type: type.UPDATE_USER, user })
    },
    addChatUser: (user) => {
      dispatch({ type: type.ADD_CHAT_USER, user })
    },
    removeChatUser: (userId) => {
      dispatch({ type: type.REMOVE_CHAT_USER, userId })
    },
    updateChatUser: (chatList) => {
      dispatch({ type: type.UPDATE_CHAT_USER, chatList })
    },
    addRequestUser: (user) => {
      dispatch({ type: type.ADD_REQUEST_USER, user })
    },
    removeRequestUser: (userId) => {
      dispatch({ type: type.REMOVE_REQUEST_USER, userId })
    },
    addChatMessage: (message) => {
      dispatch({ type: type.ADD_CHAT_MESSAGE, message })
    },
    removeChatMessage: (messageId) => {
      dispatch({ type: type.REMOVE_CHAT_MESSAGE, messageId })
    },
    updateChatMessage: (messageList) => {
      dispatch({ type: type.UPDATE_CHAT_MESSAGE, messageList })
    },
    setUserName: (userName) => {
      dispatch({ type: type.SET_USER_NAME, userName })
    },
    setAccount: (account) => {
      dispatch({ type: type.SET_ACCOUNT, account })
    },
    setContract: (contract) => {
      dispatch({ type: type.SET_CONTRACT, contract })
    },
    setProvider: (provider) => {
      dispatch({ type: type.SET_PROVIDER, provider })
    },
  }

  return (
    <AppContext.Provider value={{ states, actions }}>
      {children}
    </AppContext.Provider>
  )
}
