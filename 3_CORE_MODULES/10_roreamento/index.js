const http = require('http')
const fs = require('fs')
const url = require('url')
const { text } = require('stream/consumers')

const port = 3000

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    
    const filename = q.pathname.substring(1)

if (filename.includes('html')) {
  if (fs.existsSync(filename)) {
    fs.readFile(filename, function(err, data) {
      if (err) {
        res.writeHead(500, { 'content-type': 'text/plain' })
        res.end('Server error')
        return
      }
      res.writeHead(200, { 'content-type': 'text/html' })
      res.end(data)
    })
  } else {
    fs.readFile('404.html', function(err, data) {
      if (err) {
        res.writeHead(404, { 'content-type': 'text/plain' })
        res.end('404 Not Found')
        return
      }
      res.writeHead(404, { 'content-type': 'text/html' })
      res.end(data)
    })
  }
}

  

})

server.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`)
})