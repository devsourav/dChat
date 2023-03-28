import React, { createContext, useReducer } from 'react'

// Initial State
const initialState = {
  theme: 'light',
  isActive: false,
  user: null,
  chatList: [],
  requestList: [],
}

// Actions
const type = {
  TOGGLE_THEME: 'TOGGLE_THEME',
  IS_ACTIVE_USER: 'IS_ACTIVE_USER',
  UPDATE_USER: 'UPDATE_USER',
  ADD_CHAT_USER: 'ADD_CHAT_USER',
  REMOVE_CHAT_USER: 'REMOVE_CHAT_USER',
  ADD_REQUEST_USER: 'ADD_REQUEST_USER',
  REMOVE_REQUEST_USER: 'REMOVE_REQUEST_USER',
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
    default:
      return state
  }
}

//Context and Provider
const AppContext = createContext()

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const states = {
    theme: state.theme,
    isActive: state.isActive,
    user: state.user,
    chatList: state.chatList,
    requestList: state.requestList,
  }

  const actions = {
    toggleTheme: () => {
      dispatch({ type: type.TOGGLE_THEME })
    },
    isActiveUser: (isActive) => {
      dispatch({ type: type.IS_ACTIVE_USER, isActive })
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
    addRequestUser: (user) => {
      dispatch({ type: type.ADD_REQUEST_USER, user })
    },
    removeRequestUser: (userId) => {
      dispatch({ type: type.REMOVE_REQUEST_USER, userId })
    },
  }

  return (
    <AppContext.Provider value={{ states, actions }}>
      {children}
    </AppContext.Provider>
  )
}
