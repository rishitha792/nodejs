const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to first home page')
        return
    }
    if(req.url==='/about'){
        res.end('here is our short story')
        return
    }
    res.end(`<h1>Oops!</h1> <p>cant seem to find the pages your are looking for</p> <a href="/about">back home</a>`
    )
//console.log(req)
//res.write('welcome to second home page')
//res.end()
})
server.listen(1000)
