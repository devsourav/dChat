import Gun from 'gun/gun'
import 'gun/sea'
import 'gun/axe'

// Database
export const db = Gun()

// Production database
// export const gun = Gun({
//   peers: [
//     'http://localhost:8765/gun',
//     'http://gun-manhattan.herokuapp.com/gun',
//   ],
// })
// Gun('http://yourdomain.com/gun')

// Gun user
export const user = db.user().recall({ sessionStorage: true })

// Current user's username
user.get('alias').on((value) => console.log(value))

db.on('auth', async (event) => {
  const alias = await user.get('alias')
  console.log(`signed in as ${alias}`)
  //   console.log(event)
})

// export const GunProvider = () => {
//   const gun = Gun(window.location.origin + '/gun')
//   var note = { title: 'first item', text: 'from command line' }
//   gun.put(note)
//   window.gun = gun //To have access to gun object in browser console
// }
