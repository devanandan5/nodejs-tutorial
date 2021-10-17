var http=require("http")
var fs=require("fs")
var url=require("url")

http.createServer(function(req,res){
  var q=url.parse(res.url)
  if (req.url==='/') {
    fs.readFile('sampleserver.html',function(err,data){
      res.writeHead(200,{"Content-Type":"text/html"})
      res.write(data)
      res.end()})
}
else if(req.url==="/login"){
  fs.readFile("signup.html",function(err,data){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.write(data)
    res.end()
  })
  
  
}else if(req.url==="signup"){
  res.write("action")
  res.writeHead(200,{"Content-Type":"text/html"})
  res.end()
  
  
}else{
  res.writeHead(404)
  res.write("errors")
  res.end()
}
}).listen(7000,()=>console.log("started server"))