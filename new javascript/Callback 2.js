var hello=function(data){
  console.log("data:"+data)
}

var hey=function(callback){
  callback("nodejs")
}
hey(hello)