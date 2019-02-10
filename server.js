const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const results = []

app.prepare().then(() => {
  const server = express()
  server.use(express.json())

  server.post('/api/guestbook', (req, res, next) => {
    // A POSTED REQUEST HERE
    let { body } = req
      if (body.length > 0) {
        res.status(400).end()
        }
      else {
      results.push(body)
        res.status(200).end()
    }
  })

  server.get('/api/guestbook', (req, res, next) => {
    res.json({
      results
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
