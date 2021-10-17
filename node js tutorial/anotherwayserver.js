var http=require("http")
http.createServer(function(req,res){
  res.write("hei new way")
  res.end()
}).listen(7000)