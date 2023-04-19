import React, { useContext, useLayoutEffect } from 'react'
import { Router } from './routes/Router'
import { AppContext } from './providers/storeProvider'
import { getSignedUser } from './services/gunServices/userService'
import './styles/app.scss'

function App() {
  const { actions } = useContext(AppContext)

  useLayoutEffect(() => {
    actions && setUserName()
  }, [])

  const setUserName = () => {
    getSignedUser((userName) => {
      if (userName && userName.length) {
        console.log('getSignedUser', userName)
        actions.setUserName(userName)
      }
    })
  }

  return (
    <div className="animate">
      <Router />
    </div>
  )
}

export default App
