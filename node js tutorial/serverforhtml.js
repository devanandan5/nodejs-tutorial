var http=require("http")
var fs=require("fs")
http.createServer(function(req,res){
  fs.readFile('sampleserver.html',function(err,data){
    res.writeHead(200,{"Content-Type":"text/ht"})
res.write(data)
res.end()
  })

}).listen(7000)