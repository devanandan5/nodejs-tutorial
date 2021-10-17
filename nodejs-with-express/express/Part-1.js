const express=require('express')
const path=require('path')
const app=express()
app.get('/signup',(req,res)=>{
  res.sendFile(path.join(__dirname,"halo.html"))
  
})
app.use((req,res,next)=>{
  console.log("hello")
  next()
})
app.post('/signup',(req,res)=>{
  res.send("action")
})
app.get('/about',(req,res)=>{res.send("about")})
 
 
 
 
 
 app.listen(7000,()=>{console.log("server started on 7000")})