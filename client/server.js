import path from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import Gun from 'gun'

const app = express()

const port = process.env.PORT || 8765

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const indexPath = path.join(__dirname, 'dist/index.html')

app.use(express.static('dist'))
app.get('*', function (_, res) {
  res.sendFile(indexPath)
})

app.use(Gun.serve)
const server = app.listen(port)
const gun = Gun({ file: 'db/data', web: server })
let pulse = setInterval(() => {
  gun.get('this').get('relay').get('pulse').put(Date.now())
}, 500)
