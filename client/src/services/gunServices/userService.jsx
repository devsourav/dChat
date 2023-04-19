import { db, user } from '../../providers/gunProvider'
import 'gun/sea'
import 'gun/axe'

export const isUserExist = () => {
  return user.get('alias')
}

// Current user's username
export const getSignedUser = (callback) => {
  user.get('alias').on((value) => {
    callback(value)
  })
}

export const getUserStatus = (callback) => {
  db.on('auth', async (event) => {
    const alias = await user.get('alias')
    console.log(`signed in as ${alias}`)
    console.log(`signed event ${event}`)
    callback({ alias, event })
  })
}

export const signIn = (userName, password, callback) => {
  user.auth(userName, password, ({ err }) => callback(err))
}

export const signUp = (userName, password, callback) => {
  user.create(userName, password, ({ err }) => callback(err))
}

export const signOut = (callback) => {
  user.leave({}, ({ err }) => callback(err))
}

export const isLoggedIn = (callback) => {
  if (user.is) {
    callback(true)
  } else {
    callback(false)
  }
}

export const getUserPublicKey = (userName, callback) => {
  user.get(userName).once((data, key) => {
    callback({ data, key })
  })
}

// }
