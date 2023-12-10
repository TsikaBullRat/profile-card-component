const { createServer } = require("http")
const { createReadStream } = require("fs")
const { join, extname } = require("path")

createServer(( req, res )=>{
    let path = join(__dirname, "docs", req.url === "/"?"index.html":req.url)
    let ext = extname(path)
    let content = "text/html"

    switch(ext){
        case '.css':
            content = 'text/css'
            break
        case '.js':
            content = 'text/javascript'
            break
        case '.jpg':
            content = 'image/jpg'
            break
        case '.png':
            content = 'image/png'
            break
        case '.svg':
            content = 'image/svg'
            break
        default:
            content = 'text/html'
            break                                    
    }

    res.writeHead(200, {"Content-Type": content})
    createReadStream(path).pipe(res)
}).listen(4444)