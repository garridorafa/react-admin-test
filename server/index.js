const jsonServer = require('json-server')
const bcrypt = require('bcrypt')
const usersRepository = require('./users-repository')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const TOKEN = 'RANDOM_TOKEN'

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/login', async (req, res) => {
  const data = req.body
  const user = await usersRepository.getUserByUsername(data.username)
  const isValidPassword = await bcrypt.compare(data.password, user.hash)

  if (isValidPassword) {
    res.send({
      role: user.role,
      identity: user.identity,
      token: TOKEN,

    })
  } else {
    res.status(401).send({
      error: 'Unauthorized'
    })
  }
})

server.use(async (req, res, next) => {
  const authorization = req.headers.authorization
  if (authorization) {
    const token = authorization.split(' ').pop()
    if (token === TOKEN) {
      next()
    } else {
      res.status(401).send({
        error: 'Unauthorized'
      })
    }
  } else {
    res.status(401).send({
      error: 'Unauthorized'
    })
  }
})

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})