const http=require('http')

const server=http.createServer((req,res)=>{
    res.end("i am connected!");
})