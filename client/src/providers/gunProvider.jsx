import Gun from 'gun/gun'
import 'gun/sea'
import 'gun/axe'

// Database
export const db = Gun()

// Gun user
export const user = db.user().recall({ sessionStorage: true })

// Production database
// export const gun = Gun({
//   peers: [
//     'http://localhost:8765/gun',
//     'http://gun-manhattan.herokuapp.com/gun',
//   ],
// })
// Gun('http://yourdomain.com/gun')

// export const GunProvider = () => {~
//   const gun = Gun(window.location.origin + '/gun')
//   var note = { title: 'first item', text: 'from command line' }
//   gun.put(note)
//   window.gun = gun //To have access to gun object in browser console
// }
