
// 'http' can be used instead of express and vice versa
const http = require('http')
// fs is required to parse HTML files
const fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res) {
    // 200 means 'good'
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data) {
        if (error) {
            // 404 = not found
            res.writeHead(404)
            // Usually this will render a 404 page
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server listening on port ' + port)
    }
})
