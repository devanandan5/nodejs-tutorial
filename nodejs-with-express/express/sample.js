const express=require('express')
const path=require('path')
app=express()
app.get('/hai',(req,res)=>{
  res.sendFile(path.join(__dirname,"halo.html"))
})
app.listen(7000,()=>{console.log("started")})