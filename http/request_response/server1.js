const http = require("http")

http.createServer((req,res)=>{
    res.writeHead(200, {"Content-type": "text/html; charset=utf-8"})
    res.write("<h1>hello Node!</h1>")
    res.end("<p>Hello Server!</p>")
})
.listen(8080, ()=>{ // 서버연결
    console.log("8080포트에서 서버 대기중입니다.")
})