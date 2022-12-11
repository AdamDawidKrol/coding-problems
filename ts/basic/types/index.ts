import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import { engine } from 'express-handlebars'
import { home, notFound, serverError } from './lib/handlers'
console.log(home)

dotenv.config()

const app = express()
const port = process.env.PORT

app.use(express.static(__dirname + '/public'))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', home)
app.use(notFound)
app.use(serverError)

app.listen(port, () => {
  console.log('Server is running at', port)
})
