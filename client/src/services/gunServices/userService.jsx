import { user } from '../../providers/gunProvider'
import 'gun/sea'
import 'gun/axe'

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
