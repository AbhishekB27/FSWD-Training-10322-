const http = require('http')

const server = http.createServer((req,res)=>{
    // console.log(req.headers)
    // console.log(req.url)
    // console.log("You made a req")
    res.write("<h1>PING from server</h1>")
    res.end();
})

server.listen(8080)







