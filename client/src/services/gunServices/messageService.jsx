import Gun from 'gun/gun'
import SEA from 'gun/sea'
import 'gun/axe'
import { db, user } from '../../providers/gunProvider'

// Get Message
export const getChatMessage = (chatName, key, callback) => {
  db.get(chatName)
    .map()
    .on(async (data, id) => {
      // let messages = []
      if (data) {
        let message = {
          // tansform the data
          who: await db.user(data).get('alias'), // a user might lie who they are! So let the user system detect whose data it is.
          what: (await SEA.decrypt(data.what, key)) + '', // force decrypt as text.
          when: Gun.state.is(data, 'what'), // get the internal timestamp for the what property.
        }
        callback(message)

        // if (message.what) {
        //   messages = [...messages.slice(-100), message].sort(
        //     (a, b) => a.when - b.when,
        //   )
        // }
      }
    })
}

export const sendMessage = async (chatName, message, key) => {
  const _secret = await SEA.encrypt(message, key)
  const _message = user.get('all').set({ what: _secret })
  const _index = new Date().toISOString()
  db.get(chatName).get(_index).put(_message)
}
