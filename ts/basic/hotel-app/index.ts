import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { engine } from 'express-handlebars'
import { home, notFound, serverError, addUser } from './lib/handlers'
console.log(home)

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.static(__dirname + '/public'))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', home)
app.post('/add-user', addUser)
app.use(notFound)
app.use(serverError)

app.listen(port, () => {
  console.log('Server is running at', port)
})
